# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-12-11 01:08
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0025_auto_20161209_1026'),
    ]

    operations = [
        migrations.AddField(
            model_name='dietitianprofile',
            name='specialty',
            field=models.CharField(default=None, max_length=30),
        ),
        migrations.AlterField(
            model_name='clientprofile',
            name='dietitian',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='dietitianpending', to='api.DietitianProfile'),
        ),
    ]