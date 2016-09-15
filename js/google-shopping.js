var data = require('../products.json');

// Write your solutions below

// console.log(data.items);

/****************************
          #1
*****************************/

for(var i = 0; i < data.items.length; i++) {
	if(data.items[i].kind == 'shopping#product') {
		console.log(i);
	}
}

/***************************
			#2
***************************/

// for(var i = 0; i < data.items.length; i++) {
// 	if(data.items[i]['inventories']['availability'] == 'backorder') {
// 		console.log(data.items[i].title);
// 	}
// }

/***************************
            #3
****************************/

// for(var i = 0; i < data.items.length; i++) {
// 	if(data.items[i]['images'].length > 1) {
// 		console.log(data.items[i].title);
// 	}
// }

/****************************
			#4
*****************************/

// for(var i = 0; i < data.items.length; i++) {
// 	if(data.items[i]['brand'] == "Canon") {
// 		console.log(data.items[i]);
// 	}
// }

/******************************
			#5
*******************************/

// for(var i = 0; i < data.items.length; i++) {
// 	if(data.items[i].author == "eBay" && data.items[i].brand == "Canon") {
// 		console.log(data.items[i]);
// 	}
// }

/******************************
			#6
*******************************/

// for(var i = 0; i < data.items.length; i++) {
// 	if(data.items[i].brand != undefined && data.items[i].price != undefined && data.items[i].images.length > 0) {
// 		console.log(data.items[i]);
// 	}
// }





