# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-11-21 21:42
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20161121_2141'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='client',
            name='age',
        ),
        migrations.RemoveField(
            model_name='client',
            name='gender',
        ),
    ]
