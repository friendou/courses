from rest_framework import serializers

from courses.models import Course

# Serializers define the API representation.
class CourseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Course
        fields = ('anme', 'description', 'courseId')
