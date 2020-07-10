import express, { Application } from "express";

import routes from "./routes";

export default class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.init();
    }

    private init() {
        this.app.use(express.json());
        this.app.use(routes);
    }
}
