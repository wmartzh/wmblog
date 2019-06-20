from django.contrib import admin

from .models import Post

#information displayed in admin
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'status','created_on')
    list_filter = ("status",)
    search_fields = ['title', 'content']
    prepopulated_fields = {'slug': ('title',)} # autocreate slug 

admin.site.register(Post,PostAdmin)