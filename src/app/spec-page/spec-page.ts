import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-spec-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './spec-page.html',
  styleUrls: ['./spec-page.scss'],
})
export class SpecPageComponent {
  newComment = '';
  comments: { text: string; createdAt: Date }[] = [];

  addComment() {
    const text = this.newComment.trim();
    if (!text) return;

    this.comments.unshift({ text, createdAt: new Date() }); // новые сверху
    this.newComment = '';
  }

  removeComment(index: number) {
    this.comments.splice(index, 1);
  }
}