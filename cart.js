document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("cart-icon");
    const cartPopup = document.getElementById("cart-popup");
    const closeCart = document.getElementById("close-cart");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");
    const checkoutBtn = document.getElementById("checkout");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // ✅ تحديث واجهة المستخدم لعربة التسوق
    window.updateCartUI = function () {
        cartItemsContainer.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            let price = parseFloat(item.price) || 0; // ✅ تأكد من أن السعر رقم صحيح
            total += price * item.quantity;

            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-info">
                        <h4>${item.name}</h4>
                        <p>السعر: ${price.toFixed(2)} USD</p>
                        <p>الكمية: 
                            <button onclick="updateQuantity(${index}, -1)">-</button> 
                            ${item.quantity} 
                            <button onclick="updateQuantity(${index}, 1)">+</button>
                        </p>
                        <button onclick="removeItem(${index})">حذف</button>
                    </div>
                </div>
            `;
        });

        cartTotal.textContent = total.toFixed(2);
        cartCount.textContent = cart.length;
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    // ✅ تحديث الكمية
    window.updateQuantity = function (index, amount) {
        cart[index].quantity += amount;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        updateCartUI();
    };

    // ✅ حذف عنصر من العربة
    window.removeItem = function (index) {
        cart.splice(index, 1);
        updateCartUI();
    };

    // ✅ إضافة منتج إلى العربة
    window.addToCart = function (product) {
        if (!product || !product.price) {
            console.error("❌ لا يوجد منتج صالح للإضافة إلى السلة.");
            alert("⚠️ لم يتم العثور على المنتج، يرجى المحاولة مرة أخرى.");
            return;
        }

        let selectedColor = document.getElementById("color")?.value || "Default";
        let selectedSize = document.getElementById("selected-size")?.textContent.replace("Selected Size: ", "") || "One Size";

        // ✅ تحويل السعر إلى رقم صحيح
        let price = parseFloat(product.price.toString().replace(/[^\d.]/g, '')) || 0;

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let existingItem = cart.find(item => item.name === product.name && item.color === selectedColor && item.size === selectedSize);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                name: product.name,
                price: price,
                image: product.image,
                color: selectedColor,
                size: selectedSize,
                quantity: 1
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartUI();
        alert("✅ المنتج تمت إضافته إلى السلة!");
    };

    // ✅ فتح وإغلاق نافذة العربة
    cartIcon.addEventListener("click", () => {
        cartPopup.classList.toggle("open");
    });

    closeCart.addEventListener("click", () => {
        cartPopup.classList.remove("open");
    });

    // ✅ إتمام الشراء
    checkoutBtn.addEventListener("click", () => {
        alert("🛍️ تم تنفيذ عملية الشراء بنجاح!");
        cart = [];
        updateCartUI();
    });

    // ✅ تحديث العربة عند تحميل الصفحة
    updateCartUI();
});
