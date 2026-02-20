import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.scss'],
})
export class CourseCardComponent {
  @Input() course: any; 

  toggleLike(event: Event){
  event.stopPropagation();     
  this.course.liked = !this.course.liked;
}
}
