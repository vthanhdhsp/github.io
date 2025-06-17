SECRET_KEY = 'fake-key'
DEBUG = True
ALLOWED_HOSTS = ['*']

INSTALLED_APPS = [
    'payloadapp',
]

MIDDLEWARE = [
    'django.middleware.common.CommonMiddleware',
]

ROOT_URLCONF = 'payload_demo.urls'

TEMPLATES = []

WSGI_APPLICATION = 'payload_demo.wsgi.application'