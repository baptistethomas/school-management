import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentType } from './student.type';
import { CreateStudentInput } from './student.input';

@Resolver(of => StudentType)
export class StudentResolver{
  constructor(
    private studentService: StudentService,
  ) {
  }
  @Query(returns => StudentType)
  student(
    @Args('id') id: string,
  ){
    return this.studentService.getStudent(id);
  }

  @Query(returns => [StudentType])
  students(): Promise<StudentType[]>{
    return this.studentService.getStudents();
  }

  @Mutation(returns => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ){
    return this.studentService.createStudent(createStudentInput);
  }
}