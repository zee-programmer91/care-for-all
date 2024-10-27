from django.contrib import admin
from .models import Medication, DeliverySchedule

admin.site.register(Medication)
admin.site.register(DeliverySchedule)
