document.addEventListener("DOMContentLoaded", function () {
    const allProducts = JSON.parse(localStorage.getItem("allProducts")) || [];
    const productList = document.getElementById("product-list");

    const categoryFilter = document.getElementById("category");
    const minPriceFilter = document.getElementById("min-price");
    const maxPriceFilter = document.getElementById("max-price");
    const sortFilter = document.getElementById("sort");
    const applyFiltersBtn = document.getElementById("apply-filters");

    function displayProducts(products) {
        productList.innerHTML = "";
        if (products.length === 0) {
            productList.innerHTML = "<p>No products found.</p>";
            return;
        }

        products.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("item");
            div.innerHTML = `
                <img src="${product.image}" alt="Product">
                <p>${product.price}</p>
            `;

            div.addEventListener("click", function () {
                localStorage.setItem("product", JSON.stringify(product));
                window.location.href = "product.html";
            });

            productList.appendChild(div);
        });
    }

    function filterAndSortProducts() {
        let filteredProducts = [...allProducts];

        // ✅ تصفية حسب الفئة
        const selectedCategory = categoryFilter.value;
        if (selectedCategory !== "all") {
            filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
        }

        // ✅ تصفية حسب السعر
        const minPrice = parseFloat(minPriceFilter.value) || 0;
        const maxPrice = parseFloat(maxPriceFilter.value) || Infinity;
        filteredProducts = filteredProducts.filter(product => {
            const price = parseFloat(product.price.replace("AED", "").trim());
            return price >= minPrice && price <= maxPrice;
        });

        // ✅ ترتيب حسب السعر
        if (sortFilter.value === "asc") {
            filteredProducts.sort((a, b) => parseFloat(a.price.replace("AED", "").trim()) - parseFloat(b.price.replace("AED", "").trim()));
        } else if (sortFilter.value === "desc") {
            filteredProducts.sort((a, b) => parseFloat(b.price.replace("AED", "").trim()) - parseFloat(a.price.replace("AED", "").trim()));
        }

        displayProducts(filteredProducts);
    }

    applyFiltersBtn.addEventListener("click", filterAndSortProducts);

    // ✅ عرض جميع المنتجات عند تحميل الصفحة لأول مرة
    displayProducts(allProducts);
});


document.addEventListener("DOMContentLoaded", function () {
    const allProducts = JSON.parse(localStorage.getItem("allProducts")) || [];
    const productList = document.getElementById("product-list");

    const categoryFilter = document.getElementById("category");
    const minPriceFilter = document.getElementById("min-price");
    const maxPriceFilter = document.getElementById("max-price");
    const sortFilter = document.getElementById("sort");
    const applyFiltersBtn = document.getElementById("apply-filters");

    const selectedLanguage = document.getElementById("selected-language");
    const switchToAr = document.getElementById("switch-to-ar");
    const switchToEn = document.getElementById("switch-to-en");

    // ✅ ترجمة النصوص
    const translations = {
        en: {
            freeReturns: "Free Returns: For First 40 Days",
            myAccount: "My Account",
            signIn: "Sign In",
            logout: "Logout",
            home: "Home",
            aboutUs: "About Us",
            login: "Log In",
            contactUs: "Contact Us",
            sorting: "Sorting",
            callSupport: "Call free support :",
            pageTitle: "Sort and Filter Products",
            selectCategory: "Select Category:",
            selectPrice: "Select Price Range:",
            sortByPrice: "Sort by Price:",
            minPrice: "Min Price",
            maxPrice: "Max Price",
            applyFilters: "Apply Filters",
            contactInfo: "Contact Information",
            phoneText: "Phone:",
            emailText: "Email:",
            importantLinks: "Important Links",
            privacyPolicy: "Privacy Policy",
            termsOfUse: "Terms of Use",
            followUs: "Follow Us",
            allRights: "All Rights Reserved",
            kgmMarketing: "KGM Marketing",
            categories: {
                all: "All Categories",
                winterMen: "Men's Winter Clothes",
                summerMen: "Men's Summer Clothes",
                perfumeMen: "Men's Perfume",
                perfumeWoman: "Women's Perfume",
                cosemetics: "Cosmetics",
            
            }
        },
        ar: {
            freeReturns: "إرجاع مجاني: لأول 40 يومًا",
            myAccount: "حسابي",
            signIn: "تسجيل الدخول",
            logout: "تسجيل الخروج",
            home: "الرئيسية",
            aboutUs: "من نحن",
            login: "تسجيل الدخول",
            contactUs: "اتصل بنا",
            sorting :"فرز",
            callSupport: "اتصل بالدعم المجاني :",
            pageTitle: "ترتيب وتصفية المنتجات",
            selectCategory: "اختر الفئة :",
            selectPrice: "اختر نطاق السعر :",
            sortByPrice: "ترتيب حسب السعر :",
            minPrice: "أقل سعر",
            maxPrice: "أعلى سعر",
            applyFilters: "تطبيق الفلاتر",
            contactInfo: "معلومات الاتصال",
            phoneText: "الهاتف:",
            emailText: "البريد الإلكتروني:",
            importantLinks: "روابط هامة",
            privacyPolicy: "سياسة الخصوصية",
            termsOfUse: "شروط الاستخدام",
            followUs: "تابعنا",
            allRights: "جميع الحقوق محفوظة",
            kgmMarketing: "تسويق KGM",
            categories: {
                all: "جميع الفئات",
                winterMen: "ملابس رجالية شتوية",
                summerMen: "ملابس رجالية صيفية",
                perfumeMen: "عطور رجالية",
                perfumeWoman: "عطور نسائية",
                cosemetics: "مستحضرات التجميل",            
            }
        }
    };

    function changeLanguage(lang) {
        document.querySelector(".container5").textContent = translations[lang].freeReturns;
        document.querySelector(".top_links a").firstChild.textContent = translations[lang].myAccount;
        document.querySelector(".dropdown_links li:first-child a").textContent = translations[lang].signIn;
        document.querySelector(".dropdown_links li:last-child a").textContent = translations[lang].logout;
        document.querySelector(".container6 ul li:nth-child(1) a").textContent = translations[lang].home;
        document.querySelector(".container6 ul li:nth-child(2) a").textContent = translations[lang].aboutUs;
        document.querySelector(".container6 ul li:nth-child(3) a").textContent = translations[lang].login;
        document.querySelector(".container6 ul li:nth-child(4) a").textContent = translations[lang].contactUs;
        document.querySelector(".container6 ul li:nth-child(5) a").textContent = translations[lang].sorting;
        document.querySelector(".support p").innerHTML = translations[lang].callSupport + ' <a href="tel:0528686321">0528686321</a>';

        document.querySelector("h1").textContent = translations[lang].pageTitle;
        document.querySelector("label[for='category']").textContent = translations[lang].selectCategory;
        document.querySelector("label[for='price']").textContent = translations[lang].selectPrice;
        document.querySelector("label[for='sort']").textContent = translations[lang].sortByPrice;
        minPriceFilter.placeholder = translations[lang].minPrice;
        maxPriceFilter.placeholder = translations[lang].maxPrice;
        applyFiltersBtn.textContent = translations[lang].applyFilters;

        document.getElementById("contact-title").textContent = translations[lang].contactInfo;
        document.getElementById("phone-text").textContent = translations[lang].phoneText;
        document.getElementById("email-text").textContent = translations[lang].emailText;
        document.getElementById("important-links").textContent = translations[lang].importantLinks;
        document.getElementById("privacy-policy").textContent = translations[lang].privacyPolicy;
        document.getElementById("terms-of-use").textContent = translations[lang].termsOfUse;
        document.getElementById("follow-us").textContent = translations[lang].followUs;
        document.getElementById("all-rights").textContent = translations[lang].allRights;
        document.getElementById("kgm-marketing").textContent = translations[lang].kgmMarketing;

        // ✅ تحديث خيارات الفئات
        Object.keys(translations[lang].categories).forEach((key, index) => {
            categoryFilter.options[index].textContent = translations[lang].categories[key];
        });

        // ✅ تحديث زر اللغة
        selectedLanguage.innerHTML = lang === "ar"
            ? '<img src="img/language2.png" alt=""> العربية'
            : '<img src="img/language.png" alt=""> English';

        // ✅ حفظ اللغة في LocalStorage
        localStorage.setItem("selectedLanguage", lang);
    }

    // ✅ استرجاع اللغة المحفوظة عند تحميل الصفحة
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    changeLanguage(savedLanguage);

    // ✅ عند اختيار اللغة العربية
    switchToAr.addEventListener("click", function (e) {
        e.preventDefault();
        changeLanguage("ar");
    });

    // ✅ عند اختيار اللغة الإنجليزية
    switchToEn.addEventListener("click", function (e) {
        e.preventDefault();
        changeLanguage("en");
    });
});


 document.addEventListener("DOMContentLoaded", function () {
    const allProducts = JSON.parse(localStorage.getItem("allProducts")) || [];
    const productList = document.getElementById("product-list");
    const categoryFilter = document.getElementById("category");
    const minPriceFilter = document.getElementById("min-price");
    const maxPriceFilter = document.getElementById("max-price");
    const sortFilter = document.getElementById("sort");
    const applyFiltersBtn = document.getElementById("apply-filters");

    // ✅ تحميل العملة المحفوظة مسبقًا
    let currentCurrency = localStorage.getItem("selectedCurrency") || "AED";

    // ✅ أسعار الصرف
    const exchangeRates = {
        "AED": 1,
        "SAR": 1.02,
        "USD": 0.27
    };

    function displayProducts(products) {
        productList.innerHTML = "";
        if (products.length === 0) {
            productList.innerHTML = "<p>No products found.</p>";
            return;
        }

        products.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("item");

            let originalPrice = parseFloat(product.price.replace("AED", "").trim());
            let convertedPrice = (originalPrice * exchangeRates[currentCurrency]).toFixed(2);

            div.innerHTML = `
                <img src="${product.image}" alt="Product">
                <p class="price" data-original-price="${originalPrice}">${currentCurrency} ${convertedPrice}</p>
            `;

            div.addEventListener("click", function () {
                localStorage.setItem("product", JSON.stringify(product));
                window.location.href = "product.html";
            });

            productList.appendChild(div);
        });
    }

    function filterAndSortProducts() {
        let filteredProducts = [...allProducts];

        const selectedCategory = categoryFilter.value;
        if (selectedCategory !== "all") {
            filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
        }

        const minPrice = parseFloat(minPriceFilter.value) || 0;
        const maxPrice = parseFloat(maxPriceFilter.value) || Infinity;
        filteredProducts = filteredProducts.filter(product => {
            const price = parseFloat(product.price.replace("AED", "").trim());
            return price >= minPrice && price <= maxPrice;
        });

        if (sortFilter.value === "asc") {
            filteredProducts.sort((a, b) => parseFloat(a.price.replace("AED", "").trim()) - parseFloat(b.price.replace("AED", "").trim()));
        } else if (sortFilter.value === "desc") {
            filteredProducts.sort((a, b) => parseFloat(b.price.replace("AED", "").trim()) - parseFloat(a.price.replace("AED", "").trim()));
        }

        displayProducts(filteredProducts);
    }

    applyFiltersBtn.addEventListener("click", filterAndSortProducts);

    // ✅ تحديث الأسعار عند تغيير العملة
    document.querySelectorAll(".dropdown_currency a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            currentCurrency = this.textContent.trim();
            localStorage.setItem("selectedCurrency", currentCurrency);
            displayProducts(allProducts);
        });
    });

    displayProducts(allProducts);
});
