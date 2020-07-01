console.log('opa')
console.log('Made by Daniel and FilipeZ')


const boxes1 = document.querySelector('.boxes1')
function justifyContent(eventTarget){
    boxes1.style.justifyContent= eventTarget.value

    const justifyContent = document.querySelector(".code-justify-result")
    const checkConfirm = document.querySelectorAll('#justifyContent>input')

    
    checkMark(checkConfirm, eventTarget)
   
    justifyContent.innerHTML = ` ${eventTarget.value};` 

} 

function alignItems(eventTarget){
    
    boxes1.style.alignItems= eventTarget.value
    const alignItems = document.querySelector('.code-align-result')
    
    const checkConfirm = document.querySelectorAll('#alignItems>input')

    checkMark(checkConfirm, eventTarget)
    alignItems.innerHTML = `${eventTarget.value};`
}

function flexDirection(eventTarget){
    
    boxes1.style.flexDirection = eventTarget.value    

    const flexDirection = document.querySelector('.code-direction-result')
    const checkConfirm = document.querySelectorAll('#flexDirection>input')
    
    checkMark(checkConfirm, eventTarget)
    flexDirection.innerHTML = `${eventTarget.value};`

}

function alignContent(eventTarget){
  
  boxes1.style.alignContent = eventTarget.value

  const alignContent = document.querySelector('.code-align-content-result')
  const checkConfirm = document.querySelectorAll('#alignContent>input')
  
  checkMark(checkConfirm, eventTarget)
  alignContent.innerHTML = `${eventTarget.value}`
}

function checkMark(checkConfirm, eventTarget ){
  const buttonArray = [...checkConfirm]
  
  buttonArray.map(button=>{
    if(eventTarget!==button){
       button.style.background = '#282a36'
       }else{
         button.style.background = '#BF1E2C'
       }
  })
}

const checkbox = document.querySelector('#flexWrap')

  checkbox.addEventListener('click', (e)=>{
  
  const isChecked = checkbox.checked
  const flexWrap = document.querySelector('.code-flexWrap-result')

  isChecked ? flexWrap.innerHTML = 'wrap' : flexWrap.innerHTML = 'nowrap'
  if(isChecked){
    boxes1.style.flexWrap = 'wrap'
   
    return
  }
  boxes1.style.flexWrap = 'nowrap'
  return
})


document.querySelector('input[type=range]').addEventListener('input', (e)=>{
  const inputRangeValue = e.target.value
  document.querySelector('#numberOfBoxes').innerHTML = inputRangeValue
  console.log(inputRangeValue)

  function makeDiv(number){
  let divs = []
   
       for (i = 0; i<number; i++){
        divs.push(  `<div></div>`)
       }
     document.querySelector('.boxes1').innerHTML = divs.map(div => `${div}`).join('')
    

  }
  makeDiv(e.target.value)
})

