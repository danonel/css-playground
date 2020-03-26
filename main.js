

function justifyContent(eventTarget){
    var boxes1 = document.querySelector('.boxes1')
    boxes1.style.justifyContent= eventTarget.value
    var justifyContent = document.querySelector(".code-justify-result")
    
    justifyContent.innerHTML = `${eventTarget.value};`

}

function alignItems(eventTarget){
    var boxes1 = document.querySelector('.boxes1')
    boxes1.style.alignItems= eventTarget.value
    var alignItems = document.querySelector('.code-align-result')

    alignItems.innerHTML = `${eventTarget.value};`
}

function flexDirection(eventTarget){
    var boxes1 = document.querySelector('.boxes1')
    boxes1.style.flexDirection = eventTarget.value
    
    var flexDirection = document.querySelector('.code-direction-result')
    flexDirection.innerHTML = `${eventTarget.value};`

}

