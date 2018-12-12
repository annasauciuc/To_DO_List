// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text]").keypress(function(event) {
    if (event.witch == 13) {
        console.log('enter :');
    }


})