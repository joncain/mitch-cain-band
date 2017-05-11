$(document).ready(function ()
{
    $("div.modal-header-close").bind('click', function ()
    {
        var p = $(this).parents().get(2);
        $(p).fadeOut();
    });

    $("a#about-link").bind('click', function ()
    {
        var p = $("div.modal-header-close").parents().get(2);
        $(p).fadeIn();
    });

});