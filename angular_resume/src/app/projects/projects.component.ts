import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor() { }

  ngOnInit() {
  }

  public pageContent = {
    content: "Projects Page Works!"
  }
}
