from django.db import models

class HealthWorkerProfile(models.Model):
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other')
    ]
    
    JOB_TITLE_CHOICES = [
        ('nurse', 'Nurse'),
        ('doc', 'Doctor'),
        ('ch_worker', 'Community Health Worker'),
    ]
    
    # Basic Information
    persalNumber = models.CharField(max_length=50, unique=True, blank=True, null=True)
    fullName = models.CharField(max_length=255)
    dob = models.DateField()
    idNumber = models.CharField(max_length=50, unique=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    
    # Contact Information
    phoneNumber = models.CharField(max_length=20)
    emailAddress = models.EmailField(unique=True)
    
    # Professional Details
    jobTitle = models.CharField(max_length=50, choices=JOB_TITLE_CHOICES)
    licenseNumber = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.fullName

