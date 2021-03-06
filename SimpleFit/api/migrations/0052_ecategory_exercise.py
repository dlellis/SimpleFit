# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-12-11 14:18
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0051_auto_20161211_1417'),
    ]

    operations = [
        migrations.CreateModel(
            name='ECategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('catname', models.CharField(default=None, max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Exercise',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('exname', models.CharField(default=None, max_length=30)),
                ('ecategory', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='exercise', to='api.ECategory')),
            ],
        ),
    ]
