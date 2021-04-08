Rails.application.routes.draw do
  get 'landing/index'


  resources :message, only: [:new, :create]

  root 'landing#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
