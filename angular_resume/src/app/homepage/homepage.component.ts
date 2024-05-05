import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  users: any[] = [];

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/api/users').subscribe(
      (data: any[]) => {
        this.users = data;
        console.log('User data:', this.users); // Log the fetched user data
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  public pageContent = {
    content: "Homepage Works!"
  }

}
