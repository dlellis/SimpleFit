from django.conf.urls import url, include
from rest_framework import routers
from api.views import Register, UserViewSet, ClientViewSet, Session, ClientProfileViewSet, BasicProfileViewSet
from django.views.decorators.csrf import csrf_exempt



# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'clients', ClientViewSet)
router.register(r'clientprofiles', ClientProfileViewSet)
#router.register(r'basicprofiles', BasicProfileViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    
    url(r'^auth/', include('rest_framework.urls', namespace='rest_framework')),
	url(r'^session/', csrf_exempt(Session.as_view())),
	url(r'^register', csrf_exempt(Register.as_view())),
	url(r'^', include(router.urls)),
]