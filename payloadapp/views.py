from django.http import HttpResponse

def test_payload(request):
    return HttpResponse("""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Payload Demo</title>
    </head>
    <body>
        <h1>Testing Malicious Payload Emulation</h1>
        <script src="/static/payload.js"></script>
    </body>
    </html>
    """, content_type="text/html")
