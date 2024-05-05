import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  constructor() { }

  ngOnInit() {
  }

  public pageContent = {
    content: "Experience Page Works!"
  }
}
