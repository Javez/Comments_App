import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

function handleFileUpload(socket, data) {
  const currentModulePath = fileURLToPath(import.meta.url);
  const currentModuleDir = dirname(currentModulePath);
  const fileName = join(currentModuleDir, "uploads", data.fileName);

  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data.fileData, "binary", (err) => {
      if (err) {
        console.error(err);
        reject("File upload failed");
      } else {
        socket.emit("fileUploadComplete", { fileName });
        resolve("File uploaded successfully");
      }
    });
  });
}

export default handleFileUpload;
