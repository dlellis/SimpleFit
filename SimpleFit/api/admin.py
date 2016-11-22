from django.contrib import admin
from api.models import ClientProfile

# Register your models here.

class ClientAdmin(admin.ModelAdmin):
	pass



admin.site.register(ClientProfile, ClientAdmin)

