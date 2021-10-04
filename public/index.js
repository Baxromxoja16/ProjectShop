const price = document.querySelectorAll('.price');

price.forEach((val, index) => {
    val.textContent = new Intl.NumberFormat('en-EN', {
        currency: 'usd',
        style: 'currency'
    }).format(val.textContent)
})