from rest_framework import viewsets
from .models import Product
from .serializers import ProductSerializer
from django_filters.rest_framework import DjangoFilterBackend
from django_filters import rest_framework as filters

class ProductFilter(filters.FilterSet):
    category = filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Product
        fields = ['category']

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_class = ProductFilter
   