from django.urls import path
from . import views

urlpatterns = [
    path('', views.WinesView.as_view()),
    path('<int:pk>', views.WinesView.as_view())
]
