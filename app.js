alert('hello, dude!')

function calculator(){
        userChoice = parseInt(prompt("Enter 1 to start calculating or 0 to quit"))
        if (userChoice !== 0) {
            let firstNumber = parseFloat(prompt("Enter first number: "))
            let secondNumber = parseFloat(prompt("Enter second number: "))
            let operationSign = prompt("Enter the operation you want to do: ")

            if (operationSign === "+") {
                //alert("The result is: "+ addTwoNumbers (firstNumber, secondNumber))
                alert(`The result is: ${addTwoNumbers (firstNumber, secondNumber)}`)
            } else if (operationSign === "-") {
                //alert("The result is:" + " " + deductTwonumber(firstNumber, secondNumber))
                alert(`The result is: ${deductTwonumber(firstNumber, secondNumber)}`)
            }   
        } else {
            alert("End")
        }
        
       
}

function addTwoNumbers (x, y) {
    return x + y
}

function deductTwonumber (x, y) {
    return x - y
}

console.log(typeof firstNumber)

calculator()
