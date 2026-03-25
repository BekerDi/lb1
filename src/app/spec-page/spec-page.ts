import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsBlockComponent } from '../comments-block/comments-block';

@Component({
  selector: 'app-spec-page',
  standalone: true,
  imports: [CommonModule, CommentsBlockComponent],
  templateUrl: './spec-page.html',
  styleUrls: ['./spec-page.scss']
})
export class SpecPageComponent {}