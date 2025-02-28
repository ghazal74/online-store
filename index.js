document.addEventListener("DOMContentLoaded", function () {
    i18next.init({
        lng: "en", // اللغة الافتراضية
        resources: {
            en: {
                translation: {
                    "free_returns": "Free Returns: For First 40 Days",
                    "my_account": "My Account",
                    "sign_in": "Sign In",
                    "logout": "Logout",
                    "choose_option": "Choose an option",
                    "all_categories": "Men Perfumes",
                    "men": "Men",
                    "women": "Women",
                    "perfumes": "Woman Perfumes",
                    "search_here": "Search here...",
                    "home": "Home",
                    "about_us": "About Us",
                    "log_in": "Log In",
                    "contact_us": "Contact Us",
                    "call_support": "Call free support:",
                    "our_collection": "OUR Collection",
                    "men_perfumes": "Men Perfumes",
                    "women_perfumes": "Women Perfumes",
                    "trending_collection": "Trending Collection",
                    "explore_products": "Explore our latest products in the world of clothes",
                    "mens_wear": "MEN'S WEAR",
                    "winter_clothes": "Winter Clothes",
                    "summer_clothes": "SUMMER Clothes",
                    "currency_selected": "USD",
                    "currency_sar": "SAR",
                    "currency_aed": "AED",
                    "currency_ued": "UED",
                    "our_collection": "OUR Collection",
                    "men": "Men",
                    "women": "Women",
                    "men_perfumes": "Men Perfumes",
                    "women_perfumes": "Women Perfumes",
                    "mens_perfume": "Men's Perfume",
                    "womens_perfume": "Women's Perfume",
                    "womens_wear": "Women's Wear",
                    "winter_clothes": "Winter Clothes",
                    "summer_clothes": "Summer Clothes",
                    "similar_items": "Similar Items",
                    "contact_information": "Contact Information",
                    "phone": "Phone:",
                    "email": "Email:",
                    "important_links": "Important Links",
                    "privacy_policy": "Privacy Policy",
                    "terms_of_use": "Terms of Use",
                    "follow_us": "Follow Us",
                    "all_rights_reserved": "All Rights Reserved",
                    "kgm_marketing": "KGM Marketing"
                },
            },
            ar: {
                translation: {
                    "free_returns": "إرجاع مجاني: خلال أول 40 يومًا",
                    "my_account": "حسابي",
                    "sign_in": "تسجيل الدخول",
                    "logout": "تسجيل الخروج",
                    "choose_option": "اختر خيارًا",
                    "all_categories": "جميع الفئات",
                    "men": "رجال",
                    "women": "نساء",
                    "perfumes": "عطور",
                    "search_here": "ابحث هنا...",
                    "home": "الرئيسية",
                    "about_us": "من نحن",
                    "log_in": "تسجيل الدخول",
                    "contact_us": "اتصل بنا",
                    "call_support": "اتصل بالدعم المجاني:",
                    "our_collection": "تشكيلتنا",
                    "men_perfumes": "عطور الرجال",
                    "women_perfumes": "عطور النساء",
                    "trending_collection": "أحدث التشكيلات",
                    "explore_products": "استكشف أحدث منتجاتنا في عالم الملابس",
                    "mens_wear": "ملابس الرجال",
                    "winter_clothes": "ملابس الشتاء",
                    "summer_clothes": "ملابس الصيف",
                    "currency_selected": "دولار أمريكي",
                    "currency_sar": "ريال سعودي",
                    "currency_aed": "درهم إماراتي",
                    "currency_ued": "درهم موحد",
                     "our_collection": "مجموعتنا",
                    "men": "رجال",
                    "women": "نساء",
                    "men_perfumes": "عطور الرجال",
                    "women_perfumes": "عطور النساء",
                    "mens_perfume": "عطر الرجال",
                    "womens_perfume": "عطر النساء",
                    "womens_wear": "ملابس النساء",
                    "winter_clothes": "ملابس الشتاء",
                    "summer_clothes": "ملابس الصيف",
                    "similar_items": "عناصر مشابهة",
                    "contact_information": "معلومات الاتصال",
                    "phone": "الهاتف:",
                    "email": "البريد الإلكتروني:",
                    "important_links": "روابط هامة",
                    "privacy_policy": "سياسة الخصوصية",
                    "terms_of_use": "شروط الاستخدام",
                    "follow_us": "تابعنا",
                    "all_rights_reserved": "جميع الحقوق محفوظة",
                    "kgm_marketing": "تسويق KGM"
                },
            },
        },
    }, function (err, t) {
        updateContent();
    });

    function updateContent() {
        document.querySelector(".container5").textContent = i18next.t("free_returns");
        document.querySelector(".top_links a").childNodes[0].nodeValue = i18next.t("my_account") + " ";
        document.querySelector(".dropdown_links li a[href='login.html']").textContent = i18next.t("sign_in");
        document.querySelector(".dropdown_links li a[onclick='logout()']").textContent = i18next.t("logout");
        document.getElementById("selected-currency").innerHTML = i18next.t("currency_selected") + ' <i class="ion-chevron-down"></i>';
        document.getElementById("currency-sar").textContent = i18next.t("currency_sar");
        document.getElementById("currency-aed").textContent = i18next.t("currency_aed");
        document.getElementById("currency-ued").textContent = i18next.t("currency_ued");
        document.querySelector(".select-container select option:first-child").textContent = i18next.t("choose_option");
        document.querySelector(".select-container select option[value='1']").textContent = i18next.t("all_categories");
        document.querySelector(".select-container select option[value='2']").textContent = i18next.t("men");
        document.querySelector(".select-container select option[value='3']").textContent = i18next.t("women");
        document.querySelector(".select-container select option[value='4']").textContent = i18next.t("perfumes");
        document.querySelector(".search-container input").placeholder = i18next.t("search_here");
        document.querySelector("ul li a[href='index.html']").textContent = i18next.t("home");
        document.querySelector("ul li a[href='about.html']").textContent = i18next.t("about_us");
        document.querySelector("ul li a[href='login.html']").textContent = i18next.t("log_in");
        document.getElementById("login-link").textContent = i18next.t("log_in");
        document.querySelector("ul li a[href='contact.html']").textContent = i18next.t("contact_us");
        document.querySelector(".support p").innerHTML = `${i18next.t("call_support")} <a href="tel:0528686321">0528686321</a>`;
        document.querySelector("#collection h1").textContent = `" ${i18next.t("our_collection")} "`;
        document.querySelector("#collection a[href='#mperfums']").textContent = i18next.t("men_perfumes");
        document.querySelector("#collection a[href='#wperfums']").textContent = i18next.t("women_perfumes");
        document.querySelector(".text-content h2").textContent = i18next.t("trending_collection");
        document.querySelector(".text-content p").textContent = i18next.t("explore_products");
        document.querySelector("#mens-wear").textContent = i18next.t("mens_wear");
        document.querySelector(".winter-clothes-text").textContent = i18next.t("winter_clothes");
        document.querySelector(".summer-clothes-text").textContent = i18next.t("summer_clothes");
        document.getElementById("collection-title").textContent = i18next.t("our_collection");
        document.getElementById("men-link").textContent = i18next.t("men");
        document.getElementById("women-link").textContent = i18next.t("women");
        document.getElementById("men-perfumes-link").textContent = i18next.t("men_perfumes");
        document.getElementById("women-perfumes-link").textContent = i18next.t("women_perfumes");
        document.getElementById("mens-perfume").textContent = i18next.t("mens_perfume");
        document.getElementById("wperfums-text").textContent = i18next.t("womens_perfume");
        document.getElementById("woman-perfume").textContent = i18next.t("womens_perfume");
        document.getElementById("women-wear-text").textContent = i18next.t("womens_wear");
        document.getElementById("winter-clothes").textContent = i18next.t("winter_clothes");
        document.getElementById("summer-clothes").textContent = i18next.t("summer_clothes");
        document.getElementById("similar-items").textContent = i18next.t("similar_items");
        document.getElementById("contact-title").textContent = i18next.t("contact_information");
        document.getElementById("phone-text").textContent = i18next.t("phone");
        document.getElementById("email-text").textContent = i18next.t("email");
        document.getElementById("important-links").textContent = i18next.t("important_links");
        document.getElementById("privacy-policy").textContent = i18next.t("privacy_policy");
        document.getElementById("terms-of-use").textContent = i18next.t("terms_of_use");
        document.getElementById("follow-us").textContent = i18next.t("follow_us");
        document.getElementById("all-rights").textContent = i18next.t("all_rights_reserved");
        document.getElementById("kgm-marketing").textContent = i18next.t("kgm_marketing");


        // تحديث الأيقونة عند تغيير اللغة
        const languageIcon = document.getElementById("language-icon");
        const languageText = document.getElementById("language-text");

        if (i18next.language === "ar") {
            languageIcon.src = "img/language2.png"; // أيقونة علم السعودية
            languageText.textContent = "العربية";
        } else {
            languageIcon.src = "img/language.png"; // أيقونة علم بريطانيا
            languageText.textContent = "English";
        }
    }

    document.getElementById("switch-to-ar").addEventListener("click", function () {
        i18next.changeLanguage("ar", updateContent);
    });

    document.getElementById("switch-to-en").addEventListener("click", function () {
        i18next.changeLanguage("en", updateContent);
    });
});
