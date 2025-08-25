//consumir API Dólar

fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(Resposta => {
    return Resposta.json()
}).then(economia => {
    console.log(economia)
    document.getElementById('valorAtual').innerHTML = "R$ " + Number(economia.USDBRL.bid).toFixed(2);
    document.getElementById('valorMinimo').innerHTML = "R$ " + Number(economia.USDBRL.low).toFixed(2);
    document.getElementById('valorMaximo').innerHTML = "R$ " + Number(economia.USDBRL.high).toFixed(2)
})
