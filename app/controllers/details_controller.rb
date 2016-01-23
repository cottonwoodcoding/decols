class DetailsController < ApplicationController
  def index
    @details = Detail.all
  end

  def create
    detail = Detail.create(detail_params)
    render json: detail
  end

  def destroy
    Detail.find(params[:id]).destroy
    @details = Detail.all
    render 'index'
  end

  private

  def detail_params
    params.require(:detail).permit(:name)
  end
end
