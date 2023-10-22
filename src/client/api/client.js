const ws = new WebSocket('ws://127.0.0.1:8080'); // 請替換為你的 WebSocket 伺服器地址

ws.onopen = () => {
  console.log('已建立 WebSocket 連線');
};

ws.onmessage = (event) => {
  console.log(`收到伺服器消息: ${event.data}`);
  // 在這裡處理來自伺服器的回應
};

// 發送消息給伺服器
ws.send('你好，BDS伺服器！');
