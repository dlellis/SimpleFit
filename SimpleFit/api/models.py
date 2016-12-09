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










class BasicProfile(models.Model):
	trainer = 'trainer'
	dietitian = 'dietitian'
	client = 'client'

	type_choices = (
	(trainer, trainer),
	(dietitian, dietitian),
	(client, client),
	)

	gender_choices = (
		('Male', 'Male'),
		('Female', 'Female'),
		('Other', 'Other'),
		)


	user = models.OneToOneField(User, on_delete=models.CASCADE)
	firstname = models.CharField(max_length=30, default=None)
	lastname = models.CharField(max_length=30, default=None)
	gender = models.CharField(max_length=100, choices=gender_choices, blank=False, default=None)
	age = models.IntegerField(blank=False, default=0)
	city = models.CharField(max_length=200, blank=False, default=None)
	state = models.CharField(max_length=200, blank=False, default=None)
	ip = models.CharField(max_length=200, blank=True,null=True, default=None)
	membertype = models.CharField(max_length=30, choices=type_choices, default=client)


	def __str__(self):
		return self.firstname

	class JSONAPIMeta:
		resource_name = "basicprofile"

class DietitianProfile(models.Model):
	basicinfo = models.OneToOneField(BasicProfile, on_delete=models.CASCADE)
	

	def __str__(self):
		return self.basicinfo.firstname+" "+self.basicinfo.lastname

	class Admin(admin.ModelAdmin):
		list_display = ('user',)

	class JSONAPIMeta:
		resource_name = "dietitianprofiles"
 

class TrainerProfile(models.Model):
	basicinfo = models.OneToOneField(BasicProfile, on_delete=models.CASCADE)
	certification = models.CharField(max_length=30, default=None)
	

	def __str__(self):
		return self.basicinfo.firstname+" "+self.basicinfo.lastname

	class Admin(admin.ModelAdmin):
		list_display = ('user',)

	class JSONAPIMeta:
		resource_name = "trainerprofiles"

class ClientProfile(models.Model):
	basicinfo = models.OneToOneField(BasicProfile, on_delete=models.CASCADE)
	trainer = models.ForeignKey(TrainerProfile,null=True,blank=True, on_delete=models.CASCADE, related_name="trainer")
	dietitian = models.ForeignKey(DietitianProfile,null=True,blank=True, on_delete=models.CASCADE)
	trainerpending = models.ForeignKey(TrainerProfile,null=True,blank=True, on_delete=models.CASCADE, related_name="trainerpending")

	def __str__(self):
		return self.basicinfo.firstname+" "+self.basicinfo.lastname

	class Admin(admin.ModelAdmin):
		list_display = ('trainer',)

	class JSONAPIMeta:
		resource_name = "clientprofile"


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

