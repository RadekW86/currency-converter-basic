{
const welcome = () => {
console.log("Hi!");
}
welcome();
}

{
    function moneyExchange(inputAmount, currency) {
        const USDrate = 4.3272;
        const EURrate = 4.6915;
        const GBPrate = 5.2910;
        const CHFrate = 4.6600;
        if (currency === "USD") { outputAmount = inputAmount / USDrate; }
        if (currency === "EUR") { outputAmount = inputAmount / EURrate; }
        if (currency === "GBP") { outputAmount = inputAmount / GBPrate; }
        if (currency === "CHF") { outputAmount = inputAmount / CHFrate; }
        return outputAmount.toFixed(2);
    }

    function ExecuteMoneyExchange() {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const inputAmountElement = document.querySelector(".js-inputAmount");
            const currencyElement = document.querySelector(".js-currency");
            const resultElement = document.querySelector(".js-result");
            resultElement.innerHTML = `${inputAmountElement.value} PLN is worth ${moneyExchange(+inputAmountElement.value, currencyElement.value)} ${currencyElement.value}`;
        });
    }

    ExecuteMoneyExchange();
}