export default function init(el) {
    if (!localStorage.blainetest) {
        el.classList.add('is-Visible');
    }

    const secs = el.querySelectorAll('div');
    secs.forEach(img => {
        img.classList.add('section-ext');
    });


    const closebtn = document.createElement('i');
    closebtn.classList.add('spectrum-close-circle-dark');
    el.appendChild(closebtn);
    closeBtn(el);

}

export function closeBtn(el) {
    const cb = el.querySelector('.spectrum-close-circle-dark')
    cb.addEventListener('click', ()=>{
        localStorage.blainetest = true;
        el.classList.remove('is-Visible');
    })

}