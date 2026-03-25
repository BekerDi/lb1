import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrls: ['./course-card.scss'],
})
export class CourseCardComponent implements OnChanges {
  isHovered = false;

  @Input() id = 0;
  @Input() title = '';
  @Input() image = '';
  @Input() desc = '';
  @Input() type: 'special' | 'podcast' = 'podcast';
  @Input() liked = false;

  @Output() likedChange = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Изменились входные данные карточки:', changes);
  }

  onCardClick() {
    if (this.type === 'special') {
      this.router.navigate(['/spec-page', this.id]);
    }
  }

  toggleLike(event: Event) {
    event.stopPropagation();
    this.likedChange.emit(!this.liked);
  }
}