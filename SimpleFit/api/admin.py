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


class ClientExerciseInlineAdmin(admin.TabularInline):
	model = ClientExercise
	fk_name = "workout"

class ClientWorkoutAdmin(admin.ModelAdmin):
	inlines = [ClientExerciseInlineAdmin]

class ExerciseInlineAdmin(admin.TabularInline):
	model = Exercise
	fk_name = "category"

class CategoryAdmin(admin.ModelAdmin):
	inlines = [ExerciseInlineAdmin]

admin.site.register(ClientProfile, ClientAdmin)
admin.site.register(BasicProfile, BasicProfileAdmin)
admin.site.register(TrainerProfile, TrainerProfileAdmin)
admin.site.register(ClientWorkout, ClientWorkoutAdmin)
admin.site.register(Category, CategoryAdmin)
