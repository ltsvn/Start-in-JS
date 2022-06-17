const ARRAY_LENGTH = 20; //list length declaration
const FIRST_LIST_END = [1, 2, 3];
const SECOND_LIST_END = 6;
const THIRD_LIST_END= 9;
// let listArray = [];


(function(){

        let ul = document.createElement('ul');
        ul.setAttribute('id', 'list');

        productList = ['Electronics Watch', 'House wear Items', 'Kids wear'];

        document.getElementById('container').appendChild(ul);
        FIRST_LIST_END.forEach(renderProductList);

    function renderProductList(element, index, arr) {
        let li = document.createElement('li');
        li.setAttribute('class','item');

        ul.appendChild(li);

        li.innerHTML=li.innerHTML + element;
    }
})();

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