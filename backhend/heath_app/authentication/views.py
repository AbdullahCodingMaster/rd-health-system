from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login, logout
from .serializers import UserSignupSerializer

# Signup View
class SignupView(APIView):
    def post(self, request):
        serializer = UserSignupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Create user
            return Response({"message": "User created successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Simplified Login View
class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        # Authenticate user
        user = authenticate(request, username=username, password=password)

        if user:
            login(request, user)  # Log the user in
            token, created = Token.objects.get_or_create(user=user)  # Generate or get token
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        
        # If authentication fails
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

# Simplified Logout View
class LogoutView(APIView):
    permission_classes = [IsAuthenticated]  # Ensure the user is logged in

    def post(self, request):
        # Delete the token to log the user out
        request.user.auth_token.delete()
        logout(request)  # Django logout
        return Response({"message": "Successfully logged out!"}, status=status.HTTP_200_OK)
