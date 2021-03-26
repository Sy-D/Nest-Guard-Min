import * as dotenv from 'dotenv';
import {join} from 'path';

export class ProtoConfigService {
    private readonly envConfig: Record<string, string>;
    constructor() {
        const result = dotenv.config();

        if (result.error) {
            this.envConfig = process.env;
        } else {
            this.envConfig = result.parsed;
        }
    }

    public get(key: string): string {
        return this.envConfig[key];
    }

    public async getProtoConfig() {
        return this.get('PROTO_PATH');
    }

    public async getProtoPath(namespace: string, protoPath: string) {
        return join(process.cwd(), this.getProtoConfig() + namespace + protoPath);
    }
}
