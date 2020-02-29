from django.db import models
import uuid
from django.contrib.auth.models import User

def generate_id():
    return 10

# Create your models here.
class Course(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    courseId = models.IntegerField()
    
    def __str__(self):
        return "{} - {}".format(self.name, self.id)

    def save(self, *args, **kwargs):
        if len(self.courseId.strip(" "))==0:
            self.id = generate_id()

        super(Course, self).save(*args, **kwargs)

    class Meta:
        ordering = ["-courseId"]