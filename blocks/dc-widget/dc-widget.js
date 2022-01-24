const UPLOAD_START = 'file-upload-start';
const PROCESS_START = 'processing-start';
const UPLOAD_COMPLETE = 'file-upload-complete';
const PROCESS_CANCELED = 'processing-cancelled';
const PROCESS_COMPLETE = 'processing-complete';
const DOWNLOAD_START = 'download-start';
const CONVERSION_COM = 'conversion-complete';
const PREVIEW_GEN = 'preview-generating';
const DROPZONE_DIS = 'dropzone-displayed';
const UPSELL_DIS = 'upsell-displayed';

const params = new URLSearchParams(document.location.search)
const timeOutLength = parseInt(params.get('timeoutDC')) || 0;

export default function init(el) {
    //create dropzone w/ better ID
    // Add data attributes to DOC
    setTimeout(() => {
        el.firstChild.classList.add('dc-wrapper');
        el.children[1].classList.add('forward');
        el.children[1].dataset.fwdUrl =  el.children[1].textContent;

        const DC_URL = document.createElement('script');
        DC_URL.id = 'adobe_dc_sdk_launcher';
        DC_URL.setAttribute('src','https://documentcloud.adobe.com/dc-hosted/2.23.2_1.120.8/dc-app-launcher.js');
        // DC_URL.setAttribute('src','https://dc.dev.dexilab.acrobat.com/dc-hosted/2.22.8_1.118.2/dc-app-launcher.js');

        DC_URL.dataset.dropzone_id = 'word-to-pdf';
        DC_URL.dataset.locale  = 'en-us';
        DC_URL.dataset.server_env  = 'dev';
        DC_URL.dataset.verb  = 'word-to-pdf';
        // DC_URL.dataset.verb  = 'pdf-to-word';
        DC_URL.dataset.load_typekit = 'false';
        DC_URL.dataset.load_imslib = 'false';
        el.querySelector('#word-to-pdf').appendChild(DC_URL);

        bottomPadding(el);
        setTimeout (() => {
            personalization(el);
            dcEvents(el);
            signedIn();
            const evt = new CustomEvent("imslib.ready", { detail: { instance: window.adobeIMS }});
            evt.initEvent("imslib.ready", true, true);
            document.dispatchEvent(evt);
            console.log('DC Widget Loaded');
        },2000)

    }, timeOutLength);


}


export function dcEvents(el) {
    window.dc_hosted.addEventListener((e, jobData) => {
        console.log(e);
        if (e === CONVERSION_COM) {
            el.querySelector('.bottom').style.height = '220px';
            document.querySelector('.how-to').style.display = 'none';
            document.querySelector('.faq').style.display = 'none';
                //after conversion make it 220px and animate
                // also hide seo, faq and how to
        }

        //'.-hide-preview'
        if (e === PREVIEW_GEN) {
            const PREVIEW_HIDES = document.querySelectorAll('.-hide-preview');
            PREVIEW_HIDES.forEach( (ele) => {
                ele.classList.add('-hide');
            })
        }
        //'.-show-upsell'
        if (e === UPSELL_DIS) {
            const UPSELL_SHOW = document.querySelectorAll('.-show-upsell');
            UPSELL_SHOW.forEach( (ele) => {
                ele.classList.remove('-hide');
            })
        }
        
    })
}

export function bottomPadding(element) {
    const BOTTOM = document.createElement('div');
    BOTTOM.classList = 'bottom';
    element.appendChild(BOTTOM);

}

export function signedIn() {
    if(adobeIMS && adobeIMS.isSignedInUser()) {
        const R_URL = document.querySelector('[data-fwd-url]').dataset.fwdUrl;
        console.log('R_URL');
        console.log(R_URL);
        window.location.replace(R_URL);
    }
}


export function personalization (element) {
    if (element && window !== 'undefined') {
        const DATA = window.dc_hosted.getUserLimits();
        DATA.then((val) => {
            window.doccloudPersonalization = val;
        });
    }
}


