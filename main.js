document.addEventListener("DOMContentLoaded", function () {
            const loginForm = document.querySelector('.account_form form[action="#"]');
            const registerForm = document.querySelector('.account_form.register form[action="#"]');

            if (loginForm) {
                loginForm.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const email = document.querySelector('#username').value;
                    const password = document.querySelector('#password').value;

                    const res = await fetch('http://localhost:5000/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, password })
                    });

                    const data = await res.json();
                    if (res.ok) {
                        localStorage.setItem('token', data.token); // تخزين التوكن
                        window.location.href = "index.html";  // تحويل المستخدم للصفحة الرئيسية
                    } 
                });
            }

            if (registerForm) {
                registerForm.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const email = document.querySelector('#email').value;
                    const password = document.querySelector('#reg_password').value;

                    const res = await fetch('http://localhost:5000/register', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, password })
                    });

                    const data = await res.json();
                    if (res.ok) {
                        localStorage.setItem('token', data.token); // تخزين التوكن
                        window.location.href = "index.html";  // تحويل المستخدم للصفحة الرئيسية
                    } 
                });
            }
        });

        if (document.querySelector("#remember").checked) {
                localStorage.setItem('token', data.token);
            } else {
                sessionStorage.setItem('token', data.token);
            }

            if (localStorage.getItem('token') || sessionStorage.getItem('token')) {
                    window.location.href = "home.html";
                }
    const cookieParser = require('cookie-parser');
    app.use(cookieParser());
    res.cookie("token", token, { httpOnly: true, secure: true, sameSite: 'Strict' }).json({ message: "Logged in!" });


    document.addEventListener("DOMContentLoaded", function () {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");

        // إذا لم يكن المستخدم مسجلًا، قم بتحويله إلى login.html
        if (!token && window.location.pathname !== "/login.html") {
            window.location.href = "login.html";
        }
    });
document.getElementById("logout").addEventListener("click", function () {
    localStorage.removeItem("token");  // حذف التوكن من التخزين
    sessionStorage.removeItem("token");
    window.location.href = "login.html";  // تحويل المستخدم لصفحة تسجيل الدخول
});
