import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { v4 as uuid } from 'uuid';
import { CreateStudentInput } from './student.input';
import { In } from "typeorm";

@Injectable()
export class StudentService {
  constructor(@InjectRepository(Student) private studentRepository: Repository<Student>)
  {}

  async getStudent(id: string): Promise<Student> {
    return this.studentRepository.findOne({ where: { id } });
  }

  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
    const{ firstName, lastName } = this.studentRepository.create(createStudentInput);
    const lesson = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName
    })
    return this.studentRepository.save(lesson);
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]>{
    return this.studentRepository.find({
      where: {
        id: In(studentIds)
      }
    });
  }
}
