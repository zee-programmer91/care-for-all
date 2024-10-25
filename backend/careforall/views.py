from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Create your views here.
def index(request):
    data = {
        'message': "Message From Back End Received",
        'status': 200
    }
    return JsonResponse(data)
