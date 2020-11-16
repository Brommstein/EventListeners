/* eslint-disable strict */
function main() {
  //prevent default
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();

    const list=($(event.currentTarget).find('input[name="shopping-list-entry"]').val());
    $('ul').append(`<li><span class="shopping-item"> ${list} </span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button>
    <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li></ul>`);
    console.log(list);
  });
}
$('ul').on('click', '.shopping-item-toggle', function(event){
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

$('ul').on('click', '.shopping-item-delete', function(event){
  $(this).closest('li').remove();
});

// eslint-disable-next-line no-undef
$(main);