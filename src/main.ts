import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { AppModule } from './app.module';

//import "reflect-metadata";

async function bootstrap() {

    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
    .setTitle('Dr.Consulta')
    .setDescription('A car park API')
    .setVersion('1.0')
    .addTag('Api Manager')
    .addBearerAuth( { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', name: 'JWT', description: 'Enter JWT token', in: 'header', }, 'JWT-auth',)
    .build();
    
    //app.useGlobalPipes(new ValidationPipe());
    //app.enableCors();
    
    //const options: SwaggerDocumentOptions = {
        //deepScanRoutes: true
    //};

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}
bootstrap();