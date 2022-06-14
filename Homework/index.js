const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// const newItems = new Array(1,2,3);
//
// console.log("Items: ", items);

const lists = document.querySelectorAll('.list');
const list = lists[0];
const list2 = lists[1];
const list3 = lists[2]

// for
for(let i = 0; i < items.length; i++){
    if(i < 3){
        const liE = document.createElement('li');
        liE.innerText = items[i];
        list.append(liE);
    }
    if(i >= 4 || i <= 6) {
        const liE = document.createElement('li');
        liE.innerText = items[i];
        list2.append(liE);
    }
    if(i > 6 || i <= 9) {
        const liE = document.createElement('li');
        liE.innerText = items[i];
        list3.append(liE);
    }
}

console.log("lIST:", list.classList);