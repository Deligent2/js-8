const num11 = document.getElementById("num1")
const num22 = document.getElementById("num2")
const btn = document.getElementById("btn")

btn.addEventListener("click", function () {
    const num1 = parseFloat(num11.value);
    const num2 = parseFloat(num22.value);
    const result = num1 * num2
    alert(result)
})