from django.shortcuts import render
from core.models import *
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from rest_framework.serializers  import *
from rest_framework import viewsets
from django.core import serializers 
from rest_framework.decorators import action
from rest_framework import status
import json

from django.views.decorators.csrf import csrf_exempt

from django.http import JsonResponse 

# import the TodoSerializer from the serializer file
from .serializer import PsaSerializer

def project_index(request):
    _PSA_investisseurs_ = Psainvestisseurs.objects.all()
    context = {"CorePsaInvestisseurs": _PSA_investisseurs_}
    return render(request, "test.html", context)


@csrf_exempt
def authentification(request):
    username = request.POST.get('username')
    password = request.POST.get('password')    
    try:
        user = Utilisateurs.objects.filter(username=username, password=password)
        if not user:
           return JsonResponse({"status": 'error'})
        print(user.values())   
        return JsonResponse({"status": 'Success',"id": user.values('id')[0]['id'],"permission": user.values('permission')[0]['permission']})
    except Utilisateurs.DoesNotExist:
        return JsonResponse({"status": 'error'})


    

@csrf_exempt
def products(request):
    products = Products.objects.all().values()
    return JsonResponse({"status": 'Success', 'products': list(products)})



@csrf_exempt
def createNote(request):
    name = request.POST.get('name')
    lastname = request.POST.get('lastname')
    password = request.POST.get('password')
    email = request.POST.get('email')
    phone = request.POST.get('phone')
    commercial_name = request.POST.get('commercial_name')
    permission = request.POST.get('permission')
    username = request.POST.get('username')
    item_id = request.POST.get('item_id')
    
    psa_inv = Psainvestisseurs.objects.filter(id=item_id)
    nbr_users = psa_inv.values('nbr_users')[0]['nbr_users']
    psa_inv.update(nbr_users=nbr_users+1)
    
    print(nbr_users)
 
    if request.method == 'POST': 
        print(request.POST)
         
    username = username + str(nbr_users+1)+'-U' + str(nbr_users+1)
       
    user = Utilisateurs.objects.create(name=name, lastname=lastname, password=password, email=email, phone=phone, commercial_name=commercial_name, permission=permission, username=username, item_id=item_id)
    #print(user.__dict__)
    results = Utilisateurs.objects.filter(id=user.id).values()
    return JsonResponse({"status": 'Success','results': list(results)})



@csrf_exempt
def delete_note(request):
    id = json.loads(request.body)
    u = Utilisateurs.objects.get(id = id)
    u.delete()
    return JsonResponse({"status": 'Success'})





@csrf_exempt
def users(request):
    data = json.loads(request.body)['data']
    print(data['commercial_name'])
    result = Utilisateurs.objects.filter(commercial_name=data['commercial_name']).values()
    print(result)
    return JsonResponse({"status": 'Success', 'results': list(result)})



@csrf_exempt
def update_password(request):
    id = request.POST.get('id')
    password1 = request.POST.get('password1')
    password2 = request.POST.get('password2')
    user = Utilisateurs.objects.filter(id=id)
    user.update(password=password1)
    print(id,password1,password2)
    return JsonResponse({"status": 'Success'})




@csrf_exempt
def concessions(request):
    id = request.POST.get('id')
    user = Utilisateurs.objects.filter(id=id)
    permission = user.values('permission')[0]['permission']
    item_id = user.values('item_id')[0]['item_id']
    if permission=='Admin':
       results = Psainvestisseurs.objects.all().order_by('id').values()
    else:
       results = Psainvestisseurs.objects.filter(id=item_id).values()
       
    return JsonResponse({"status": 'Success','results': list(results)})


def front(request):
    context = { }
    return render(request, "index.html", context)

# create a class for the Todo model viewsets
class PsainvView(viewsets.ModelViewSet):
    # create a serializer class and
    # assign it to the TodoSerializer class
    serializer_class = PsaSerializer
    # define a variable and populate it
    # with the Todo list objects
    queryset = Psainvestisseurs.objects.all()
    
    def retrieve(self, request, pk=None):
        queryset = Psainvestisseurs.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = PsaSerializer(user)
        return Response(serializer.data)
    
    def get_queryset(self):
        order_by = self.request.GET.get('id')
        print(order_by)
        if order_by is not None:
           return self.queryset.order_by(order_by)
        return self.queryset   
    
    def list(self, request):
        query = request.GET.get('query', None)
        query_set = Psainvestisseurs.objects.all()
        return Response(self.serializer_class(query_set, many=True).data,
                        status=status.HTTP_200_OK)
    
    
class ReactView(APIView):
      
    def get(self, request):
        detail = [ {"name": detail.name,"detail": detail.detail} 
        for detail in React.objects.all()]
        return Response(detail)
  
    def post(self, request):
  
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)
