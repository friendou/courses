from django.shortcuts import render
from rest_framework import routers, serializers, viewsets
from coursesapi.serializers import CourseSerializer
from django.contrib.auth.models import User
from courses.models import Course

# Create your views here.

# ViewSets define the view behavior.
class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer