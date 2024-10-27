from django.urls import path
from .views import MedicationListView, DeliveryScheduleCreateView

urlpatterns = [
    path('medications/', MedicationListView.as_view(), name='medication-list'),
    path('schedule/', DeliveryScheduleCreateView.as_view(), name='delivery-schedule-create'),
]
