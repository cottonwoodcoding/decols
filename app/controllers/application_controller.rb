class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :nav_class, :admin

  def nav_class
    navs = %w(home about gallery contact)
    if navs.include?(params[:controller])
      @nav_class = "#{params[:controller]}-nav"
    else
      @nav_class = 'default-nav'
    end
  end

  def admin
    @admin = admin_signed_in?
  end
end
