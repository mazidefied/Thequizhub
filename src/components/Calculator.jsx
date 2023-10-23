import React, {useEffect} from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import './calculator.css'

class Calculator {
    constructor(previousOperandTextElement,currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)

        if (isNaN(prev) || isNaN(current)) return

        switch (this.operation) {
            case '+':
                computation = prev + current
                break;
            case '-':
                computation = prev - current
                break;
            case '*':
                computation = prev * current
                break;
            case '÷':
                computation = prev / current
                break;
            default:
                return
        }

        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    computeSpecial(operation) {
        // previous operand must be empty
        if (this.previousOperand !== '') return

        let number = this.currentOperand;

        if (number == '' || isNaN(number)) return

        switch (operation) {
            case 'sin':
                this.currentOperand = this.roundToFivedecimals(Math.sin(this.toRadians(number)))
                this.updateDisplay()
                break;

            case 'cos':
                this.currentOperand = this.roundToFivedecimals(Math.cos(this.toRadians(number)))
                this.updateDisplay()
                break;

            case 'tan':
                this.currentOperand = this.roundToFivedecimals(Math.tan(this.toRadians(number)))
                this.updateDisplay()
                break;

            case 'log':
                this.currentOperand = this.roundToFivedecimals(Math.log10(number))
                this.updateDisplay()
                break;
        }
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if(this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.previousOperand} ${this.operation}`

        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }

    roundToTwodecimals(number) {
        return Math.round(number * 100) / 100
    }

    roundToFivedecimals(number) {
        return Math.round(number * 1e5) / 1e5
    }

    toRadians(angle) {
        return angle * (Math.PI / 180);
    }
}

export default function ({className, closeCalc}) {
    useEffect(() => {
        const numberButtons = document.querySelectorAll('[data-number]')
        const operationButtons = document.querySelectorAll('[data-operation]')
        const specialButtons = document.querySelectorAll('[data-special]')
        const equalsButton = document.querySelector('[data-equals]')
        const deleteButton = document.querySelector('[data-delete]')
        const allClearButton = document.querySelector('[data-all-clear]')
        const previousOperandTextElement = document.querySelector('[data-previous-operand]')
        const currentOperandTextElement = document.querySelector('[data-current-operand]')

        const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

        numberButtons.forEach(button => {
            button.addEventListener('click', () => {
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
            })
        })

        operationButtons.forEach(button => {
            button.addEventListener('click', () => {
                calculator.chooseOperation(button.innerText)
                calculator.updateDisplay()
            })
        })

        specialButtons.forEach(button => {
            button.addEventListener('click', function () {
                calculator.computeSpecial(this.innerText)
            })
        })

        equalsButton.addEventListener('click', button => {
            calculator.compute()
            calculator.updateDisplay()
        })

        allClearButton.addEventListener('click', button => {
            calculator.clear()
            calculator.updateDisplay()
        })

        deleteButton.addEventListener('click', button => {
            calculator.delete()
            calculator.updateDisplay()
        })
    }, []);

    return (
        <div className={className?className:'calc-container'}>
            <button className='close' onClick={closeCalc}>
                <FaArrowLeft /> Back
            </button>
            <div className='calc-holder'>
                <div className="calculator-grid">
                    <div className="output">
                        <div data-previous-operand className="previous-operand"></div>
                        <div data-current-operand className="current-operand"></div>
                    </div>
                    <button data-all-clear className="ac span-two">AC</button>
                    <button data-delete>DEL</button>
                    <button data-operation>÷</button>
                    <button data-special>sin</button>
                    <button data-number>1</button>
                    <button data-number>2</button>
                    <button data-number>3</button>
                    <button data-operation>*</button>
                    <button data-special>cos</button>
                    <button data-number>4</button>
                    <button data-number>5</button>
                    <button data-number>6</button>
                    <button data-operation>+</button>
                    <button data-special>tan</button>
                    <button data-number>7</button>
                    <button data-number>8</button>
                    <button data-number>9</button>
                    <button data-operation>-</button>
                    <button data-special>log</button>
                    <button data-number>.</button>
                    <button data-number>0</button>
                    <button data-number>00</button>
                    <button data-equals class="span-two compute">=</button>
                </div>
            </div>
        </div>
    )
}