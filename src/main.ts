import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.enableVersioning();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Taxi ride api')
    .setDescription('The taxi ride API description')
    .setVersion('1.0')
    .addTag('taxi')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, documentFactory);

  await await app.listen(Number(process.env.PORT) || 3001);

  logger.log(`Application listening on: ${await app.getUrl()}`);
}
bootstrap().catch((error) => {
  logger.error(error);

  process.exit(1);
});
