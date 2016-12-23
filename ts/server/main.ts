import * as CreateExpressApp from "express";
import {Express, static as setStatic} from "express";
import * as http from "http";
import * as https from "https";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as path from "path";
import * as fs from "fs";

import AppRouter from "./routes";

/////////////////////////////////////////
// Constants
/////////////////////////////////////////

const HTTP_PORT = 3102;
const HTTPS_PORT = 3101;
const absoluteDirname = path.dirname((process.mainModule as any).filename);
/////////////////////////////////////////
// 1) Create Express app
/////////////////////////////////////////

const app: Express = CreateExpressApp();
app.use(setStatic(path.join(absoluteDirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Set View Engine
app.set("views", "views/pages");
app.set("view engine", "ejs");

//////////////////////////////////////////////
// 2) Routing
//////////////////////////////////////////////
app.use(AppRouter);
///////////////////////////////////////////////
// 3) Handle Errors
///////////////////////////////////////////////

// TODO

//////////////////////////////////////////////
// 4) Setup Servers
//////////////////////////////////////////////

// Https
var secureServer = https.createServer({
        key: fs.readFileSync(path.resolve(absoluteDirname, 'configs/ssl/server-key.pem')),
        cert: fs.readFileSync(path.join(absoluteDirname,'configs/ssl/server-cert.pem'))
    }, app);

    secureServer.listen(HTTPS_PORT, function () {
        console.log('HTTPS secure server listening on port ' + HTTPS_PORT);
    });

// Http
var insecureServer = http.createServer(app);

insecureServer.listen(HTTP_PORT, function() {
    console.log('HTTP server listening on port ' + HTTP_PORT);
});

