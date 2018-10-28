

Installation
*The app is build using Angular  : 7.0.1
*For drag drop functionality, ng-drag-drop library is used the details of which are here https://www.npmjs.com/package/ng-drag-drop.
*In the expressions-app folder do an; ng serve --open

Assumption
*The input is assumed to be a list of strings which contains the name and signature of the function, like so:
 ["add(x,y)","subtract(x,y)","foo(x)","foo_extra(x,y,z)"]

Working
*operator.ts defines the operator object containing name of the function and number of parameters.
*operator-list.ts contains the input list. Change the FunctionList to give a different input.
*select-operator component displays the functions which can be dragged.
*display-expressions component display the function name and appropriate number of boxes depending on what is dragged.








