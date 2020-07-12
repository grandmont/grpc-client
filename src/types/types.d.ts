import { ChannelCredentials } from "grpc";

interface Email {
    sendMail: Function;
    test: Function;
}

interface Package {
    Email: {
        new (
            host: string,
            credentials: ChannelCredentials,
            options?: any
        ): Email;
    };
}

declare module "grpc" {
    export interface GrpcObject {
        emailPackage: Package;
    }
}
