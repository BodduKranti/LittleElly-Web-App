import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){
      $('#liveToastBtn').on('click',function(){
        $('.toast').addClass('show');
      })
      
    })
  }

}
