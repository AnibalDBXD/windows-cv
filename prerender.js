const fs = require('fs');
const path = require('path');

const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/client/simple.html'), 'utf-8');

const render = async () => {
  const { render } = await import('./dist/server/simple-server.js');
  return render();
};

render().then(appHtml => {
  const html = template.replace(`<!--app-html-->`, appHtml.html);

  const filePath = `dist/client/simple.html`;
  fs.writeFileSync(toAbsolute(filePath), html);
});
