#from rest_framework import serializers
from rest_framework_json_api import serializers
from api.models import Client
from django.contrib.auth.models import User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')


# class ClientSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Client
#         fields = ('id','firstname','lastname','gender','age','city','state','ip','service',)

class ClientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Client
        fields = ('id','firstname','lastname','service')