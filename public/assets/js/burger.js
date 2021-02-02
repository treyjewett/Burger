$(function() {
    $('create-form').on('submit', function(event) {
        event.preventDefault();
        var burger = { burger_name: $('#burger-name').val().trim() };
        
        $.ajax('/api/burger', {
            method: 'POST',
            data: burger
        }).then(function() {
            location.reload();
        });
    });

    $('.devour-it').on('click', function(event) {
        var id = $(this).data('id');
        var burgers = $(this).data('burgers');
        var burgers = { devoured: 1 };

    $.ajax('/api/burgers' + id, {
        type: 'PUT',
        data: burgers
    }).then(function() {
        console.log(id);
        location.reload();
        });
    });
});