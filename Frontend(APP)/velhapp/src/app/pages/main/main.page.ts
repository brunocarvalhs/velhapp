import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(
    private menu: MenuController,
  ) 
  {
    this.menu.enable(true, 'menuIdoso');
  }

  ngOnInit() {
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      event.target.disabled = true;
    }, 500);
  }
}
