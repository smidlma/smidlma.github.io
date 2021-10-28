const inludeHeader = async () => {
    const resp = await fetch('../header.html');
    const html = await resp.text();
    document.querySelector('header').innerHTML = html;
}
const inludeFooter = async () => {
    const resp = await fetch('../footer.html');
    const html = await resp.text();
    document.querySelector('footer').innerHTML = html;
}

inludeHeader();
inludeFooter();