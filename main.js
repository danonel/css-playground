console.log('pra cima deles hadbala')

var navIsOpen = false

function justifyContent(eventTarget){
    var boxes1 = document.querySelector('.boxes1')
    boxes1.style.justifyContent= eventTarget.value

    var justifyContent = document.querySelector(".code-justify-result")
    var checkConfirm = document.querySelectorAll('#justifyContent>input')

    
    checkMark(checkConfirm, eventTarget)
   
    justifyContent.innerHTML = ` ${eventTarget.value};` 

} 

function alignItems(eventTarget){
    var boxes1 = document.querySelector('.boxes1')
    boxes1.style.alignItems= eventTarget.value
    var alignItems = document.querySelector('.code-align-result')
    
    var checkConfirm = document.querySelectorAll('#alignItems>input')

    checkMark(checkConfirm, eventTarget)
    alignItems.innerHTML = `${eventTarget.value};`
}

function flexDirection(eventTarget){
    var boxes1 = document.querySelector('.boxes1')
    boxes1.style.flexDirection = eventTarget.value    

    var flexDirection = document.querySelector('.code-direction-result')
    
    var checkConfirm = document.querySelectorAll('#flexDirection>input')
    checkMark(checkConfirm, eventTarget)
    flexDirection.innerHTML = `${eventTarget.value};`

}



function checkMark(checkConfirm, eventTarget ){
  
  
  var buttonArray = [...checkConfirm]
  
  buttonArray.map(button=>{
    if(eventTarget!==button){
       button.style.background = '#282a36'
       }else{
         button.style.background = '#BF1E2C'
       }
    
  })
}

function toggleNav(x) {
    x.classList.toggle("change");

if(navIsOpen){
  document.querySelector(".sidebar-button").style.left = "5px";  document.getElementById("mySidenav").style.left = "-250px";
  navIsOpen = false
  return
}
 document.querySelector(".sidebar-button").style.left = "205px"; document.getElementById("mySidenav").style.left = "0";
  navIsOpen = true
  return
}

