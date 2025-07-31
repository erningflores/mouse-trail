document.addEventListener('DOMContentLoaded', () => {
    const createTrailElement = (x, y) => {
        const div = document.createElement('div');
        
        div.classList.add('trail');
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
        document.body.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 1000);
    };

    window.addEventListener('mousemove', event => {
        createTrailElement(event.clientX, event.clientY);
    })
});
