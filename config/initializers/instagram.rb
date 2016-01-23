require 'instagram'
if Rails.env.development?
  begin
    config = YAML.load_file('config/instagram.yml')
    config.each { |key, value| ENV[key] = value }
  rescue
    raise 'instagram.yml not found in the config dir'
  end
end

Instagram.configure do |config|
  config.client_id = ENV["INSTAGRAM_CLIENT_ID"]
  config.access_token = ENV["INSTAGRAM_ACCESS_TOKEN"]
end
