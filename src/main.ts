import { NestFactory } from '@nestjs/core';
import { AppModule }   from './app.module';

// @ts-ignore
async function bootstrap() {

    const app = await NestFactory.create(AppModule);

    await app.listen(3000);

}

bootstrap();

const autobot = require('@autobot/common');

autobot.BOT.start(__dirname + '/..');
