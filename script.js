
const student = {
  name: "John"
};
// TypeError: myObj.getKeys is not a function
function getKeys(obj) {
  // return Object.keys(obj);
}

Object.prototype.getKeys=function () {
	return Object.keys(this);
}

// console.log(getKeys(student)); 
