const button = document.getElementById('button-89');
const myH3 = document.getElementById('H3')
button.addEventListener('click', () => {
    const input = document.getElementById('input1').value;
    let numbers = input.split(',');
    let a = parseInt(numbers[0]);
    let b = parseInt(numbers[1]);
    let c = parseInt(numbers[2]);

    function uchburchakYuzasi(a, b, c) {
        // Uchburchakning tomonlaridan yuzasi uchun Heron formulani foydalanamiz
        let s = (a + b + c) / 2; // Yarim perimetri hisoblaymiz

        // Yuzani Hisoblash
        let yuza = Math.sqrt(s * (s - a) * (s - b) * (s - c));

        return yuza;
    }

    // Uchburchakning yuzasini hisoblash va natijani chiqarish
    let yuza = uchburchakYuzasi(a, b, c);
    // console.log("Uchburchakning yuzasi:", yuza.toFixed(3));
    myH3.innerText = yuza.toFixed(3)
});