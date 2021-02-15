// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        };

        // Send the POST request
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("New burger added!");
            // Reload the page to get the updated list
            location.reload();
        });
    });

    // Devouring burger and changing value to true
    $(".eatburger").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        // Send the PUT request
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger devoured!");
            // Reload the page to get the updated list
            location.reload();
        });
    });

    // Deleting burger
    $(".deleteBurger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    })
});