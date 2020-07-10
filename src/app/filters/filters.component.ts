import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/User';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  user: any;
  constructor(private router: Router) {
      this.user = this.router.getCurrentNavigation().extras;
    }

  ngOnInit() {
  }

}
