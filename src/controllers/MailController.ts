import { Request, Response } from "express";
import client from "../grpc";

const POST = {
    sendMail(req: Request, res: Response) {
        try {
            const { from, to } = req.body;

            const request = {
                from: "Kordy <kordy@kordy.com>",
                to: `${to} <${from}>`,
                subject: "Welcome to Kordy!",
                html: `<div><h1>Hello, ${to}.</h1><p>Welcome to Kordy! The best place to find random friends.</p></div>`,
            };

            client.sendMail(request);

            res.json({
                from,
                to,
            });
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

export default { ...POST };
