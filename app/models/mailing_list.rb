class MailingList < ActiveRecord::Base
  belongs_to :host
  belongs_to :list_type
  
  class << self
    
    def search(term)
      where('name LIKE ?', "%#{term}%")
    end
    
    def full
      includes [:host, :list_type]
    end
    
  end
  
  
end
