document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("switch-to-ar").addEventListener("click", function (event) {
        event.preventDefault();
        switchToArabic();
    });

    document.getElementById("switch-to-en").addEventListener("click", function (event) {
        event.preventDefault();
        switchToEnglish();
    });
});

function switchToArabic() {
     let feedbackText = document.getElementById("feedback-text");
    let emailInfo = document.getElementById("email-info");
    let phoneInfo = document.getElementById("phone-info");
    let formInfo = document.getElementById("form-info");

    feedbackText.textContent = "نحن نسعى دائمًا لتحسين خدماتنا ونقدّر ملاحظاتك واقتراحاتك. شكرًا لثقتك بنا";
    emailInfo.innerHTML = " <strong> البريد الإلكتروني : </strong> يمكنك إرسال استفساراتك عبر البريد الإلكتروني، وسنحرص على الرد في أقرب وقت ممكن.";
    phoneInfo.innerHTML = " <strong> الهاتف : </strong> فريق الدعم لدينا متاح للرد على مكالماتك خلال ساعات العمل الرسمية.";
    formInfo.innerHTML = " <strong> نموذج الاتصال : </strong> يمكنك ملء النموذج أدناه وسنعاود الاتصال بك قريبًا.";

    // تغيير الاتجاه للعربية
    feedbackText.style.direction = "rtl";
    feedbackText.style.textAlign = "right";
    emailInfo.style.direction = "rtl";
    emailInfo.style.textAlign = "right";
    phoneInfo.style.direction = "rtl";
    phoneInfo.style.textAlign = "right";
    formInfo.style.direction = "rtl";
    formInfo.style.textAlign = "right";
    
    document.getElementById("language-text").textContent = "العربية";
    document.getElementById("nav-home").textContent = "الرئيسية";
    document.getElementById("nav-about").textContent = "معلومات عنا";
    document.getElementById("nav-login").textContent = "تسجيل الدخول";
    document.getElementById("nav-contact").textContent = "اتصل بنا";
    document.getElementById("nav-sorting").textContent = "فرز";
    document.getElementById("intro-text").textContent = "نحن هنا لمساعدتك والإجابة على جميع استفساراتك. سواء كنت بحاجة إلى دعم فني أو لديك سؤال حول منتجاتنا أو لديك اقتراحات لمشاركتها، لا تتردد في الاتصال بنا.";
    document.getElementById("reach-us-title").textContent = "كيف يمكنك الوصول إلينا؟";
    document.getElementById("feedback-title").textContent = "ملاحظاتك تهمنا";
    document.querySelector(".contact_message h3").textContent = "اتصل بنا";
    document.querySelector(".contact_message.form h3").textContent = "أخبرنا";
    document.querySelector("label[for='name']").textContent = "اسمك (مطلوب)";
    document.querySelector("label[for='email']").textContent = "بريدك الإلكتروني (مطلوب)";
    document.querySelector("label[for='subject']").textContent = "الموضوع";
    document.querySelector("label[for='message']").textContent = "رسالتك";
    document.querySelector("button[type='submit']").textContent = "إرسال";
// تحديث عناصر الفورم
    document.querySelector("label[for='name']").textContent = "اسمك (مطلوب)";
    document.querySelector("label[for='email']").textContent = "بريدك الإلكتروني (مطلوب)";
    document.querySelector("label[for='subject']").textContent = "الموضوع";
    document.querySelector("label[for='message']").textContent = "رسالتك";

    // تحديث Placeholder في المدخلات
    document.getElementById("name").placeholder = "الاسم *";
    document.getElementById("email").placeholder = "البريد الإلكتروني *";
    document.getElementById("subject").placeholder = "الموضوع *";
    document.getElementById("message").placeholder = "اكتب رسالتك هنا *";

    // تحديث زر الإرسال
    document.querySelector("button[type='submit']").textContent = "إرسال";  
}

function switchToEnglish() {
    document.getElementById("language-text").textContent = "English";
    document.getElementById("nav-home").textContent = "Home";
    document.getElementById("nav-about").textContent = "About Us";
    document.getElementById("nav-login").textContent = "Log In";
    document.getElementById("nav-contact").textContent = "Contact Us";
    document.getElementById("nav-sorting").textContent = "sorting";
    document.getElementById("intro-text").textContent = "We are here to assist you and answer all your inquiries. Whether you need technical support, have a question about our products, or have suggestions to share, do not hesitate to contact us.";
    document.getElementById("reach-us-title").textContent = "How can you reach us?";
    document.getElementById("email-info").innerHTML = "<strong>Email:</strong> You can send your inquiries via email, and we will make sure to respond as soon as possible.";
    document.getElementById("phone-info").innerHTML = "<strong>Phone:</strong> Our support team is available to answer your calls during official working hours.";
    document.getElementById("form-info").innerHTML = "<strong>Contact Form:</strong> You can fill out the form below, and we will get back to you soon.";
    document.getElementById("feedback-title").textContent = "Your feedback matters to us!";
    document.getElementById("feedback-text").textContent = "We always strive to improve our services, and we appreciate your feedback and suggestions. Thank you for your trust in us!";
    document.querySelector(".contact_message h3").textContent = "Contact Us";
    document.querySelector(".contact_message.form h3").textContent = "Tell Us";
    document.querySelector("label[for='name']").textContent = "Your Name (required)";
    document.querySelector("label[for='email']").textContent = "Your Email (required)";
    document.querySelector("label[for='subject']").textContent = "Subject";
    document.querySelector("label[for='message']").textContent = "Your Message";
    document.querySelector("button[type='submit']").textContent = "Send";
    // تحديث عناصر الفورم
    document.querySelector("label[for='name']").textContent = "Your Name (required)";
    document.querySelector("label[for='email']").textContent = "Your Email (required)";
    document.querySelector("label[for='subject']").textContent = "Subject";
    document.querySelector("label[for='message']").textContent = "Your Message";

    // تحديث Placeholder في المدخلات
    document.getElementById("name").placeholder = "Name *";
    document.getElementById("email").placeholder = "Email *";
    document.getElementById("subject").placeholder = "Subject *";
    document.getElementById("message").placeholder = "Message *";

    // تحديث زر الإرسال
    document.querySelector("button[type='submit']").textContent = "Send";
}



 document.addEventListener("DOMContentLoaded", function () {
                const API_URL = "https://online-store-production-d74f.up.railway.app";
                const contactForm = document.getElementById("contact-form");
                const messageBox = document.querySelector(".form-message");

                // ✅ معالجة إرسال الرسالة
                contactForm.addEventListener("submit", async function (event) {
                    event.preventDefault();

                    const name = document.getElementById("name").value.trim();
                    const email = document.getElementById("email").value.trim();
                    const subject = document.getElementById("subject").value.trim();
                    const message = document.getElementById("message").value.trim();

                    // ✅ التحقق من صحة البريد الإلكتروني
                    if (!email.includes("@") || !email.includes(".")) {
                        messageBox.textContent = "❌ Please enter a valid email address.";
                        return;
                    }

                    if (!name || !subject || !message) {
                        messageBox.textContent = "❌ Please fill in all fields.";
                        return;
                    }

                    const formData = { name, email, subject, message };

                    try {
                        const res = await fetch(`${API_URL}/send-message`, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(formData),
                        });

                        const data = await res.json();
                        if (!res.ok) throw new Error(data.message || "Failed to send message.");

                        messageBox.style.color = "green";
                        messageBox.textContent = "✅ Message sent successfully!";
                        contactForm.reset();
                    } catch (error) {
                        messageBox.style.color = "red";
                        messageBox.textContent = `❌ ${error.message}`;
                    }
                });
            });

