from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from .serializers import WineSerializer
from .models import Wine


class WinesView(APIView):

    def get(self, request, pk=None):
        if pk:  
            data = Wine.objects.get(pk=pk)
            serializer = WineSerializer(data)
        else:
            data = Wine.objects.all()
            serializer = WineSerializer(data, many=True)
        return Response({"result": serializer.data})

    def post(self, request):
        wine = request.data
        serializer = WineSerializer(data=wine)
        if serializer.is_valid(raise_exception=True):
            wine_saved = serializer.save()
        return Response({"result": f"{wine_saved.wine_name} saved"})

    def put(self, request, pk):
        saved_wine = get_object_or_404(Wine.objects.all(), pk=pk)
        data = request.data
        serializer = WineSerializer(instance=saved_wine, data=data, partial=True)
        if serializer.is_valid(raise_exception=True):
            saved_wine = serializer.save()
        return Response({"result": f"{saved_wine.wine_name} updated"})

    def delete(self, request, pk):
        wine = get_object_or_404(Wine.objects.all(), pk=pk)
        wine.delete()
        return Response({"result": f"Wine id {pk} deleted"},status=204)
