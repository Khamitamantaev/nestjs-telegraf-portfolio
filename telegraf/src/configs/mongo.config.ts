import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';
export const GetMongoConfiguration = async (configService: ConfigService): Promise<TypegooseModuleOptions> => {
    return {
        uri: getMongoString(configService),
        ...getMongoOptions()
    }
}
// mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
const getMongoString = (configService: ConfigService) => {
    const login = configService.get('MONGO_LOGIN')
    const password = configService.get('MONGO_PASSWORD')
    const host = configService.get('MONGO_HOST')
    const port = configService.get('MONGO_PORT')
    const database = configService.get('MONGO_AUTHDATABASE')
    return `mongodb://${login}:${password}@${host}:${port}/${database}`
}

const getMongoOptions = () => ({
    useNewUrlParser: true,
    useUnifiedTopology: true
})

