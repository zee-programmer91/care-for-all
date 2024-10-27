# Generated by Django 5.1.2 on 2024-10-27 13:32

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Delivery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('delivery_date', models.DateTimeField(blank=True, null=True)),
                ('ship_date', models.DateTimeField(blank=True, null=True)),
                ('status', models.CharField(default='Pending', max_length=50)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='deliveries', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
