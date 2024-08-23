from rest_framework import viewsets
from .models import Product
from .serializers import ProductSerializer
from rest_framework.filters import SearchFilter

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [SearchFilter]
    search_fields = ['category']