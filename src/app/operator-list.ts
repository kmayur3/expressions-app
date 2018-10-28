import { Operator } from './operator';



//Input list with function names and signatures
var FunctionList = ["add(x,y)","subtract(x,y)","foo(x)","foo_extra(x,y,z)"];

var operations = [];

//Set the name and number of params for each function
for (let i = 0; i < FunctionList.length; i++) {
	
	var splitString: String[] = FunctionList[i].split("(");
	var paramString= splitString[1].split(")")[0];
    
	var param_count: number;

	//Check for no parameters
	if(paramString!=" " && paramString.length!=0)
		param_count = FunctionList[i].split(",").length;
	else 
		param_count = 0;
	
    let newOperation = {
       name:splitString[0],
       param:param_count
    };

    operations.push(newOperation);
}

export const OPERATORS: Operator[] = operations;