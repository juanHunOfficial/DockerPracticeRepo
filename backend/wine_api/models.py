from django.db import models
from django.utils import timezone

class Wine(models.Model):
    wine_name = models.CharField(max_length=255)
    price = models.CharField(max_length=10)
    varietal = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.wine_name