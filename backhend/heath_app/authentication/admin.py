from django.contrib import admin
from .models import CustomUser  # Replace CustomUser with your actual model name

# Register your custom user model
admin.site.register(CustomUser)
