from rest_framework import serializers
from .models import Psainvestisseurs
from . models import *
  
class PsaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Psainvestisseurs    
        fields = ('id',"brand","commercial_name","address", "address_additional_information", "zip_code", "city", "investisseur")