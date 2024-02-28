const isCommentFileValid = (socket, file) => {
  if (!file) {
    return false;
  }

  const fileBuffer = Buffer.from(file, "base64");
  const fileTypeMatch = fileBuffer.toString("utf-8", 0, 5).match(/^(\w+)\s*;/);

  if (!fileTypeMatch) {
    socket.emit("error", {
      success: false,
      error: "Invalid file format. Unable to determine file type.",
    });
    return false;
  }

  const fileExtension = fileTypeMatch[1];

  if (fileExtension !== "text" || fileBuffer.length > 100 * 1024) {
    socket.emit("error", {
      success: false,
      error:
        "Invalid file format. Only TXT files with size not more than 100KB are allowed",
    });
    return false;
  } else {
    return true;
  }
};

export default isCommentFileValid;
