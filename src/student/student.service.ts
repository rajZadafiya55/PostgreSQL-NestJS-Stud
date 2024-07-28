import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudentService {

  constructor(@InjectRepository(Student) private readonly studentRepository:Repository<Student>){}

  create(createStudentDto: CreateStudentDto) : Promise<Student>{
    let student:Student = new Student();
    student.firstName = createStudentDto.firstName;
    student.email = createStudentDto.email;
    student.age = createStudentDto.age;
    student.phone = createStudentDto.phone;
    return this.studentRepository.save(student);
  }

  findAll() :Promise<Student[]>{
    return this.studentRepository.find();
  }

  findOne(id:number){
    return this.studentRepository.findOne({where: {id}})
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    let student:Student = new Student();
    student.firstName = updateStudentDto.firstName;
    student.email = updateStudentDto.email;
    student.age = updateStudentDto.age;
    student.phone = updateStudentDto.phone;
    student.id = id
    return this.studentRepository.save(student);
  }

  remove(id: number) {
    return this.studentRepository.delete(id);
  }
}
