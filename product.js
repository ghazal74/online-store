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
            currency: "USD",
            currency_sar: "SAR",
            currency_aed: "AED",
            currency_ued: "UED",
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
            currency: "دولار أمريكي",
            currency_sar: "ريال سعودي",
            currency_aed: "درهم إماراتي",
            currency_ued: "دينار إماراتي",
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
        document.getElementById("selected-currency").textContent = translations[lang].currency;
        document.getElementById("currency-sar").textContent = translations[lang].currency_sar;
        document.getElementById("currency-aed").textContent = translations[lang].currency_aed;
        document.getElementById("currency-ued").textContent = translations[lang].currency_ued;
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

    if (!product || !product.price) {
        console.error("❌ لا يوجد بيانات منتج في LocalStorage");
        return;
    }

    document.getElementById("product-image").src = product.image;
    document.getElementById("product-title").textContent = product.name;
    document.getElementById("product-price").textContent = `${product.price} USD`;

    console.log("📌 تم تحميل المنتج:", product);

    document.getElementById("add-to-cart").addEventListener("click", function () {
        addToCart(product);
    });
});

