interface MailProto {
    sendMail: Function;
}

declare module "grpc" {
    interface GrpcObject {
        mailPackage: {
            Mail: {
                new (port: string, credentials: ChannelCredentials): MailProto;
            };
        };
    }
}
