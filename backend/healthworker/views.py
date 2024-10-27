from rest_framework import generics
from .models import HealthWorkerProfile
from .serializers import HealthWorkerProfileSerializer

class HealthWorkerProfileListCreateView(generics.ListCreateAPIView):
    queryset = HealthWorkerProfile.objects.all()
    serializer_class = HealthWorkerProfileSerializer

class HealthWorkerProfileRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = HealthWorkerProfile.objects.all()
    serializer_class = HealthWorkerProfileSerializer
