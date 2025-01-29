async function loadCatalog() {
    try {
        const response = await fetch('/assets/products.json');
        const products = await response.json();
        
        const catalog = document.getElementById('catalog');
        
        for (const [code, product] of Object.entries(products)) {
            const card = document.createElement('div');
            card.className = 'product-card';
            
            card.innerHTML = `
                <img src="/assets/pieces/piece_${code}.png" alt="${product.name}" class="product-image">
                <h3>${product.name}</h3>
                <p class="product-price">${product.price}</p>
            `;
            
            catalog.appendChild(card);
        }
    } catch (error) {
        console.error('Error loading catalog:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadCatalog);