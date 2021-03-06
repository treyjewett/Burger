$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        console.log("It worked");
        var newBurger = { burger_name: $("#newBurger").val().trim(), devoured: 0 };
        
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            location.reload();
        });
    });

    $(".devour-it").on("click", function(event) {
        var id = $(this).data("id");
        var eat = $(this).data("eaten");
        var eaten = { devoured: eat };
        console.log("ID: ", id);
        console.log("Eaten Object: ", eaten);

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eaten
    }).then(function() {
        location.reload();
        });
    });
});