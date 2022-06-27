"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from django.contrib import admin
from django.urls import path
from core.views import front
from core.views import project_index
from django.urls import path, include
from core import views
# import routers from the REST framework
# it is necessary for routing
from rest_framework import routers
from core  import views

from core.views import *

# create a router object
router = routers.DefaultRouter()
 
# register the router
router.register(r'tasks',views.PsainvView, 'task')

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", project_index, name="blog_index"),
    #path("", front, name="paper-dashboard-react"),
    # import routers from the REST framework
    # it is necessary for routing
    path('api/', include(router.urls)),
    path('create_note/', createNote, name="note" ), #add this 
    path('delete_note/', delete_note, name="note" ), #delete this
    path('users/', users, name="note" ),
    path('authentification/', authentification ),
    path('products/', products ),
    path('update_password/', update_password ),
    path('concessions/', concessions )
    ]
