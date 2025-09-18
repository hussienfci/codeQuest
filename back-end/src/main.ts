import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin:'*',
    // mode: 'no-cors',
    methods:"GET,POST,PUT,PATCH,DELETE",
    credential:true
  })
  
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: false,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Code-Quest Test API')
    .setDescription('API documentation for the NestJs')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // await app.listen(process.env.PORT as string);
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Server running on http://localhost:${port}`);
}
bootstrap();
