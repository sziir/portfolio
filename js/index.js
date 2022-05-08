$(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
        $('#navbar').addClass('noTransparent')
    } else {
        $('#navbar').removeClass('noTransparent');
    }
});


(function () {
    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

$(document).ready(function () {
    $('.circle').circleProgress({
        startAngle: -Math.PI / 2,
        fill: '#0575e6'
    }).on('circle-animation-progress', function (event, progress, stepValue) {
        $(this).find('span').html(Math.round(stepValue * 100) + '%');
    })
    $(function () {
        $('#contactForm').validate();
    })

});


document.getElementById('fullyear').innerHTML = new Date().getFullYear();


