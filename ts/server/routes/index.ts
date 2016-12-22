import * as expressCore from "express-serve-static-core";
import * as express from "express";
import ApiRouter from "./api";

const router: expressCore.Router = express.Router();

router.use("/api", ApiRouter); 

export default router;
