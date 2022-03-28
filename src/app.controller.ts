import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  // constructor(private readonly appService: AppService) {}

  // express.js에서 get라우터 역할을 한다. app.get('')
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Get()
  home() {
    return 'Welcome to my Movie API';
  }

  @Get('/hello')
  sayHello(): string {
    // return '[greeting] Hello Everyone!';
    // 위와 같이 컨트롤러에서도 충분히 원하는 데이터를 리턴할 수 있지만 하지 않는다.
    // 왜냐!
    // nest에서는 컨트롤러와 서비스를 구분지어 컨트롤러에서는 url요청에 관한 함수 매핑만 해주고,
    // 서비스에서는 비즈니스 로직을 처리한다.
    // return this.appService.getGreet();
    return 'hi';
  }
}
