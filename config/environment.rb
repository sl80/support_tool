# Load the rails application
require File.expand_path('../application', __FILE__)

# fix json issue
ActiveRecord::Base.include_root_in_json = false


# Initialize the rails application
SupportTool::Application.initialize!
