from django.db import models

class Category(models.Model):
    name = models.TextField(max_length=20)
    description = models.TextField(max_length=200)