# Generated by Django 4.1.3 on 2023-06-19 16:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('websiteapp', '0002_rename_aboutquery_contactquery'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contactquery',
            old_name='email',
            new_name='Email',
        ),
        migrations.RenameField(
            model_name='contactquery',
            old_name='message',
            new_name='Message',
        ),
    ]
