# Generated by Django 4.0.4 on 2022-05-18 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PSA_investisseurs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('Brand', models.CharField(max_length=30)),
                ('Commercial_name', models.CharField(max_length=30)),
                ('Address', models.CharField(max_length=30)),
                ('Address_additional_info', models.CharField(max_length=30)),
                ('Zip_code', models.IntegerField()),
                ('City', models.CharField(max_length=30)),
                ('INVESTISSEUR', models.CharField(max_length=30)),
            ],
        ),
    ]
