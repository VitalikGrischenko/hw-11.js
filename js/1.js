const list = [1, 2, 3];
list.push(4, 5, 6);
console.log(list);


const list1 = [1, 2, 3];
list.unshift(4, 5, 6);
console.log(list1);



const list2 = ['js', 'css', 'jq'];
console.log(list2[0]);


const list4 = ['js', 'css', 'jq'];
console.log(list[list4.length - 1]);

const list3 = [1, 2, 3, 4, 5];
const newList = list3.slice(0, 3);
console.log(newList);


const list5 = [1, 2, 3, 4, 5];
const newList1 = list5.slice(3);
console.log(newList1);