let orders = [];
let tableNumber = Math.floor(Math.random() * 50) + 1; // Assign a random table number

function placeOrder(foodName, price) {
    let orderItem = { name: foodName, price: price };
    orders.push(orderItem);
    updateOrderSummary();
}

function updateOrderSummary() {
    let orderSummary = document.getElementById("order-confirmation");
    orderSummary.innerHTML = "<h2>Order Summary</h2>";
    orderSummary.innerHTML += <p><strong>Table Number:</strong> ${tableNumber}</p>;

    let totalAmount = 0;
    let orderList = "<ul>";
    orders.forEach((order, index) => {
        totalAmount += order.price;
        orderList += <li>${order.name} - $${order.price.toFixed(2)} <button onclick="removeItem(${index})">Remove</button></li>;
    });
    orderList += "</ul>";

    orderSummary.innerHTML += orderList;
    orderSummary.innerHTML += <h3>Total: $${totalAmount.toFixed(2)}</h3>;
    orderSummary.innerHTML += <button onclick="confirmOrder()">Confirm Order</button>;
    orderSummary.style.display = "block";
}

function removeItem(index) {
    orders.splice(index, 1);
    updateOrderSummary();
}

function confirmOrder() {
    alert(Order Confirmed!\nTable Number: ${tableNumber}\nTotal: $${calculateTotal().toFixed(2)});
    orders = [];
    updateOrderSummary();
}

function calculateTotal() {
    return orders.reduce((sum, order) => sum + order.price, 0);
}