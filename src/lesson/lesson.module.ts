import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolvers';

@Module({
  providers:[LessonResolver]
})
export class LessonModule {}
