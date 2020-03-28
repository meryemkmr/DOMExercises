// var liNode = document.getElementById('one');
// var liNode = document.querySelector('#one');
// liNode.className = 'cool';
// liNode.textContent = 'cool';

// var liNode = document.getElementsByClassName('hot');


// var liNodeArray = document.querySelectorAll('.hot');
// console.log(liNodeArray);
// if(liNodeArray.length > 2){
//     liNodeArray[2].className = 'cool';

// }

// for(var index =0; index<=liNodeArray.length; index++){
//     liNodeArray[index].className = 'cool';
// }


// <--------- sayfaya yeni li eklendi -------------->

// var ul = document.createElement('ul');
// var body = document.querySelector('body');
// body.append(ul);
// var li1 = document.createElement('li');
// li1.textContent = 'hello';
// ul.append(li1);
// var li2 = document.createElement('li');
// li2.textContent = 'hello 2';
// ul.append(li2);

// <-----------------add element ---------->


function createHTMLElement(tagName,parentNode,innerText){
    var tag = document.createElement(tagName);
    if (innerText.lenght >0){
        tag.textContent = innerText;
    }
    parentNode.append(tag);
    return tag;
}
var body = document.querySelector('body');
var ul = createHTMLElement = ('ul',body,"");
for ( var numTags =1;numTags <=10; numTags++){
    createHTMLElement('li',ul, `${numTags} Hello`)
}

