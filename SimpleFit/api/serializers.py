#from rest_framework import serializers
from rest_framework_json_api import serializers
from api.models import *
from django.contrib.auth.models import User
from rest_framework_json_api.relations import ResourceRelatedField

class ClientWorkoutSerializer(serializers.HyperlinkedModelSerializer):
	exercise = ResourceRelatedField(
	#queryset = ClientExercise.objects,
	many=True,
	read_only=True)

	clientprofile = ResourceRelatedField(
		queryset = ClientProfile.objects)
	class Meta:
		model = ClientWorkout
		fields = '__all__'



class ClientExerciseSerializer(serializers.HyperlinkedModelSerializer):
	workout = ResourceRelatedField(
	queryset = ClientWorkout.objects,
	read_only=False)

	class Meta:
		model = ClientExercise
		fields = '__all__'


class ExerciseSerializer(serializers.HyperlinkedModelSerializer):

	category = ResourceRelatedField(
	#queryset = User.objects)
	read_only=True)


	class Meta:
		model = Exercise
		fields = '__all__'


class CategorySerializer(serializers.HyperlinkedModelSerializer):

	exercise = ResourceRelatedField(
	#queryset = User.objects)
	many=True,
	read_only=True)

	class Meta:
		model = Category
		fields = '__all__'

class UserSerializer(serializers.HyperlinkedModelSerializer):
	basicprofile = ResourceRelatedField(

	read_only=True)

	email = serializers.EmailField()


	class Meta:
		model = User
		fields = ('url', 'username', 'email', 'is_staff', 'basicprofile')


class ClientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Client
        fields = ('id','firstname','lastname','service')



class TrainerProfileSerializer(serializers.HyperlinkedModelSerializer):


	trainer = ResourceRelatedField(
		queryset = ClientProfile.objects,
		many = True,
		
		)

	trainerpending = ResourceRelatedField(
	queryset = ClientProfile.objects,
	many = True,
	
	
	)


	class Meta:
		model = TrainerProfile
		fields = '__all__'

class DietitianProfileSerializer(serializers.HyperlinkedModelSerializer):


	dietitian = ResourceRelatedField(
		queryset = ClientProfile.objects,
		many = True,
		
		)

	dietitianpending = ResourceRelatedField(
	queryset = ClientProfile.objects,
	many = True,
	
	
	)


	class Meta:
		model = DietitianProfile
		fields = '__all__'

class BasicProfileSerializer(serializers.HyperlinkedModelSerializer):

	user = ResourceRelatedField(
		#queryset = User.objects)
		read_only=True)

	trainerprofile = ResourceRelatedField(
	#queryset = User.objects)
	read_only=True)

	clientprofile = ResourceRelatedField(
	#queryset = User.objects)
	read_only=True)

	dietitianprofile = ResourceRelatedField(
	#queryset = User.objects)
	read_only=True)

	class Meta:
		model = BasicProfile
		fields = '__all__'
		

class ClientProfileSerializer(serializers.HyperlinkedModelSerializer):

	basicinfo = BasicProfileSerializer(read_only=True)

	trainer = ResourceRelatedField(
		queryset = TrainerProfile.objects,
		allow_null=True,
		)


	trainerpending = ResourceRelatedField(
		queryset = TrainerProfile.objects,
		allow_null=True,
		)

	dietitianpending = ResourceRelatedField(
		queryset = DietitianProfile.objects,
		allow_null=True,
		)

	dietitian = ResourceRelatedField(
		queryset = DietitianProfile.objects,
		allow_null=True,
		)

	workout = ResourceRelatedField(
		read_only=True,
		many=True)

	class Meta:
		model = ClientProfile
		fields = '__all__'


		