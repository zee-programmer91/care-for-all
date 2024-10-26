# Generated by Django 5.1.2 on 2024-10-26 09:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idNumber', models.CharField(max_length=13)),
                ('addressLine1', models.CharField(max_length=255)),
                ('addressLine2', models.CharField(max_length=255)),
                ('city', models.CharField(max_length=50)),
                ('postalCode', models.CharField(max_length=4)),
            ],
        ),
        migrations.CreateModel(
            name='ContactInformation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idNumber', models.CharField(max_length=13)),
                ('phoneNumber', models.CharField(max_length=15)),
                ('emailAddress', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='EmergencyContact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idNumber', models.CharField(max_length=13)),
                ('firstName', models.CharField(max_length=255)),
                ('lastName', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='MedicalHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idNumber', models.CharField(max_length=13)),
                ('chronicCondition', models.CharField(max_length=255)),
                ('allergies', models.CharField(max_length=3000)),
                ('medications', models.CharField(max_length=3000)),
            ],
        ),
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('idNumber', models.CharField(max_length=13)),
                ('firstName', models.CharField(max_length=255)),
                ('lastName', models.CharField(max_length=255)),
                ('gender', models.CharField(max_length=1)),
            ],
        ),
    ]