// click button, add todo to list item

function addItem () {
  //get input
  
  let input = $('input')
  //get value of input
  let inputVal = input.val()
  console.log('input', inputVal);
  // add the value to a list items in $('.todo-list')
  let list = $('.todo-list')
  //create element to append
  let styleObj = {
    "display" : "flex",
    "justify-content": "space-around"
  }
  let listItem = $("<input type='checkbox'><li></li>")
  //add input val to list item
  let listItemVal = listItem.text(inputVal)
  list.append(listItemVal)
  //clear input
  input.val('')

  //on hover, add delete button
  listItem.hover(function) {
    let deleteBtn = $('<button onClick="deleteItem"> Delete </button>')
    $(this).append(deleteBtn)
  }
}
