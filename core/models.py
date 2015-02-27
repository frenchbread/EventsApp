from django.db import models
from time import time


def get_upload_place(instance, filename):
    return "places/" + str(time()).replace('.', '_') + filename


class Event(models.Model):
    title = models.CharField(max_length=100)
    details = models.TextField(max_length=500)
    bg_pic = models.FileField(upload_to=get_upload_place, default='no-image.jpg')
#   pics_row = ..
    start_time = models.TimeField()
    start_date = models.DateField()
    end_time = models.TimeField()
    end_date = models.DateField()
    timezone = models.CharField(max_length=100, blank=True)
    address = models.CharField(max_length=140)
    lat = models.FloatField(max_length=20, default=0.0)
    lng = models.FloatField(max_length=20, default=0.0)
#   ppl_going = models.ManyToManyField(blank=True, symmetrical=False)
#   tags = ..
    created_at = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.title