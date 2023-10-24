const startPaymentButton = document.getElementById('start-payment');
const paymentStatus = document.querySelector('.payment-status');

startPaymentButton.addEventListener('click', () => {
    paymentStatus.textContent = 'Processing...';
    startPaymentButton.disabled=true;
    

    simulatePayment()
        .then(() => {
            
            paymentStatus.textContent = 'Payment Successful!';
            startPaymentButton.disabled=false;
            // You can add further UI transitions or animations here.
        })
        .catch(() => {
            paymentStatus.textContent = 'Payment Failed. Please try again.';
            startPaymentButton.disabled=false;
            // You can add further UI transitions or animations here.
        });
});

function simulatePayment() {
    return new Promise((resolve, reject) => {
        // Simulate payment processing with a delay (for demonstration purposes)
        setTimeout(() => {
            const success = Math.random() < 0.5; // Simulate a random success or failure
            
            if (success) {
                resolve();
            } else {
                reject();
            }
        }, 2000); // Simulate a 2-second payment process
    });
}
