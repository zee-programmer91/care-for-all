# Generated by Django 5.1.2 on 2024-10-26 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='HealthWorkerProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=255)),
                ('date_of_birth', models.DateField()),
                ('id_number', models.CharField(max_length=50, unique=True)),
                ('persal_number', models.CharField(blank=True, max_length=50, null=True, unique=True)),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], max_length=1)),
                ('phone_number', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('job_title', models.CharField(choices=[('nurse', 'Nurse'), ('chw', 'Community Health Worker')], max_length=50)),
                ('qualifications', models.TextField()),
                ('license_number', models.CharField(blank=True, max_length=100, null=True)),
                ('clinic_facility_name', models.CharField(max_length=255)),
                ('work_location_address', models.CharField(blank=True, max_length=255, null=True)),
                ('working_hours', models.CharField(max_length=100)),
                ('availability', models.TextField(blank=True, null=True)),
                ('emergency_contact_name', models.CharField(max_length=255)),
                ('emergency_contact_phone', models.CharField(max_length=20)),
                ('profile_picture', models.ImageField(blank=True, null=True, upload_to='profile_pics/')),
                ('languages_spoken', models.CharField(blank=True, max_length=255, null=True)),
                ('years_of_experience', models.PositiveIntegerField(blank=True, null=True)),
                ('special_skills', models.TextField(blank=True, null=True)),
                ('notes', models.TextField(blank=True, null=True)),
            ],
        ),
    ]
