Rails.application.routes.draw do
  devise_for :admins
  root 'home#index'
  resources :about
  resources :details
  resources :gallery
  resources :contact

  get 'locations', to: 'contact#locations'
end
