from django.contrib import admin
from api.models import *

# Register your models here.
class ClientProfileInlineAdmin(admin.TabularInline):
    model = ClientProfile
    fk_name = "trainer"

class ClientPendingInlineAdmin(admin.TabularInline):
    model = ClientProfile
    fk_name = "trainerpending"


class ClientAdmin(admin.ModelAdmin):
	pass

class BasicProfileAdmin(admin.ModelAdmin):
	pass

class TrainerProfileAdmin(admin.ModelAdmin):
	inlines = [ClientProfileInlineAdmin]

class ExInlineAdmin(admin.TabularInline):
	model = Ex
	fk_name = "exercise"

class ExCatAdmin(admin.ModelAdmin):
	inlines = [ExInlineAdmin]



admin.site.register(ClientProfile, ClientAdmin)
admin.site.register(BasicProfile, BasicProfileAdmin)
admin.site.register(TrainerProfile, TrainerProfileAdmin)
admin.site.register(ExCat, ExCatAdmin)

