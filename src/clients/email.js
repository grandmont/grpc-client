const path = require("path");
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const { EMAIL_SERVICE_HOST } = process.env;

const { emailPackage } = grpc.loadPackageDefinition(
    protoLoader.loadSync(
        path.join(__dirname, "..", "..", "protos", "email.proto")
    )
);

const email = new emailPackage.Email(
    EMAIL_SERVICE_HOST,
    grpc.credentials.createInsecure()
);

module.exports = email;
