from django.db import models

# Create your models here.
class Patient(models.Model):
    idNumber = models.CharField(max_length=13, null=True)
    firstName = models.CharField(max_length=255, null=True)
    lastName = models.CharField(max_length=255, null=True)
    dateOfBirth = models.CharField(max_length=100, null=True)
    gender = models.CharField(max_length=1, null=True)
    phoneNumber = models.CharField(max_length=15, null=True)
    emailAddress = models.CharField(max_length=100, null=True)
    addressLine1 = models.CharField(max_length=255, null=True)
    addressLine2 = models.CharField(max_length=255, null=True)
    city = models.CharField(max_length=50, null=True)
    postalCode = models.CharField(max_length=4, null=True)
    chronicCondition = models.CharField(max_length=255, null=True)
    allergies = models.CharField(max_length=3000, null=True)
    medications = models.CharField(max_length=3000, null=True)
    contactName = models.CharField(max_length=255, null=True)
    contactNumber = models.CharField(max_length=255, null=True)
    folderName = models.CharField(max_length=100, null=True)
