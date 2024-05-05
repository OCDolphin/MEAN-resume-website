import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  constructor() { }

  ngOnInit() {
  }

  public pageContent = {
    content: "Education Page Works!"
  }
}
