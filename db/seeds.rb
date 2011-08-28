# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)


hosts = Host.create(%w(
  host1.example.org 
  host2.example.org 
  host3.example.org
  ).map{ |x| {:name =>x} } 
)

list_types = ListType.create(%w(
  public
  closed
  ).map{ |x| {:name => x} }
)

1..50.times do |i|
  MailingList.create({:name => "Angelfreunde#{i}", :host => hosts[0], :list_type => list_types[0]})
end  