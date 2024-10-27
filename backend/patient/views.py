from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse, HttpRequest
from .models import Patient
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
                phoneNumber=phoneNumber,
                emailAddress=emailAddress,
                addressLine1=addressLine1,
                addressLine2=addressLine2,
                city=city,
                postalCode=postalCode,
                chronicCondition=chronicCondition,
                allergies=allergies,
                medications=medications,
                contactName=emergencyContactName,
                contactNumber=emergencyContactNumber,
            )

            patient.save()
            
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
            
            data = {
                'idNumber': patient.idNumber,
                'firstName': patient.firstName,
                'lastName': patient.lastName,
                'dateOfBirth': patient.dateOfBirth,
                'gender': patient.gender,
                'contactInformation': {
                    'phoneNumber': patient.phoneNumber,
                    'emailAddress': patient.emailAddress
                },
                'address': {
                    'addressLine1': patient.addressLine1,
                    'addressLine2': patient.addressLine2,
                    'city': patient.city,
                    'postalCode': patient.postalCode
                },
                'medicalHistory': {
                    'chronicCondition': patient.chronicCondition,
                    'allergies': patient.allergies,
                    'medications': patient.medications
                },
                'emergencyContact': {
                    'firstName': patient.firstName,
                    'contactNumber': patient.contactNumber
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
            patient.phoneNumber = phoneNumber
            patient.emailAddress = emailAddress
            patient.addressLine1 = addressLine1
            patient.addressLine2 = addressLine2
            patient.city = city
            patient.postalCode = postalCode
            patient.chronicCondition = chronicCondition
            patient.allergies = allergies
            patient.medications = medications
            patient.contactName = emergencyContactName
            patient.contactNumber = emergencyContactNumber

            patient.save()
            patient = Patient.objects.get(idNumber=idNumber)
            
            data = {
                'idNumber': patient.idNumber,
                'firstName': patient.firstName,
                'lastName': patient.lastName,
                'dateOfBirth': patient.dateOfBirth,
                'gender': patient.gender,
                'contactInformation': {
                    'phoneNumber': patient.phoneNumber,
                    'emailAddress': patient.emailAddress
                },
                'address': {
                    'addressLine1': patient.addressLine1,
                    'addressLine2': patient.addressLine2,
                    'city': patient.city,
                    'postalCode': patient.postalCode
                },
                'medicalHistory': {
                    'chronicCondition': patient.chronicCondition,
                    'allergies': patient.allergies,
                    'medications': patient.medications
                },
                'emergencyContact': {
                    'firstName': patient.firstName,
                    'contactNumber': patient.contactNumber
                }
            }

            response['status'] = status.HTTP_200_OK
            response['data'] = data
    except Exception as e:
        response['status'] = status.HTTP_500_INTERNAL_SERVER_ERROR
        response['data'] = str(e)
    finally:
        return JsonResponse(response)
