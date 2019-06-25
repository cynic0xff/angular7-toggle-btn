import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-toggle-btn',
  templateUrl: './toggle-btn.component.html',
  styleUrls: ['./toggle-btn.component.scss']
})
export class ToggleBtnComponent implements OnInit {

  status: boolean;

  constructor() { }

  ngOnInit() {
  }
  
  onChange(ob: MatSlideToggleChange) {
    this.status = ob.checked;
  }
  
}
