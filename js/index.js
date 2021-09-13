console.log("your index.js file is loaded correctly!");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {

     $('html, body').animate({scrollTop:0}, 'slow');
}

$("#downloadResumeBtn").click(function(){
    console.log("Download resume buttons is clicked.");
    // e.preventDefault();  //stop the browser from following
    // window.location.href = "/Resume.pdf";
    // document.getElementById('my_iframe').src = "Resume.pdf";
    window.open('docs/Resume.pdf')

   

});


$("a").mouseover(function(){
    $(this).addClass("hoverAcher");
  });
  $("a").mouseout(function(){
    $(this).removeClass("hoverAcher")
  });
  $("#workTogether").mouseover(function(){
    $(this).addClass("hoverAcher");
  });
  $("#workTogether").mouseout(function(){
    $(this).removeClass("hoverAcher")
  });

