import { Router, Request, Response } from "express";

import client from "./client";

// Controllers
import MailController from "./controllers/MailController";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    client.test({}, (error: any, response: any) => {
        console.log(error);
        console.log(response);
    });

    res.json({
        status: true,
    });
});

router.post("/sendMail", MailController.sendMail);

export default router;
