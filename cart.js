document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ cart.js Loaded");

    const cartIcon = document.getElementById("cart-icon");
    const cartPopup = document.getElementById("cart-popup");
    const closeCart = document.getElementById("close-cart");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");
    const checkoutBtn = document.getElementById("checkout");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let currentCurrency = localStorage.getItem("selectedCurrency") || "AED";

    // ✅ أسعار الصرف
    const exchangeRates = {
        "AED": 1,
        "SAR": 1.02,
        "USD": 0.27
    };

    function updateCartUI() {
        cartItemsContainer.innerHTML = "";
        let total = 0;
        let itemCount = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>🛒 The shopping cart is empty</p>";
        } else {
            cart.forEach((item, index) => {
                let convertedPrice = parseFloat(item.originalPrice) * exchangeRates[currentCurrency];
                convertedPrice = isNaN(convertedPrice) ? 0 : convertedPrice;
                let subtotal = convertedPrice * item.quantity;
                total += subtotal;
                itemCount += item.quantity;

                // ✅ التأكد من أن الفئة مخزنة بشكل صحيح
                console.log(`🛍️ Checking product category: ${item.category}`);

                // ✅ إخفاء اللون والمقاس إذا كان المنتج من الفئات المحددة
                let hideDetails = ["perfumeWoman", "perfumeMen", "cosemetics"].includes(item.category);

                cartItemsContainer.innerHTML += `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-info">
                            <p>Price: <span class="cart-price">${currentCurrency} ${convertedPrice.toFixed(2)}</span></p>
                            ${hideDetails ? "" : `<p>Color: <span style="color: black; font-weight: bold;">${item.color}</span></p>`}
                            ${hideDetails ? "" : `<p>Size: <strong>${item.size}</strong></p>`}
                            <p>Quantity: 
                                <button onclick="updateQuantity(${index}, -1)">-</button> 
                                ${item.quantity} 
                                <button onclick="updateQuantity(${index}, 1)">+</button>
                            </p>
                            <button onclick="removeItem(${index})">🗑️ Remove</button>
                        </div>
                    </div>
                `;
            });
        }

        cartTotal.textContent = `${currentCurrency} ${total.toFixed(2)}`;
        cartCount.textContent = itemCount;
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function updateCartCurrency(newCurrency) {
        if (!exchangeRates[newCurrency]) {
            console.error(`❌ العملة ${newCurrency} غير مدعومة.`);
            return;
        }

        currentCurrency = newCurrency;
        localStorage.setItem("selectedCurrency", newCurrency);
        console.log(`🔄 تحديث العملة إلى: ${newCurrency}, معدل التحويل: ${exchangeRates[newCurrency]}`);
        updateCartUI();
    }

    window.updateQuantity = function (index, amount) {
        cart[index].quantity += amount;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        updateCartUI();
    };

    window.removeItem = function (index) {
        cart.splice(index, 1);
        updateCartUI();
    };

    window.addToCart = function (product) {
    if (!product || !product.price || !product.category) {
        console.error("❌ No valid product data.", product);
        return;
    }

    let selectedColor = document.getElementById("color")?.value || "Default";
    let selectedSize = document.getElementById("selected-size")?.textContent.replace("Selected Size: ", "") || "One Size";

    let price = parseFloat(product.price.replace(/[^\d.]/g, ''));
    if (isNaN(price)) {
        console.error("❌ Invalid product price.", product.price);
        return;
    }

    let originalPrice = price / exchangeRates[product.currency || "AED"];
    let category = product.category || "default";

    console.log(`🛒 Adding product to cart: ${product.name}, Category: ${category}`);

    let newProduct = {
        name: product.name || "Unknown",
        price: price.toFixed(2),
        originalPrice: originalPrice.toFixed(2),
        currency: currentCurrency,
        image: product.image || "",
        quantity: 1,
        category: category
    };

    if (!["perfumeWoman", "perfumeMen", "cosemetics"].includes(category)) {
        newProduct.color = selectedColor;
        newProduct.size = selectedSize;
    }

    cart.push(newProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
    showToast("✅ Product added to cart!");
};


    cartIcon.addEventListener("click", () => {
        cartPopup.classList.toggle("open");
    });

    closeCart.addEventListener("click", () => {
        cartPopup.classList.remove("open");
    });

    checkoutBtn.addEventListener("click", () => {
        alert("📦 Your order is under review!");
        cart = [];
        updateCartUI();
    });

    function showToast(message) {
        let toast = document.createElement("div");
        toast.className = "toast-message";
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => toast.remove(), 500);
        }, 2000);
    }

    document.querySelectorAll(".dropdown_currency a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let newCurrency = this.textContent.trim();
            updateCartCurrency(newCurrency);
        });
    });

    updateCartUI();
});
