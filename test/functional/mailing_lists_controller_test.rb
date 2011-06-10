require 'test_helper'

class MailingListsControllerTest < ActionController::TestCase
  # Replace this with your real tests.
  test "should get all lists" do
    
    get :index, {:format => 'json'}
    assert_response :success
    
    lists = JSON.parse(@response.body)
    
    assert_equal 3, lists.count
    assert_equal "AG innere Sicherheit", lists[0]['name']
  end
  
  test "should do search by name" do
    
    get :index, {:format => 'json', :search => 'AG'}
    assert_response :success
    
    lists = JSON.parse(@response.body)
    
    assert_equal 1, lists.count
    assert_equal "AG innere Sicherheit", lists[0]['name']    
  end
  
  
end
