from django.db import models
from django.contrib.auth.models import User

class Delivery(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=255)
    status = models.CharField(max_length=50, choices=[('Pending', 'Pending'), ('Delivered', 'Delivered')])
    delivery_date = models.DateTimeField()

    def __str__(self):
        return f"Delivery to {self.address} on {self.delivery_date}"
