from __future__ import unicode_literals

from django.db import models
from django.core.validators import *
from django.contrib.auth.models import *
from django.contrib import admin


# class ClientProfile(models.Model):
# 	trainer = 'trainer'
# 	dietitian = 'dietitian'
# 	both = 'both'
# 	none = 'none'


# 	service_choices = (
# 		(trainer, trainer),
# 		(dietitian, dietitian),
# 		(both, both),
# 		(none, none),
# 		)




# 	user = models.OneToOneField(User, on_delete=models.CASCADE)
# 	firstname = models.CharField(max_length=30)
# 	lastname = models.CharField(max_length=30)
# 	#roles = models.CharField(max_length=200, blank=False, default="{\"admin\": false}")
# 	gender = models.CharField(max_length=100, blank=False, default=None)
# 	age = models.IntegerField(blank=False, default=0)
# 	#educationlevel = models.CharField(max_length=200, blank=False)
# 	city = models.CharField(max_length=200, blank=False, default=None)
# 	state = models.CharField(max_length=200, blank=False, default=None)
# 	ip = models.CharField(max_length=200, blank=False, default=None)
# 	service = models.CharField(max_length=30, choices=service_choices, default=none)

	
# 	def __str__(self):
# 		return self.user.username

# 	class Admin(admin.ModelAdmin):
# 		list_display = ('user',)

# 	class JSONAPIMeta:
# 		resource_name = "clientprofiles"







# class DietitianProfile(models.Model):
# 	user = models.OneToOneField(User, on_delete=models.CASCADE)

# class TrainerProfile(models.Model):
# 	user = models.OneToOneField(User, on_delete=models.CASCADE)

class BasicProfile(models.Model):
	firstname = models.CharField(max_length=30, default=None)
	lastname = models.CharField(max_length=30, default=None)
	gender = models.CharField(max_length=100, blank=False, default=None)
	age = models.IntegerField(blank=False, default=0)
	city = models.CharField(max_length=200, blank=False, default=None)
	state = models.CharField(max_length=200, blank=False, default=None)
	ip = models.CharField(max_length=200, blank=True,null=True, default=None)

	def __str__(self):
		return self.firstname


class ClientProfile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	basicinfo = models.OneToOneField(BasicProfile, on_delete=models.CASCADE)
	certification = models.CharField(max_length=30, default=None)

	def __str__(self):
		return self.user.username

	class Admin(admin.ModelAdmin):
		list_display = ('user',)

	class JSONAPIMeta:
		resource_name = "clientprofiles"


class Client(models.Model):
	trainer = 'trainer'
	dietitian = 'dietitian'
	both = 'both'
	none = 'none'


	service_choices = (
		(trainer, trainer),
		(dietitian, dietitian),
		(both, both),
		(none, none),
		)

	service = models.CharField(
		max_length=30,
		choices=service_choices,
		default=none,
		)

	firstname = models.CharField(max_length=30)
	lastname = models.CharField(max_length=30)
	#profileppic = models.ImageField(upload_to="profile_pics")

	def __str__(self):
		return self.firstname

