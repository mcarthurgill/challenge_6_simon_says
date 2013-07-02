get '/' do
  erb :index
end

post '/color' do
  cell= rand(0..9)
  color= "#" + "%06x" % (rand * 0xffffff)
  random_values = { :cell => cell, :color => color }
  content_type :json
  random_values.to_json
end