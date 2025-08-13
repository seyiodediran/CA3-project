// This will trigger a security hotspot
eval("console.log('Bad practice')");

// src/hotspot_sql_concat.js
const http = require('http');
const mysql = require('mysql2');
const conn = mysql.createConnection({host:'localhost', user:'root', database:'test'});

http.createServer((req, res) => {
  const id = new URL(req.url, 'http://x').searchParams.get('id');
  const q = "SELECT * FROM users WHERE id = " + id; // hotspot: concatenated SQL
  conn.query(q, (err, rows) => res.end(JSON.stringify(rows||[])));
}).listen(3000);


// src/hotspot_insecure_http.js
const fetch = require('node-fetch');
async function sendToken(token) {
  // hotspot: transmitting sensitive data over HTTP
  const r = await fetch('http://example.com/api/tokens', {
    method: 'POST',
    body: JSON.stringify({ token }),
    headers: { 'Content-Type': 'application/json' }
  });
  return r.ok;
}
sendToken('super-secret-token');


ecwecewwecwecwedcwdcwec
weecwecwecwec
