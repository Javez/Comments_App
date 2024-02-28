const isCommentImageValid = (socket, image) => {
  if (image === null) {
    return false;
  }

  const imageBuffer = Buffer.from(image, "base64");
  const fileType = imageBuffer.toString("hex", 0, 4);
  const extension = fileType.match(/ffd8|4749|89504e47/i)
    ? ["jpeg", "gif", "png"]
    : [];
  if (extension.length === 0) {
    socket.emit("error", {
      success: false,
      error: "Invalid image format. Only JPG, GIF, and PNG are allowed",
    });
    return false;
  } else return true;
};

export default isCommentImageValid;

