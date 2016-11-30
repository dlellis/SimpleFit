from django.shortcuts import render
from api.models import Client, ClientProfile, BasicProfile
from django.contrib.auth.models import User
from rest_framework import viewsets
from api.serializers import UserSerializer, ClientSerializer, ClientProfileSerializer, BasicProfileSerializer
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework_json_api.views import RelationshipView


class Register(APIView):
	permission_classes = (AllowAny,)

	def post(self, request, *args, **kwargs):
		# Login
		username = request.POST.get('username') #you need to apply validators to these
		password = request.POST.get('password') #you need to apply validators to these
		email = request.POST.get('email') #you need to apply validators to these
		gender = request.POST.get('gender') #you need to apply validators to these
		age = request.POST.get('age') #you need to apply validators to these
		firstname = request.POST.get('firstname') #you need to apply validators to these
		lastname = request.POST.get('lastname')
		city = request.POST.get('city') #you need to apply validators to these
		state = request.POST.get('state') #you need to apply validators to these
		cert = request.POST.get('certification')

		print request.POST.get('username')
		if User.objects.filter(username=username).exists():
			return Response({'username': 'Username is taken.', 'status': 'error'})
		elif User.objects.filter(email=email).exists():
			return Response({'email': 'Email is taken.', 'status': 'error'})

		#especially before you pass them in here
		newuser = User.objects.create_user(email=email, username=username, password=password)

		newbasicprofile = BasicProfile(firstname=firstname, lastname=lastname, gender=gender, age=age, city=city, state=state)
		newbasicprofile.save()
		newclientprofile = ClientProfile(user=newuser, basicinfo=newbasicprofile, certification=cert )
		newclientprofile.save()

		return Response({'status': 'success', 'userid': newuser.id, 'basicprofileid': newbasicprofile.id, 'clientprofile': newclientprofile.id})


class Session(APIView):
	permission_classes = (AllowAny,)
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


class ClientProfileViewSet(viewsets.ModelViewSet):
	queryset = ClientProfile.objects.all()
	serializer_class = ClientProfileSerializer
	resource_name = 'clientprofiles'
	
	# def get_queryset(self):
	# 	user = self.request.user
	# 	return ClientProfile.objects.filter(user=user)


# Create your views here.
class BasicProfileViewSet(viewsets.ModelViewSet):
	queryset = BasicProfile.objects.all()
	serializer_class = BasicProfileSerializer
	#resource_name = 'basicinfo'


	# def get_queryset(self):
	# 	user = self.request.user
	# 	return BasicProfile.objects.filter(user=user)


def home(request):
  """
  Send requests to / to the ember.js clientside app  """

  return render(request,'index.html',{})


