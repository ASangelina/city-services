import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('City Services API')
    .setDescription(
      'A API "City Services" permite gerenciar prestadores de serviços em diferentes cidades. Com essa API, você pode criar, consultar, atualizar e excluir informações sobre prestadores de serviços, além de buscar prestadores específicos com base na cidade ou categoria do serviço.',
    )
    .setVersion('1.0')
    .addTag('tags')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
