export default function init(el) {
    console.log(el);
    if (!localStorage.blainetest) {
        el.style.display = 'block';
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
        console.log('click');
        localStorage.blainetest = true;
        el.style.display = 'none';

    })

}