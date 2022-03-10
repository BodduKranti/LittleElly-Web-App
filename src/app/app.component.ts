import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LittleElly-Web-App';

  ngOnInit() {
    $(document).ready(function () {
      $('.mobileIcon').on('click', function () {
        $('.leftContainer').addClass('active');
      });

      $('.closeIcon').on('click', function () {
        $('.leftContainer').removeClass('active');
      })

      //demo

    })


  }

  






}
