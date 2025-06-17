# Django Payload Demo with Safe GitHub Payload

This is a demonstration project for testing security filters such as WAF, CSP, and antivirus software using a simulated script redirection via Google OAuth logout.

## 📁 Project Structure

- `manage.py`: Django entry point
- `payload_demo/`: Django project settings
- `payloadapp/views.py`: Main view serving the payload loader
- `safe-payload.js`: Safe JavaScript payload (non-malicious)
- `README.md`: This file

## 🚀 How It Works

The `/test-payload/` view serves an HTML page that:
- Uses a base64-encoded URL that points to Google's logout page
- Redirects to a GitHub Pages-hosted script `safe-payload.js`
- Loads the JavaScript and executes it in the browser (safe)

## 🔧 How to Use

### 1. Upload the Payload File to GitHub Pages

Create a public GitHub repository named:

```
your-username.github.io
```

Place the `safe-payload.js` file in the root directory.

Enable GitHub Pages in your repository settings (Source: `main`, folder: `/ (root)`).

After a few minutes, your file will be available at:

```
https://your-username.github.io/safe-payload.js
```

### 2. Run the Django Project

```bash
pip install django
python manage.py runserver
```

Visit:
```
http://127.0.0.1:8000/test-payload/
```

Check the browser console. If everything works, you should see:

```
✅ Safe payload loaded from GitHub Pages.
```

## ⚠️ Disclaimer

This project is for **educational and security testing** purposes only.
Do not use or deploy this in any unauthorized or malicious context.