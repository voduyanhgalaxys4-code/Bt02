
// Su dung module http
const http = require('http');

// Tao Web Server
const server = http.createServer((req, res) => {

    // Trang chu
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <h1>Xin chao!</h1>
            <p>Ma sinh vien: CDCNTT18A04</p>
        `);
    }

    // Trang gioi thieu
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
            <h1>Gioi thieu ban than</h1>
            <p>Ho ten: Vo Duy Anh</p>
            <p>Ma sinh vien: CDCNTT18A04</p>
            <p>Truong cao dang ky thuat cong nghe Nha Trang</p>
        `);
    }

    // Duong dan khong ton tai
    else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 - Khong tim thay trang</h1>');
    }
});

// Lang nghe tai cong 3000
server.listen(3000, () => {
    console.log('Server dang chay tai http://localhost:3000');
});
