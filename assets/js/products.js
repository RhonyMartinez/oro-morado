// Cargar productos
async function fetchProducts() {
  const loadingSpinner = document.getElementById('loading-spinner');
  const productGrid = document.getElementById('product-grid');
  const noProducts = document.getElementById('no-products');

  loadingSpinner.classList.remove('hidden');
  productGrid.classList.add('hidden');
  noProducts.classList.add('hidden');

  try {
    const response = await fetch('assets/data/products.json'); // Ruta local
    const products = await response.json();

    loadingSpinner.classList.add('hidden');

    if (!products || products.length === 0) {
      noProducts.classList.remove('hidden');
      return;
    }

    productGrid.innerHTML = '';

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'bg-white rounded-lg overflow-hidden shadow-md';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="w-full aspect-square object-cover">
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-800">${product.name}</h3>
          <p class="text-gray-600 text-sm mt-2">${product.description}</p>
        </div>
      `;
      productGrid.appendChild(card);
    });

    productGrid.classList.remove('hidden');
  } catch (err) {
    console.error('Error cargando productos:', err);
    loadingSpinner.classList.add('hidden');
    noProducts.classList.remove('hidden');
  }
}

document.addEventListener('DOMContentLoaded', fetchProducts);