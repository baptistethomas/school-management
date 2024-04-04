import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver(of => LessonType)
export class LessonResolver{
  @Query(returns => LessonType)
    lesson(){
    return {
      id : 'Aseezzd',
      name: 'IT Class',
      startDate: (new Date()).toISOString(),
      enDate: (new Date()).toISOString(),
    }
  }
}