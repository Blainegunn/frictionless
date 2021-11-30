import { config, setupBlocks, loadBlocks, decorateAnchors } from '../../scripts/scripts.js';

async function fetchFragment(path) {
  const resp = await fetch(`${path}.plain.html`);

  if (resp.ok) {
    return resp.text();
  }
  return null;
}

export default async function init(element) {
  const path = element.querySelector('div > div').textContent;
  const html = await fetchFragment(path);
  if (!html) return null;
  element.insertAdjacentHTML('beforeend', html);
  element.querySelector('div').remove();
  const blocks = setupBlocks(element, config);
  await loadBlocks(blocks);
  element.classList.add('is-Visible');
  return decorateAnchors(element);
}
