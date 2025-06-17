from django.contrib import admin
from django.urls import path
from payloadapp import views

urlpatterns = [
    path('test-payload/', views.test_payload),
]