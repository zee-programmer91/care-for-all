from django.db import models

# Create your models here.
class Patient(models.Model):
  idNumber = models.CharField(max_length=13)
  firstName = models.CharField(max_length=255)
  lastName = models.CharField(max_length=255)
  dateOfBirth = models.DateField
  gender = models.CharField(max_length=1)

class ContactInformation(models.Model):
    idNumber = models.CharField(max_length=13)
    phoneNumber = models.CharField(max_length=15)
    emailAddress = models.CharField(max_length=100)

class Address(models.Model):
    idNumber = models.CharField(max_length=13)
    addressLine1 = models.CharField(max_length=255)
    addressLine2 = models.CharField(max_length=255)
    city = models.CharField(max_length=50)
    postalCode = models.CharField(max_length=4)
    
class MedicalHistory(models.Model):
      idNumber = models.CharField(max_length=13)
      chronicCondition = models.CharField(max_length=255)
      allergies = models.CharField(max_length=3000)
      medications = models.CharField(max_length=3000)
      
class EmergencyContact(models.Model):
    idNumber = models.CharField(max_length=13)
    firstName = models.CharField(max_length=255)
    contactNumber = models.CharField(max_length=255)
