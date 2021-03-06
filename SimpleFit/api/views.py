from django.shortcuts import render
from api.models import *
from django.contrib.auth.models import User
from rest_framework import viewsets
from api.serializers import *
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework_json_api.views import RelationshipView
from api.validators import check_basic
from rest_framework_json_api import serializers


class Cregister(APIView):
	permission_classes = (AllowAny,)

	def post(self, request, *args, **kwargs):
		# Login
		username = request.POST.get('username') 
		password = request.POST.get('password') 
		email = request.POST.get('email') 
		gender = request.POST.get('gender') 
		age = request.POST.get('age') 
		firstname = request.POST.get('firstname') 
		lastname = request.POST.get('lastname')
		city = request.POST.get('city') 
		state = request.POST.get('state')
		membertype = 'client'
		

		response = check_basic(username,password,email,gender,age,firstname,lastname,city,state)
		
		#If dictionary is not empty
		if response:
			return Response(response)

		#especially before you pass them in here
		newuser = User.objects.create_user(email=email, username=username, password=password)

		newbasicprofile = BasicProfile(user=newuser, firstname=firstname, lastname=lastname, gender=gender, age=age, city=city, state=state, membertype=membertype)
		newbasicprofile.save()
		newclientprofile = ClientProfile(basicinfo=newbasicprofile)
		newclientprofile.save()

		return Response({'status': 'success', 'userid': newuser.id, 'basicprofileid': newbasicprofile.id, 'clientprofileid': newclientprofile.id})


class Tregister(APIView):
	permission_classes = (AllowAny,)

	def post(self, request, *args, **kwargs):
		# Login
		username = request.POST.get('username') 
		password = request.POST.get('password') 
		email = request.POST.get('email') 
		gender = request.POST.get('gender') 
		age = request.POST.get('age') 
		firstname = request.POST.get('firstname') 
		lastname = request.POST.get('lastname')
		city = request.POST.get('city') 
		state = request.POST.get('state')
		membertype = 'trainer'
		cert = request.POST.get('certification')

		response = check_basic(username,password,email,gender,age,firstname,lastname,city,state)
		
		#If dictionary is not empty
		if response:
			return Response(response)

		#especially before you pass them in here
		newuser = User.objects.create_user(email=email, username=username, password=password)

		newbasicprofile = BasicProfile(user=newuser, firstname=firstname, lastname=lastname, gender=gender, age=age, city=city, state=state, membertype=membertype)
		newbasicprofile.save()
		newtrainerprofile = TrainerProfile(basicinfo=newbasicprofile, certification=cert )
		newtrainerprofile.save()

		return Response({'status': 'success', 'userid': newuser.id, 'basicprofileid': newbasicprofile.id, 'trainerprofileid': newtrainerprofile.id})


class Dregister(APIView):
	permission_classes = (AllowAny,)

	def post(self, request, *args, **kwargs):
		# Login
		username = request.POST.get('username') 
		password = request.POST.get('password') 
		email = request.POST.get('email') 
		gender = request.POST.get('gender') 
		age = request.POST.get('age') 
		firstname = request.POST.get('firstname') 
		lastname = request.POST.get('lastname')
		city = request.POST.get('city') 
		state = request.POST.get('state')
		membertype = 'dietitian'
		specialty = request.POST.get('specialty')

		response = check_basic(username,password,email,gender,age,firstname,lastname,city,state)
		
		#If dictionary is not empty
		if response:
			return Response(response)

		#especially before you pass them in here
		newuser = User.objects.create_user(email=email, username=username, password=password)

		newbasicprofile = BasicProfile(user=newuser, firstname=firstname, lastname=lastname, gender=gender, age=age, city=city, state=state, membertype=membertype)
		newbasicprofile.save()
		newdietitianprofile = DietitianProfile(basicinfo=newbasicprofile, specialty=specialty )
		newdietitianprofile.save()

		return Response({'status': 'success', 'userid': newuser.id, 'basicprofileid': newbasicprofile.id, 'dietitianprofileid': newdietitianprofile.id})





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
class ClientWorkoutViewSet(viewsets.ModelViewSet):
	queryset = ClientWorkout.objects.all()
	serializer_class = ClientWorkoutSerializer	

class ClientExerciseViewSet(viewsets.ModelViewSet):
	queryset = ClientExercise.objects.all()
	serializer_class = ClientExerciseSerializer	

class CategoryViewSet(viewsets.ModelViewSet):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer


class ExerciseViewSet(viewsets.ModelViewSet):
	queryset = Exercise.objects.all()
	serializer_class = ExerciseSerializer


class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer


class ClientViewSet(viewsets.ModelViewSet):
	queryset = Client.objects.all()
	serializer_class = ClientSerializer
	resource_name = 'clients'


class TrainerProfileViewSet(viewsets.ModelViewSet):
	queryset = TrainerProfile.objects.all()
	serializer_class = TrainerProfileSerializer
	resource_name = 'trainerprofiles'



class DietitianProfileViewSet(viewsets.ModelViewSet):
	queryset = DietitianProfile.objects.all()
	serializer_class = DietitianProfileSerializer
	resource_name = 'dietitianprofiles'




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


