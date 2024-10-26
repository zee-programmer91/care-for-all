from django.urls import path

from . import views

urlpatterns = [
    path("add-patient", views.addPatientInformation, name="add-patient"),
    path("update-patient", views.updatePatientInformation, name="update-patient"),
    path("get-patient", views.getPatientInformation, name="get-patient"),
]