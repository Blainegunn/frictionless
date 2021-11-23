export default function init(el) {
    const wrappers = el.children;
    console.log(wrappers);
    Array.from(wrappers).forEach(wrapper => {
        wrapper.classList.add('footer-group');

            // wrapper.children[0].classList = 'faq-content question';
            // wrapper.children[1].classList = 'faq-content answer';
    });

}