class MailingListsController < ApplicationController
  
  #respond_to :json
  
  def index
    @lists = MailingList.full.all
    
    respond_to do |format|  
      format.json { render :json => @lists.to_json(:include => [:host, :list_type]) }  
    end
    
    
  end
  
  
  
  
end
