from django.shortcuts import render
from api.models import Client
from django.contrib.auth.models import User
from rest_framework import viewsets
from api.serializers import UserSerializer, ClientSerializer

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer

class ClientViewSet(viewsets.ModelViewSet):
	queryset = Client.objects.all()
	serializer_class = ClientSerializer