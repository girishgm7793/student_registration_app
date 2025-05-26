import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  student = {
    name: '',
    age: null,
    email: '',
    course: '',
    grade: null
  };

  students: any[] = [];

  submitForm() {
    if (this.student.name && this.student.age && this.student.email && this.student.course && this.student.grade !== null) {
      this.students.push({ ...this.student });
      this.resetForm();
    }
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }

  resetForm() {
    this.student = {
      name: '',
      age: null,
      email: '',
      course: '',
      grade: null
    };
  }
}
