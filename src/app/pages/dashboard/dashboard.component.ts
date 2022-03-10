import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  card1:string='Bounched Cheques';
  card2:string='Today PDC';
  card3:string='Leave Application';
  card4:string='Today Enquiry';
  card5:string='Today Birthday';

  tableRowHeadParent=["id","sun","mond"]

  constructor() { }

  ngOnInit(): void {
  }

}
