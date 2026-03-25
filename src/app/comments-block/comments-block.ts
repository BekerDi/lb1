import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentShellComponent } from '../comment-shell/comment-shell';

@Component({
  selector: 'app-comments-block',
  standalone: true,
  imports: [CommonModule, FormsModule, CommentShellComponent],
  templateUrl: './comments-block.html',
  styleUrls: ['./comments-block.scss']
})
export class CommentsBlockComponent {
  newComment = '';
  comments: { text: string; createdAt: Date }[] = [];

  addComment() {
    const text = this.newComment.trim();
    if (!text) return;

    this.comments.unshift({ text, createdAt: new Date() });
    this.newComment = '';
  }

  removeComment(index: number) {
    this.comments.splice(index, 1);
  }
}