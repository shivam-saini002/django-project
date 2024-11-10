
from rest_framework import serializers

from .models import ContactQuery,Blog


#create serilizer file(object to json)
class ContactSerilizer(serializers.ModelSerializer):
    
    class Meta:
        
        model=ContactQuery
        fields='__all__'
        

#create serilizer file(object to json)
class BlogSerilizer(serializers.ModelSerializer):
    class Meta:
        
        model=Blog
        fields='__all__'        

