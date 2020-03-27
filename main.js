console.log('pra cima deles hadbala')


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


function checkMark(checkConfirm, eventTarget){
    checkConfirm.forEach((button)=>{

        eventTarget.style.background = '#BF1E2C'

        var checkedButton = eventTarget.style.background

        
       if(checkedButton && button.style.background){
           
           button.style.background = '#BF1E2C'
       }
       button.style.background ='#282a36'
    }) 
}