class LandingController < ApplicationController
  def index
    @messages = Messages.new
  end
end
