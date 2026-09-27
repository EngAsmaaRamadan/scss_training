// let xhr = new XMLHttpRequest();
// // console.log(xhr);
// 	xhr.open('GET','https://jsonplaceholder.typicode.com/users');
// 	xhr.onload = function (){
// 		if(xhr.status == 200){
// 			console.log(JSON.parse(xhr.responseText));
// 		}else{
// 			console.log(xhr.status);
// 		}
// 	};
function getData(){
let xhr = new XMLHttpRequest();//constractor creation, create ele in heap not stack because (new)تخزين عشوائي
// console.log(xhr);
	xhr.open('GET','https://jsonplaceholder.typicode.com/users');
	xhr.onload = function (){
		if(xhr.status == 200){
			console.log(JSON.parse(xhr.responseText));
		}else{
			console.log(xhr.status);
		}
	};
	xhr.send();
}