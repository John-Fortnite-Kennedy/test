import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {

  title: string;
  phone: string;
  isWhatsApp: boolean;

  constructor() { }

  ngOnInit() { }

}
