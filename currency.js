document.addEventListener("DOMContentLoaded", function () {
    const currencyLinks = document.querySelectorAll(".dropdown_currency a");
    const selectedCurrencyElement = document.getElementById("selected-currency");
    const priceElements = document.querySelectorAll(".price");

    // ✅ أسعار الصرف (قم بتحديثها حسب الحاجة)
    const exchangeRates = {
        "AED": 1,        // العملة الافتراضية
        "SAR": 1.02,     // تحويل الدرهم الإماراتي إلى الريال السعودي
        "USD": 0.27      // تحويل الدرهم الإماراتي إلى الدولار الأمريكي
    };

    // ✅ تحميل العملة المخزنة مسبقًا عند تحميل الصفحة
    let currentCurrency = localStorage.getItem("selectedCurrency") || "AED";
    updatePrices(currentCurrency);

    // ✅ عند النقر على أي عملة يتم تغييرها وتحديث الأسعار
    currencyLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const newCurrency = this.textContent.trim();
            updatePrices(newCurrency);
        });
    });

    function updatePrices(newCurrency) {
        if (!exchangeRates[newCurrency]) {
            console.error(`❌ العملة ${newCurrency} غير مدعومة.`);
            return;
        }

        selectedCurrencyElement.textContent = newCurrency; // تحديث العملة في القائمة
        localStorage.setItem("selectedCurrency", newCurrency); // حفظ العملة في `localStorage`

        // ✅ تحديث جميع الأسعار في `index.html`
        priceElements.forEach(priceElement => {
            let originalPrice = priceElement.getAttribute("data-original-price");

            if (originalPrice) {
                originalPrice = parseFloat(originalPrice);
                let convertedPrice = (originalPrice * exchangeRates[newCurrency]).toFixed(2);
                priceElement.textContent = `${newCurrency} ${convertedPrice}`;
            }
        });

        console.log(`✅ تم تحديث العملة إلى: ${newCurrency}`);
    }
});
