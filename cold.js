
// Initialize chart
function initChart() {
    const ctx = document.getElementById('salesChart')?.getContext('2d');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Bottles Sold',
                data: [120, 215, 180, 250, 100, 50, 170],
                backgroundColor: 'rgba(0, 77, 153, 0.7)',
                borderColor: 'rgba(0, 77, 153, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: { y: { beginAtZero: true } }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {

    initChart();
    
    // const urlParams = new URLSearchParams(window.location.search);
    // const message = urlParams.get('message');
    // if (message) {
    //     document.getElementById('loginMessage').textContent = message;
    // }
});