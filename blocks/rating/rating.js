import { loadScript, loadStyle } from '../../scripts/scripts.js';
import createTag from '../../utils/tag.js';

export default async function init(el) {
    const path = el.querySelector(':scope > div > div').textContent;
    const reviewMeta = createTag('meta', { name: 'review-path', content: path });
    document.head.append(reviewMeta);
    await loadStyle('/libs/dist/helixreview.css');
    await loadScript('/libs/dist/helixreview.js');
}