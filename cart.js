// cart.js - Common Cart System

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add product to cart
function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(product.name + " has been added to your cart!");
}

// Get all cart items
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update quantity of an item
function updateQuantity(id, newQuantity) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity = parseInt(newQuantity) || 1;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

// Clear entire cart after checkout
function clearCart() {
    localStorage.removeItem('cart');
    cart = [];
}