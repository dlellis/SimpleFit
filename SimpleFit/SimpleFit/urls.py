from django.conf.urls import *
from django.contrib import admin
from api import views



urlpatterns = [
    url(r'^admin/', admin.site.urls),

    #API
    url(r'^api/', include('api.urls')),
    #url(r'^', views.home),
]