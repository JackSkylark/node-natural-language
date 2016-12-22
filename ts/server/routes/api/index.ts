import * as expressCore from "express-serve-static-core";
import * as express from "express";

// imports
import {AggressiveTokenizer, SentenceTokenizer} from "./../../lib/natural-language/tokenizer";
 
const router: expressCore.Router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.status(200).json({status: "active"});
    } catch (e) {
        res.status(500).json({status: "error"});
    }
});

router.post('/tokenize', async (req, res) => {
    try {
        const str = req.body["q"];
        const aggresiveTokens = AggressiveTokenizer(str);
        const sentenceTokens = SentenceTokenizer(str);

        res.status(500).json({
            tokens: {
                words: aggresiveTokens,
                sentences: sentenceTokens
            }
        })

    } catch (e) {
        res.status(500).json({status: "error"});
    }
});


// Error Handling

router.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction)  => {
    var status = err.status || err.statusCode || 500;
    if (status < 400) status = 500;
    res.statusCode = status;

    var body: any = {
      status: status
    };

    // internal server errors
    if (status >= 500) {
      console.error(err.stack);
      body.message = status;
      res.json(body);
      return;
    }

    // client errors
    body.message = err.message;

    if (err.code) body.code = err.code;
    if (err.name) body.name = err.name;
    if (err.type) body.type = err.type;

    res.json(body);
});

export default router;
