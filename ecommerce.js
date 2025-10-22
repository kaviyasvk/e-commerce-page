// Product images
const productImages = [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&h=800&fit=crop'
];

let currentImageIndex = 0;
let quantity = 1;
let selectedColor = 'silver';

// Change main product image
function changeImage(index) {
    currentImageIndex = index;
    const mainImage = document.getElementById('mainImage');
    mainImage.src = productImages[index];

    // Update thumbnail active state
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Increase quantity
function increaseQuantity() {
    quantity++;
    document.getElementById('quantity').textContent = quantity;
}

// Decrease quantity
function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').textContent = quantity;
    }
}

// Select color
function selectColor(button) {
    // Remove active class from all color buttons
    const colorButtons = document.querySelectorAll('.color-btn');
    colorButtons.forEach(btn => btn.classList.remove('active'));

    // Add active class to clicked button
    button.classList.add('active');
    selectedColor = button.getAttribute('data-color');
}

// Add to cart
function addToCart() {
    showToast(`Added to cart! ${quantity} item(s) added to your shopping cart.`);
    console.log('Added to cart:', {
        quantity: quantity,
        color: selectedColor,
        price: 299.99
    });
}

// Add to wishlist
function addToWishlist() {
    showToast('Added to wishlist! Product saved to your wishlist.');
    console.log('Added to wishlist');
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('E-commerce Product Page Loaded');
    console.log('Task 2: E-commerce Product Page - HTML, CSS, JavaScript');
});
