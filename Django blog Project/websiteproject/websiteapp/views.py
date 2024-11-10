from django.shortcuts import render

from django.http import HttpResponse

from rest_framework.viewsets import ModelViewSet

from .models import ContactQuery, Blog

from .Serilizer import ContactSerilizer, BlogSerilizer

from rest_framework.permissions import  IsAuthenticated

from rest_framework.authentication import BasicAuthentication

# use modelviewt to perform contact operation
class Contact(ModelViewSet):

    queryset = ContactQuery.objects.all()

    serializer_class = ContactSerilizer


# blog data operation using(modelviewset)
class BlogData(ModelViewSet):

    # queryset = Blog.objects.all()
    # serializer_class = BlogSerilizer
    
    # permission_classes=[IsAuthenticated]
    # authentication_classes=[BasicAuthentication]  
    serializer_class = BlogSerilizer
    def get_queryset(self):
        Catogery=self.request.query_params.get('Catogery',None)
       
        
        if Catogery:
            queryset=Blog.objects.filter(Catogery=Catogery)
        else:
            queryset=Blog.objects.all() 
        return queryset   
    
    
    


# blog data of each post
class EachPost(ModelViewSet):
    queryset = Blog.objects.all()
    



class SearchBlogView(ModelViewSet):
   
    serializer_class = BlogSerilizer
    queryset=Blog.objects.filter(Catogery="Python")
    print(queryset)
      




def home(request):
    return HttpResponse("hello from thers sachin")