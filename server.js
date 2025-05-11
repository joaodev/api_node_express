import app from "./app";

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
  console.log(`CTRL + Click at http://localhost:${port}`)
})
