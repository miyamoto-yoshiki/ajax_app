class PostsController < ApplicationController 
  def index   #indexアクションを定義した
    #@post = Post.find(1) #1番目のレコードを@postに代入
    #@hajime = Post.find(2) 
    @posts = Post.all #全てのデータが入っているのがわかりやすい名前にした
  end
  def new
  end
  def create
    Post.create(content:params[:content])
  end

end
