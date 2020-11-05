class PostsController < ApplicationController

  def index
    @posts = Post.all.order(id: "DESC")
  end

  def create
    post = Post.create(content: params[:content], checked: false)
    #メモ作成時に未読の情報を保存するようにした
    render json:{ post: post }
    #レスポンスをJSONにした
  end

  def checked   #「既読」の操作を行ったときに実行されるアクション #既読機能のサーバー側実装の最後らへんに解説あり
    post = Post.find(params[:id])
    if post.checked 
      post.update(checked: false)
    else
      post.update(checked: true)
    end

    item = Post.find(params[:id])
    render json: { post: item }
  end
end