class ContactMailer < ApplicationMailer
  default from: ENV['MAIL_FROM']

  def contact(name, email, content)
    @name = name
    @content = content
    @email = email
    mail(to: ENV['MAIL_TO'], subject: "#{@name} has a question about DeCol's Speed Shop")
  end
end
