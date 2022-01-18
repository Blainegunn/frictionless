const params = new URLSearchParams(document.location.search)
const timeOutLength = parseInt(params.get('timeoutMT')) || 0;

export default function init(el) {
    setTimeout(() => {
        const MT_URL = document.createElement('script');
        MT_URL.setAttribute('src','https://www.adobe.com/marketingtech/main.stage.min.js');
        document.getElementsByTagName('head')[0].appendChild(MT_URL);
        console.log('Marketing Tech Loaded');
    }, timeOutLength);
}
