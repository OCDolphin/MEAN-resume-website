import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor(private http: HttpClient) { }

  projs: any[] = [];

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/projects').subscribe(
      (data: any[]) => {
        this.projs = data;
        console.log('Project data:', this.projs); // Log the fetched user data
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  public pageContent = {
    content: "Projects Page Works!"
  }
}
