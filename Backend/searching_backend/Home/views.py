from django.shortcuts import render
from .models import *
from .serializer import *
from rest_framework.generics import *
from django.db.models import Q
# Create your views here.


class moviesViews(ListAPIView, CreateAPIView):
    queryset = Movies.objects.all()
    serializer_class = moviesSerializer

    def get_queryset(self):
        quearyset = self.kwargs.get('queary')

        data = Movies.objects.filter(Q(Movie_name__icontains = quearyset) | Q(description__icontains = quearyset)).order_by('?')

        return data

    

