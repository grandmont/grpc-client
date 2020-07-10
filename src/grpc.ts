import grpc from "grpc";
import protoLoader from "@grpc/proto-loader";

const { MAIL_MICROSERVICE_PORT } = process.env;

const packageDef = protoLoader.loadSync("../protos/mail.proto", {});
const { mailPackage } = grpc.loadPackageDefinition(packageDef);

const client = new mailPackage.Mail(
    `localhost:${MAIL_MICROSERVICE_PORT}`,
    grpc.credentials.createInsecure()
);

export default client;
