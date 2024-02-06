import { Resolver, Query } from '@nestjs/graphql';
// import { AppService } from './app.service';

@Resolver()
export class AppResolver {
  // constructor(private readonly appService) {}

  @Query(() => String)
  fetchBoards() {
    return 'fetchBoards에서 데이터 보내기 성공!!';
  }
}
