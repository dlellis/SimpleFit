#from rest_framework import serializers
from rest_framework_json_api import serializers
from api.models import Client, ClientProfile, BasicProfile, TrainerProfile
from django.contrib.auth.models import User
from rest_framework_json_api.relations import ResourceRelatedField, HyperlinkedIdentityField#, NestedHyperlinkedRelatedField
from rest_framework_nested.relations import NestedHyperlinkedRelatedField

class UserSerializer(serializers.HyperlinkedModelSerializer):
	basicprofile = ResourceRelatedField(
	#queryset = User.objects)
	read_only=True)


	class Meta:
		model = User
		fields = ('url', 'username', 'email', 'is_staff', 'basicprofile')


class ClientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Client
        fields = ('id','firstname','lastname','service')

class TrainerProfileSerializer(serializers.HyperlinkedModelSerializer):
	clientprofile_set = ResourceRelatedField(
		#queryset = BasicProfile.objects,
		many = True,
		read_only = True,
		)

	class Meta:
		model = TrainerProfile
		fields = '__all__'

class BasicProfileSerializer(serializers.HyperlinkedModelSerializer):

	user = ResourceRelatedField(
		#queryset = User.objects)
		read_only=True)

	trainerprofile = ResourceRelatedField(
	#queryset = User.objects)
	read_only=True)

	class Meta:
		model = BasicProfile
		fields = '__all__'

class ClientProfileSerializer(serializers.HyperlinkedModelSerializer):


	basicinfo = ResourceRelatedField(
		#queryset = BasicProfile.objects,
		read_only = True,
		)

	trainer = ResourceRelatedField(
		#queryset = BasicProfile.objects,
		read_only = True,
		)


	class Meta:
		model = ClientProfile
		fields = '__all__'