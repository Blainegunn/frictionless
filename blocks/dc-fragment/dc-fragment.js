import { config, setupBlocks, loadBlocks, decorateAnchors } from '../../scripts/scripts.js';

async function fetchFragment(path) {
  const resp = await fetch(`${path}.plain.html`);

  if (resp.ok) {
    return resp.text();
  }
  return null;
}
//change naming :)
export default async function init(element) {
  const box = element.children;

  Array.from(box).forEach(
    async (v, index) => {
    const PATH = v.querySelectorAll('div')[1].textContent;
    const STATUS = v.querySelectorAll('div')[0].textContent;
    element.lastElementChild.classList.add(STATUS)

    const path = PATH;
    const html = await fetchFragment(path);
    if (!html) return null;
    element.insertAdjacentHTML('beforeend', html);
    element.lastElementChild.classList.add('dc-variation');
    element.lastElementChild.classList.add(STATUS);
    element.lastChild.classList.add(STATUS)

    element.querySelector('div').remove();
    const blocks = setupBlocks(element, config);
    await loadBlocks(blocks);
    element.classList.add('is-Visible');
    return decorateAnchors(element);
  })

  setTimeout(() => {
    hideShow(box);
  }, 5000);

}


export function hideShow(sections) {
  const CAN_CREATE = doccloudPersonalization.create_pdf.can_process;
  const HAS_CREATED = doccloudPersonalization.create_pdf.has_processed;

  if (CAN_CREATE && HAS_CREATED) {
    Array.from(sections).forEach((item, index) => {
      item.classList.add('hide')
      if(item.classList.contains('returning')) {
        console.log('returning');
        item.classList.remove('hide')
        item.classList.add('show');
      }
    })
  }
}