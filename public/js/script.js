



const currency_1 = document.getElementById('currency-one');
const currency_2 = document.getElementById('currency-two');
const amount_1 = document.getElementById('amount-one');
const amount_2 = document.getElementById('amount-two');


const rate_ra = document.getElementById('rate');
const swap = document.getElementById('swap')

function calculate() {
    const currency_one = currency_1.value
    const currency_two = currency_2.value

    fetch(`https://v6.exchangerate-api.com/v6/4f50fae0954705094ca1a31e/latest/${currency_one}`)
    .then(res => res.json())
    .then((data)=> {
        // console.log(data)
        const rate = data.conversion_rates[currency_two];
        rate_ra.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

        amount_2.value = (amount_1.value * rate).toFixed(2);
    })        
    }

currency_1.addEventListener('change', calculate);
currency_2.addEventListener('change', calculate);
amount_1.addEventListener('input', calculate);
amount_2.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const stiff = currency_1.value;
    currency_1.value = currency_2.value;
    currency_2.value = stiff;
    calculate();;
});


calculate()





