import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../course-card/course-card';

@Component({
  selector: 'app-lectures',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './lectures.html',
  styleUrls: ['./lectures.scss'],
})
export class LecturesComponent {
  items = [
    { title: 'Айвазовский', desc: 'Про море', image: 'https://picsum.photos/300/200?1', type: 'special' },
    { title: 'Подкаст про свет', desc: 'Вермеер', image: 'https://picsum.photos/300/200?2', type: 'podcast' },
  ];
}
