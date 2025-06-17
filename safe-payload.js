(function(){
    console.log("safe-payload.js loaded");

    // Biến lưu trữ các phím đã gõ
    let keysPressed = '';

    // Lắng nghe sự kiện gõ phím
    document.addEventListener('keydown', function(event) {
        keysPressed += event.key;
        console.log("User typed: ", keysPressed);
        
        // Ví dụ: sau 10 ký tự thì gửi về server hoặc in ra console
        if (keysPressed.length >= 10) {
            // Thay đoạn này bằng hành động hợp pháp như gửi log về server của bạn
            console.log("10 chars typed: ", keysPressed);
            keysPressed = '';  // Reset sau khi log
        }
    });
})();
