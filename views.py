from django.shortcuts import render
from products.models import Product


def product_views(request):
    products = Product.objects.all()
    return render(
        request=request,
        template_name="products.html",
        context={"products": products},
    )


def login_views(request):
    return render(
        request=request,
        template_name="login.html",
    )
