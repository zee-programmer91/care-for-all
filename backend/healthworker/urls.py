from django.urls import path
from . import views

urlpatterns = [
    path('profiles/', views.HealthWorkerProfileListCreateView.as_view(), name='profile-list-create'),
    path('profiles/<int:pk>/', views.HealthWorkerProfileRetrieveUpdateDestroyView.as_view(), name='profile-detail'),
]
