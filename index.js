


var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)


import javax.swing.JSlider;

JSlider slider = new JSlider(0, 100, 50);

<script type="text/javascript">
// Call carousel manually
$('#myCarouselCustom').carousel();

// Go to the previous item
$("#prevBtn").click(function(){
    $("#myCarouselCustom").carousel("prev");
});
// Go to the previous item
$("#nextBtn").click(function(){
    $("#myCarouselCustom").carousel("next");
});
</script>

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


var myAlert = document.getElementById('myAlert');
var bsAlert = new bootstrap.Alert(myAlert);

addEventListener("click", (event) => {});
onclick = (event) => {};


const EniarCorreo = document.querySelector("EniarCorreo");
EniarCorreo.addEventListener("click", (event) => {
EniarCorreo.textContent = `Recuento de clics: ${event.detail}`;
});
