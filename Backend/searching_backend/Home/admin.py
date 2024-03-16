from django.contrib import admin
from Home.models import *
# Register your models here.

@admin.register(Movies)
class userModel(admin.ModelAdmin):
    list_display = ['Movie_name', 'Release_data']
