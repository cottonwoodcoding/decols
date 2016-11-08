class ContactController < ApplicationController
  def index
  end

  def locations
    shop = Location.find_by(loc_type: 'shop')
    office = Location.find_by(loc_type: 'office')
    render json: { shop: shop, office: office }
  end

  def request_info
    contact = params[:contact]
    begin
      ContactMailer.contact(contact[:name], contact[:email], contact[:content]).deliver
      flash[:notice] = "Your message has been sent"
    rescue => e
      logger.error e.message
      flash[:error] = "Something went wrong please try again"
    end
    redirect_to contact_index_path
  end
end
