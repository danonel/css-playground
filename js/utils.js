let navIsOpen = false

function toggleNav(x) {
  x.classList.toggle("change");

  if(navIsOpen){
    document.querySelector(".sidebar-button").style.left = "15px";  
    document.querySelector(".sidebar-button").style.transitionDelay = "0s";  
    document.getElementById("mySidenav").style.left = "-250px";

    navIsOpen = false
    
    return
  }

  document.querySelector(".sidebar-button").style.left = "205px"; 
  document.getElementById("mySidenav").style.left = "0";
  navIsOpen = true

  return
}

function handleFlex() {
  const displayGrid = document.querySelector(".display-grid")
  const displayFlex = document.querySelector(".display-flex")


 document.querySelector(".display-grid").style.display="none";
 document.querySelector(".display-flex").style.display="inherit";
} 

function handleGrid() {
    document.querySelector(".display-flex").style.display="none";
    document.querySelector(".display-grid").style.display="grid";
   } 
