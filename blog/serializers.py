from rest_framework import serializers
from .models import Post,User

class PostSerializer(serializers.ModelSerializer):
    _author = get_username()
    class Meta:
        model = Post
        fields = ('id','author','title','content','status','created_on')