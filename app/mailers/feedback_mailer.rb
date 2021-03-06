class FeedbackMailer < ActionMailer::Base
  default to: SETTINGS.try(:[], :feedback_email).try(:[], 'to')

  # Prepares email based on contents of feedback form.
  # See app/views/feedback_mailer/feedback_email.html.haml for the email body.
  # @param params [Hash] Email attributes (from, message, user agent)
  def feedback_email(params = {})
    @message    = params[:message] || '[no message entered]'
    from        = params[:from].presence || 'anonymous@none.com'
    @user_agent = params[:agent] || '[no user agent recorded]'
    @name       = params[:name] || '[no name entered]'
    @organization_name = params[:organization_name] || '[no organization name entered]'

    mail(from: from, subject: "#{SETTINGS[:site_title]} Feedback")
  end
end
