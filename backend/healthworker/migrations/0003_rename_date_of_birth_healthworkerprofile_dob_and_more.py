# Generated by Django 5.1.2 on 2024-10-26 18:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('healthworker', '0002_remove_healthworkerprofile_availability_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='healthworkerprofile',
            old_name='date_of_birth',
            new_name='dob',
        ),
        migrations.RenameField(
            model_name='healthworkerprofile',
            old_name='email',
            new_name='emailAddress',
        ),
        migrations.RenameField(
            model_name='healthworkerprofile',
            old_name='full_name',
            new_name='fullName',
        ),
        migrations.RenameField(
            model_name='healthworkerprofile',
            old_name='id_number',
            new_name='idNumber',
        ),
        migrations.RenameField(
            model_name='healthworkerprofile',
            old_name='job_title',
            new_name='jobTitle',
        ),
        migrations.RenameField(
            model_name='healthworkerprofile',
            old_name='license_number',
            new_name='licenseNumber',
        ),
        migrations.RenameField(
            model_name='healthworkerprofile',
            old_name='persal_number',
            new_name='persalNumber',
        ),
        migrations.RenameField(
            model_name='healthworkerprofile',
            old_name='phone_number',
            new_name='phoneNumber',
        ),
        migrations.AlterField(
            model_name='healthworkerprofile',
            name='gender',
            field=models.CharField(choices=[('m', 'male'), ('f', 'female'), ('o', 'other')], max_length=1),
        ),
    ]