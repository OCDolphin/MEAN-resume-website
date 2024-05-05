import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  constructor() { }

  ngOnInit() {
  }

  public pageContent = {
    content: "Homepage Works!"
  }

}
