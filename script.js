
function updateTime() {
    const now = Date.now();
    
    document.getElementById('time').textContent = `Current Time(ms): ${now}`;
}
setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately