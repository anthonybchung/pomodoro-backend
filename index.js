const { app, PORT, HOST, MODE } = require("./server");

const server = app.listen(PORT, HOST, () => {
  console.log("ExpressJS server running.");
  console.log(`HOST: ${HOST}`);
  console.log(`PORT: ${PORT}`);
  console.log(`MODE: ${MODE}`);
});
