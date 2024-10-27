from django.contrib import admin
from .models import HealthWorkerProfile

@admin.register(HealthWorkerProfile)
class HealthWorkerProfileAdmin(admin.ModelAdmin):
    list_display = ('fullName', 'jobTitle', 'persalNumber', 'emailAddress')
    search_fields = ('fullName', 'persalNumber', 'emailAddress')

