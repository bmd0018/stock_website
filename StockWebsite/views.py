# -*- coding: utf-8 -*-

from django.shortcuts import render
from django.http import HttpResponse
import json


def index(request):
    return render(request, "index.html")
    # template = loader.get_template('index.html')
    # return HttpResponse(template.render({},request))


def openpairs(request):
    return render(request, "openpairs.html")

def tradepairs(request):
    return render(request, "tradepairs.html")

def closepairs(request):
    return render(request, "closepairs.html")

def active(request):
    return render(request, "active.html")

def tradelog(request):
    return render(request, "tradelog.html")

def contact(request):
    return render(request, "contact.html")


