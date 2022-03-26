import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

// nest-cli를 이용, nest g controller 명령어 입력 후 컨트롤러 이름을 movies로 지정하면 본 파일을 생성 및 app.module에 매핑해준다.

// /movies로 라우팅 지정
@Controller('movies')
export class MoviesController {
  constructor(readonly moviesService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  // :id보다 밑에 있으면 search를 아이디로 판단하게 되므로 여기에다가 써준다.
  // query를 얻고 싶으면 아래와 같이 작성한다.
  // @Get('search')
  // search(@Query('year') searchingYear: string, @Query('title') title: string) {
  //   return `We are searching for a movie made after: ${searchingYear} ${title}`;
  // }

  // @param을 사용하면 url의 파라미터를 원한다는 것을 nest에서 알게 된다.
  // 따라서 :콜론 뒤의 파라미터 변수명을 그대로 넣어주면 해당 변수명을 parameter로서 받아올 수 있게 된다.
  @Get('/:id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
    // return `this will return one movie with Id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:id')
  updateOne(@Param('id') movieId: string, @Body() updatedData) {
    // return `this will update a movie with the id : ${movieId}`;
    // return { updatedMovie: movieId, ...updatedData };
    return this.moviesService.update(movieId, updatedData);
  }
}
