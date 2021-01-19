"""StockWebsite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
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

from views import index,openpairs,tradepairs,closepairs,active,tradelog,contact

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',index,name='index'),
    path('index.html',index,name='index'),
    path('openpairs.html',openpairs,name='openpairs'),
    path('tradepairs.html',tradepairs,name='tradepairs'),
    path('closepairs.html',closepairs,name='closepairs'),
    path('active.html',active,name='active'),
    path('tradelog.html',tradelog,name='tradelog'),
    path('contact',contact,name='contact'),
]
