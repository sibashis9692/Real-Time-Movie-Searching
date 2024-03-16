from rest_framework import serializers
from Home.models import *

class moviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = "__all__"