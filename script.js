let number_1 =document.getElementById("num1")
let number_2 =document.getElementById("num2")
let plus =document.getElementById("plus")
let minus =document.getElementById("minus")
let multiple =document.getElementById("multiple")
let clear =document.getElementById("clear")
let divide =document.getElementById("divide")
let result_text =document.getElementById("result")


function  actionFunction(action){
    let  num1 = number_1.value
    let num2 = number_2.value
    let result
    if(action === 'plus'){
        result = Number(num1) + Number(num2)
    }else if(action === 'minus'){
        result = Number(num1) - Number(num2)
    }else if(action === 'multiple'){
        result = Number(num1) * Number(num2)
    }else if(action === 'divide'){
        if(Number(num2) === 0){
            result ="Əziz savadsız və cahil 0-a bölmə  yoxdur!!!!"
        }else{
            result = Number(num1) / Number(num2)
            result = result.toFixed(2)
        }
    }

    return result
}

plus.addEventListener("click",function (){
    result_text.innerText = actionFunction('plus')
})
minus.addEventListener("click",function (){
    result_text.innerText = actionFunction('minus')
})
multiple.addEventListener("click",function (){
    result_text.innerText = actionFunction('multiple')
})
divide.addEventListener("click",function (){
    result_text.innerText = actionFunction('divide')
})

clear.addEventListener("click",function (){
    number_2.value = 0
    number_1.value = 0
    result_text.innerText = "İnputlar təmizləndi!"
})

