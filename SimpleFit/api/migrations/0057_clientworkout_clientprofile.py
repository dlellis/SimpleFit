# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-12-13 12:39
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0056_auto_20161213_0740'),
    ]

    operations = [
        migrations.AddField(
            model_name='clientworkout',
            name='clientprofile',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='workout', to='api.ClientProfile'),
        ),
    ]
