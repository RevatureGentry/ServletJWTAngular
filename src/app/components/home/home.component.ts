import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getUserInfo().subscribe(
      data => this.user = data
    );
  }

}
