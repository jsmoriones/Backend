import express from "express";
import "dotenv/config";
const PORT = process.env.PORT;

import publicRouter from "./routes/publicRouter.js";
import usersRoute from "./routes/usersRoute.js";

const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use( express.static("public") );


app.use( "/", publicRouter );
app.use( "/api", usersRoute );



app.listen(PORT, () => console.log(`Se conecto correctamente en el host y puerto: http://localhost:${PORT}`));