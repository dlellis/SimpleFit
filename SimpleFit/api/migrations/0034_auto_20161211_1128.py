# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-12-11 11:28
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0033_auto_20161211_1103'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='workout',
            name='exercise',
        ),
        migrations.DeleteModel(
            name='Exercise',
        ),
        migrations.DeleteModel(
            name='Workout',
        ),
    ]