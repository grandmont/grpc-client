import path from "path";
import grpc from "grpc";
import * as protoLoader from "@grpc/proto-loader";

const { MAIL_MICROSERVICE_PORT } = process.env;

const { emailPackage } = grpc.loadPackageDefinition(
    protoLoader.loadSync(path.join(__dirname, "..", "protos", "email.proto"))
);

const client = new emailPackage.Email(
    `localhost:${MAIL_MICROSERVICE_PORT}`,
    grpc.credentials.createInsecure()
);

export default client;
