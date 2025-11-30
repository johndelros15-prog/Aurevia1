const products = {
    women: [
        {
            id: 'w1',
            name: 'Lataffa Eclaire',
            price: 2700,
            image: 'https://via.placeholder.com/300x400/FFB6C1/white?text=Chloe', 'Lattafa Eclaire is a sweet, creamy fragrance that wraps you in warmth and indulgence. It opens with rich notes of caramel and sugar, melting smoothly into soft milky accords and hints of vanilla. As it settles, gentle musks and creamy woods create a cozy, irresistible trail that feels both comforting and luxurious. Perfect for lovers of gourmand scents, Eclaire is like wearing dessert on your skin—soft, addictive, and unforgettable.',
            
        },
        {
            id: 'w2',
            name: 'Rose Ambre Fragonard',
            price: 3000,
            image: 'https://via.placeholder.com/300x400/FF69B4/white?text=Rose+Ambre',
            description: 'A sophisticated blend of rose and amber for the modern woman',
            notes: 'Top: Bergamot, Pink Pepper. Heart: Rose, Jasmine. Base: Amber, Musk, Vanilla',
            ingredients: 'Alcohol, Parfum, Aqua, Ethylhexyl Methoxycinnamate, Butyl Methoxydibenzoylmethane',
            longevity: '5-7 hours',
            occasion: 'Ideal for office wear, brunch dates, and daytime events'
        },
        {
            id: 'w3',
            name: 'Island Vanilla Dunes',
            price: 2400,
            image: 'https://via.placeholder.com/300x400/FFE4B5/white?text=Vanilla+Dunes',
            description: 'Warm vanilla inspired by tropical island paradise',
            notes: 'Top: Coconut, Bergamot. Heart: Tiare Flower, Jasmine. Base: Vanilla, Sandalwood, Musk',
            ingredients: 'Alcohol Denat, Fragrance, Water, Benzyl Alcohol, Benzyl Benzoate, Coumarin',
            longevity: '4-6 hours',
            occasion: 'Perfect for casual wear, beach trips, and summer days'
        },
        {
            id: 'w4',
            name: 'Velvet Blossom',
            price: 1500,
            image: 'https://via.placeholder.com/300x400/DDA0DD/white?text=Velvet+Blossom',
            description: 'Soft and enchanting floral bouquet',
            notes: 'Top: Peach, Freesia. Heart: Peony, Rose. Base: White Musk, Cedar',
            ingredients: 'Alcohol, Water, Fragrance, Limonene, Linalool, Citronellol',
            longevity: '3-5 hours',
            occasion: 'Great for everyday wear and casual outings'
        },
        {
            id: 'w5',
            name: 'Haya Lattafa',
            price: 3500,
            image: 'https://via.placeholder.com/300x400/E6E6FA/white?text=Haya',
            description: 'Luminous floral blend with gentle sweetness',
            notes: 'Top: Apple, Peach. Heart: Jasmine, Rose. Base: Vanilla, Musk',
            ingredients: 'Alcohol Denat, Parfum, Aqua, Hexyl Cinnamal, Alpha-Isomethyl Ionone',
            longevity: '6-8 hours',
            occasion: 'Perfect for evening wear and special occasions'
        }
    ],
    men: [
        {
            id: 'm1',
            name: 'Horizon Guy Laroche',
            price: 3200,
            image: 'https://via.placeholder.com/300x400/4682B4/white?text=Horizon',
            description: 'Bold journey of citrus and spice for the modern man',
            notes: 'Top: Lemon, Grapefruit, Mint. Heart: Ginger, Jasmine, Pepper. Base: Cedar, Patchouli, Amber',
            ingredients: 'Alcohol Denat, Fragrance, Water, Limonene, Linalool, Citral',
            longevity: '6-8 hours',
            occasion: 'Ideal for business meetings and formal events'
        },
        {
            id: 'm2',
            name: 'Shuhrah Elixir Rasasi',
            price: 3000,
            image: 'https://via.placeholder.com/300x400/8B4513/white?text=Shuhrah',
            description: 'Opulent warmth and gentle sensuality',
            notes: 'Top: Bergamot, Lemon, Lavender. Heart: Rose, Geranium, Cedar. Base: Musk, Amber, Oud',
            ingredients: 'Alcohol, Parfum, Aqua, Citronellol, Coumarin, Evernia Prunastri',
            longevity: '7-9 hours',
            occasion: 'Perfect for evening wear and romantic occasions'
        },
        {
            id: 'm3',
            name: 'Dynasty Lattafa',
            price: 3000,
            image: 'https://via.placeholder.com/300x400/654321/white?text=Dynasty',
            description: 'Sophisticated harmony of deep spices and smooth amber',
            notes: 'Top: Saffron, Cinnamon. Heart: Rose, Amber. Base: Oud, Musk, Vanilla',
            ingredients: 'Alcohol Denat, Fragrance, Water, Eugenol, Cinnamal, Citral',
            longevity: '8-10 hours',
            occasion: 'Best for special occasions and cold weather'
        },
        {
            id: 'm4',
            name: 'Asad Elixir Lattafa',
            price: 3000,
            image: 'https://via.placeholder.com/300x400/2F4F4F/white?text=Asad',
            description: 'Bold, smooth, and unforgettable masculine scent',
            notes: 'Top: Black Pepper, Bergamot. Heart: Lavender, Iris. Base: Vanilla, Amber, Musk',
            ingredients: 'Alcohol, Parfum, Aqua, Limonene, Linalool, Coumarin',
            longevity: '7-9 hours',
            occasion: 'Perfect for date nights and evening events'
        },
        {
            id: 'm5',
            name: 'Club De Nuit Urban',
            price: 2900,
            image: 'https://via.placeholder.com/300x400/191970/white?text=Club+De+Nuit',
            description: 'Striking fusion of vibrant energy and refined warmth',
            notes: 'Top: Lemon, Pineapple, Black Currant. Heart: Rose, Jasmine. Base: Vanilla, Musk, Amber',
            ingredients: 'Alcohol Denat, Fragrance, Water, Alpha-Isomethyl Ionone, Citronellol',
            longevity: '6-8 hours',
            occasion: 'Great for nightlife and social gatherings'
        }
    ],
    unisex: [
        {
            id: 'u1',
            name: 'Eclaire Lattafa',
            price: 2700,
            image: 'https://via.placeholder.com/300x400/FFF8DC/white?text=Eclaire',
            description: 'Creamy sweetness that lingers like a soft, luminous whisper',
            notes: 'Top: Bergamot, Lemon. Heart: Rose, Jasmine. Base: Vanilla, Musk, Amber',
            ingredients: 'Alcohol Denat, Parfum, Aqua, Benzyl Salicylate, Hydroxycitronellal',
            longevity: '5-7 hours',
            occasion: 'Versatile for any occasion and season'
        },
        {
            id: 'u2',
            name: 'Forbidden Fruit',
            price: 2700,
            image: 'https://via.placeholder.com/300x400/DC143C/white?text=Fruit',
            description: 'Delicate yet daring with refined, irresistible charm',
            notes: 'Top: Apple, Black Currant. Heart: Rose, Jasmine. Base: Patchouli, Musk',
            ingredients: 'Alcohol, Fragrance, Water, Hexyl Cinnamal, Limonene, Linalool',
            longevity: '6-8 hours',
            occasion: 'Perfect for both day and night wear'
        },
        {
            id: 'u3',
            name: 'Amber Empire',
            price: 3700,
            image: 'https://via.placeholder.com/300x400/FF8C00/white?text=Amber',
            description: 'Warm, opulent, and irresistibly captivating',
            notes: 'Top: Bergamot, Pink Pepper. Heart: Rose, Jasmine. Base: Amber, Vanilla, Musk',
            ingredients: 'Alcohol Denat, Fragrance, Water, Coumarin, Benzyl Benzoate',
            longevity: '8-10 hours',
            occasion: 'Ideal for formal events and special occasions'
        },
        {
            id: 'u4',
            name: 'Vanilla 01 Swiss Arabian',
            price: 2300,
            image: 'https://via.placeholder.com/300x400/F5DEB3/white?text=Vanilla+01',
            description: 'Rich swirl of velvety vanilla with soft, addictive warmth',
            notes: 'Top: Vanilla, Tonka Bean. Heart: White Flowers. Base: Musk, Sandalwood',
            ingredients: 'Alcohol, Parfum, Aqua, Benzyl Alcohol, Benzyl Cinnamate',
            longevity: '5-7 hours',
            occasion: 'Perfect for cozy evenings and casual wear'
        },
        {
            id: 'u5',
            name: 'Vanilla Aura',
            price: 3000,
            image: 'https://via.placeholder.com/300x400/FAEBD7/white?text=Vanilla+Aura',
            description: 'Gentle whisper of sweetness with irresistible, cozy charm',
            notes: 'Top: Vanilla, Caramel. Heart: White Flowers. Base: Musk, Cedar',
            ingredients: 'Alcohol Denat, Fragrance, Water, Benzyl Salicylate, Linalool',
            longevity: '4-6 hours',
            occasion: 'Great for everyday comfort and relaxation'
        }
    ]
};

// Cart data
let cart = [];
let currentProduct = null;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupCategoryButtons();
    setupModalClose();
    createFallingPerfumes();
});

// Render products
function renderProducts() {
    Object.keys(products).forEach(category => {
        const container = document.getElementById(`${category}-products`);
        container.innerHTML = products[category].map(product => `
            <div class="product-card" onclick="showProductDetails('${category}', '${product.id}')">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <p class="product-price">₱${product.price.toLocaleString()}</p>
                    <button class="add-to-cart" onclick="event.stopPropagation(); addToCart('${category}', '${product.id}')">
                        Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
    });
}

// Category button functionality
function setupCategoryButtons() {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all categories
            document.querySelectorAll('.category-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected category
            const category = this.getAttribute('data-category');
            document.getElementById(category).classList.add('active');
        });
    });
}

// Show product details modal
function showProductDetails(category, productId) {
    const product = products[category].find(p => p.id === productId);
    currentProduct = { ...product, category };
    
    document.getElementById('modal-image').src = product.image;
    document.getElementById('modal-name').textContent = product.name;
    document.getElementById('modal-price').textContent = `₱${product.price.toLocaleString()}`;
    document.getElementById('modal-description').textContent = product.description;
    document.getElementById('modal-notes').textContent = product.notes;
    document.getElementById('modal-ingredients').textContent = product.ingredients;
    document.getElementById('modal-longevity').textContent = product.longevity;
    document.getElementById('modal-occasion').textContent = product.occasion;
    
    document.getElementById('product-modal').style.display = 'block';
}

// Setup modal close functionality
function setupModalClose() {
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

// Add to cart from modal
function addToCartFromModal() {
    if (currentProduct) {
        addToCart(currentProduct.category, currentProduct.id);
        document.getElementById('product-modal').style.display = 'none';
    }
}

// Add to cart
function addToCart(category, productId) {
    const product = products[category].find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartDisplay();
    showNotification('Added to cart!');
}

// Update cart display
function updateCartDisplay() {
    const orderCount = document.getElementById('order-count');
    const ordersList = document.getElementById('orders-list');
    const ordersTotal = document.getElementById('orders-total');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    orderCount.textContent = totalItems;
    
    ordersList.innerHTML = cart.map(item => `
        <div class="order-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="order-details">
                <h4>${item.name}</h4>
                <p>₱${item.price.toLocaleString()}</p>
            </div>
            <div class="order-controls">
                <button onclick="updateQuantity('${item.id}', -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity('${item.id}', 1)">+</button>
                <button class="remove-item" onclick="removeFromCart('${item.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    ordersTotal.textContent = total.toLocaleString();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Toggle orders panel
function toggleOrders() {
    const panel = document.getElementById('orders-panel');
    panel.classList.toggle('show');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    document.getElementById('payment-modal').style.display = 'block';
}

// Close payment modal
function closePaymentModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

// Handle payment form
document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for your order! This is only a demo store.');
    cart = [];
    updateCartDisplay();
    closePaymentModal();
    document.getElementById('orders-panel').classList.remove('show');
});

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #d4a574;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Create falling perfume effect
function createFallingPerfumes() {
    const perfumes = ['🌺', '🌸', '🌷', '🌹', '🌻'];
    const container = document.querySelector('.perfume-fall');
    
    setInterval(() => {
        const perfume = document.createElement('div');
        perfume.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 30 + 20}px;
            left: ${Math.random() * 100}%;
            animation: fall ${Math.random() * 10 + 5}s linear;
        `;
        perfume.textContent = perfumes[Math.floor(Math.random() * perfumes.length)];
        container.appendChild(perfume);
        
        setTimeout(() => perfume.remove(), 15000);
    }, 2000);
}

// Add CSS animation for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
