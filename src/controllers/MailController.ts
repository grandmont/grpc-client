import { Request, Response } from "express";

import { email } from "../clients";

const POST = {
    sendMail(req: Request, res: Response) {
        try {
            const { to } = req.body;

            const request = {
                from: "kordy@kordy.com",
                to,
                template: "welcome",
            };

            email.sendMail(request, (error: Error) => {
                if (error) {
                    throw new Error(error.message);
                }
            });

            res.json({ status: true });
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

export default { ...POST };
