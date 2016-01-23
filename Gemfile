source 'https://rubygems.org'
ruby '2.2.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.5'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18.4'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
gem 'less-rails'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Ruby Racer V8 Runtime
gem "therubyracer", '~> 0.12.2'
# the ruby racer pins the libv8 gem
gem 'libv8'
gem 'coffee-rails'

# Use jquery as the JavaScript library
gem 'jquery-rails', '~> 4.0.5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.3.2'

# Use Haml
gem 'haml-rails', '~> 0.9.0'

# Use Font Awesome
gem "font-awesome-rails", '~> 4.5.0.0'

# Use Devise
gem 'devise', '~> 3.5.3'

# SendGrid
gem 'sendgrid', '~> 1.2.0'

# Dealyed Jobs
gem 'delayed_job', '~> 4.1.1'
gem 'delayed_job_active_record', '~> 4.1.0'

# React
gem 'react-rails', '~> 1.5.0'

# Materialize
gem 'materialize-sass'

gem 'instagram'

gem 'gmaps4rails'

gem 'underscore-rails'

# bundle exec rake doc:rails generates the API under doc/api.
group :doc do
  gem 'sdoc', '~> 0.4.1'
end

group :test do
  gem 'rspec-rails', '~> 3.4.0'
  gem "shoulda-matchers", '~> 3.0.1'
  gem "webmock", '~> 1.22.3'
  gem "simplecov", '~> 0.11.1', require: false
  gem 'database_cleaner', '~> 1.5.1'
  gem 'factory_girl_rails', '~> 4.5.0'
end

group :production do
  gem 'puma', '~> 2.15.3'
  gem 'heroku-deflater', '~> 0.6.2'
  gem 'rack-cache', '~> 1.5.1'
  gem "rails_12factor", '~> 0.0.3'
end

group :development, :test do
  # Call 'binding.pry' anywhere in the code to stop execution and get a debugger console
  gem 'pry'
  gem "letter_opener"
  gem 'bullet'
  gem 'thin'
  gem 'better_errors'
  gem 'quiet_assets'
  gem 'rails_layout'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  # Data Population Gems
  gem 'populator'
  gem 'faker'
end

