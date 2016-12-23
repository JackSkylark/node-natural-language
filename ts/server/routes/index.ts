import * as expressCore from "express-serve-static-core";
import * as express from "express";
import ApiRouter from "./api";
import * as path from "path";

var absoluteDirname = path.dirname((process.mainModule as any).filename);
const router: expressCore.Router = express.Router();

router.use("/api", ApiRouter); 

router.get('*', (req, res) => {
    res.sendFile(path.join(absoluteDirname, "public", "index.html"));
});

export default router;
