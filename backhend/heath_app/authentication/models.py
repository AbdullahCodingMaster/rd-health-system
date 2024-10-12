from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

class CustomUser(AbstractUser):
    # Add any custom fields here
    phone_number = models.CharField(max_length=15, blank=True, null=True)  # Example custom field

    # Set related_name to avoid clashes
    groups = models.ManyToManyField(
        Group,
        related_name='customuser_set',  # Custom related name to avoid conflict
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='customuser_set',  # Custom related name to avoid conflict
        blank=True,
    )

    def __str__(self):
        return self.username
