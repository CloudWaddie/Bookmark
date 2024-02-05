async function makeFile(fs, fileName, fileType, content) {
    await new Promise((res) => {
      fs.root.getFile(
        fileName,
        {},
        (fileEntry) => {
          fileEntry.remove(res);
        },
        res
      );
    });
    return await new Promise((res) => {
      fs.root.getFile(fileName, { create: true }, (fileEntry) => {
        fileEntry.createWriter((fileWriter) => {
          fileWriter.write(new Blob([content], { type: fileType }));
          res(fileEntry.toURL());
        });
      });
    });
  }
  
  async function onInitFs(fs) {
    let htmlFile = await makeFile(fs, "page.html", "text/html", `{html}`);
  
    prompt("Your finished persistence URL:", htmlFile);
  }
  
  webkitRequestFileSystem(window.TEMPORARY, 1024*1024, onInitFs);
  