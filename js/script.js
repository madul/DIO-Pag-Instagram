
let position = 0;
slideshow();

function slideshow() {
  let slideItems = document.getElementsByClassName('slideshow');
  let positionsAvailable = slideItems.length;
  console.log(positionsAvailable);
  console.log(position);
  position == positionsAvailable? position = 0: position++;
  
  Array.prototype.forEach.call(slideItems, (slide,index) => {
    console.log(index);
    index == position ? 
    slide.style.display = 'block':
    slide.style.display = 'none';
  })
  setTimeout(slideshow, 2000); 
}
