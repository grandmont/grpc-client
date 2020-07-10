const path = require("path");
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const { MAIL_MICROSERVICE_PORT } = process.env;

const packageDef = protoLoader.loadSync(
    path.join(__dirname, "protos", "mail.proto"),
    {}
);
const { mailPackage } = grpc.loadPackageDefinition(packageDef);

const client = new mailPackage.Mail(
    `localhost:${MAIL_MICROSERVICE_PORT}`,
    grpc.credentials.createInsecure()
);

module.exports = client;
