from django.conf.urls import url, include
#from rest_framework import routers
from api.views import *
from django.views.decorators.csrf import csrf_exempt
from rest_framework_nested import routers


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'clients', ClientViewSet)
router.register(r'clientprofiles', ClientProfileViewSet)
router.register(r'basicprofiles', BasicProfileViewSet)
router.register(r'trainerprofiles', TrainerProfileViewSet)
router.register(r'dietitianprofiles', DietitianProfileViewSet)
router.register(r'categories',CategoryViewSet)
router.register(r'exercises',ExerciseViewSet)
router.register(r'clientworkouts',ClientWorkoutViewSet)
router.register(r'clientexercises',ClientExerciseViewSet)




# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    
    url(r'^auth/', include('rest_framework.urls', namespace='rest_framework')),
	url(r'^session/', csrf_exempt(Session.as_view())),
	url(r'^tregister', csrf_exempt(Tregister.as_view())),
	url(r'^cregister', csrf_exempt(Cregister.as_view())),
	url(r'^dregister', csrf_exempt(Dregister.as_view())),
	url(r'^', include(router.urls)),

]