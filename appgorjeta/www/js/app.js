
function CalcularGorjeta(){
    let valorTotal = document.querySelector("#valor").value
    valorGorjeta = valorTotal * 0.1
    document.querySelector("#resultado").innerHTML = "Gorjeta: R$ " + valorGorjeta
}
document.querySelector("#btCalcular").addEventListener("click", function(){
    CalcularGorjeta()
})