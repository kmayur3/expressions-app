import { Component, OnInit, Input } from '@angular/core';
import { Operator } from '../operator'

@Component({
  selector: 'app-display-expression',
  templateUrl: './display-expression.component.html',
  styleUrls: ['./display-expression.component.css']
})
export class DisplayExpressionComponent implements OnInit {

  @Input() selectedOperator: Operator;
  @Input() paramArray: number[];

  constructor() {
  }

  ngOnInit() {
  }

}
