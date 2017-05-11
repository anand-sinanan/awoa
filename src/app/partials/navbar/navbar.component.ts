import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.css' ],

})

export class NavbarComponent implements OnInit {

public isCollapsed: boolean;

constructor() {
    this.isCollapsed = true;
}

public collapse(event: any): void {
    console.log(event);
}

ngOnInit(): void {}
}
