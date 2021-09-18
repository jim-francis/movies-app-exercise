$('form').submit(function (event) {
    event.preventDefault();
})

$('#add-movie').on('click', function () {
    $(`<li>${$('#title').val()} - ${$('#rating').val()} 
    <button class="x">x</button></li>`)
        .appendTo('#movie-list')
})

$('#movie-container').on('click', 'button', function () {
    $(this).parent().remove();
})