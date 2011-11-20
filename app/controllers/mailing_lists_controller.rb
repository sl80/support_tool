class MailingListsController < ApplicationController
  
  #respond_to :json
  
  def index
    @lists = MailingList.full
    @lists = @lists.search(params['search'])  if params['search']
    
    respond_to do |format|  
      format.json { render :json => @lists.all.to_json(:include => [:host, :list_type]) }  
    end
  
  
  end
end