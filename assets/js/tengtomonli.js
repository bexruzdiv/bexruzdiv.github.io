const myInput = document.getElementById('input1')
const myButton = document.getElementById('button-89')
const myH3 = document.getElementById('H3')
const myTest = document.getElementById('testBut')
myButton.addEventListener('click', () => {
    const xSize = myInput.value
    const tomonSize = Number(xSize)
    const result = (tomonSize * tomonSize) * 1.732 / 4
    myH3.innerText = result
});