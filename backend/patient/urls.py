from django.urls import path

from . import views

urlpatterns = [
    path("save-patient", views.savePatientInformation, name="save-patient"),
    path("update-patient", views.updatePatientInformation, name="update-patient"),
    path("retrieve-patient", views.retrievePatientInformation, name="retrieve-patient"),
]