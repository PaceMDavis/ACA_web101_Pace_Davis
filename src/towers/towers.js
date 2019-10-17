'use strict';

$(document).ready(function() {
  
  let $block = null;
  

let row = $('[data-row]')
let ring = $('[data-color]')
let dropRing = $('.red' || '.green' || '.blue')

$(function() {
  $(ring).draggable( {
    snap: true,
    cursor: 'move',
    snapMode: "outer",
    revert: 'invalid',
    drop: function(droppedElement) {
      const validDrop = droppedElement && droppedElement.dropRing;
      return !validDrop;
    },
  });
  $(row).droppable( {
    drop: function(ev, ui) {
      var dropped = ui.draggable;
      var droppedOn = $(this);
      $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
  }
  });
  
  // $(row).ondrop(function() {
  //   if ring 
  // })
})
// let moveBlocks = document.ring
// $(function() {
//   if (validDrop) {
//     moveBlocks.style.left = '1px'
//   }
// })
//containment: '.red' || '.green' || '.blue',
//three squares - different sizes
//larger squares cannot go on top of smaller
//pick up squares and drag them
//drop them
//if squares are smaller, let them go on top
//if larger, return to original place
//if all three reach the end, announce a
})




//   $('[data-row]').click(function() {
//     if ($block) {
//       $(this).append($block);
//       $block = null;
//     } else {
//       let children = $(this).children()
//       console.log('children', children)
//       $block = $(this).children().last().detach();
//     }
//   })

// $(function() {
//   $(ring).draggable( {
//   });
 
//   // $('[data-row]').click(function() {
//   //   if ($block) {
//   //     $(this).append($block);
//   //     $block = null;
//   //   } else {
//   //     let children = $(this).children()
//   //     console.log('children', children)
//   //     $block = $(this).children().last().detach();
//   //   }
//   // })
// });