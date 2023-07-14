window.onscroll = function() {myFunction()};
      
var navlist = document.getElementById("navlist");
var sticky = navlist.offsetTop;
  
/* Function to stick the nav bar */
function myFunction() {
    if (document.documentElement.scrollTop >= sticky) {
        navlist.classList.add("sticky")
    } 
      else {
          navlist.classList.remove("sticky");
      }
}