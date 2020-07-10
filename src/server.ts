import express, { Application } from "express";

import routes from "./routes";

export default class Server {
    app: Application;

    constructor() {
        this.init();
    }

    private init() {
        this.app.use(express.json());
        this.app.use(routes);
    }
}
