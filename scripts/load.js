(function(){
    $('#header').load('header.html',function (response, status, xhr) {
        $(this).replaceWith(response);
    });
    $('#footer').load('footer.html',function (response, status, xhr) {
        $(this).replaceWith(response);
    });
})();