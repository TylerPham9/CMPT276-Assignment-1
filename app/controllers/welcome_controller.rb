class WelcomeController < ApplicationController
    def index
        render :file => 'public/calculator.html'
    end
end
