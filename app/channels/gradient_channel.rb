class GradientChannel < ApplicationCable::Channel  
  def subscribed
    stream_from 'gradient'
  end
end  