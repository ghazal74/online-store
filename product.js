document.addEventListener("DOMContentLoaded", function () {
    const selectedLanguage = document.getElementById("selected-language");
    const switchToAr = document.getElementById("switch-to-ar");
    const switchToEn = document.getElementById("switch-to-en");

    // جميع النصوص القابلة للتغيير
    const translations = {
        en: {
            freeReturns: "Free Returns: For First 40 Days",
            myAccount: "My Account",
            signIn: "Sign In",
            logout: "Logout",
            
            callSupport: "Call Free Support",
            home: "Home",
            aboutUs: "About Us",
            login: "Log In",
            contactUs: "Contact Us",
            sorting: "Sorting",
            chooseColor: "Choose a color:",
            chooseSize: "Choose a size:",
            selectedSize: "Selected Size:",
            buyNow: "Buy Now",
            similarProducts: "Similar Products",
            productPrice: "Price",
        },
        ar: {
            freeReturns: "إرجاع مجاني: لأول 40 يومًا",
            myAccount: "حسابي",
            signIn: "تسجيل الدخول",
            logout: "تسجيل الخروج",
            
            callSupport: "اتصل بالدعم المجاني",
            home: "الرئيسية",
            aboutUs: "معلومات عنا",
            login: "تسجيل الدخول",
            contactUs: "اتصل بنا",
            sorting :"فرز",
            chooseColor: "اختر اللون:",
            chooseSize: "اختر المقاس:",
            selectedSize: "المقاس المحدد:",
            buyNow: "اشترِ الآن",
            similarProducts: "منتجات مشابهة",
            productPrice: "السعر",
        }
    };

    function changeLanguage(lang) {
        document.querySelector(".container5").textContent = translations[lang].freeReturns;
        document.querySelector(".top_links a").textContent = translations[lang].myAccount;
        document.querySelector(".dropdown_links li:nth-child(1) a").textContent = translations[lang].signIn;
        document.querySelector(".dropdown_links li:nth-child(2) a").textContent = translations[lang].logout;
        document.querySelector(".support p").innerHTML = `${translations[lang].callSupport} : <a href="tel:0528686321">0528686321</a>`;
        document.querySelectorAll("header ul li a")[0].textContent = translations[lang].home;
        document.querySelectorAll("header ul li a")[1].textContent = translations[lang].aboutUs;
        document.querySelectorAll("header ul li a")[2].textContent = translations[lang].login;
        document.querySelectorAll("header ul li a")[3].textContent = translations[lang].contactUs;
        document.querySelectorAll("header ul li a")[4].textContent = translations[lang].sorting;
        document.querySelector("label[for='color']").textContent = translations[lang].chooseColor;
        document.querySelector("label[for='size']").textContent = translations[lang].chooseSize;
        document.getElementById("selected-size").textContent = translations[lang].selectedSize + " M";
        document.getElementById("buy-now").textContent = translations[lang].buyNow;
        document.querySelector(".similar-title").textContent = translations[lang].similarProducts;
        document.getElementById("product-title").textContent = translations[lang].productPrice;

        // تحديث زر اللغة
        selectedLanguage.innerHTML = lang === "ar"
            ? '<img src="img/language2.png" alt=""> العربية'
            : '<img src="img/language.png" alt=""> English';

        // حفظ اللغة في LocalStorage
        localStorage.setItem("selectedLanguage", lang);
    }

    // استرجاع اللغة المحفوظة عند تحميل الصفحة
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    changeLanguage(savedLanguage);

    // عند اختيار اللغة العربية
    switchToAr.addEventListener("click", function (e) {
        e.preventDefault();
        changeLanguage("ar");
    });

    // عند اختيار اللغة الإنجليزية
    switchToEn.addEventListener("click", function (e) {
        e.preventDefault();
        changeLanguage("en");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let product = JSON.parse(localStorage.getItem("product"));

    if (!product || !product.price || !product.category) {
        console.error("❌ لا يوجد بيانات منتج في LocalStorage.", product);
        return;
    }

    console.log("📌 المنتج الذي تم تحميله:", product);

    document.getElementById("product-image").src = product.image;
    document.getElementById("product-title").textContent = product.name || "Unknown";
    document.getElementById("product-price").textContent = `${product.price} USD`;

    const addToCartButton = document.getElementById("add-to-cart");
    addToCartButton.replaceWith(addToCartButton.cloneNode(true)); // منع التكرار

    document.getElementById("add-to-cart").addEventListener("click", function () {
        console.log("🛒 Attempting to add product to cart:", product);
        addToCart(product);
    });
});




document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ product.js Loaded");

    // ✅ تحميل المنتج من `localStorage`
    let product = JSON.parse(localStorage.getItem("product"));
    let allProducts = JSON.parse(localStorage.getItem("allProducts")) || [];
    let relatedContainer = document.getElementById("related-products");

    if (!product || !product.price) {
        console.error("❌ لا يوجد بيانات منتج في LocalStorage");
        return;
    }

    // ✅ تحديث بيانات المنتج الأساسي
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-title").textContent = product.name;
    let productPriceElement = document.getElementById("product-price");
    let productPrice = parseFloat(product.price.replace(/[^\d.]/g, ''));
    productPriceElement.setAttribute("data-original-price", productPrice);
    productPriceElement.textContent = `AED ${productPrice.toFixed(2)}`;

    console.log("📌 تم تحميل المنتج:", product);


    document.getElementById("buy-now").addEventListener("click", function () {
        window.location.href = "checkout.html"; // ✅ الانتقال إلى صفحة الدفع
    });

    // ✅ تحميل المنتجات المشابهة وتحديث الأسعار
    if (product.category) {
        let relatedProducts = allProducts.filter(item => item.category === product.category && item.image !== product.image);
        relatedProducts = relatedProducts.slice(0, 8);

        relatedContainer.innerHTML = "";
        if (relatedProducts.length === 0) {
            relatedContainer.innerHTML = "<p>No similar products found.</p>";
        } else {
            relatedProducts.forEach(item => {
                let div = document.createElement("div");
                div.classList.add("related-item");
                let price = parseFloat(item.price.replace(/[^\d.]/g, ''));

                div.innerHTML = `
                    <img src="${item.image}" alt="Similar Product">
                    <p class="similar-price" data-original-price="${price}">AED ${price.toFixed(2)}</p>
                `;
                div.addEventListener("click", function () {
                    localStorage.setItem("product", JSON.stringify(item));
                    window.location.reload();
                });
                relatedContainer.appendChild(div);
            });
        }
    }

    // ✅ تحميل العملة واللغة المخزنة مسبقًا من `localStorage`
    let currentCurrency = localStorage.getItem("selectedCurrency") || "AED";
    let currentLanguage = localStorage.getItem("selectedLanguage") || "en";

    updatePrices(currentCurrency, false);
    updateLanguage(currentLanguage);

    // ✅ تغيير العملة عند النقر على أحد الخيارات
    document.querySelectorAll(".dropdown_currency a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let newCurrency = this.textContent.trim();
            updatePrices(newCurrency, true);
        });
    });

    // ✅ تغيير اللغة عند النقر على أحد الخيارات
    document.querySelectorAll(".dropdown_language a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let newLanguage = this.getAttribute("data-lang");
            updateLanguage(newLanguage);
        });
    });

    // ✅ تحديث جميع الأسعار بناءً على العملة المختارة
    function updatePrices(newCurrency = "AED", showNotification = true) {
        const exchangeRates = {
            "AED": 1,
            "SAR": 1.02,
            "USD": 0.27
        };

        if (!exchangeRates[newCurrency]) {
            console.error(`❌ العملة ${newCurrency} غير مدعومة.`);
            return;
        }

        // ✅ إظهار مؤشر تحميل
        showLoadingIndicator(true);

        setTimeout(() => {
            // ✅ تحديث سعر المنتج الأساسي
            let productPrice = parseFloat(productPriceElement.getAttribute("data-original-price"));
            if (!isNaN(productPrice)) {
                let convertedPrice = (productPrice * exchangeRates[newCurrency]).toFixed(2);
                animatePriceChange(productPriceElement, `${newCurrency} ${convertedPrice}`);
            }

            // ✅ تحديث أسعار المنتجات المشابهة
            document.querySelectorAll(".similar-price").forEach(priceElement => {
                let originalPrice = parseFloat(priceElement.getAttribute("data-original-price"));
                if (!isNaN(originalPrice)) {
                    let convertedPrice = (originalPrice * exchangeRates[newCurrency]).toFixed(2);
                    animatePriceChange(priceElement, `${newCurrency} ${convertedPrice}`);
                }
            });

            // ✅ حفظ العملة المحددة في `localStorage`
            localStorage.setItem("selectedCurrency", newCurrency);
            console.log(`✅ تم تحديث الأسعار إلى العملة: ${newCurrency}`);

            // ✅ إخفاء مؤشر التحميل
            showLoadingIndicator(false);

            // ✅ إظهار إشعار بنجاح تغيير العملة
            if (showNotification) showToast(`💰 العملة تم تحديثها إلى ${newCurrency}`);

        }, 800); // ⏳ محاكاة التأخير لتحسين تجربة المستخدم
    }

    // ✅ تحديث لغة الموقع
    function updateLanguage(newLanguage) {
        if (!["en", "ar"].includes(newLanguage)) {
            console.error(`❌ اللغة ${newLanguage} غير مدعومة.`);
            return;
        }

        document.body.setAttribute("lang", newLanguage);
        localStorage.setItem("selectedLanguage", newLanguage);
        console.log(`✅ تم تحديث اللغة إلى: ${newLanguage}`);
    }

    // ✅ دالة لإظهار مؤشر التحميل
    function showLoadingIndicator(show) {
        let loader = document.getElementById("currency-loader");
        if (!loader) {
            loader = document.createElement("div");
            loader.id = "currency-loader";
            loader.style.position = "fixed";
            loader.style.top = "10px";
            loader.style.right = "10px";
            loader.style.padding = "10px";
            loader.style.background = "rgba(0,0,0,0.7)";
            loader.style.color = "white";
            loader.style.borderRadius = "5px";
            loader.style.fontSize = "14px";
            loader.style.display = "none";
            loader.textContent = "⏳ جاري تحديث الأسعار...";
            document.body.appendChild(loader);
        }
        loader.style.display = show ? "block" : "none";
    }

    // ✅ دالة لإظهار إشعار مؤقت عند تغيير العملة
    function showToast(message) {
        let toast = document.createElement("div");
        toast.className = "toast-message";
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => toast.remove(), 500);
        }, 2000);
    }

    // ✅ دالة لإنشاء تأثير تغيير السعر بسلاسة
    function animatePriceChange(element, newText) {
        element.style.transition = "opacity 0.3s";
        element.style.opacity = "0";
        setTimeout(() => {
            element.textContent = newText;
            element.style.opacity = "1";
        }, 300);
    }
});

function updatePrices(newCurrency = "AED", showNotification = true) {
    const exchangeRates = {
        "AED": 1,
        "SAR": 1.02,
        "USD": 0.27
    };

    if (!exchangeRates[newCurrency]) {
        console.error(`❌ العملة ${newCurrency} غير مدعومة.`);
        return;
    }

    // ✅ إظهار مؤشر تحميل
    showLoadingIndicator(true);

    setTimeout(() => {
        // ✅ تحديث سعر المنتج الأساسي
        let productPrice = parseFloat(productPriceElement.getAttribute("data-original-price"));
        if (!isNaN(productPrice)) {
            let convertedPrice = (productPrice * exchangeRates[newCurrency]).toFixed(2);
            animatePriceChange(productPriceElement, `${newCurrency} ${convertedPrice}`);
        }

        // ✅ تحديث أسعار المنتجات المشابهة
        document.querySelectorAll(".similar-price").forEach(priceElement => {
            let originalPrice = parseFloat(priceElement.getAttribute("data-original-price"));
            if (!isNaN(originalPrice)) {
                let convertedPrice = (originalPrice * exchangeRates[newCurrency]).toFixed(2);
                animatePriceChange(priceElement, `${newCurrency} ${convertedPrice}`);
            }
        });

        // ✅ تحديث أسعار السلة أيضًا
        updateCartCurrency(newCurrency);

        // ✅ حفظ العملة المحددة في `localStorage`
        localStorage.setItem("selectedCurrency", newCurrency);
        console.log(`✅ تم تحديث الأسعار إلى العملة: ${newCurrency}`);

        // ✅ إخفاء مؤشر التحميل
        showLoadingIndicator(false);

        // ✅ إظهار إشعار بنجاح تغيير العملة
        if (showNotification) showToast(`💰 العملة تم تحديثها إلى ${newCurrency}`);

    }, 800); // ⏳ محاكاة التأخير لتحسين تجربة المستخدم
}
