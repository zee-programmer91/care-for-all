from rest_framework import generics
from .models import Patient, Medication, DeliverySchedule
from .serializers import PatientSerializer, MedicationSerializer, DeliveryScheduleSerializer


class PatientListView(generics.ListAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class MedicationListView(generics.ListAPIView):
    queryset = Medication.objects.all()
    serializer_class = MedicationSerializer

class DeliveryScheduleCreateView(generics.CreateAPIView):
    queryset = DeliverySchedule.objects.all()
    serializer_class = DeliveryScheduleSerializer
