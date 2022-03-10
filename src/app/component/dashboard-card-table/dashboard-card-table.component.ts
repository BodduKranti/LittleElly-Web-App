import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-card-table',
  templateUrl: './dashboard-card-table.component.html',
  styleUrls: ['./dashboard-card-table.component.scss']
})
export class DashboardCardTableComponent implements OnInit {

  @Input() tableTitle='';

  constructor() { }

  ngOnInit(): void {
  }

}
