import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';

// nestjs는 데코레이터 문법을 사용한다. (클래스에 함수 기능을 추가할 수 있음)
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
// 모든 모듈의 구심점(?)이 된다. root-module이라고 생각하면 된다. 마치 리액트의 app.js같은 느낌이랄까..

// 컨트롤러의 역할 : 기본적으로 url을 가져와서 함수와 매핑(및 실행)을 한다.
// express에서의 router의 역할이라고 볼 수 있다.
