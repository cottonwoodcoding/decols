Rails.application.routes.draw do
  devise_for :admins
  root 'home#index'
  resources :about
  resources :details
  resources :gallery
  resources :contact

  get 'locations', to: 'contact#locations'
  post 'contact_request', to: 'contact#request_info'
end
