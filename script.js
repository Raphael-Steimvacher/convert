const USD = 5.43
const EUR = 6.26
const GBP = 7.21
const BRL = "R$"

const amount = document.querySelector("#amount")
const form = document.querySelector("form")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")

amount.addEventListener("input", () => {
  // console.log(amount.value)
  const hasCharactersRegex = /\D+/g

  amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.addEventListener("submit", (event) => {
  event.preventDefault()
  // console.log(currency.value)

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
})

function convertCurrency(amount, price, symbol) {
  // console.log(amount, price, symbol)
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    let total = amount * price
    total = formatCurrencyBRL(total)

    result.textContent = total

    footer.classList.add("show-result")
  } catch (error) {
    footer.classList.remove("show-result")

    console.log(error)
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
}

function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR", {
    style: "currency" ,
    currency: "BRL"
  })
}
