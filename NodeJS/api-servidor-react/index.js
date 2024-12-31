import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
const PORT = process.env.PORT;

import publicRouter from "./routes/publicRouter.js";
import usersRoute from "./routes/usersRoute.js";
import taskRoute from "./routes/taskRoute.js";
import animalRoute from "./routes/animalRoute.js";

const app = express();

app.use( bodyParser.json() );
//app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use( express.static("public") );


app.use( "/", publicRouter );
app.use( "/api", usersRoute );
app.use( "/api", taskRoute );
app.use( "/api", animalRoute );



app.listen(PORT, () => console.log(`Se conecto correctamente en el host y puerto: http://localhost:${PORT}`));