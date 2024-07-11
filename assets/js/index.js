$(document).ready(function () {
    $(".menu-icon").click(function () {
      $("body").addClass("menuToggle");
    });
    $(".close-icon").click(function () {
      $("body").removeClass("menuToggle");
    });
  });

function toggleText(moreId,buttonId){
  var moreText=document.getElementById(moreId);
  var buttonText=document.getElementById(buttonId);
  
  if(moreText.style.display==="none"){
    moreText.style.display="block";
    buttonText.innerHTML="Read Less";
      }
      else{
        moreText.style.display="none";
        buttonText.innerHTML="Read More";
      }
}


$('.subpage-readmore-btn').click(function(e) {
  e.preventDefault();
  // console.log('click');
  $(this).parent().prev().slideToggle('slow');
  // $('.subpage-exp-content').slideToggle('slow');
  $(this).text($(this).text() == 'Read Less' ? 'Read More' : 'Read Less');
});
