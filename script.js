document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('img');
    
    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    img.addEventListener('touchstart', function(event) {
        isDragging = true;
        const touch = event.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
        const rect = img.getBoundingClientRect();
        initialLeft = rect.left;
        initialTop = rect.top;
        img.style.position = 'absolute'; // Harus menggunakan posisi absolute
        event.preventDefault(); // Mencegah tindakan default untuk sentuhan
    });
    
    img.addEventListener('touchmove', function(event) {
        if (isDragging) {
            const touch = event.touches[0];
            const deltaX = touch.clientX - startX;
            const deltaY = touch.clientY - startY;
            img.style.left = (initialLeft + deltaX) + 'px';
            img.style.top = (initialTop + deltaY) + 'px';
            event.preventDefault(); // Mencegah tindakan default untuk sentuhan
        }
    });
    
    img.addEventListener('touchend', function() {
        isDragging = false;
    });
});