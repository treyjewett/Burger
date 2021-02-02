$(function() {
    $('create-form').on('submit', function(event) {
        event.preventDefault();
        var burger = { burger_name: $('#burger-name').val().trim() };
        
        $.ajax('/api/burgers', {
            method: 'POST',
            data: burger
        }).then(function() {
            location.reload();
        });
    });

    $('.devour-it').on('click', function(event) {
        var id = $(this).data('id');
        var eat = $(this).data('eaten');
        var eaten = { devoured: eat };
        console.log('ID: ', id);
        console.log('Eaten Object: ', eaten);

    $.ajax('/api/burgers' + id, {
        type: 'PUT',
        data: eaten
    }).then(function() {
        location.reload();
        });
    });
});