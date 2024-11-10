from django.db import models

from datetime import date

from ckeditor_uploader.fields import RichTextUploadingField 



#user query model 
class ContactQuery(models.Model):
    
    Name=models.CharField(max_length=40)
    Email=models.EmailField(max_length=40)
    Message=models.CharField(max_length=200)
    
    
    def __str__(self):
        return self.Name
    
  
#blog data model  
class Blog(models.Model):
    image=models.ImageField(upload_to='images/')
    title=models.CharField(max_length=200)
    Catogery=models.CharField(max_length=200)
    description=RichTextUploadingField()
    postedDate=models.DateField(default=date.today())
    good_name=models.CharField(max_length=200)
    
    
    def __str__(self):
        return self.title
    
    

#signup(authentication modal)


    
  
      
    
    