from django.core.exceptions import ValidationError
from django.core.validators import *
from rest_framework_json_api import serializers
from rest_framework.response import Response
from django.contrib.auth.models import User

def check_email(value):

	if User.objects.filter(email=value).exists():
		return 'Email is already in use'
	
	try:
		validate_email(value)
		return None


	except ValidationError:
		#raise serializers.ValidationError('not good email')

		return 'Not a valid email'

def check_user(value):
	if User.objects.filter(username=value).exists():
		return 'Username is already in use'
	
def check_password(value):
	#basic password checking
	if len(value) < 8 :
		return 'Password must be at least 8 characters'

	

def check_gender(value):
	choices = ['Male', 'Female', 'Other']
	if value not in choices:
		return 'Not a valid gender'

def check_basic(username,password,email,gender,age,firstname,lastname,city,state):
	x = {}
	email = check_email(email)
	username = check_user(username)
	gender = check_gender(gender)

	if email is not None:
		x['email'] = email

	if username is not None:
		x['username'] = username

	if gender is not None:
		x['gender'] = gender




	#if not empty
	if x:
		x['status'] = 'error'



	return x


