import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Contact Details';
  nameContact: string = "Farrukh Malik";
  numberContact: number = 3118118082;
  countryContact: string = "Pakistan";

  addSection: boolean = false;
  updateSection: boolean = false;
  deleteSection: boolean = false;
  readSection: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  addNewContactSection() {
    this.addSection = true;
    this.readSection = false;
    this.updateSection = false;
    this.deleteSection = false;
  }
  updateContactSection() {
    this.addSection = false;
    this.readSection = false;
    this.updateSection = true;
    this.deleteSection = false;
  }
  deleteContactSection() {
    this.addSection = false;
    this.readSection = false;
    this.updateSection = false;
    this.deleteSection = true;
  }

}
