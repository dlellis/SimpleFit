# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-12-11 11:34
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0035_auto_20161211_1133'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ex',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='exercise', to='api.ExCat'),
        ),
    ]
