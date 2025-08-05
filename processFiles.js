const fs = require("fs");
const path = require("path");

function processFiles() {
  const inputDir = "./input";
  const outputDir = "./output";

  // Step 1: Create output directory if it doesn't exist
  fs.mkdir(outputDir, { recursive: true }, (err) => {
    if (err) {
      return console.error("Error creating output folder:", err.message);
    }

    // Step 2: Read all files from the input folder
    fs.readdir(inputDir, (err, files) => {
      if (err) {
        return console.error("Error reading input folder:", err.message);
      }

      // Step 3: Filter only .txt files
      const textFiles = files.filter((file) => file.endsWith(".txt"));

      textFiles.forEach((file) => {
        const inputFilePath = path.join(inputDir, file);
        const outputFilePath = path.join(outputDir, `processed_${file}`);

        // Step 4: Read the content of each text file
        fs.readFile(inputFilePath, "utf8", (err, data) => {
          if (err) {
            return console.error(`Error reading ${file}:`, err.message);
          }

          // Step 5: Manipulate the content
          const timestamp = new Date().toISOString();
          const manipulated = `Processed at: ${timestamp}\n\n${data.toUpperCase()}`;

          // Step 6: Write the manipulated content to a new file
          fs.writeFile(outputFilePath, manipulated, "utf8", (err) => {
            if (err) {
              return console.error(`Error writing ${outputFilePath}:`, err.message);
            }
            console.log(`✔ File processed and saved: ${outputFilePath}`);
          });
        });
      });
    });
  });
}

// processFiles using async and await 



module.exports = processFiles;