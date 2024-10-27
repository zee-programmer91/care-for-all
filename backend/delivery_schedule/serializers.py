from rest_framework import serializers
from .models import Patient, Medication, DeliverySchedule

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['id', 'national_id', 'name', 'contact_number']

class MedicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medication
        fields = ['id', 'name', 'dosage']

class DeliveryScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliverySchedule
        fields = [
            'id', 'patient', 'medicatioName', 'quantity', 'deliveryDate', 'deliveryTime',
            'deliveryStatus', 'sendNotification', 'additionalNotes'
        ]
