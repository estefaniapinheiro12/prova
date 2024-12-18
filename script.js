let orderCount = 0;

// Simulated API URLs
const api = {
    getOrders: 'https://example.com/api/orders',
    createOrder: 'https://example.com/api/order',
};

// Function to fetch total orders (GET request simulation)
async function fetchOrders() {
    try {
        // Simulating an API call
        const response = await fetch(api.getOrders);
        const data = await response.json();
        orderCount = data.totalOrders;
        updateOrderCount();
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
}

// Function to create a new order (POST request simulation)
async function createOrder() {
    try {
        // Simulating an API call
        const response = await fetch(api.createOrder, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ dish: 'Delicious Pasta', quantity: 1 }),
        });
        const data = await response.json();
        if (data.success) {
            orderCount++;
            updateOrderCount();
        }
    } catch (error) {
        console.error('Error creating order:', error);
    }
}

// Function to update the order count on the page
function updateOrderCount() {
    document.getElementById('orderCount').textContent = orderCount;
}

// Event listener for the Order button
document.getElementById('orderButton').addEventListener('click', createOrder);

// Initial load: Fetch total orders
fetchOrders();
