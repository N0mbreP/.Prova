const express = require('express');
const app = express ();
app.use(express.json());
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", port);
  });



app.get("/hola", (request, response) => {
   const status = {
      "Status": "Running"
   };
   
   response.send(status);
});