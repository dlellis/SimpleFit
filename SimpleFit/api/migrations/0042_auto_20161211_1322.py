# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-12-11 13:22
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0041_remove_exlist_ecategory'),
    ]

    operations = [
        migrations.DeleteModel(
            name='ExCat',
        ),
        migrations.DeleteModel(
            name='ExList',
        ),
    ]