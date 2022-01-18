export default function init(el) {

    const images = el.querySelectorAll('picture');
    images.forEach(img => {
        img.parentElement.classList.add('center');
    });

    const wrappers = el.children;
    Array.from(wrappers).forEach(wrapper => {
        wrapper.classList.add('seo-content-wrapper');
    });

    const BOTTOM = document.createElement('div');
    BOTTOM.classList = 'layer';
    el.appendChild(BOTTOM);
    const H = el.clientHeight;
    BOTTOM.style.height = '291px';
}