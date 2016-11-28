from django.contrib import admin
from api.models import ClientProfile, BasicProfile

# Register your models here.

class ClientAdmin(admin.ModelAdmin):
	pass

class BasicProfileAdmin(admin.ModelAdmin):
	pass




admin.site.register(ClientProfile, ClientAdmin)
admin.site.register(BasicProfile, BasicProfileAdmin)

