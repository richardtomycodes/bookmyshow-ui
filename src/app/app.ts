import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movie } from './movie';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('bookmyshow-ui');
  movie: Movie = {id:1, title: 'Oppenhiemer', durationMins: 180};
}
