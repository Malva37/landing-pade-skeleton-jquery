$(document).ready(function () {
    function findMatchTagA(group, idElement) {
        $(group).each(function (index, element) {
            $(element).removeClass("active");
            if ($(element).attr('href') == idElement) {
                $(this).addClass("active");
            }
        })
    }
    $('.dot').each(function (index, element) {
        $(element).click(function () {
            $('.dot').removeClass("active");
            $(element).addClass("active");
            let idElement = $(element).attr('href');
            let positionTopElement = $(idElement).offset().top;
            $("html, body").animate({
                scrollTop: `${positionTopElement}`
            }, 1500);
            findMatchTagA('menu>a', idElement);
        })
    })

    $('menu>a').each(function (index, element) {
        $(element).click(function () {
            $('menu>a').removeClass("active");
            $(element).addClass("active");
            let idElement = $(element).attr('href');
            let positionTopElement = $(idElement).offset().top;
            $("html, body").animate({
                scrollTop: `${positionTopElement}`
            }, 1500);
            findMatchTagA('.dot', idElement);
        })
    })












})