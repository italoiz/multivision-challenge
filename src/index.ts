import { Letter } from "./letter";

window.onload = function () {
  new Letter().get().then((content) => {
    document.body.innerHTML = `<pre>${JSON.stringify(content, null, 2)}</pre>`;
  });
};
