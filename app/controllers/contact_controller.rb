class ContactController < ApplicationController
  def index
  end

  def locations
    shop = Location.find_by(loc_type: 'shop')
    office = Location.find_by(loc_type: 'office')
    render json: { shop: shop, office: office }
  end
end
