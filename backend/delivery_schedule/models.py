from django.db import models
from django.contrib.auth import get_user_model

from backend.patient.models import Patient


class Medication(models.Model):
    name = models.CharField(max_length=255)
    dosage = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class DeliverySchedule(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('In Process', 'In Process'),
        ('Completed', 'Completed'),
    ]

    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    medicationName = models.ForeignKey(Medication, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    deliveryDate = models.DateField()
    deliveryTime = models.TimeField()
    deliveryStatus = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')
    sendNotification = models.BooleanField(default=False)
    additionalNotes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Delivery for Patient ID {self.patient.id} on {self.deliveryDate}"