# serializers.py
#un serializador es una conversion, metes un objeto de django y lo convierte a json :000 
from rest_framework import serializers
from .models import Evaluacion
from io import BytesIO
from base64 import b64decode
import openpyxl

class EvaluacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluacion
        fields = ['num_evaluacion', 'agente', 'evaluacion', 'mes', 'anio']

#no es una clase del modelo C:

class ExcelSerializer (serializers.Serializer):
    archivo = serializers.CharField()
    def create(self, validated_data):
        file = BytesIO(b64decode(validated_data["archivo"]))
        libro = openpyxl.load_workbook(file, data_only=True)
        print(libro.worksheets)
        return validated_data
########################################################
#falta cargar los archivos en una tabla :3 