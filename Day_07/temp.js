//1.push method-->adds element at the end of array
//USES:adding new member in chat group
const myarr=[1,2,3,4,5]
const x= myarr.push(7) 
console.log(myarr);
console.log(x);  //returns size of array after operation

//2.pop method-->removes last element from the array
//USES:removing last item off the cart
const myarr=[1,2,3,4,5]
const x= myarr.pop()
console.log(myarr);
console.log(x); //returns element being deleted

//3.unshift method-->add element to the start of array
//USES:adding high priority mail in inbox
const myarr=[1,2,3,4,5]
const x= myarr.unshift(9)
console.log(myarr);
console.log(x);  //returns size of array after operation

//4.shift method-->removes element from the start of array
//USES:removing oldest notification
const myarr=[1,2,3,4,5]
const x= myarr.shift()
console.log(myarr);
console.log(x);  //returns element being deleted

//5.includes method-->returns boolean value,if argument is present in array or not.
//USES:checking if a student is present or not (in attendance log)
const myarr=[1,2,3,4,5]
console.log(myarr.includes(4));

//6.indexOf method-->returns index of given argument in array,-1 if it doesnt exist in array
//USES:finding position of song in playlist
const myarr=[1,2,3,4,5]
console.log(myarr.indexOf(7));

//7.slice-->gives perticular part of array as specified in argument --> .slice(a,b) from index a to index b (b excluded)
//doesnt modify original array.
//USES:showing top 5 searches
const myarr=[1,2,3,4,5]
const x=myarr.slice(1,4)
console.log(x);
console.log(myarr);

//8.splice-->removes perticular part of array as specified in argument and returns it, modifies original array.
// .splice(a,b)--> starting from index a remove b no of elemnts.
//USES:deleting perticular data from log
const myarr=[1,2,3,4,5]
const x=myarr.splice(2,3)
console.log(x);
console.log(myarr);

//9.join() method-->converts array into string and seperates element with seperator given as argument.
const myarr=[1,2,3,4,5]
console.log(myarr.join())
console.log(myarr.join(""))
console.log(myarr.join(" "))

