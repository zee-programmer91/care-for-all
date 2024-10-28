from django.contrib import admin
from .models import HealthWorkerProfile

@admin.register(HealthWorkerProfile)
class HealthWorkerProfileAdmin(admin.ModelAdmin):
    list_display = ('persalNumber','jobTitle','licenseNumber','fullName',
                    'idNumber','dob','gender','phoneNumber','emailAddress',)
    search_fields = ('fullName', 'persalNumber', 'emailAddress')

