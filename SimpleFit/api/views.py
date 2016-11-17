from django.shortcuts import render
from api.models import Client
from django.contrib.auth.models import User
from rest_framework import viewsets
from api.serializers import UserSerializer, ClientSerializer
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login, logout
from rest_framework import status

class Session(APIView):
	permission_classes = (permissions.AllowAny,)
	def form_response(self, isauthenticated, userid, username, error=""):
		data = {
			'isauthenticated': isauthenticated,
			'userid': userid,
			'username': username
		}
		if error:
			data['message'] = error

		return Response(data)

	def get(self, request, *args, **kwargs):
		# Get the current user
		if request.user.is_authenticated():
			return self.form_response(True, request.user.id, request.user.username)
		return self.form_response(False, None, None)

	def post(self, request, *args, **kwargs):
		# Login
		username = request.POST.get('username')
		password = request.POST.get('password')
		user = authenticate(username=username, password=password)
		if user is not None:
			if user.is_active:
				login(request, user)
				return self.form_response(True, user.id, user.username)
			return self.form_response(False, None, None, "Account is suspended")
		return self.form_response(False, None, None, "Invalid username or password")

	def delete(self, request, *args, **kwargs):
		# Logout
		logout(request)
		return Response(status=status.HTTP_204_NO_CONTENT)



# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer

class ClientViewSet(viewsets.ModelViewSet):
	queryset = Client.objects.all()
	serializer_class = ClientSerializer
	resource_name = 'clients'


def home(request):
  """
  Send requests to / to the ember.js clientside app  """

  return render(request,'index.html',{})


