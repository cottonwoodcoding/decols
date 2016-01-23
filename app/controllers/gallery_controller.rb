class GalleryController < ApplicationController
  def index
    @posts = Instagram.user_recent_media
  end
end
