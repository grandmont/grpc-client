import { Router, Request, Response } from "express";

// Controllers
import MailController from "./controllers/MailController";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.json({
        status: true,
    });
});

router.post("/sendMail", MailController.sendMail);

export default router;
