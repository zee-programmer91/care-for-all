from django.db import models

class HealthWorkerProfile(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other')
    ]
    
    JOB_TITLE_CHOICES = [
        ('nurse', 'Nurse'),
        ('chw', 'Community Health Worker'),
    ]
    
    # Basic Information
    full_name = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    id_number = models.CharField(max_length=50, unique=True)
    persal_number = models.CharField(max_length=50, unique=True, blank=True, null=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    
    # Contact Information
    phone_number = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    
    # Professional Details
    job_title = models.CharField(max_length=50, choices=JOB_TITLE_CHOICES)
    qualifications = models.TextField()
    license_number = models.CharField(max_length=100, blank=True, null=True)
    
    # Work Location
    clinic_facility_name = models.CharField(max_length=255)
    work_location_address = models.CharField(max_length=255, blank=True, null=True)
    
    # Shift Details
    working_hours = models.CharField(max_length=100)
    availability = models.TextField(blank=True, null=True)
    
    # Emergency Contact
    emergency_contact_name = models.CharField(max_length=255)
    emergency_contact_phone = models.CharField(max_length=20)
    
    # Profile Picture
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)

    # Optional Fields
    languages_spoken = models.CharField(max_length=255, blank=True, null=True)
    years_of_experience = models.PositiveIntegerField(blank=True, null=True)
    special_skills = models.TextField(blank=True, null=True)
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.full_name
