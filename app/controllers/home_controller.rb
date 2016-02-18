class HomeController < ApplicationController
  def index
  end

  def cover_image
    render json: { path: ActionController::Base.helpers.asset_path("cover-compressor.png") }
  end
end
