document.addEventListener("DOMContentLoaded", function () {
    const langText = document.getElementById("language-text");
    const langIcon = document.getElementById("language-icon");
    const switchToAr = document.getElementById("switch-to-ar");
    const switchToEn = document.getElementById("switch-to-en");

    // ✅ تعريف النصوص لكل لغة
    const translations = {
        en: {
            title: "Login",
            registerTitle: "Register",
            username: "Username or Email",
            password: "Password",
            login: "Login",
            register: "Register",
            forgotPassword: "Forgot your password?",
            rememberMe: "Remember me",
            email: "Email Address",
            freeReturns: "Free Returns: For First 40 Days",
            signIn: "Sign In",
            arabic: "العربية",
            english: "English",
            languageIcon: "img/language.png",
            currencyUSD: "USD",
            currencySAR: "SAR",
            currencyAED: "AED",
            language:"English",
            // ✅ نصوص الفوتر
            contactInfo: "Contact Information",
            phone: "Phone:",
            email: "Email:",
            importantLinks: "Important Links",
            privacyPolicy: "Privacy Policy",
            termsOfUse: "Terms of Use",
            followUs: "Follow Us",
            facebook: "Facebook",
            twitter: "Twitter",
            instagram: "Instagram",
            copyright: "All Rights Reserved | KGM Marketing"
        },
        ar: {
            title: "تسجيل الدخول",
            registerTitle: "التسجيل",
            username: "اسم المستخدم أو البريد الإلكتروني",
            password: "كلمة المرور",
            login: "تسجيل الدخول",
            register: "إنشاء حساب",
            forgotPassword: "نسيت كلمة المرور؟",
            rememberMe: "تذكرني",
            email: "البريد الإلكتروني",
            freeReturns: "إرجاع مجاني: لأول 40 يومًا",
            signIn: "تسجيل الدخول",
            arabic: "العربية",
            english: "English",
            languageIcon: "img/language2.png",
            currencyUSD: "دولار أمريكي",
            currencySAR: "ريال سعودي",
            currencyAED: "درهم إماراتي",
            language:"العربية",
            
            // ✅ نصوص الفوتر
            contactInfo: "معلومات الاتصال",
            phone: "الهاتف:",
            email: "البريد الإلكتروني:",
            importantLinks: "روابط هامة",
            privacyPolicy: "سياسة الخصوصية",
            termsOfUse: "شروط الاستخدام",
            followUs: "تابعنا على",
            facebook: "فيسبوك",
            twitter: "تويتر",
            instagram: "إنستجرام",
            copyright: "جميع الحقوق محفوظة | KGM Marketing"
        }
    };

    // ✅ تحميل اللغة المحفوظة أو الافتراضية (الإنجليزية)
    const savedLanguage = localStorage.getItem("language") || "en";
    applyLanguage(savedLanguage);

    // ✅ عند تغيير اللغة إلى العربية
    switchToAr.addEventListener("click", function (e) {
        e.preventDefault();
        applyLanguage("ar");
    });

    // ✅ عند تغيير اللغة إلى الإنجليزية
    switchToEn.addEventListener("click", function (e) {
        e.preventDefault();
        applyLanguage("en");
    });

    // ✅ دالة لتطبيق الترجمة على الصفحة
    function applyLanguage(language) {
        localStorage.setItem("language", language); // حفظ اللغة المختارة
        langText.textContent = translations[language].language; // تحديث نص اللغة في القائمة
        langIcon.src = translations[language].languageIcon; // تحديث أيقونة اللغة

        // ✅ تحديث جميع النصوص في الصفحة
        document.querySelector("h2").textContent = translations[language].title;
        document.querySelector('.account_form.register h2').textContent = translations[language].registerTitle;
        document.querySelector('label[for="username"]').textContent = translations[language].username;
        document.querySelector('label[for="password"]').textContent = translations[language].password;
        document.querySelector('label[for="reg_password"]').textContent = translations[language].password;
        document.querySelector('.login_submit button').textContent = translations[language].login;
        document.querySelector('.account_form.register .login_submit button').textContent = translations[language].register;
        document.querySelector('.login_submit a').textContent = translations[language].forgotPassword;
        document.querySelector('label[for="email"]').textContent = translations[language].email;

        // ✅ تحديث نصوص قسم "hash"
        document.querySelector(".container5").textContent = translations[language].freeReturns;
        document.querySelector(".top_links a").childNodes[0].nodeValue = translations[language].signIn + " ";
        document.querySelector(".dropdown_links li a").textContent = translations[language].signIn;

        // ✅ تحديث العملات
        document.querySelector(".currency a").childNodes[0].nodeValue = translations[language].currencyUSD + " ";
        document.querySelector(".dropdown_currency li:nth-child(1) a").textContent = translations[language].currencySAR;
        document.querySelector(".dropdown_currency li:nth-child(2) a").textContent = translations[language].currencyAED;
        document.querySelector(".dropdown_currency li:nth-child(3) a").textContent = translations[language].currencyUSD;

        // ✅ تحديث نصوص الفوتر
        document.querySelector(".footer .column h3").textContent = translations[language].contactInfo;
        document.querySelector(".footer .column p:nth-of-type(1)").childNodes[0].nodeValue = translations[language].phone + " ";
        document.querySelector(".footer .column p:nth-of-type(2)").childNodes[0].nodeValue = translations[language].email + " ";
        document.querySelector(".footer .column:nth-of-type(2) h3").textContent = translations[language].importantLinks;
        document.querySelector(".footer .column:nth-of-type(2) a:nth-of-type(1)").textContent = translations[language].privacyPolicy;
        document.querySelector(".footer .column:nth-of-type(2) a:nth-of-type(2)").textContent = translations[language].termsOfUse;
        document.querySelector(".footer .column.social h3").textContent = translations[language].followUs;
        document.querySelector(".footer .column.social a:nth-of-type(1)").textContent = translations[language].facebook;
        document.querySelector(".footer .column.social a:nth-of-type(2)").textContent = translations[language].twitter;
        document.querySelector(".footer .column.social a:nth-of-type(3)").textContent = translations[language].instagram;
        document.querySelector(".footer .copyright").textContent = "© 2025 " + translations[language].copyright;
    }
});
