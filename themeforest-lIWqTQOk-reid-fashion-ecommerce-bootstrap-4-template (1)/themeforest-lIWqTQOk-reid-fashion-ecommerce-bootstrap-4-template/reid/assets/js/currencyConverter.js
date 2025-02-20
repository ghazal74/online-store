const API_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

// currency
let currency = localStorage.getItem("currency") || "usd";
const select = document.querySelectorAll(".dropdown_currency li");

// prices
const prices = document.querySelectorAll(".current_price");
const oldPrices = document.querySelectorAll(".old_price");

const generatePrices = (prices, data) => {
  prices.forEach((price) => {
    const priceWithNoSigns = +price.textContent
      .replace("$", "")
      .replace("£", "")
      .replace("€", "");

    const priceValue = data.usd[currency] * priceWithNoSigns;

    price.textContent = `$${priceValue}`;
  });
};

const getCurrency = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();

  return data;
};

getCurrency()
  .then((res) => res)
  .then((data) => {
    generatePrices(prices, data);
    generatePrices(oldPrices, data);
  });

// Currency Dropdown Logic
document.addEventListener("DOMContentLoaded", () => {
  const currencyOptions = document.getElementById("currency-options");
  const currentCurrency = document.getElementById("current-currency");

  // Function to initialize selected currency from localStorage
  const initializeCurrency = () => {
    const savedCurrency = localStorage.getItem("currency").toLowerCase();
    if (savedCurrency) {
      updateCurrencyUI(savedCurrency);
    }
  };

  // Function to update the dropdown UI and list
  const updateCurrencyUI = (selectedCurrency) => {
    // Update the main dropdown button
    currentCurrency.innerHTML = `${selectedCurrency.toUpperCase()} <i class="ion-chevron-down"></i>`;

    // Move the selected currency back into the dropdown list
    const options = Array.from(currencyOptions.querySelectorAll("li"));
    currencyOptions.innerHTML = ""; // Clear the dropdown list

    options.forEach((option) => {
      const currency = option.querySelector("a").dataset.currency.toLowerCase();
      if (currency !== selectedCurrency) {
        currencyOptions.appendChild(option); // Add back non-selected currencies
      }
    });

    // Append the previously selected currency at the bottom of the dropdown
    const currentOption = document.createElement("li");
    currentOption.innerHTML = `<a href="#" data-currency="${selectedCurrency}">${selectedCurrency.toUpperCase()}</a>`;
    currencyOptions.appendChild(currentOption);
  };

  // Event listener for selecting a currency
  currencyOptions.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.tagName === "A") {
      const selectedCurrency = event.target.dataset.currency.toLowerCase();
      localStorage.setItem("currency", selectedCurrency); // Save to localStorage
      updateCurrencyUI(selectedCurrency); // Update the UI
      location.reload();
    }
  });

  // Initialize the UI with the saved currency
  initializeCurrency();
});
