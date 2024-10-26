from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, HttpRequest
from .models import Patient, ContactInformation, Address, MedicalHistory, EmergencyContact

# Create your views here.
def savePatientInformation(request: HttpRequest):
    response = {
        'status': 400,
        'message': 'Invalid request method. Use POST method.'
    }

    if request.method == 'POST':
        idNumber = request.POST.get('idNumber')
        firstName = request.POST.get('firstName')
        lastName = request.POST.get('lastName')
        dateOfBirth = request.POST.get('dateOfBirth')
        gender = request.POST.get('gender')
        phoneNumber = request.POST.get('phoneNumber')
        emailAddress = request.POST.get('emailAddress')
        addressLine1 = request.POST.get('addressLine1')
        addressLine2 = request.POST.get('addressLine2')
        city = request.POST.get('city')
        postalCode = request.POST.get('postalCode')
        chronicCondition = request.POST.get('chronicCondition')
        allergies = request.POST.get('allergies')
        medications = request.POST.get('postalCode')
        emergencyContactName = request.POST.get('emergencyContactName')
        emergencyContactNumber = request.POST.get('emergencyContactNumber')

        patient = Patient(
            idNumber=idNumber,
            firstName=firstName,
            lastName=lastName,
            dateOfBirth=dateOfBirth,
            gender=gender,
        )
        
        contactInformation = ContactInformation(
            idNumber=idNumber,
            phoneNumber=phoneNumber,
            emailAddress=emailAddress
        )
        
        address = Address(
            idNumber=idNumber,
            addressLine1=addressLine1,
            addressLine2=addressLine2,
            city=city,
            postalCode=postalCode
        )
        
        medicalHistory = MedicalHistory(
            idNumber=idNumber,
            chronicCondition=chronicCondition,
            allergies=allergies,
            medications=medications
        )
        
        emergencyContact = EmergencyContact(
            idNumber=idNumber,
            firstName=emergencyContactName,
            contactNumber=emergencyContactNumber,
        )

        patient.save()
        contactInformation.save()
        address.save()
        medicalHistory.save()
        emergencyContact.save()
        
        response = {
            'status': 200,
            'message': 'Patient information saved successfully.'
        }

        return JsonResponse(response)

    return JsonResponse(response)

def retrievePatientInformation(request: HttpRequest):
    data = {
        'message': "Message From Back End Received",
        'status': 200
    }
    return JsonResponse(data)

def updatePatientInformation(request: HttpRequest):
    data = {
        'message': "Message From Back End Received",
        'status': 200
    }
    return JsonResponse(data)