import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-bar-item',
  templateUrl: './top-bar-item.component.html',
  styleUrls: ['./top-bar-item.component.css']
})
export class TopBarItemComponent implements OnInit {

  @Input() item:string;
  
  constructor() { }

  ngOnInit() {
  }

}
