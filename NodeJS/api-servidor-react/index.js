import livereload from "livereload";
import connectLivereload from "connect-livereload";
import path from "path"
import express from "express";
import "dotenv/config";
const PORT = process.env.PORT;

import publicRouter from "./routes/publicRouter.js";
import usersRoute from "./routes/usersRoute.js";

const app = express();

//Configuracion para estar escuchando los archivos estaticos(public)
const liveReloadServer = livereload.createServer();
const __dirname = import.meta.dirname;
liveReloadServer.watch(path.join(__dirname, "public"));
app.use(connectLivereload());
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use( express.static("public") );


app.use( "/", publicRouter );
app.use( "/api", usersRoute );



app.listen(PORT, () => console.log(`Se conecto correctamente en el host y puerto: http://localhost:${PORT}`));