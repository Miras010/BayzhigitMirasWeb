import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {
  
  trainers = ['Dauletov Askar', 'Kairatov Arman', 'Musaev Timur']

  constructor() { }

  ngOnInit(): void {
  }

}
