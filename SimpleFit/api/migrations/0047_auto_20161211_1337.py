# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-12-11 13:37
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0046_auto_20161211_1333'),
    ]

    operations = [
        migrations.CreateModel(
            name='ECategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default=None, max_length=30)),
            ],
        ),
        migrations.AddField(
            model_name='exercise',
            name='ecategory',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='exercise', to='api.ECategory'),
        ),
    ]
