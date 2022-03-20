import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

// /movies로 라우팅 지정
@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  // @param을 사용하면 url의 파라미터를 원한다는 것을 nest에서 알게 된다.
  // 따라서 :콜론 뒤의 파라미터 변수명을 그대로 넣어주면 해당 변수명을 parameter로서 받아올 수 있게 된다.
  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `this will return one movie with Id: ${movieId}`;
  }

  @Post()
  create() {
    return 'this will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `this will delete a movie with the id : ${movieId}`;
  }

  @Patch('/:id')
  updateOne(@Param('id') movieId: string) {
    return `this will update a movie with the id : ${movieId}`;
  }
}
