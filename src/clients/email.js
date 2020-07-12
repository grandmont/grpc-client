const path = require("path");
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const { MAIL_MICROSERVICE_PORT = 40000 } = process.env;

const { emailPackage } = grpc.loadPackageDefinition(
    protoLoader.loadSync(
        path.join(__dirname, "..", "email-service", "protos", "email.proto")
    )
);

const email = new emailPackage.Email(
    `localhost:${MAIL_MICROSERVICE_PORT}`,
    grpc.credentials.createInsecure()
);

module.exports = email;
