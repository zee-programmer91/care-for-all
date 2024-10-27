from rest_framework import serializers
from .models import HealthWorkerProfile

class HealthWorkerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = HealthWorkerProfile
        fields = [
            'persalNumber',
            'jobTitle',
            'licenseNumber',
            'fullName',
            'idNumber',
            'dob',
            'gender',
            'phoneNumber',
            'emailAddress', 
        ]
