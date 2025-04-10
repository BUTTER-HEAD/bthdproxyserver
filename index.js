const corsAnywhere = require('cors-anywhere');

corsAnywhere.createServer({
  originWhitelist: [], // 아무 origin이나 허용
  requireHeader: [],
  removeHeaders: ['cookie', 'cookie2']
}).listen(8080, () => {
  console.log('🟢 프록시 서버 실행됨! http://localhost:8080/');
});
