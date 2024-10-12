from .models import CustomUser  # Import your CustomUser model
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from rest_framework.exceptions import ValidationError

class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True)  # Confirm password field
    phone_number = serializers.CharField(required=False)  # Include phone_number if needed

    class Meta:
        model = CustomUser  # Use the CustomUser model
        fields = ['id', 'username', 'email', 'password', 'password2', 'phone_number']  # Include phone_number if added
        extra_kwargs = {
            'password': {'write_only': True},  # Ensure password is write-only
        }

    # Custom email validation to ensure uniqueness
    def validate_email(self, value):
        if CustomUser.objects.filter(email=value).exists():
            raise serializers.ValidationError("A user with this email already exists.")
        return value

    # Custom validation to ensure passwords match
    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError("Passwords do not match")
        return data

    # Override create method to include password validation
    def create(self, validated_data):
        # Remove password2 from validated data since it won't be stored
        validated_data.pop('password2')

        # Validate password strength using Django's built-in validators
        password = validated_data['password']
        try:
            validate_password(password)
        except ValidationError as e:
            raise serializers.ValidationError({'password': list(e.messages)})

        # Create the user and hash the password automatically
        user = CustomUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=password,
            phone_number=validated_data.get('phone_number', '')  # Include phone_number if provided
        )
        return user
