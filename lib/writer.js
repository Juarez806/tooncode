import fs from "fs";
import path from "path";

export async function writeComponent(targetFolder, componentName, fileType, code) {
  const fileName = `${componentName
    .replace(/\s+/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")}.${fileType}`;
  const filePath = path.join(targetFolder, fileName);

  fs.mkdirSync(targetFolder, { recursive: true });
  fs.writeFileSync(filePath, code);
  return filePath;
}
