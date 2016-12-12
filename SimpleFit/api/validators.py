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
	
	# def check_password(value):
	# 	#basic password checking
	# 	if len(value) < 8 :
	# 		return 'Password must be at least 8 characters'

	
def check_gender(value):
	choices = ['Male', 'Female', 'Other']
	if value not in choices:
		return 'Not a valid gender'

def check_age(value):
	try:

		if not value.isdigit():
			return 'Please use a real number for your age'

		if int(value) < 12:
			return 'You must be at least 12 years old. Lie about your age'

		if int(value) > 130:
			return 'You don\'t look a day over 130. Use that for your age.'

	except AttributeError:
		return 'Age cannot be blank'

def check_state(value):
	states = [
	'Alaska','Alabama','Arkansas','Arizona','California','Colorado','Connecticut',
	'District Of Columbia','Delaware','Florida','Georgia', 'Hawaii',
	'Iowa','Idaho','Illinois','Indiana','Kansas','Kentucky','Louisiana','Massachusetts',
	'Maryland','Maine','Michigan','Minnesota','Missouri','Mississippi','Montana',
	'North Carolina','North Dakota','Nebraska','New Hampshire','New Jersey','New Mexico',
	'Nevada','New York','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island',
	'South Carolina','South Dakota','Tennessee','Texas','Utah','Virginia','Vermont',
	'Washington','Wisconsin','West Virginia','Wyoming',
	]
	if value not in states:
		return 'Please pick one of the 50 states'

def check_name(value):
	try:

		if not value.isalpha():
			return 'Please only enter letters for your name'

		if len(value) > 30:
			return 'Your name is too long'

		if len(value) == 0:
			return 'Name cannot be blank'

	except AttributeError:
		return 'A name cannot be blank'

	except TypeError:
		return 'A name cannot be blank'

def check_city(value):
	try:

		if not value.isalpha():
			return 'Please only enter letters for your city'

		if len(value) > 30:
			return 'Your city is too long'

	except AttributeError:
		return 'City cannot be blank'

	except TypeError:
		return 'A name cannot be blank'

def check_pass(value):

	try:

		if len(str(value)) == 0:
			return 'Password cannot be blank'

		if len(value) < 8:
			return 'Password must be at least 8 characters'

		if not any(i.isupper() for i in value):
			return 'Hey, throw an uppercase letter in that password'

		if not any(i.isdigit() for i in value):
			return 'Hey, throw a number in that password'

	except AttributeError:
		return 'Password cannot be blank'

	except TypeError:
		return 'A name cannot be blank'	

def check_basic(username,password,email,gender,age,firstname,lastname,city,state):
	x = {}
	email = check_email(email)
	username = check_user(username)
	gender = check_gender(gender)
	state = check_state(state)
	age = check_age(age)
	firstname = check_name(firstname)
	lastname = check_name(lastname)
	city = check_city(city)
	password = check_pass(password)


	if email is not None:
		x['email'] = email

	if username is not None:
		x['username'] = username

	if gender is not None:
		x['gender'] = gender


	if state is not None:
		x['state'] = state

	if age is not None:
		x['age'] = age	

	if firstname is not None:
		x['firstname'] = firstname

	if lastname is not None:
		x['lastname'] = lastname

	if city is not None:
		x['city'] = city

	if password is not None:
		x['password'] = password

	#if not empty
	if x:
		x['status'] = 'error'


	return x


