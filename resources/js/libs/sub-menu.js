window.addEventListener('DOMContentLoaded', (event) => {

    var nbOptions = 9;
    var angleStart = -360;

// jquery rotate animation
    function rotate(li, d) {
        $({d: angleStart}).animate({d: d}, {
            step: function (now) {
                $(li)
                    .css({transform: 'rotate(' + now + 'deg)'})
                    .find('label')
                    .css({transform: 'rotate(' + (-now) + 'deg)'});
            }, duration: 0
        });
    }

// show / hide the options
    function toggleOptions(s) {
        $(s).toggleClass('open');
        var li = $(s).find('li');
        var deg = $(s).hasClass('half') ? 180 / (li.length - 1) : 360 / li.length;
        for (var i = 0; i < li.length; i++) {
            var d = $(s).hasClass('half') ? (i * deg) - 90 : i * deg;
            $(s).hasClass('open') ? rotate(li[i], d) : rotate(li[i], angleStart);
        }
    }

    $('.selector button').click(function (e) {
        toggleOptions($(this).parent());
    });


    $('#sub-menu').on('show.bs.modal', function (e) {
        setTimeout(function () {
            toggleOptions('.selector');
            // toggleOptions('.selector-text');
        }, 500);//@ sourceURL=pen.js
    });
    $('#sub-menu').on('hidden.bs.modal', function (e) {
        setTimeout(function () {
            toggleOptions('.selector');
            // toggleOptions('.selector-text');
        }, 500);//@ sourceURL=pen.js
    });

});
