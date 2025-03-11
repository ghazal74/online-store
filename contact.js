document.addEventListener("DOMContentLoaded", function () {
    const switchToArabic = document.getElementById("switch-to-ar");
    const switchToEnglish = document.getElementById("switch-to-en");
    const selectedLanguage = document.getElementById("selected-language");


    // تعريف الترجمة باللغتين
    const translations = {
        en: {
            freeReturns: "Free Returns: For First 40 Days",
            myAccount: "My Account",
            home: "Home",
            aboutUs: "About Us",
            login: "Log In",
            contactUs: "Contact Us",
            callSupport: "Call free support:",
            contactTitle: "Contact Us",
            tellUs: "Tell Us",
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
            reachUs: "How can you reach us?",
            contactDescription: "We are here to assist you and answer all your inquiries. Whether you need technical support, have a question about our products, or have suggestions to share, do not hesitate to contact us.",
            contactEmail: "You can send your inquiries via email, and we will make sure to respond as soon as possible.",
            contactPhone: "Our support team is available to answer your calls during official working hours.",
            contactFormText: "You can fill out the form below, and we will get back to you soon.",
            feedback: "Your feedback matters to us!",
            feedbackDescription: "We always strive to improve our services, and we appreciate your feedback and suggestions. Thank you for your trust in us!",
            address: "Address:"
        },
        ar: {
            freeReturns: "إرجاع مجاني: لأول 40 يومًا",
            myAccount: "حسابي",
            home: "الرئيسية",
            aboutUs: "معلومات عنا",
            login: "تسجيل الدخول",
            contactUs: "اتصل بنا",
            callSupport: "الدعم الفني المجاني:",
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
            selectedLanguage: "العربية",
            reachUs: "كيف يمكنك التواصل معنا؟",
            contactDescription: "نحن هنا لمساعدتك والإجابة على جميع استفساراتك. سواء كنت بحاجة إلى دعم فني أو لديك سؤال حول منتجاتنا أو لديك اقتراحات لمشاركتها، فلا تتردد في الاتصال بنا.",
            contactEmail: "يمكنك إرسال استفساراتك عبر البريد الإلكتروني، وسنحرص على الرد في أقرب وقت ممكن.",
            contactPhone: "فريق الدعم لدينا متاح للرد على مكالماتك خلال ساعات العمل الرسمية.",
            contactFormText: "يمكنك ملء النموذج أدناه وسنعاود الاتصال بك قريبًا.",
            feedback: "ملاحظاتك تهمنا!",
            feedbackDescription: "نحن نسعى دائمًا إلى تحسين خدماتنا، ونقدر ملاحظاتك واقتراحاتك. نشكرك على ثقتك بنا",
            address: "العنوان:"
        }
    };

    // دالة تغيير اللغة
    function changeLanguage(lang) {
        document.getElementById("language-text").textContent = translations[lang].selectedLanguage;
        document.getElementById("free-returns").textContent = translations[lang].freeReturns;
        document.getElementById("my-account").textContent = translations[lang].myAccount;
        document.getElementById("nav-home").textContent = translations[lang].home;
        document.getElementById("nav-about").textContent = translations[lang].aboutUs;
        document.getElementById("nav-login").textContent = translations[lang].login;
        document.getElementById("nav-contact").textContent = translations[lang].contactUs;
        document.getElementById("call-support").innerHTML = `${translations[lang].callSupport} <a href="tel:0528686321">0528686321</a>`;
        document.getElementById("contact-title").textContent = translations[lang].contactTitle;
        document.getElementById("tell-us").textContent = translations[lang].tellUs;
        document.getElementById("name-label").textContent = translations[lang].yourName;
        document.getElementById("email-label").textContent = translations[lang].yourEmail;
        document.getElementById("subject-label").textContent = translations[lang].subject;
        document.getElementById("message-label").textContent = translations[lang].yourMessage;
        document.getElementById("send-button").textContent = translations[lang].send;
        document.getElementById("contact-info").textContent = translations[lang].contactInfo;
        document.getElementById("phone-text").textContent = translations[lang].phone;
        document.getElementById("email-text").textContent = translations[lang].email;
        document.getElementById("important-links").textContent = translations[lang].importantLinks;
        document.getElementById("privacy-policy").textContent = translations[lang].privacyPolicy;
        document.getElementById("terms-of-use").textContent = translations[lang].termsOfUse;
        document.getElementById("follow-us").textContent = translations[lang].followUs;
        document.getElementById("copyright").textContent = translations[lang].copyright;

        document.getElementById("reach-us").textContent = translations[lang].reachUs;
        document.getElementById("contact-description").textContent = translations[lang].contactDescription;
        document.getElementById("contact-email").textContent = translations[lang].contactEmail;
        document.getElementById("contact-phone").textContent = translations[lang].contactPhone;
        document.getElementById("contact-form-text").textContent = translations[lang].contactFormText;
        document.getElementById("feedback").textContent = translations[lang].feedback;
        document.getElementById("feedback-description").textContent = translations[lang].feedbackDescription;
        document.getElementById("address").textContent = translations[lang].address;

        selectedLanguage.innerHTML = lang === "ar"
            ? '<img src="img/language2.png" alt=""> العربية'
            : '<img src="img/language.png" alt=""> English';

        // حفظ اللغة في LocalStorage
        localStorage.setItem("selectedLanguage", lang);
    }

    // استرجاع اللغة المحفوظة عند تحميل الصفحة
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    changeLanguage(savedLanguage);
    // تغيير اللغة عند الضغط
    switchToArabic.addEventListener("click", function (e) {
        e.preventDefault();
        changeLanguage("ar");
    });

    switchToEnglish.addEventListener("click", function (e) {
        e.preventDefault();
        changeLanguage("en");
    });
});
