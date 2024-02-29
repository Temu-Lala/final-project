# Generated by Django 5.0.2 on 2024-02-29 13:09

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Photo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='news_photos/')),
            ],
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('video_file', models.FileField(upload_to='news_videos/')),
            ],
        ),
        migrations.CreateModel(
            name='Campus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('admin', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='College',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('admin', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('campus', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.campus')),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.college')),
                ('head', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('students', models.ManyToManyField(blank=True, related_name='enrolled_courses', to=settings.AUTH_USER_MODEL)),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.department')),
            ],
        ),
        migrations.CreateModel(
            name='Lab',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.department')),
                ('lab_assistant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Lecture',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bio', models.TextField(blank=True)),
                ('education', models.CharField(blank=True, max_length=255)),
                ('experience', models.TextField(blank=True)),
                ('skills', models.TextField(blank=True)),
                ('linkedin_profile', models.URLField(blank=True)),
                ('profile_photo', models.ImageField(blank=True, null=True, upload_to='lecture_profile_photos/')),
                ('courses_taught', models.ManyToManyField(blank=True, related_name='lecturers', to='uniconnectapp.course')),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.department')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='course',
            name='lecturer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.lecture'),
        ),
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('content', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('campus', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.campus')),
                ('college', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.college')),
                ('department', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.department')),
                ('photos', models.ManyToManyField(blank=True, related_name='news_photos', to='uniconnectapp.photo')),
            ],
        ),
        migrations.CreateModel(
            name='DepartmentNews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.department')),
                ('news', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.news')),
            ],
        ),
        migrations.CreateModel(
            name='CollegeNews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('college', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.college')),
                ('news', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.news')),
            ],
        ),
        migrations.CreateModel(
            name='CampusNews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('campus', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.campus')),
                ('news', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.news')),
            ],
        ),
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('is_read', models.BooleanField(default=False)),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sent_notifications', to=settings.AUTH_USER_MODEL)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='received_notifications', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('photo', models.ImageField(blank=True, null=True, upload_to='post_photos/')),
                ('video', models.FileField(blank=True, null=True, upload_to='post_videos/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('comments', models.ManyToManyField(blank=True, related_name='post_comments', to='uniconnectapp.comment')),
                ('likes', models.ManyToManyField(blank=True, related_name='post_likes', to=settings.AUTH_USER_MODEL)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='comment',
            name='post',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.post'),
        ),
        migrations.CreateModel(
            name='University',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('location', models.CharField(max_length=255)),
                ('contact', models.CharField(max_length=20)),
                ('description', models.TextField(blank=True)),
                ('founded_year', models.PositiveIntegerField(blank=True, null=True)),
                ('website', models.URLField(blank=True)),
                ('cover_photo', models.ImageField(blank=True, null=True, upload_to='university_covers/')),
                ('admin', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.PositiveIntegerField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('university', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.university')),
            ],
        ),
        migrations.AddField(
            model_name='news',
            name='university',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.university'),
        ),
        migrations.AddField(
            model_name='campus',
            name='university',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.university'),
        ),
        migrations.CreateModel(
            name='UniversityNews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('news', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.news')),
                ('university', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='uniconnectapp.university')),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('achievements', models.TextField()),
                ('projects', models.TextField()),
                ('profile_photo', models.ImageField(upload_to='profile_photos/')),
                ('bio', models.TextField(blank=True)),
                ('education', models.CharField(blank=True, max_length=255)),
                ('work_experience', models.TextField(blank=True)),
                ('skills', models.TextField(blank=True)),
                ('linkedin_profile', models.URLField(blank=True)),
                ('followers', models.ManyToManyField(blank=True, related_name='following', to=settings.AUTH_USER_MODEL)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='news',
            name='videos',
            field=models.ManyToManyField(blank=True, related_name='news_videos', to='uniconnectapp.video'),
        ),
    ]