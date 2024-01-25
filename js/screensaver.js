 // 设置token失效的时间，单位为毫秒
    const tokenExpirationTime = 300000; // 1分钟

    // 获取上次操作时间
    let lastActionTime = Date.now();

    // 启动定时器检查token是否失效
    const tokenCheckInterval = 60000; // 每隔1分钟检查一次
    const checkTokenInterval = setInterval(() => {
      const currentTime = Date.now();
      if (currentTime - lastActionTime >= tokenExpirationTime) {
        // token失效，弹窗提示用户
        alert("您的会话已超时，请重新登录！");
        
        // 清除定时器，防止重复弹窗
        clearInterval(checkTokenInterval);
        
        // 可以在这里执行其他操作，如跳转到登录页面
        // window.location.href = "index.jsp";
      }
    }, tokenCheckInterval);

    // 监听用户的操作事件，更新上次操作时间
    document.addEventListener("mousemove", () => {
      lastActionTime = Date.now();
    });

    // 在用户登录或者进行其他需要保持登录状态的操作时，重置上次操作时间
    function resetLastActionTime() {
      lastActionTime = Date.now();
    }