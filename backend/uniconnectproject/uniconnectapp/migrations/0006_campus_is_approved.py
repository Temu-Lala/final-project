# Generated by Django 5.0.2 on 2024-02-29 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('uniconnectapp', '0005_university_is_approved'),
    ]

    operations = [
        migrations.AddField(
            model_name='campus',
            name='is_approved',
            field=models.BooleanField(default=False),
        ),
    ]
