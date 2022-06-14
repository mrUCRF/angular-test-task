
import { DataService } from './../shared/data.service';
import { Component, OnInit } from '@angular/core';
import { DataType } from '../shared/data-type';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  data!: DataType[]
  selectedObject: any = []
  selectedData = false
  objectActive!: DataType | null
  selectedObjectArray!: [string, string][]



  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.getAllData()
  }
  onSelect(productId: DataType): void {
    this.objectActive = productId
    this.selectedObject = productId
    for (let value in this.selectedObject) {
      if (this.selectedObject[value] === null) {
        this.selectedObject[value] = "it's unknown"
      } else {
        this.selectedObject[value]
      }
    }
    this.selectedObjectArray = Object.entries(this.selectedObject)
    this.selectedData = true
  }
  changeSelectData(): void {
    this.selectedData = false
    this.objectActive = null
  }

}
