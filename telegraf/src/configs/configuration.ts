export default () => ({
	port: parseInt(process.env.PORT) || 3000,
	mongo: {
		login: process.env.MONGO_LOGIN,
		password: process.env.MONGO_PASSWORD,
		host: process.env.MONGO_HOST,
		port: process.env.MONGO_PORT,
		database: process.env.MONGO_AUTHDATABASE
	},
	jwt: {
		secret: process.env.JWT_SECRET
	},
	telegram: {
		bot_token: process.env.TELEGRAM_BOT_TOKEN
	}
  });
  