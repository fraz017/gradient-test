class WelcomeController < ApplicationController
  def index
  end

  def gradient
  	@gradient = GradientParam.new(gradient_params)
  	if @gradient.save
  		ActionCable.server.broadcast 'gradient',
	      gradient: @gradient
	    head :ok
  	end

  	respond_to do |format|
  		format.js
  	end
  end

  private

  def gradient_params
    params.require(:gradient_params).permit(:colorType, :gradientType, :position, :topColor, :bottomColor)
  end
end
