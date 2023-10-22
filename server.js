const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 }); // WebSocket 伺服器使用的端口

wss.on('connection', (ws) => {
  console.log('有新的 WebSocket 連線建立');

  ws.on('message', (message) => {
    console.log(`收到消息: ${message}`);

    // 在這裡執行 Bedrock Dedicated Server 腳本所需的操作，例如執行指令或其他功能
    // 可以使用 child_process 模塊與 BDS 互動

    // 例如：
    // const { exec } = require('child_process');
    // exec('bedrock_server_command', (error, stdout, stderr) => {
    //   if (error) {
    //     console.error(`執行指令出錯: ${error}`);
    //     return;
    //   }
    //   console.log(`BDS 回應: ${stdout}`);
    // });
  });
});
