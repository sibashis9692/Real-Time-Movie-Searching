from django.db import models

# Create your models here.
class Movies(models.Model):
    image_url = models.URLField()
    Movie_name = models.CharField(max_length = 100)
    Release_data = models.CharField(max_length = 100)
    description = models.CharField(max_length = 1000)
