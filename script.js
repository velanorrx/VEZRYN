/* =========================================================
   VEZRYN — PROTOTYPE JAVASCRIPT
========================================================= */

let cart = [];

let cartCount = 0;


/* =========================================================
   SEARCH
========================================================= */

function openSearch() {

    document
        .getElementById("searchOverlay")
        .classList.add("active");

    document
        .getElementById("searchInput")
        .focus();

}


function closeSearch() {

    document
        .getElementById("searchOverlay")
        .classList.remove("active");

}


/* =========================================================
   CART
========================================================= */

function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    cartCount++;

    document.getElementById("cartCount").innerText = cartCount;

    updateCart();

    alert(productName + " added to your bag.");
}


function updateCart() {

    const container =
        document.getElementById("cartItems");

    const totalElement =
        document.getElementById("cartTotal");

    if (cart.length === 0) {

        container.innerHTML = `
            <p class="empty-cart">
                Your bag is currently empty.
            </p>
        `;

        totalElement.innerText = "฿0";

        return;
    }


    let total = 0;

    container.innerHTML = "";


    cart.forEach((item, index) => {

        total += item.price;

        const itemElement =
            document.createElement("div");

        itemElement.style.display = "flex";
        itemElement.style.justifyContent = "space-between";
        itemElement.style.padding = "15px 0";
        itemElement.style.borderBottom =
            "1px solid rgba(255,255,255,0.1)";

        itemElement.innerHTML = `

            <span style="font-size:12px;">
                ${item.name}
            </span>

            <span style="font-size:12px;">
                ฿${item.price.toLocaleString()}
            </span>

        `;

        container.appendChild(itemElement);

    });


    totalElement.innerText =
        "฿" + total.toLocaleString();

}


function openCart() {

    updateCart();

    document
        .getElementById("cartModal")
        .classList.add("active");

}


function closeCart() {

    document
        .getElementById("cartModal")
        .classList.remove("active");

}


/* =========================================================
   MEMBER
========================================================= */

function openMember() {

    document
        .getElementById("memberModal")
        .classList.add("active");

}


function closeMember() {

    document
        .getElementById("memberModal")
        .classList.remove("active");

}


function createMember(event) {

    event.preventDefault();

    alert(
        "Welcome to VEZRYN Member. Your account prototype has been created."
    );

    closeMember();

}


/* =========================================================
   NEWSLETTER
========================================================= */

function subscribe(event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    alert(
        "You're on the list. Welcome to VEZRYN."
    );

    document.getElementById("email").value = "";

}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeSearch();

        closeCart();

        closeMember();

    }

});