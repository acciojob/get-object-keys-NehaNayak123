//your JS code here. If required.
let student = {
  name: "Neha",
  top: "67",
  getKeys: function () {
    return Object.keys(this); 
  }
};
console.log(student.getKeys()); // Output: ["name", "top", "getKeys"]



// let student={
// 	name:"Neha",
// 	getKeys:(obj)=>{
// 		return Object.keys(obj);
// 	}
// }
// // console.log(getKeys(student))

// console.log(student.getKeys(student))
// function getKeys(obj){
// 	return Object.keys(obj);
// }

// console.log(getKeys(student))
