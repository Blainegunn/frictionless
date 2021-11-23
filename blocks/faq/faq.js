export default function init(el) {
    const wrappers = el.children;
    Array.from(wrappers).forEach(wrapper => {
        if (wrapper.children.length == 2) {
            wrapper.classList.add('faq-content-wrapper');
            wrapper.children[0].classList = 'faq-content question';
            wrapper.children[1].classList = 'faq-content answer';
        }
    });

}