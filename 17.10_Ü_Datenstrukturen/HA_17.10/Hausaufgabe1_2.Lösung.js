const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<!DOCTYPE html>');
    res.write('<html lang="de">');
    res.write('<head><meta charset="UTF-8"><title>Node.js HTML Ausgabe</title></head>');
    res.write('<body><h1>Willkommen auf meiner Node.js Webseite!</h1>');
    res.write('<p>Dies ist ein Beispiel für HTML-Ausgabe aus Node.js.</p>');
    res.write('</body></html>');
    res.end();
});

server.listen(3000, () => {
    console.log('Server läuft auf http://localhost:3000');
});
