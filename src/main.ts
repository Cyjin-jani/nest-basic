// 반드시 main.ts라는 이름으로 있어야 한다. 필수적인 파일.

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // class-validator의 유효성 검사 데코레이터를 적어도 하나라도 사용하지 않은 모든 속성 객체를 제거
      forbidNonWhitelisted: true, // 화이트리스트에 없는 속성을 제거하는 대신 유효성 검사기가 예외를 throw함.
      transform: true, // 우리가 원하는 실제 타입으로 변환해준다.
    }),
  );
  await app.listen(3000);
}
bootstrap();
