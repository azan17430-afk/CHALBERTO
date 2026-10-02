/* ==================================================
   PRODUCT IMAGES
================================================== */

const watchImages = [
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1609587312208-cea54be969e7?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy"
];

const smartWatchImages = [
    "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1434494343833-76b479733705?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1633173544307-421083e5ae10?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1523394894855-2feb062d437d?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy",
    "https://images.unsplash.com/photo-1642101373432-a9c683c34902?auto=format&fit=crop&w=900&h=900&q=85&crop=entropy"
];

/* ==================================================
   PRODUCTS
================================================== */

const products = {
    luxury: [
        {
            name: "Royal Gold Automatic",
            price: 349,
            description: "Elegant automatic movement with a premium golden finish.",
            details: {
                longDescription: "The Royal Gold Automatic pairs a self-winding automatic movement with a warm gold-tone finish, designed for collectors who want heirloom quality on the wrist.",
                movement: "Automatic (self-winding)",
                caseInfo: "42mm stainless steel, gold-tone PVD coating",
                strap: "Gold-tone stainless steel bracelet",
                water: "5 ATM (50m) water resistant",
                warranty: "2-Year International Warranty"
            }
        },
        {
            name: "Black Chronograph",
            price: 429,
            description: "Bold chronograph design created for sophisticated style.",
            details: {
                longDescription: "A bold chronograph built for sophisticated style, featuring a tri-compax dial and sapphire crystal glass for everyday durability.",
                movement: "Quartz Chronograph",
                caseInfo: "44mm matte black stainless steel",
                strap: "Black genuine leather",
                water: "3 ATM (30m) water resistant",
                warranty: "2-Year International Warranty"
            }
        },
        {
            name: "Silver Elite",
            price: 499,
            description: "Refined silver finish with a luxurious modern dial.",
            details: {
                longDescription: "Silver Elite brings a refined silver finish and a luxurious modern dial, finished with a sunburst pattern that catches the light beautifully.",
                movement: "Automatic (self-winding)",
                caseInfo: "40mm brushed stainless steel",
                strap: "Stainless steel mesh bracelet",
                water: "5 ATM (50m) water resistant",
                warranty: "2-Year International Warranty"
            }
        },
        {
            name: "Golden Prestige",
            price: 599,
            description: "Premium golden details designed for timeless elegance.",
            details: {
                longDescription: "Golden Prestige combines premium golden detailing with a timeless silhouette, crafted for those who value elegance in every occasion.",
                movement: "Automatic (self-winding)",
                caseInfo: "42mm gold-plated stainless steel",
                strap: "Gold-tone link bracelet",
                water: "5 ATM (50m) water resistant",
                warranty: "3-Year International Warranty"
            }
        },
        {
            name: "Midnight Sapphire",
            price: 549,
            description: "Deep sapphire dial with an elegant luxury profile.",
            details: {
                longDescription: "Featuring a deep sapphire-blue dial and a scratch-resistant sapphire crystal, Midnight Sapphire is an elegant statement piece for evening wear.",
                movement: "Automatic (self-winding)",
                caseInfo: "41mm polished stainless steel",
                strap: "Navy blue genuine leather",
                water: "5 ATM (50m) water resistant",
                warranty: "2-Year International Warranty"
            }
        }
    ],

    classic: [
        {
            name: "Classic Leather Brown",
            price: 189,
            description: "Traditional brown leather design for everyday elegance.",
            details: {
                longDescription: "A traditional brown leather design built for everyday elegance, with a clean dial that suits both formal and casual settings.",
                movement: "Quartz",
                caseInfo: "40mm stainless steel",
                strap: "Brown genuine leather",
                water: "3 ATM (30m) water resistant",
                warranty: "1-Year International Warranty"
            }
        },
        {
            name: "Classic Silver",
            price: 219,
            description: "Clean silver watch design with a timeless appearance.",
            details: {
                longDescription: "Clean silver watch design with a timeless appearance, ideal as a daily companion for work or weekend.",
                movement: "Quartz",
                caseInfo: "38mm stainless steel",
                strap: "Stainless steel bracelet",
                water: "3 ATM (30m) water resistant",
                warranty: "1-Year International Warranty"
            }
        },
        {
            name: "Vintage Black",
            price: 199,
            description: "Vintage-inspired black watch for sophisticated personalities.",
            details: {
                longDescription: "Vintage-inspired black watch for sophisticated personalities, featuring a domed crystal and retro-styled numerals.",
                movement: "Quartz",
                caseInfo: "40mm black stainless steel",
                strap: "Black genuine leather",
                water: "3 ATM (30m) water resistant",
                warranty: "1-Year International Warranty"
            }
        },
        {
            name: "Executive Silver",
            price: 249,
            description: "Elegant silver design made for professional occasions.",
            details: {
                longDescription: "Elegant silver design made for professional occasions, with a slim case profile that sits comfortably under a shirt cuff.",
                movement: "Quartz",
                caseInfo: "39mm stainless steel",
                strap: "Stainless steel bracelet",
                water: "3 ATM (30m) water resistant",
                warranty: "2-Year International Warranty"
            }
        },
        {
            name: "Heritage Leather",
            price: 279,
            description: "Premium leather strap with classic heritage styling.",
            details: {
                longDescription: "Premium leather strap with classic heritage styling, finished with a sunray dial for a subtle touch of shine.",
                movement: "Quartz",
                caseInfo: "41mm stainless steel",
                strap: "Tan genuine leather",
                water: "3 ATM (30m) water resistant",
                warranty: "2-Year International Warranty"
            }
        }
    ],

    /* ==================================================
       SMART WATCHES
    ================================================== */

    smart: [
        {
            name: "Alberto Smart Pro",
            price: 159,
            description: "Modern AMOLED smartwatch with health tracking and smart notifications.",
            details: {
                longDescription: "A modern AMOLED smartwatch designed for connected everyday life, featuring health tracking, notifications, activity monitoring, and customizable watch faces.",
                movement: "Digital Smartwatch OS",
                caseInfo: "44mm aluminum alloy case",
                strap: "Black silicone sport band",
                water: "IP68 water & dust resistant",
                warranty: "1-Year International Warranty"
            }
        },
        {
            name: "Smart Active X",
            price: 179,
            description: "Fitness smartwatch with activity, sleep, and heart-rate tracking.",
            details: {
                longDescription: "Smart Active X combines a sleek design with fitness-focused features including heart-rate monitoring, sleep tracking, step counting, and workout modes.",
                movement: "Digital Smartwatch OS",
                caseInfo: "43mm aluminum alloy case",
                strap: "Blue silicone sport band",
                water: "IP68 water & dust resistant",
                warranty: "1-Year International Warranty"
            }
        },
        {
            name: "Smart Elite AMOLED",
            price: 229,
            description: "Premium AMOLED smartwatch with a stylish stainless-steel body.",
            details: {
                longDescription: "Smart Elite AMOLED brings premium smartwatch styling with a bright AMOLED display, stainless-steel construction, customizable watch faces, and everyday smart features.",
                movement: "Digital Smartwatch OS",
                caseInfo: "45mm stainless steel case",
                strap: "Milanese loop band",
                water: "5 ATM water resistant",
                warranty: "2-Year International Warranty"
            }
        },
        {
            name: "Smart Sport GPS",
            price: 199,
            description: "GPS smartwatch designed for workouts, running, and outdoor activities.",
            details: {
                longDescription: "Smart Sport GPS is built for active users with integrated GPS, multiple workout modes, activity tracking, heart-rate monitoring, and a durable sporty design.",
                movement: "Digital Smartwatch OS",
                caseInfo: "44mm reinforced polymer case",
                strap: "Black silicone sport band",
                water: "5 ATM water resistant",
                warranty: "1-Year International Warranty"
            }
        },
        {
            name: "Smart Connect X",
            price: 249,
            description: "Advanced smartwatch with calls, notifications, health tracking, and voice assistant.",
            details: {
                longDescription: "Smart Connect X delivers a complete connected experience with call handling, app notifications, health tracking, voice assistant support, and a sleek modern display.",
                movement: "Digital Smartwatch OS",
                caseInfo: "45mm aluminum alloy case",
                strap: "Fluoroelastomer band",
                water: "5 ATM water resistant",
                warranty: "2-Year International Warranty"
            }
        }
    ],

    sports: [
        {
            name: "Alberto Sport Black",
            price: 139,
            description: "Bold black sports watch built for active lifestyles.",
            details: {
                longDescription: "Bold black sports watch built for active lifestyles, with a shock-resistant case and easy-read dial.",
                movement: "Quartz",
                caseInfo: "44mm reinforced polymer",
                strap: "Black rubber strap",
                water: "10 ATM (100m) water resistant",
                warranty: "1-Year International Warranty"
            }
        },
        {
            name: "Outdoor Explorer",
            price: 169,
            description: "Rugged design made for outdoor adventures.",
            details: {
                longDescription: "Rugged design made for outdoor adventures, featuring a compass bezel and luminous hands for low-light visibility.",
                movement: "Quartz",
                caseInfo: "45mm stainless steel",
                strap: "Olive green rubber strap",
                water: "10 ATM (100m) water resistant",
                warranty: "1-Year International Warranty"
            }
        },
        {
            name: "Pro Diver",
            price: 189,
            description: "Sporty diver-inspired watch with a powerful profile.",
            details: {
                longDescription: "Sporty diver-inspired watch with a powerful profile, complete with a unidirectional rotating bezel.",
                movement: "Quartz",
                caseInfo: "44mm stainless steel",
                strap: "Black rubber dive strap",
                water: "20 ATM (200m) water resistant",
                warranty: "2-Year International Warranty"
            }
        },
        {
            name: "Extreme Sport",
            price: 209,
            description: "Strong sporty design created for demanding activities.",
            details: {
                longDescription: "Strong sporty design created for demanding activities, with a reinforced case built to handle daily impact.",
                movement: "Quartz Chronograph",
                caseInfo: "46mm reinforced polymer",
                strap: "Black silicone strap",
                water: "10 ATM (100m) water resistant",
                warranty: "1-Year International Warranty"
            }
        },
        {
            name: "Adventure X",
            price: 179,
            description: "Adventure-focused watch with a bold modern appearance.",
            details: {
                longDescription: "Adventure-focused watch with a bold modern appearance, built to keep pace with an active, on-the-go lifestyle.",
                movement: "Quartz",
                caseInfo: "44mm stainless steel",
                strap: "Grey rubber strap",
                water: "10 ATM (100m) water resistant",
                warranty: "1-Year International Warranty"
            }
        }
    ]
};


/* ==================================================
   FLAT LOOKUP
================================================== */

const productsById = {};


/* ==================================================
   ADD IMAGES TO PRODUCTS
================================================== */

let imageIndex = 0;

Object.keys(products).forEach(category => {

    products[category].forEach((product, i) => {

        product.image =
            category === "smart"
                ? smartWatchImages[i % smartWatchImages.length]
                : watchImages[imageIndex % watchImages.length];

        product.id = category + "-" + i;

        product.category = category;

        imageIndex++;

        productsById[product.id] = product;
    });

});


/* ==================================================
   CART
================================================== */

let cart = [];


/* ==================================================
   CREATE PRODUCT CARD
================================================== */

function createProductCard(product, category, index) {

    const safeName = product.name.replace(/'/g, "\\'");

    const rating = (
        4.2 + ((index * 7) % 9) / 10
    ).toFixed(1);

    const reviewCount = 30 + ((index * 13) % 90);

    product.rating = rating;
    product.reviewCount = reviewCount;

    return `
        <div
            class="product-card"
            data-name="${product.name.toLowerCase()}"
            data-category="${category.toLowerCase()}"
            data-description="${product.description.toLowerCase()}"
            data-id="${product.id}"
            onclick="openProductDetail('${product.id}')"
        >

            <div class="product-image">

                <span class="product-badge">
                    Alberto ${category}
                </span>

                <button
                    class="wishlist-btn"
                    type="button"
                    aria-label="Add to wishlist"
                    onclick="event.stopPropagation(); toggleWishlist('${product.id}', this)"
                >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M12 20.5C12 20.5 3.5 15.6 3.5 9.6C3.5 6.5 5.9 4.2 8.8 4.2C10.3 4.2 11.5 4.9 12 6C12.5 4.9 13.7 4.2 15.2 4.2C18.1 4.2 20.5 6.5 20.5 9.6C20.5 15.6 12 20.5 12 20.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
                    </svg>
                </button>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

            </div>

            <div class="product-info">

                <h4 class="product-name">
                    ${product.name}
                </h4>

                <div class="product-rating">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M12 2.5L14.9 8.7L21.5 9.6L16.8 14.2L17.9 21L12 17.7L6.1 21L7.2 14.2L2.5 9.6L9.1 8.7L12 2.5Z"/>
                    </svg>
                    ${rating}
                    <span>(${reviewCount} reviews)</span>
                </div>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-bottom">

                    <div class="product-price">
                        $${product.price.toFixed(2)}
                    </div>

                    <button
                        class="add-cart"
                        onclick="event.stopPropagation(); addToCart('${safeName}', ${product.price}, '${product.image}')"
                    >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M3 4H5L5.6 6.5M7 13H17L21 6.5H5.6M7 13L5.6 6.5M7 13L4.7 15.8C4.3 16.3 4.6 17 5.3 17H17M17 17C15.9 17 15 17.9 15 19C15 20.1 15.9 21 17 21C18.1 21 19 20.1 19 19C19 17.9 18.1 17 17 17ZM9 19C9 20.1 8.1 21 7 21C5.9 21 5 20.1 5 19C5 17.9 5.9 17 7 17C8.1 17 9 17.9 9 19Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        ADD TO CART
                    </button>

                </div>

            </div>

        </div>
    `;
}


/* ==================================================
   LOAD PRODUCTS
================================================== */

function loadProducts() {

    document.getElementById("luxuryProducts").innerHTML =
        products.luxury
            .map((product, i) =>
                createProductCard(product, "luxury", i)
            )
            .join("");

    document.getElementById("classicProducts").innerHTML =
        products.classic
            .map((product, i) =>
                createProductCard(product, "classic", i)
            )
            .join("");

    document.getElementById("smartProducts").innerHTML =
        products.smart
            .map((product, i) =>
                createProductCard(product, "smart", i)
            )
            .join("");

    document.getElementById("sportsProducts").innerHTML =
        products.sports
            .map((product, i) =>
                createProductCard(product, "sports", i)
            )
            .join("");
}


/* ==================================================
   PRODUCT DETAILS POPUP
================================================== */

function openProductDetail(id) {

    const product = productsById[id];

    if (!product) return;

    const d = product.details || {};

    document.getElementById("detailImage").src =
        product.image;

    document.getElementById("detailImage").alt =
        product.name;

    document.getElementById("detailCategory").textContent =
        "ALBERTO " + product.category.toUpperCase();

    document.getElementById("detailName").textContent =
        product.name;

    document.getElementById("detailRating").innerHTML =
        `★ ${product.rating || "4.5"}
        <span>(${product.reviewCount || 40} reviews)</span>`;

    document.getElementById("detailPrice").textContent =
        "$" + product.price.toFixed(2);

    document.getElementById("detailDescription").textContent =
        d.longDescription || product.description;

    const specRows = [
        ["Movement", d.movement],
        ["Case", d.caseInfo],
        ["Strap", d.strap],
        ["Water Resistance", d.water],
        ["Warranty", d.warranty]
    ].filter(row => row[1]);

    document.getElementById("detailSpecs").innerHTML =
        specRows
            .map(row => `
                <li>
                    <span>${row[0]}</span>
                    <strong>${row[1]}</strong>
                </li>
            `)
            .join("");

    const addBtn =
        document.getElementById("detailAddCartBtn");

    if (addBtn) {

        addBtn.onclick = function () {

            addToCart(
                product.name,
                product.price,
                product.image
            );

        };

    }

    document
        .getElementById("detailOverlay")
        .classList.add("active");

    document
        .getElementById("detailPanel")
        .classList.add("active");
}


function closeProductDetail() {

    const overlay =
        document.getElementById("detailOverlay");

    const panel =
        document.getElementById("detailPanel");

    if (overlay)
        overlay.classList.remove("active");

    if (panel)
        panel.classList.remove("active");
}


/* ==================================================
   ADD TO CART
================================================== */

function addToCart(name, price, image) {

    const existing =
        cart.find(item => item.name === name);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });

    }

    updateCart();
}


/* ==================================================
   UPDATE CART
================================================== */

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");

    const totalQuantity =
        cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        );

    cartCount.textContent = totalQuantity;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty.</p>
            </div>
        `;

        cartTotal.textContent = "$0.00";

        return;
    }

    cartItems.innerHTML =
        cart.map((item, index) => `

            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div>

                    <h4>
                        ${item.name}
                    </h4>

                    <div class="cart-item-price">
                        $${item.price.toFixed(2)}
                    </div>

                    <div class="quantity-controls">

                        <button
                            onclick="changeQuantity(${index}, -1)"
                        >
                            -
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="changeQuantity(${index}, 1)"
                        >
                            +
                        </button>

                    </div>

                </div>

                <button
                    class="remove-item"
                    onclick="removeItem(${index})"
                >
                    Remove
                </button>

            </div>

        `).join("");

    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );

    cartTotal.textContent =
        "$" + total.toFixed(2);
}


/* ==================================================
   CHANGE QUANTITY
================================================== */

function changeQuantity(index, amount) {

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }

    updateCart();
}


/* ==================================================
   REMOVE ITEM
================================================== */

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}


/* ==================================================
   OPEN CART
================================================== */

function openCart() {

    document
        .getElementById("cartPanel")
        .classList.add("active");

    document
        .getElementById("cartOverlay")
        .classList.add("active");
}


/* ==================================================
   CLOSE CART
================================================== */

function closeCart() {

    document
        .getElementById("cartPanel")
        .classList.remove("active");

    document
        .getElementById("cartOverlay")
        .classList.remove("active");
}


/* ==================================================
   WISHLIST
================================================== */

let wishlist = [];


/* ==================================================
   TOGGLE WISHLIST
================================================== */

function toggleWishlist(id, btnEl) {

    const index = wishlist.indexOf(id);

    if (index === -1) {

        wishlist.push(id);

        if (btnEl) btnEl.classList.add("active");

    } else {

        wishlist.splice(index, 1);

        if (btnEl) btnEl.classList.remove("active");

    }

    updateWishlist();
}


/* ==================================================
   REMOVE FROM WISHLIST (from the favorites panel)
================================================== */

function removeFromWishlist(id) {

    const index = wishlist.indexOf(id);

    if (index !== -1) {
        wishlist.splice(index, 1);
    }

    // Also un-fill the heart on the matching product card, if visible
    const cardBtn =
        document.querySelector(`.product-card[data-id="${id}"] .wishlist-btn`);

    if (cardBtn) cardBtn.classList.remove("active");

    updateWishlist();
}


/* ==================================================
   MOVE A FAVORITE STRAIGHT INTO THE CART
================================================== */

function addWishlistItemToCart(id) {

    const product = productsById[id];

    if (!product) return;

    addToCart(product.name, product.price, product.image);
}


/* ==================================================
   UPDATE WISHLIST (badge + panel content)
================================================== */

function updateWishlist() {

    const wishlistCount =
        document.getElementById("wishlistCount");

    const wishlistItems =
        document.getElementById("wishlistItems");

    if (wishlistCount) {

        wishlistCount.textContent = wishlist.length;
        wishlistCount.classList.toggle("show", wishlist.length > 0);

    }

    if (!wishlistItems) return;

    if (wishlist.length === 0) {

        wishlistItems.innerHTML = `
            <div class="empty-cart">
                <p>No favorites yet — tap the heart on any watch to save it here.</p>
            </div>
        `;

        return;
    }

    wishlistItems.innerHTML =
        wishlist.map(id => {

            const product = productsById[id];

            if (!product) return "";

            return `
                <div class="cart-item">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div>

                        <h4>
                            ${product.name}
                        </h4>

                        <div class="cart-item-price">
                            $${product.price.toFixed(2)}
                        </div>

                        <button
                            class="wishlist-add-cart"
                            onclick="addWishlistItemToCart('${id}')"
                        >
                            Add to Cart
                        </button>

                    </div>

                    <button
                        class="remove-item"
                        onclick="removeFromWishlist('${id}')"
                    >
                        Remove
                    </button>

                </div>
            `;

        }).join("");
}


/* ==================================================
   OPEN WISHLIST
================================================== */

function openWishlist() {

    document
        .getElementById("wishlistPanel")
        .classList.add("active");

    document
        .getElementById("wishlistOverlay")
        .classList.add("active");
}


/* ==================================================
   CLOSE WISHLIST
================================================== */

function closeWishlist() {

    document
        .getElementById("wishlistPanel")
        .classList.remove("active");

    document
        .getElementById("wishlistOverlay")
        .classList.remove("active");
}


/* ==================================================
   CHECKOUT
================================================== */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }

    closeCart();

    openCheckoutForm();
}


/* ==================================================
   CHECKOUT FORM
================================================== */

function openCheckoutForm() {

    const overlay =
        document.getElementById("checkoutFormOverlay");

    const panel =
        document.getElementById("checkoutFormPanel");

    if (overlay)
        overlay.classList.add("active");

    if (panel)
        panel.classList.add("active");
}


function closeCheckoutForm() {

    const overlay =
        document.getElementById("checkoutFormOverlay");

    const panel =
        document.getElementById("checkoutFormPanel");

    if (overlay)
        overlay.classList.remove("active");

    if (panel)
        panel.classList.remove("active");
}


/* ==================================================
   FORM VALIDATION (red outline on invalid fields)
================================================== */

function validateForm(form) {

    let isValid = true;

    const fields =
        form.querySelectorAll("input, textarea, select");

    fields.forEach(field => {

        if (field.checkValidity()) {

            field.classList.remove("input-error");

        } else {

            field.classList.add("input-error");

            isValid = false;

        }

    });

    return isValid;

}


function clearFieldError(event) {

    event.target.classList.remove("input-error");

}


function attachLiveValidation(form) {

    if (!form) return;

    form
        .querySelectorAll("input, textarea, select")
        .forEach(field => {

            field.addEventListener(
                "input",
                clearFieldError
            );

            field.addEventListener(
                "change",
                clearFieldError
            );

        });

}


function submitCheckoutOrder(event) {

    event.preventDefault();

    if (!validateForm(event.target)) return;

    closeCheckoutForm();

    event.target.reset();

    const checkoutPopup =
        document.getElementById("checkoutPopup");

    if (checkoutPopup) {

        checkoutPopup.classList.add("active");

    }

    togglePopupOverlay(true);

    cart = [];

    updateCart();
}


/* ==================================================
   CLOSE CHECKOUT POPUP
================================================== */

function closeCheckoutPopup() {

    const checkoutPopup =
        document.getElementById("checkoutPopup");

    if (checkoutPopup) {

        checkoutPopup.classList.remove("active");

    }

    togglePopupOverlay(false);
}


/* ==================================================
   POPUP OVERLAY
================================================== */

function togglePopupOverlay(show) {

    const overlay =
        document.getElementById("popupOverlay");

    if (!overlay) return;

    overlay.classList.toggle(
        "active",
        show
    );
}


/* ==================================================
   CATEGORY FILTER
================================================== */

function filterCategory(category, button) {

    document
        .querySelectorAll(".category-btn")
        .forEach(btn => {

            btn.classList.remove("active");

        });

    button.classList.add("active");

    const sections =
        document.querySelectorAll(
            "[data-category-section]"
        );

    sections.forEach(section => {

        if (
            category === "all" ||
            section.dataset.categorySection === category
        ) {

            section.style.display = "block";

        } else {

            section.style.display = "none";

        }

    });

    document
        .getElementById("collections")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* ==================================================
   SEARCH
================================================== */

const CATEGORY_KEYWORDS = [
    "luxury",
    "classic",
    "smart",
    "sports"
];


function matchedTypeCategory(searchValue) {

    return CATEGORY_KEYWORDS.find(
        cat =>
            cat === searchValue ||
            cat.startsWith(searchValue)
    ) || null;
}


function performSearch() {

    const searchInputEl =
        document.getElementById("searchInput");

    const searchValue =
        searchInputEl.value
            .toLowerCase()
            .trim();

            const searchWords =
                searchValue
                    .split(/\s+/)
                    .filter(Boolean);

            const typeCategory =
                matchedTypeCategory(searchValue);

            const sections =
                document.querySelectorAll(
                    "[data-category-section]"
                );

            const noResultsMsg =
                document.getElementById(
                    "noResultsMsg"
                );

            let totalVisible = 0;


            if (searchValue !== "") {

                document
                    .querySelectorAll(".category-btn")
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });

            } else {

                const anyActive =
                    document.querySelector(
                        ".category-btn.active"
                    );

                if (!anyActive) {

                    document
                        .querySelector(
                            '.category-btn[data-category="all"]'
                        )
                        ?.classList.add("active");

                }

            }


            sections.forEach(section => {

                const cards =
                    section.querySelectorAll(
                        ".product-card"
                    );

                let sectionVisibleCount = 0;


                cards.forEach(card => {

                    const name =
                        card.dataset.name || "";

                    const category =
                        card.dataset.category || "";

                    const description =
                        card.dataset.description || "";

                    const text =
                        `${name} ${description}`;

                    let matches;


                    if (searchValue === "") {

                        matches = true;

                    } else if (typeCategory) {

                        matches =
                            category === typeCategory;

                    } else {

                        matches =
                            searchWords.every(
                                word =>
                                    text.includes(word)
                            );

                    }


                    card.style.display =
                        matches ? "" : "none";


                    if (matches)
                        sectionVisibleCount++;

                });


                totalVisible +=
                    sectionVisibleCount;


                if (searchValue === "") {

                    const activeBtn =
                        document.querySelector(
                            ".category-btn.active"
                        );

                    const activeCategory =
                        activeBtn
                            ? activeBtn.dataset.category
                            : "all";

                    section.style.display =
                        (
                            activeCategory === "all" ||
                            section.dataset.categorySection ===
                                activeCategory
                        )
                            ? "block"
                            : "none";

                } else {

                    section.style.display =
                        sectionVisibleCount > 0
                            ? "block"
                            : "none";

                }

            });


            if (noResultsMsg) {

                noResultsMsg.classList.toggle(
                    "show",
                    searchValue !== "" &&
                    totalVisible === 0
                );

            }

}


document
    .getElementById("searchBtn")
    .addEventListener(
        "click",
        function () {

            performSearch();

            document
                .getElementById("collections")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


document
    .getElementById("searchInput")
    .addEventListener(
        "keydown",
        function (e) {

            if (e.key === "Enter") {

                e.preventDefault();

                document
                    .getElementById("searchBtn")
                    .click();

            }

        }
    );


/* ==================================================
   CONTACT FORM
================================================== */

function sendMessage(event) {

    event.preventDefault();

    if (!validateForm(event.target)) return;

    const popup =
        document.getElementById("successPopup");

    popup.classList.add("active");

    togglePopupOverlay(true);

    event.target.reset();
}


/* ==================================================
   CLOSE SUCCESS POPUP
================================================== */

function closeSuccessPopup() {

    const popup =
        document.getElementById("successPopup");

    popup.classList.remove("active");

    togglePopupOverlay(false);
}


/* ==================================================
   CLOSE POPUPS/CART WITH ESCAPE
================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeSuccessPopup();

            closeCheckoutPopup();

            closeCart();

            closeWishlist();

            closeProductDetail();

            closeCheckoutForm();

        }

    }
);


/* ==================================================
   WIRE UP ALL BUTTONS
================================================== */


/* Open cart */

const openCartBtn =
    document.getElementById("openCartBtn");

if (openCartBtn) {

    openCartBtn.addEventListener(
        "click",
        openCart
    );

}


/* Close cart */

const closeCartBtn =
    document.getElementById("closeCartBtn");

if (closeCartBtn) {

    closeCartBtn.addEventListener(
        "click",
        closeCart
    );

}


/* Cart overlay */

const cartOverlayEl =
    document.getElementById("cartOverlay");

if (cartOverlayEl) {

    cartOverlayEl.addEventListener(
        "click",
        closeCart
    );

}


/* Open wishlist */

const openWishlistBtn =
    document.getElementById("openWishlistBtn");

if (openWishlistBtn) {

    openWishlistBtn.addEventListener(
        "click",
        openWishlist
    );

}


/* Close wishlist */

const closeWishlistBtn =
    document.getElementById("closeWishlistBtn");

if (closeWishlistBtn) {

    closeWishlistBtn.addEventListener(
        "click",
        closeWishlist
    );

}


/* Wishlist overlay */

const wishlistOverlayEl =
    document.getElementById("wishlistOverlay");

if (wishlistOverlayEl) {

    wishlistOverlayEl.addEventListener(
        "click",
        closeWishlist
    );

}


/* Checkout */

const checkoutBtn =
    document.getElementById("checkoutBtn");

if (checkoutBtn) {

    checkoutBtn.addEventListener(
        "click",
        checkout
    );

}


/* Success popup close */

const successCloseBtn =
    document.getElementById("successCloseBtn");

if (successCloseBtn) {

    successCloseBtn.addEventListener(
        "click",
        closeSuccessPopup
    );

}


/* Checkout popup close */

const checkoutCloseBtn =
    document.getElementById("checkoutCloseBtn");

if (checkoutCloseBtn) {

    checkoutCloseBtn.addEventListener(
        "click",
        closeCheckoutPopup
    );

}


/* Popup overlay */

const popupOverlayEl =
    document.getElementById("popupOverlay");

if (popupOverlayEl) {

    popupOverlayEl.addEventListener(
        "click",
        function () {

            closeSuccessPopup();

            closeCheckoutPopup();

        }
    );

}


/* Product details close */

const closeDetailBtn =
    document.getElementById("closeDetailBtn");

if (closeDetailBtn) {

    closeDetailBtn.addEventListener(
        "click",
        closeProductDetail
    );

}


/* Product details overlay */

const detailOverlayEl =
    document.getElementById("detailOverlay");

if (detailOverlayEl) {

    detailOverlayEl.addEventListener(
        "click",
        closeProductDetail
    );

}


/* Checkout form */

const checkoutForm =
    document.getElementById("checkoutForm");

if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        submitCheckoutOrder
    );

    attachLiveValidation(checkoutForm);

}


/* Close checkout form */

const closeCheckoutFormBtn =
    document.getElementById(
        "closeCheckoutFormBtn"
    );

if (closeCheckoutFormBtn) {

    closeCheckoutFormBtn.addEventListener(
        "click",
        closeCheckoutForm
    );

}


/* Checkout form overlay */

const checkoutFormOverlayEl =
    document.getElementById(
        "checkoutFormOverlay"
    );

if (checkoutFormOverlayEl) {

    checkoutFormOverlayEl.addEventListener(
        "click",
        closeCheckoutForm
    );

}


/* Category filter buttons */

document
    .querySelectorAll(".category-btn")
    .forEach(btn => {

        btn.addEventListener(
            "click",
            function () {

                filterCategory(
                    this.dataset.category,
                    this
                );

            }
        );

    });


/* ==================================================
   MOBILE MENU
================================================== */

const menuToggleBtn =
    document.getElementById(
        "menuToggleBtn"
    );

const navLinksEl =
    document.querySelector(
        ".nav-links"
    );

if (menuToggleBtn && navLinksEl) {

    menuToggleBtn.addEventListener(
        "click",
        function () {

            navLinksEl.classList.toggle(
                "open"
            );

            menuToggleBtn.classList.toggle(
                "open"
            );

        }
    );


    navLinksEl
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinksEl.classList.remove(
                        "open"
                    );

                    menuToggleBtn.classList.remove(
                        "open"
                    );

                }
            );

        });

}


/* ==================================================
   CONTACT FORM SUBMIT
================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        sendMessage
    );

    attachLiveValidation(contactForm);

}


/* ==================================================
   NEWSLETTER
================================================== */

const newsletterForm =
    document.getElementById(
        "newsletterForm"
    );

if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const btn =
                newsletterForm.querySelector(
                    "button"
                );

            const originalText =
                btn.textContent;

            btn.textContent =
                "Subscribed ✓";

            newsletterForm.reset();

            setTimeout(
                () => {

                    btn.textContent =
                        originalText;

                },
                2500
            );

        }
    );

}


/* ==================================================
   BACK TO TOP
================================================== */

const backToTopBtn =
    document.getElementById(
        "backToTopBtn"
    );

if (backToTopBtn) {

    window.addEventListener(
        "scroll",
        function () {

            backToTopBtn.classList.toggle(
                "show",
                window.scrollY > 500
            );

        }
    );


    backToTopBtn.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* ==================================================
   ACTIVE NAV LINK
================================================== */

const sectionsForNav =
    ["home", "about", "collections", "contact"]
        .map(id =>
            document.getElementById(id)
        )
        .filter(Boolean);


if (
    sectionsForNav.length &&
    "IntersectionObserver" in window
) {

    const navObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    const link =
                        document.querySelector(
                            `.nav-links a[href="#${entry.target.id}"]`
                        );

                    if (!link) return;

                    if (entry.isIntersecting) {

                        document
                            .querySelectorAll(
                                ".nav-links a"
                            )
                            .forEach(a =>
                                a.classList.remove(
                                    "active"
                                )
                            );

                        link.classList.add(
                            "active"
                        );

                    }

                });

            },
            {
                rootMargin:
                    "-45% 0px -50% 0px"
            }
        );


    sectionsForNav.forEach(section =>
        navObserver.observe(section)
    );

}


/* ==================================================
   SCROLL REVEAL
================================================== */

function setupScrollReveal() {

    if (
        !("IntersectionObserver" in window)
    ) return;


    const revealTargets =
        document.querySelectorAll(
            ".feature-card, .product-card, .testimonial-card, .promo-box, .about-image, .about-text"
        );


    revealTargets.forEach(el =>
        el.classList.add("reveal")
    );


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "in-view"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealTargets.forEach(el =>
        revealObserver.observe(el)
    );

}


/* ==================================================
   ABOUT US LIVE CLOCK
================================================== */

function updateAboutClock() {

    const hourHand = document.getElementById("clockHourHand");
    const minuteHand = document.getElementById("clockMinuteHand");
    const secondHand = document.getElementById("clockSecondHand");

    if (!hourHand || !minuteHand || !secondHand) return;

    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    const secondsDeg = seconds * 6;
    const minutesDeg = minutes * 6 + seconds * 0.1;
    const hoursDeg = hours * 30 + minutes * 0.5;

    hourHand.setAttribute("transform", `rotate(${hoursDeg} 100 100)`);
    minuteHand.setAttribute("transform", `rotate(${minutesDeg} 100 100)`);
    secondHand.setAttribute("transform", `rotate(${secondsDeg} 100 100)`);

}

function initAboutClock() {

    if (!document.getElementById("aboutClock")) return;

    updateAboutClock();

    setInterval(updateAboutClock, 1000);

}


/* ==================================================
   HERO VIDEO — FORCE-PLAY FOR MOBILE
   (some mobile browsers, especially in-app browsers
   like Instagram/Facebook, ignore the HTML autoplay
   attribute and only respond to a JS-triggered play())
================================================== */

function startHeroVideo() {

    const heroVideo = document.getElementById("heroVideo");

    if (!heroVideo) return;

    // Belt-and-braces: make sure muted is set as a JS property too,
    // since some mobile browsers only honor autoplay when the
    // property (not just the HTML attribute) is set before play().
    heroVideo.muted = true;
    heroVideo.playsInline = true;

    const tryPlay = () => {
        const playPromise = heroVideo.play();

        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Autoplay was blocked — retry on the visitor's first
                // touch/click, which mobile browsers always allow.
                const resumeOnInteraction = () => {
                    heroVideo.play().catch(() => {});
                };

                document.addEventListener("touchstart", resumeOnInteraction, { once: true });
                document.addEventListener("click", resumeOnInteraction, { once: true });
            });
        }
    };

    if (heroVideo.readyState >= 2) {
        tryPlay();
    } else {
        heroVideo.addEventListener("loadeddata", tryPlay, { once: true });
    }

    // If the tab/app is backgrounded and the video pauses, resume
    // it automatically when the page becomes visible again.
    document.addEventListener("visibilitychange", function () {
        if (!document.hidden && heroVideo.paused) {
            heroVideo.play().catch(() => {});
        }
    });
}


/* ==================================================
   INITIALIZE WEBSITE
================================================== */

loadProducts();

updateCart();

updateWishlist();

setupScrollReveal();

startHeroVideo();

initAboutClock();