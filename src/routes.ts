import { Router, Request, Response } from "express";

import { email } from "./clients";

// Controllers
import MailController from "./controllers/MailController";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    email.test({}, (error: any, response: any) => {
        console.log(error);
        console.log(response);
    });

    res.json({
        status: true,
    });
});

router.post("/sendMail", MailController.sendMail);

export default router;
