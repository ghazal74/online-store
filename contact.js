document.addEventListener("DOMContentLoaded", function () {
    const switchToArabic = document.getElementById("switch-to-ar");
    const switchToEnglish = document.getElementById("switch-to-en");
    const languageText = document.getElementById("language-text");

    // النصوص باللغتين
    const translations = {
        en: {
            freeReturns: "Free Returns: For First 40 Days",
            myAccount: "My Account",
            home: "Home",
            aboutUs: "About Us",
            login: "Log In",
            contactUs: "Contact Us",
            callSupport: "Call free support",
            contactTitle: "Contact Us",
            tellUs: "Tell us",
            yourName: "Your Name (required)",
            yourEmail: "Your Email (required)",
            subject: "Subject",
            yourMessage: "Your Message",
            send: "Send",
            contactInfo: "Contact Information",
            phone: "📞 Phone:",
            email: "✉️ Email:",
            importantLinks: "Important Links",
            privacyPolicy: "Privacy Policy",
            termsOfUse: "Terms of Use",
            followUs: "Follow Us",
            facebook: "Facebook",
            twitter: "Twitter",
            instagram: "Instagram",
            copyright: "© 2025 All Rights Reserved | KGM Marketing",
            selectedLanguage: "English",
            home: "Home",
            aboutUs: "About Us",
            login: "Log In",
            contactUs: "Contact Us",
        },
        ar: {
            freeReturns: "إرجاع مجاني: لأول 40 يومًا",
            myAccount: "حسابي",
            home: "الرئيسية",
            aboutUs: "معلومات عنا",
            login: "تسجيل الدخول",
            contactUs: "اتصل بنا",
            callSupport: "الدعم الفني المجاني",
            contactTitle: "اتصل بنا",
            tellUs: "أخبرنا",
            yourName: "اسمك (مطلوب)",
            yourEmail: "بريدك الإلكتروني (مطلوب)",
            subject: "الموضوع",
            yourMessage: "رسالتك",
            send: "إرسال",
            contactInfo: "معلومات الاتصال",
            phone: "📞 الهاتف:",
            email: "✉️ البريد الإلكتروني:",
            importantLinks: "روابط مهمة",
            privacyPolicy: "سياسة الخصوصية",
            termsOfUse: "شروط الاستخدام",
            followUs: "تابعنا",
            facebook: "فيسبوك",
            twitter: "تويتر",
            instagram: "إنستغرام",
            copyright: "© 2025 جميع الحقوق محفوظة | KGM Marketing",
            home: "الرئيسية",
            aboutUs: "معلومات عنا",
            login: "تسجيل الدخول",
            contactUs: "اتصل بنا",
            selectedLanguage: "العربية",
            home: "الرئيسية",
            aboutUs: "معلومات عنا",
            login: "تسجيل الدخول",
            contactUs: "اتصل بنا",
        }
    };

    function switchLanguage(lang) {
        languageText.textContent = lang === "ar" ? "العربية" : "English";

        document.querySelector(".container5").textContent = translations[lang].freeReturns;
        document.querySelector(".top_links a").textContent = translations[lang].myAccount;
        document.querySelector("li.language a span").textContent = translations[lang].home;
        document.querySelector(".support p").innerHTML = translations[lang].callSupport + " : <a href='tel:0528686321'>0528686321</a>";
        document.querySelector(".contact_message.content h3").textContent = translations[lang].contactTitle;
        document.querySelector(".contact_message.form h3").textContent = translations[lang].tellUs;
        document.querySelector("label[for='name']").textContent = translations[lang].yourName;
        document.querySelector("label[for='email']").textContent = translations[lang].yourEmail;
        document.querySelector("label[for='subject']").textContent = translations[lang].subject;
        document.querySelector("label[for='message']").textContent = translations[lang].yourMessage;
        document.querySelector("button[type='submit']").textContent = translations[lang].send;
        document.querySelector(".footer h3:nth-of-type(1)").textContent = translations[lang].contactInfo;
        document.querySelector(".footer h3:nth-of-type(2)").textContent = translations[lang].importantLinks;
        document.querySelector(".footer h3:nth-of-type(3)").textContent = translations[lang].followUs;
        document.querySelector(".copyright").textContent = translations[lang].copyright;
         languageText.textContent = translations[lang].selectedLanguage; // تغيير النص العلوي
        document.getElementById("nav-home").textContent = translations[lang].home;
        document.getElementById("nav-about").textContent = translations[lang].aboutUs;
        document.getElementById("nav-login").textContent = translations[lang].login;
        document.getElementById("nav-contact").textContent = translations[lang].contactUs;
    }

    // تغيير اللغة عند الضغط
    switchToArabic.addEventListener("click", function () {
        switchLanguage("ar");
    });

    switchToEnglish.addEventListener("click", function () {
        switchLanguage("en");
    });
});
