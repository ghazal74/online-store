document.addEventListener("DOMContentLoaded", function () {
        const langIcon = document.getElementById("language-icon");
    const languageSwitcherAr = document.getElementById("switch-to-ar");
    const languageSwitcherEn = document.getElementById("switch-to-en");
    const languageText = document.getElementById("language-text");
const visionTitle = document.getElementById("vision-title");
    const visionText = document.getElementById("vision-text");
    const missionTitle = document.getElementById("mission-title");
    const missionText = document.getElementById("mission-text");
    if (!visionTitle || !visionText || !missionTitle || !missionText) {
        console.error("بعض العناصر غير موجودة في الـ HTML!");
        return;
    }
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
            callSupport: "Call free support :",
            welcome: "Welcome to our store",
            description: "Almotabaed Trading is a company specializing in wholesale trade. It was created in the United arab emirates in 2024. Almotabaedtrading is a company specializing in the wholesale of clothing, cosmetics and perfumes. We almotabaedtrading our primary mission is to provide all the needs of merchants all over the world, not just the Emirates. Almotabaedtrading provides the best price for all merchants, beauty center owners, clothing and perfume shop owners.",
            visionTitle: "OUR VISION",
            visionText: "Within two years, we envision becoming the industry leader in providing exceptional value through our wide range of clothing and fragrances, satisfying the needs of both customers and businesses.",
            missionTitle: "OUR MISSION",
            missionText: "Our mission is to empower our customers and partners by offering a wide selection of stylish, affordable apparel and fragrances. We stand behind our products with a strong policy, ensuring that our customers always have a positive shopping experience.",
            specialization: "We specialize in fashion wears and perfumes",
            discover: "Discover Our Products",
            contactInfo: "Contact Information",
            phone: "Phone:",
            email: "Email:",
            importantLinks: "Important Links",
            privacyPolicy: "Privacy Policy",
            terms: "Terms of Use",
            followUs: "Follow Us",
            copyright: "All Rights Reserved | KGM Marketing",
            sorting : "Sorting",
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
            welcome: "مرحبًا بكم في متجرنا",
            description: "شركة المتباعد للتجارة هي شركة متخصصة في تجارة الجملة، تأسست في الإمارات العربية المتحدة عام 2024. شركة المتبضع للتجارة هي شركة متخصصة في تجارة الجملة للملابس ومستحضرات التجميل والعطور. مهمتنا الأساسية هي توفير جميع احتياجات التجار في جميع أنحاء العالم وليس فقط الإمارات. توفر شركة المتبضع للتجارة أفضل الأسعار لجميع التجار وأصحاب مراكز التجميل وأصحاب محلات الملابس والعطور.",
            visionTitle: "رؤيتنا",
            visionText: "في غضون عامين، نتطلع إلى أن نصبح الشركة الرائدة في الصناعة في تقديم قيمة استثنائية من خلال مجموعتنا الواسعة من الملابس والعطور، وتلبية احتياجات كل من العملاء والشركات.",
            missionTitle: "مهمتنا",
            missionText: "مهمتنا هي تمكين عملائنا وشركائنا من خلال تقديم مجموعة واسعة من الملابس والعطور الأنيقة وبأسعار معقولة. نحن ندعم منتجاتنا بسياسة قوية، مما يضمن لعملائنا دائمًا تجربة تسوق إيجابية.",
            specialization: "نحن متخصصون في الأزياء والعطور",
            discover: "اكتشف منتجاتنا",
            contactInfo: "معلومات الاتصال",
            phone: "الهاتف:",
            email: "البريد الإلكتروني:",
            importantLinks: "روابط مهمة",
            privacyPolicy: "سياسة الخصوصية",
            terms: "شروط الاستخدام",
            followUs: "تابعنا",
            copyright: "جميع الحقوق محفوظة | تسويق KGM",
            
        }
    };

    function switchLanguage(lang) {
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
        document.querySelector(".about-content .sub-header").textContent = translations[lang].welcome;
        document.querySelector(".about-content p").textContent = translations[lang].description;
        document.querySelector(".specialization h2:first-child").textContent = translations[lang].specialization;
        document.querySelector(".specialization h2:last-child a").textContent = translations[lang].discover;
        document.querySelector(".footer .column h3:first-child").textContent = translations[lang].contactInfo;
              document.querySelector(".footer .column:nth-child(2) h3").textContent = translations[lang].importantLinks;
        document.querySelector(".footer .column:nth-child(2) a:last-child").textContent = translations[lang].terms;
        document.querySelector(".footer .column:nth-child(3) h3").textContent = translations[lang].followUs;
        console.log("Switching language to:", lang);
    console.log("New vision text:", translations[lang].visionText);
    console.log("New mission text:", translations[lang].missionText);

     visionTitle.textContent = translations[lang].visionTitle;
        visionText.textContent = translations[lang].visionText;
        missionTitle.textContent = translations[lang].missionTitle;
        missionText.textContent = translations[lang].missionText;
 document.querySelector(".footer .column p:first-child").innerHTML = '📞 ' + translations[lang].phone + ' <a href="tel:0528686321">0528686321</a>';
        document.querySelector(".footer .column p:last-child").innerHTML = '✉️ ' + translations[lang].email + ' <a href="mailto:Info@almotabaed.com">Info@almotabaed.com</a>';
         document.querySelector(".copyright").innerHTML = '&copy; 2025 ' + translations[lang].copyright;
        document.querySelector(".footer .column:nth-child(2) a:first-child").textContent = translations[lang].privacyPolicy;

        languageText.textContent = lang === "ar" ? "العربية" : "English";
    }

    languageSwitcherAr.addEventListener("click", function () {
        switchLanguage("ar");
    });

    languageSwitcherEn.addEventListener("click", function () {
        switchLanguage("en");
    });
});
