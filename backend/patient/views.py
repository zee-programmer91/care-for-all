from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse, HttpRequest
from .models import Patient, ContactInformation, Address, MedicalHistory, EmergencyContact
from rest_framework.decorators import api_view
from rest_framework import status

@api_view(['POST'])
def addPatientInformation(request: HttpRequest):
    response = {
        'status': status.HTTP_404_NOT_FOUND,
        'data': 'Invalid request method. Use POST method to save patient information.'
    }

    try:
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
            medications = request.POST.get('medications')
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
                'status': status.HTTP_200_OK,
                'data': 'Patient information saved successfully.'
            }
    except Exception as e:
        response['status'] = status.HTTP_500_INTERNAL_SERVER_ERROR
        response['data'] = str(e)
    finally:
        return JsonResponse(response)

@api_view(['GET'])
def getPatientInformation(request: HttpRequest):
    response = {
        'status': status.HTTP_404_NOT_FOUND,
        'data': 'Invalid request method. Use GET method to retrieve Patient information.'
    }

    try:
        if request.method == 'GET':
            idNumber = request.POST.get('idNumber')
            
            patient = Patient.objects.get(idNumber=idNumber)
            contactInformation = ContactInformation.objects.get(idNumber=idNumber)
            address = Address.objects.get(idNumber=idNumber)
            medicalHistory = MedicalHistory.objects.get(idNumber=idNumber)
            emergencyContact = EmergencyContact.objects.get(idNumber=idNumber)
            
            data = {
                'idNumber': patient.idNumber,
                'firstName': patient.firstName,
                'lastName': patient.lastName,
                'dateOfBirth': patient.dateOfBirth,
                'gender': patient.gender,
                'contactInformation': {
                    'phoneNumber': contactInformation.phoneNumber,
                    'emailAddress': contactInformation.emailAddress
                },
                'address': {
                    'addressLine1': address.addressLine1,
                    'addressLine2': address.addressLine2,
                    'city': address.city,
                    'postalCode': address.postalCode
                },
                'medicalHistory': {
                    'chronicCondition': medicalHistory.chronicCondition,
                    'allergies': medicalHistory.allergies,
                    'medications': medicalHistory.medications
                },
                'emergencyContact': {
                    'firstName': emergencyContact.firstName,
                    'contactNumber': emergencyContact.contactNumber
                }
            }
            
            response['status'] = status.HTTP_200_OK
            response['data'] = data
    except Exception as e:
        response['status'] = status.HTTP_500_INTERNAL_SERVER_ERROR
        response['data'] = str(e)
    finally:
        return JsonResponse(response)

@api_view(['POST'])
def updatePatientInformation(request: HttpRequest):
    response = {
        'status': 400,
        'data': 'Invalid request method. Use PUT method to update Patient information.'
    }

    try:
        idNumber = request.POST.get('idNumber')
        patient = get_object_or_404(Patient, idNumber=idNumber)
        contactInformation = get_object_or_404(ContactInformation, idNumber=idNumber)
        address = get_object_or_404(Address, idNumber=idNumber)
        medicalHistory = get_object_or_404(MedicalHistory, idNumber=idNumber)
        emergencyContact = get_object_or_404(EmergencyContact, idNumber=idNumber)

        if request.method == 'POST' and patient.idNumber:
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

            patient.firstName = firstName
            patient.lastName = lastName
            patient.dateOfBirth = dateOfBirth
            patient.gender = gender
            
            contactInformation.phoneNumber = phoneNumber
            contactInformation.emailAddress = emailAddress
            
            address.addressLine1 = addressLine1
            address.addressLine2 = addressLine2
            address.city = city
            address.postalCode = postalCode
            
            medicalHistory.chronicCondition = chronicCondition
            medicalHistory.allergies = allergies
            medicalHistory.medications = medications
            
            emergencyContact.firstName = emergencyContactName
            emergencyContact.contactNumber = emergencyContactNumber

            patient.save()
            contactInformation.save()
            address.save()
            medicalHistory.save()
            emergencyContact.save()
            
            patient = Patient.objects.get(idNumber=idNumber)
            contactInformation = ContactInformation.objects.get(idNumber=idNumber)
            address = Address.objects.get(idNumber=idNumber)
            medicalHistory = MedicalHistory.objects.get(idNumber=idNumber)
            emergencyContact = EmergencyContact.objects.get(idNumber=idNumber)
            
            data = {
                'idNumber': patient.idNumber,
                'firstName': patient.firstName,
                'lastName': patient.lastName,
                'dateOfBirth': patient.dateOfBirth,
                'gender': patient.gender,
                'contactInformation': {
                    'phoneNumber': contactInformation.phoneNumber,
                    'emailAddress': contactInformation.emailAddress
                },
                'address': {
                    'addressLine1': address.addressLine1,
                    'addressLine2': address.addressLine2,
                    'city': address.city,
                    'postalCode': address.postalCode
                },
                'medicalHistory': {
                    'chronicCondition': medicalHistory.chronicCondition,
                    'allergies': medicalHistory.allergies,
                    'medications': medicalHistory.medications
                },
                'emergencyContact': {
                    'firstName': emergencyContact.firstName,
                    'contactNumber': emergencyContact.contactNumber
                }
            }

            response['status'] = status.HTTP_200_OK
            response['data'] = data
    except Exception as e:
        response['status'] = status.HTTP_500_INTERNAL_SERVER_ERROR
        response['data'] = str(e)
    finally:
        return JsonResponse(response)
