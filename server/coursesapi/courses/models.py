from django.db import models
from djongo import models
import uuid
from django.contrib.auth.models import User

def generate_id():
    return 10

# Create your models here.
class Textbook(models.Model):
    author = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    
    def __str__(self):
        return "{} - {}".format(self.author, self.title)

class Course(models.Model):
    _id = models.ObjectIdField()
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    courseId = models.IntegerField()
    textbooks = models.ArrayField(
        model_container=Textbook
    )
    
    def __str__(self):
        return "{} - {}".format(self.name, self.courseId)

    def save(self, *args, **kwargs):
        if self.courseId==0:
            self.id = generate_id()

        super(Course, self).save(*args, **kwargs)

    class Meta:
        ordering = ["-courseId"]
