# Generated by Django 3.0.6 on 2020-05-20 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Twitter', '0003_auto_20200519_0034'),
    ]

    operations = [
        migrations.AddField(
            model_name='tweet',
            name='image',
            field=models.ImageField(blank=True, upload_to='images/'),
        ),
    ]
