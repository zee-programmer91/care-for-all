from django.contrib import admin
from .models import Patient

class UserProfileAdmin(admin.ModelAdmin):
    list_display = (
        'idNumber',
        'firstName',
        'lastName',
        'dateOfBirth',
        'gender',
        'phoneNumber',
        'emailAddress',
        'addressLine1',
        'addressLine2',
        'city',
        'postalCode',
        'chronicCondition',
        'allergies',
        'medications',
        'contactName',
        'contactNumber',
    )
    search_fields = ('idNumber', 'emailAddress')
    list_filter = ('gender',)

admin.site.register(Patient, UserProfileAdmin)