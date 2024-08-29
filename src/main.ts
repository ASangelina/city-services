import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API de Cadastro de Prestadores de Serviços por Localidade ')
    .setDescription('Esta API permite que prestadores de serviços, como encanadores, eletricistas, professores particulares, entre outros, registrem seus serviços e informações de contato de forma eficiente.')
    .setVersion('1.0')
    .addTag('tags')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
