import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

export async function createApp() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://monyul.vercel.app',
    ],
    credentials: true,
  });

  await app.init();

  return app;
}

if (!process.env.VERCEL) {
  const app = await createApp();
  await app.listen(process.env.PORT ?? 3001);
}