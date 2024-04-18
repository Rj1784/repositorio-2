
const http = require('http');
const axios = require('axios')

const server = http.createServer(async (req, res) => {
  if (req.url == '/') {
    try {
      const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(response.data));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Solicitação para API não concluida' }));
    }
  }
});

server.listen(8080, () => {
  console.log("Servidor está rodando na porta 8080")
});

