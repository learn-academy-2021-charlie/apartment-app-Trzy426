class ApartmentsController < ApplicationController
    def index
        @apartments = Apartment.all
        render json: @apartments
    end

    def create
        @apartment = Apartment.create(apartment_params)
    end

    def update
        apartment = Apartment.find(params[:id])
        apartment.update(apartment_params)
        render json: apartment
    def destroy
        apartment = Apartment.find(params[:id])
        apartment.destroy
        render json:apartment
    
    private
    def apartment_params
        params.require(:apartment).permit(:street, :city, :state, :description, :manager, :email, :price:bedrooms, :bathrooms)
       

end
