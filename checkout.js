document.addEventListener("DOMContentLoaded", function () {
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    const cardSection = document.getElementById("card-details");
    const paypalSection = document.getElementById("paypal-details");
    const appleGoogleSection = document.getElementById("apple-google-details");
    const form = document.getElementById("payment-form");

    function updatePaymentSection() {
        // ✅ إخفاء جميع النماذج
        cardSection.classList.add("hidden");
        paypalSection.classList.add("hidden");
        appleGoogleSection.classList.add("hidden");

        // ✅ إزالة required من جميع الحقول
        document.querySelectorAll(".payment-section input").forEach(input => {
            input.removeAttribute("required");
        });

        // ✅ عرض الحقول المطلوبة فقط بناءً على خيار المستخدم
        const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
        if (selectedMethod === "card") {
            cardSection.classList.remove("hidden");
            cardSection.querySelectorAll("input").forEach(input => input.setAttribute("required", "true"));
        } else if (selectedMethod === "paypal") {
            paypalSection.classList.remove("hidden");
            paypalSection.querySelector("input").setAttribute("required", "true");
        } else if (selectedMethod === "apple-google-pay") {
            appleGoogleSection.classList.remove("hidden");
            appleGoogleSection.querySelector("input").setAttribute("required", "true");
        }
    }

    // ✅ إضافة مستمعات الأحداث لجميع طرق الدفع
    paymentMethods.forEach(method => {
        method.addEventListener("change", updatePaymentSection);
    });

    updatePaymentSection(); // ✅ تحديث عند تحميل الصفحة

    // ✅ منع إرسال النموذج إن لم يكن مكتملًا
    form.addEventListener("submit", function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            alert("⚠️ Please fill in all required fields before proceeding.");
        } else {
            alert("✅ Your order is under review. We will notify you once it is processed.");
        }
    });
});
