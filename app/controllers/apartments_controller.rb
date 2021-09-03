class ApartmentsController < ApplicationController
    def index
        apartments = Apartment.all
        render json: apartments
    end

    def create
        # :authenticate_user!
        if current_user
            apartment = current_user.apartments.create(apartment_params)
            render json: apartment
        else 
            head 401
        end
        # render json: apartment
    end

    def show
        apartment = Apartment.find(params[:id])
        render json: apartment
    end
    def update
        apartment = Apartment.find(params[:id])
        :authenticate_user!
        if current_user.id == apartment.user_id
            apartment.update(apartment_params)
        else 
            head 401
        end
        render json: apartment
    end

    def destroy
        apartment = Apartment.find(params[:id])
        apartment.destroy
        render json:apartment
    end
    
    private
    def apartment_params
        params.require(:apartment).permit(:street, :city, :state, :description, :manager, :email, :price, :bedrooms, :bathrooms)
    end

end
