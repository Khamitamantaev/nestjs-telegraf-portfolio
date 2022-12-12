import { APP_CONSTANTS } from './constants';
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
    const MONGO = APP_CONSTANTS.MONGO_DB.MONGODB
    const LOGIN = configService.get(APP_CONSTANTS.MONGO_DB.LOGIN)
    const PASSWORD = configService.get(APP_CONSTANTS.MONGO_DB.PASSWORD)
    const HOST = configService.get(APP_CONSTANTS.MONGO_DB.HOST)
    const PORT = configService.get(APP_CONSTANTS.MONGO_DB.PORT)
    const DATABASE = configService.get(APP_CONSTANTS.MONGO_DB.DATABASE)

    const URI = `${MONGO}://${LOGIN}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`
    console.log(URI)
    return URI
}

const getMongoOptions = () => ({
    useNewUrlParser: true,
    useUnifiedTopology: true
})

