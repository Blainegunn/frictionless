export default function init(el) {
    //create dropzone w/ better ID
    // Add data attributes to DOC
    el.firstChild.classList = 'dc-wrapepr'
    const DC_URL = document.createElement('script');
    DC_URL.id = 'adobe_dc_sdk_launcher';
    DC_URL.setAttribute('src','https://dc.dev.dexilab.acrobat.com/dc-hosted/2.22.1_1.112.3/dc-app-launcher.js');
    DC_URL.dataset.dropzone_id = 'word-to-pdf';
    DC_URL.dataset.locale  = 'en-us';
    DC_URL.dataset.server_env  = 'dev';
    DC_URL.dataset.verb  = 'word-to-pdf';
    DC_URL.dataset.load_typekit = 'false';
    DC_URL.dataset.load_imslib = 'false';
    el.querySelector('#word-to-pdf').appendChild(DC_URL);

    bottomPadding(el);
    setTimeout (() => {
        personalization(el);

    },1000)

}


export function bottomPadding(element) {
    const BOTTOM = document.createElement('div');
    BOTTOM.classList = 'bottom';
    element.appendChild(BOTTOM);
}

export function personalization (element) {
    if (element && window !== 'undefined') {
        const DATA = window.dc_hosted.getUserLimits();
        DATA.then((val) => {
            window.doccloudPersonalization = val;
        });
    }
}
