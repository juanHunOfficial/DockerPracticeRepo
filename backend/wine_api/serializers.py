from rest_framework import serializers
from .models import Wine


class WineSerializer(serializers.Serializer):
    wine_name = serializers.CharField(max_length=120)
    price = serializers.CharField()
    varietal = serializers.CharField()
    description = serializers.CharField()
    id = serializers.IntegerField(read_only=True)
    created_at = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        return Wine.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.wine_name = validated_data.get('wine_name', instance.wine_name)
        instance.price = validated_data.get('price', instance.price)
        instance.varietal = validated_data.get('varietal', instance.varietal)
        instance.id = validated_data.get('id', instance.id)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance
