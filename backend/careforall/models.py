from django.db import models

# Create your models here.

# models.py
from django.db import models
from django.contrib.auth.models import User

class Delivery(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='deliveries')
    delivery_date = models.DateTimeField(null=True, blank=True)  # Date and time of delivery
    ship_date = models.DateTimeField(null=True, blank=True)      # Date and time of shipping
    status = models.CharField(max_length=50, default='Pending')  # Status (e.g., Pending, Delivered, etc.)

    def __str__(self):
        return f"Delivery for {self.user.username} - Status: {self.status}"

