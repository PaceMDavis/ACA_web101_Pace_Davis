'use strict';

$(document).ready(function() {
  
  let $block = null;
  
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

let ring = $('[data-color]')
$(function() {
  $(ring).draggable();
  // $('[data-row]').click(function() {
  //   if ($block) {
  //     $(this).append($block);
  //     $block = null;
  //   } else {
  //     let children = $(this).children()
  //     console.log('children', children)
  //     $block = $(this).children().last().detach();
  //   }
  // })
});


//three squares - different sizes
//larger squares cannot go on top of smaller
//pick up squares and drag them
//drop them
//if squares are smaller, let them go on top
//if larger, return to original place
//if all three reach the end, announce a
})