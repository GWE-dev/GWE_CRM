# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Psainvestisseurs(models.Model):
    brand = models.CharField(max_length=90)
    commercial_name = models.CharField(max_length=80, blank=True, null=True)
    address = models.CharField(max_length=80)
    address_additional_information = models.CharField(max_length=80, blank=True, null=True)
    zip_code = models.CharField(max_length=20, blank=True, null=True)
    city = models.CharField(max_length=80, blank=True, null=True)
    investisseur = models.CharField(max_length=80, blank=True, null=True)
    nbr_users = models.IntegerField()
    id = models.IntegerField(primary_key=True)

    class Meta:
        managed = False
        db_table = 'psainvestisseurs'






class Utilisateurs(models.Model):

    name = models.CharField(max_length=40, blank=True, null=True)
    lastname = models.CharField(max_length=40, blank=True, null=True)
    password = models.CharField(max_length=40, blank=True, null=True)
    email = models.CharField(max_length=40, blank=True, null=True)    
    permission = models.CharField(max_length=40, blank=True, null=True)    
    commercial_name = models.CharField(max_length=60, blank=True, null=True)
    phone = models.CharField(max_length=40, blank=True, null=True)
    username = models.CharField(max_length=60, blank=True, null=True)
    item_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'utilisateurs'
        
        







class Products(models.Model):

    Photo = models.CharField(max_length=40, blank=True, null=True)
    sku = models.CharField(max_length=40, blank=True, null=True)
    name = models.CharField(max_length=40, blank=True, null=True)
    puissance = models.CharField(max_length=40, blank=True, null=True)    
    dimensions = models.CharField(max_length=60, blank=True, null=True)
    connecteur = models.CharField(max_length=50, blank=True, null=True)
    prix = models.CharField(max_length=60, blank=True, null=True)
    description = models.TextField()

    class Meta:
        managed = False
        db_table = 'products'        
        