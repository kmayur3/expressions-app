import { Component, OnInit } from '@angular/core';
import { Operator } from '../operator';
import { OPERATORS } from '../operator-list';
import { NgDragDropModule } from 'ng-drag-drop';

@Component({
  selector: 'app-select-operator',
  templateUrl: './select-operator.component.html',
  styleUrls: ['./select-operator.component.css']
})
export class SelectOperatorComponent implements OnInit {

  operators = OPERATORS;
  
  selectedOperator:Operator;
  paramArray:number[];

  constructor() { }

  ngOnInit() {
  }

  onOperatorDrop(e: any)
  {
  	this.selectedOperator=e.dragData;
  	this.paramArray=new Array(e.dragData.param);
  }


}
