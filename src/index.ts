import { Letter } from "./letter";

const refreshButton = document.getElementById('refresh-btn');
const contentElement = document.getElementById('result');
const letter = new Letter();

function preBlock(content: string): string {
  return `<pre>${content}</pre>`;
}

function getLetter() {
  return letter.get().then(content => JSON.stringify(content, null, 2));
}

async function fillContentEl() {
  if (!!contentElement) {
    contentElement.innerHTML = preBlock(await getLetter());
  }
}

window.onload = fillContentEl;

refreshButton?.addEventListener('click', fillContentEl);
