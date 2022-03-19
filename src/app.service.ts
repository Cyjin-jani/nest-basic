import { Injectable } from '@nestjs/common';
// 비즈니스 로직을 담당하는 서비스

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NEST!';
  }

  getGreet(): string {
    return '[Greeting] Hello Everyone!!';
  }
}
