const isCommentTextValid = (socket, text) => {
  if (!text) {
    socket.emit("error", {
      success: false,
      error: "Comment text should not be empty",
    });
    return false;
  }

  const regExp =
    /<(?!(?:a|code|i|strong)\b)(?!.*\b(?:a|code|i|strong)\b)(?:[^>=]|='[^']*'|="[^"]*"|=[^'"][^\s>]*)*>/g;
  const result = text.match(regExp);
  if (result) {
    socket.emit("error", {
      success: false,
      error: "Forbidden tags detected",
    });
    return false;
  } else return true;
};

export default isCommentTextValid;

