# Generated by Django 4.0.4 on 2022-05-18 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BasePsaInvestisseurs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand', models.TextField(blank=True, db_column='Brand', null=True)),
                ('commercial_name', models.TextField(blank=True, db_column='Commercial name', null=True)),
                ('address', models.TextField(blank=True, db_column='Address', null=True)),
                ('address_additional_information', models.TextField(blank=True, db_column='Address additional information', null=True)),
                ('zip_code', models.IntegerField(blank=True, db_column='Zip code', null=True)),
                ('city', models.TextField(blank=True, db_column='City', null=True)),
                ('investisseur', models.TextField(blank=True, db_column='INVESTISSEUR', null=True)),
            ],
            options={
                'db_table': 'base_psa_investisseurs',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='CorePsaInvestisseurs',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=30)),
                ('last_name', models.CharField(max_length=30)),
                ('brand', models.CharField(db_column='Brand', max_length=30)),
                ('commercial_name', models.CharField(db_column='Commercial_name', max_length=30)),
                ('address', models.CharField(db_column='Address', max_length=30)),
                ('address_additional_info', models.CharField(db_column='Address_additional_info', max_length=30)),
                ('zip_code', models.IntegerField(db_column='Zip_code')),
                ('city', models.CharField(db_column='City', max_length=30)),
                ('investisseur', models.CharField(db_column='INVESTISSEUR', max_length=30)),
            ],
            options={
                'db_table': 'core_psa_investisseurs',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DjangoMigrations',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('app', models.CharField(max_length=255)),
                ('name', models.CharField(max_length=255)),
                ('applied', models.DateTimeField()),
            ],
            options={
                'db_table': 'django_migrations',
                'managed': False,
            },
        ),
        migrations.DeleteModel(
            name='PSA_investisseurs',
        ),
    ]