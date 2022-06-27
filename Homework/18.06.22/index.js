const ARRAY_LENGTH = 20; //list length declaration
const FIRST_LIST_END = [1, 2, 3];
const SECOND_LIST_END = 6;
const THIRD_LIST_END= 9;
// let listArray = [];

let ul1 = document.getElementsByClassName("list1");
let ul2 = document.getElementsByClassName("list2");
let ul3 = document.getElementsByClassName("list3");

// function renderProductList(element, index, arr) {
//     for(let i = 0; i<3; i++){
//     let li = document.createElement('li');
//     li.setAttribute('class','item');
//
//     ul1[0].appendChild(li);
//
//     li.innerHTML=li.innerHTML + element;
//     }
// }

let nav = document.getElementById('container');

function ulInicialization(){
  for(let i = 0; i<3; i++) {
      let ul = document.createElement('ul');
      if (i == 0) ul.setAttribute('class', 'list1');
      else if (i == 1) ul.setAttribute('class', 'list2');
      else if (i == 2) ul.setAttribute('class', 'list3');
      nav.appendChild(ul);
  }
 //  for(let i = 0; i<9; i++) {
 //     let li  = document.createElement('li');
 //     if(i==0) li.setAttribute('id','item1');
 //     else if(i==1) li.setAttribute('id','item2');
 //     else if(i==2) li.setAttribute('id','item3');
 //     else if(i==3) li.setAttribute('id','item4');
 //     else if(i==4) li.setAttribute('id','item5');
 //     else if(i==5) li.setAttribute('id','item6');
 //     else if(i==6) li.setAttribute('id','item7');
 //     else if(i==7) li.setAttribute('id','item8');
 //     else if(i==8) li.setAttribute('id','item9');
 //
 // }

        // FIRST_LIST_END.forEach(renderProductList);
renderProductList(FIRST_LIST_END);

};

// let ul =document.createElement('ul');
//
// document.body.appendChild(test);
// nav.appendChild(ul);

// for (var i=0; i<array.length; i++){
//
//     var li=document.createElement('li');
//
//     ul.appendChild(li);
//     li.innerHTML=li.innerHTML + array[i];
//
// }


// const lists = document.querySelectorAll('.list'); // taking all elements with class list from HTML
// const list1 = lists[0];
// const list2 = lists[1];
// const list3 = lists[2];
//
//
//
// for(let i=0; i <= ARRAY_LENGTH; i++){
//     listArray[i] = `item ${i}`;
//     if(i < FIRST_LIST_END){
//         const liE = document.createElement('li');
//         liE.innerText = listArray[i];
//         list1.append(liE);
//     }else if(i < SECOND_LIST_END){
//         const liE = document.createElement('li');
//         liE.innerText = listArray[i];
//         list2.append(liE);
//     } else if(i < THIRD_LIST_END){
//         const liE = document.createElement('li');
//         liE.innerText = listArray[i];
//         list3.append(liE);
//     }
// }


//............................

// let test = document.getElementsByClassName('')
//  test.addEventListener("mouseover", function( event ) {
//     for(i = 0; i<ARRAY_LENGTH; i++){
//         list1.textContent(i);
//     }
//     event.target.style.color = "orange";
//
//     // reset the color after a short delay
//     setTimeout(function() {
//         event.target.style.color = "";
//     }, 500);
// }, false);

// ..........................

// let fList = document.getElementById("firstList")
//
// fList.onmouseover = function () {
//     fList.append = String(i + i);
// };