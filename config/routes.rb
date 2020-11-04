Rails.application.routes.draw do
  root to: 'posts#index'
  post 'posts', to: 'posts#create'
  # get 'posts', to: 'posts#checked'   queryパラメーターの書き方
  get 'posts/:id', to: 'posts#checked' #pathパラメーターの書き方
 end