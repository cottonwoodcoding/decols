if Rails.env == :development
  mail = "#{Rails.root}/config/mail.yml"
  if File.exists? mail
    YAML.load_file(mail).each { |key, value| ENV[key] || ENV[key] = value.to_s }
  else
    raise "config/mail.yml does not exist"
  end
end
