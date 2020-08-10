makePalette();
  
  function makeGrid() {
    const gridElement = $('.grid');
    
    for (let i = 0; i < 64; i++) {
let cell = $('<div class="cell"></div>');
gridElement.append(cell);
}}
  
function makePalette() {
    const PALETTE = [
    "red",
    "orange",
    "yellow",
    "green", 
    "blue", 
    
 ];
  
    const paletteElement = $('.palette');
      for (let index = 0; i < PALETTE.length; index++) {
      // access the color    
      let button = $('<button>');
      button.css('backgroundColor', PALETTE[index]);
      // rest of code below
      paletteElement.append(button);
}
  
    $('.palette button').first().addClass('active');
}

  makeGrid();
  function onPaletteClick() {
    $('.palette .active').removeClass('active');
}
  
  $('.palette button').click(onPaletteClick)
  
  function onGridClick() {
    let activeColor = $('.palette .active').css('red');
    let cellColor = $(this).css('blue');
    ;
  }
  
  $('.some-element').click(onGridClick);
  function onClearClick() {
    $('.some-element').css('backgroundColor','');
  }
  
  
  $('.fill-all').click(onFillAllClick)
  
  function onFillEmptyClick() {
    let activeColor = $('.palette .active').css('backgroundColor');
  
    for (let index = 0; index < elements.length; index++) {
      let element = element[index];
  
      console.log($(cell).css('background-color'))
  
      if ($(nextElement).css('backgroundColor') == 'rgba(0, 0, 0, 0)') {
}}}
  