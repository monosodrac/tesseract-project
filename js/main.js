$(document).ready(function() {
     function truncateText(className, maxLength) {
        $(className).each(function() {
            var text = $(this).text();
            if (text.length > maxLength) {
                var truncatedText = text.substring(0, maxLength) + '...';
                $(this).text(truncatedText);
            }
        });
    }

    truncateText('.desc-produto', 97);


    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })

    $('form').validate({
        rules: {
            telefone: {
                minlength: 15
            }
        },
        submitHandler: function(form) {
            console.log(form);
            form.reset();
        }
    });
});