let myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}






// // click button, add todo to list item

// function addItem () {
//   //get input
  
//   let input = $('input')
//   //get value of input
//   let inputVal = input.val()
//   // console.log('input', inputVal);
//   // add the value to a list items in $('.todo-list')
//   let list = $('.todo-list')
//   //create element to append
//   let styleObj = {
//     "display" : "flex",
//     "justify-content": "space-around"
//   }
//   let listItem = $("<input type='checkbox'><li></li>")
//   //add input val to list item
//   let listItemVal = listItem.text(inputVal)
//   list.append(listItemVal)
//   //clear input
//   input.val('')
// }
//   //removing items from list
 
  
//   //on hover, add delete button
//   // listItem.hover(function() {
//   //   let deleteBtn = $('<button onClick="deleteItem"> Delete </button>')
//   //   $(this).append(deleteBtn)
//   // })

// function removeItem() {
// $("#button").click(function () {
//   $("#list").remove();
//   //do more stuff
// })

// }

// // function removeItemsExistingLists(appendElement) {
// //   let removeButton = document.createElement('button');
// //   removeButton.setAttribute("id", 'remove button');
// //   removeButton.innerHTML = "X";
// //   appendElement.appendChild(removeButton);
// //   removeButton.onclick =removeItem;
// //   console.log("I'm here", removeItemsExistingLists())
// // }
// // //add remove button to existing list
// // function addButtonList() {
// //   let list = document.getElementsByClassName('todo-list');
// //   for(let i=0; i<list.children.length; i++) {
// //     removeItemsExistingLists(list.children[i]);
// //   } 
// // }