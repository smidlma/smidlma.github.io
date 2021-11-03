const inludeFile = async (tagName, file) => {
    const resp = await fetch(file);
    const html = await resp.text();
    document.getElementById(tagName).innerHTML = html;
}

inludeFile('header', '../header.html');
inludeFile('footer', '../footer.html');