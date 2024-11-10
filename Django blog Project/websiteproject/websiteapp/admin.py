from django.contrib import admin
from .models import ContactQuery,Blog



#if you want to show data in admin (ouside)

# class AdminView(admin.ModelAdmin):
#     list_display=('Name','Email','Message')
    

# class Blogview(admin.ModelAdmin):
#     list_display=('title','Catogery','description','postedDate','good_name')    
 

#registered model in admin file    
admin.site.register(ContactQuery)   
admin.site.register(Blog) 
