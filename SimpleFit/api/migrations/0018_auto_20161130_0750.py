# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-11-30 07:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0017_auto_20161130_0516'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='basicprofile',
            name='membertype',
        ),
        migrations.AddField(
            model_name='basicprofile',
            name='isClient',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='basicprofile',
            name='isDietitian',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='basicprofile',
            name='isTrainer',
            field=models.BooleanField(default=False),
        ),
    ]