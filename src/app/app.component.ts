import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HeroComponent,ProjectsComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'frontend';
}
