from rest_framework import serializers
from .models import HealthWorkerProfile

class HealthWorkerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = HealthWorkerProfile
        fields = [
            'full_name', 'date_of_birth', 'id_number', 'persal_number', 'gender', 'phone_number', 'email', 
            'job_title', 'qualifications', 'license_number', 'clinic_facility_name', 'work_location_address', 
            'working_hours', 'availability', 'emergency_contact_name', 'emergency_contact_phone', 
            'profile_picture', 'languages_spoken', 'years_of_experience', 'special_skills', 'notes'
        ]
