import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CourseCardComponent } from '../course-card/course-card';
import { Lectures, LectureItem } from '../lectures';

@Component({
  selector: 'app-lectures',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, NgFor],
  templateUrl: './lectures.html',
  styleUrls: ['./lectures.scss'],
})
export class LecturesComponent implements OnInit {
  items: LectureItem[] = [];   

  constructor(private lectures: Lectures) {}

  ngOnInit(): void {
    this.items = this.lectures.getItems(); 
  }

  filter: 'all' | 'liked' | 'special' | 'podcast' = 'all';
  setFilter(f: 'all' | 'liked' | 'special' | 'podcast') {
  this.filter = f;
}
get filteredItems() {
  switch (this.filter) {
    case 'liked':
      return this.items.filter(i => i.liked);
    case 'special':
      return this.items.filter(i => i.type === 'special');
    case 'podcast':
      return this.items.filter(i => i.type === 'podcast');
    default:
      return this.items;
  }
}

}