const button = document.getElementById("convert-button")
const select = document.getElementById('currency-select')

const dolar = 5.17
const euro = 5.13
const bitcoin = 103000

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais);

    if (select.value === 'US$ Dólar Americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar);
    }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro);
    }

    if (select.value === 'Bitcoin') {
        currencyValueText.innerHTML = (inputReais / bitcoin);
    }




}

const changeCurrecy = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyIMg = document.getElementById('currency-image')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyIMg.src = 'assets/euro.svg'

    }

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dólar Americano"
        currencyIMg.src = 'assets/dolar.svg'

    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyIMg.src = 'assets/bitcoin.svg'

    }



    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrecy)