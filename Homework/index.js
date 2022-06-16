const ARRAY_LENGTH = 20; //list length declaration
const FIRST_LIST_END = 3;
const SECOND_LIST_END = 6;
const THIRD_LIST_END= 9;
let listArray = [];

const lists = document.querySelectorAll('.list'); // taking all elements with class list from HTML
const list1 = lists[0];
const list2 = lists[1];
const list3 = lists[2];



for(let i=0; i <= ARRAY_LENGTH; i++){
    listArray[i] = `item ${i}`;
    if(i < FIRST_LIST_END){
        const liE = document.createElement('li');
        liE.innerText = listArray[i];
        list1.append(liE);
    }else if(i < SECOND_LIST_END){
        const liE = document.createElement('li');
        liE.innerText = listArray[i];
        list2.append(liE);
    } else if(i < THIRD_LIST_END){
        const liE = document.createElement('li');
        liE.innerText = listArray[i];
        list3.append(liE);
    }
}

// let test = document.getElementById('firstList')
// test.addEventListener("mouseover", function( event ) {
//     // highlight the mouseover target
//     event.target.style.color = "orange";
//
//     // reset the color after a short delay
//     setTimeout(function() {
//         event.target.style.color = "";
//     }, 500);
// }, false);

// let fList = document.getElementById("firstList")
//
// fList.onmouseover = function () {
//     fList.append = String(i + i);
// };