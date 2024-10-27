import string
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
        if request.method == 'POST' and request.data:
            idNumber = request.data['idNumber']
            firstName = request.data['firstName']
            lastName = request.data['lastName']
            dateOfBirth = request.data['dateOfBirth']
            gender = request.data['gender']
            gender = checkGender(gender)
            phoneNumber = request.data['phoneNumber']
            emailAddress = request.data['emailAddress']
            addressLine1 = request.data['addressLine1']
            addressLine2 = request.data['addressLine2']
            city = request.data['city']
            postalCode = request.data['postalCode']
            chronicCondition = request.data['chronicCondition']
            allergies = request.data['allergies']
            medications = request.data['medications']
            emergencyContactName = request.data['contactName']
            emergencyContactNumber = request.data['contactNumber']
            folderName = request.data['folderName']

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
                folderName=folderName,
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
                'folderName': patient.folderName,
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
        if request.method == 'POST' and request.data:
            idNumber = request.data['idNumber']
            patient = get_object_or_404(Patient, idNumber=idNumber)

            idNumber = request.data['idNumber']
            firstName = request.data['firstName']
            lastName = request.data['lastName']
            dateOfBirth = request.data['dateOfBirth']
            gender = request.data['gender']
            gender = checkGender(gender)
            phoneNumber = request.data['phoneNumber']
            emailAddress = request.data['emailAddress']
            addressLine1 = request.data['addressLine1']
            addressLine2 = request.data['addressLine2']
            city = request.data['city']
            postalCode = request.data['postalCode']
            chronicCondition = request.data['chronicCondition']
            allergies = request.data['allergies']
            medications = request.data['medications']
            emergencyContactName = request.data['contactName']
            emergencyContactNumber = request.data['contactNumber']
            folderName = request.data['folderName']

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
            patient.folderName = folderName

            patient.save()
            patient = Patient.objects.get(idNumber=idNumber)
            
            data = {
                'idNumber': patient.idNumber,
                'firstName': patient.firstName,
                'lastName': patient.lastName,
                'dateOfBirth': patient.dateOfBirth,
                'gender': patient.gender,
                'folderName': patient.folderName,
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

def checkGender(value: string):
    genders = {
        'male': 'M',
        'female': 'F',
        'other': 'O'
    }
    if value.lower() in ['male', 'female', 'other']:
        return genders[value.lower()]
    else:
        return 'O'
