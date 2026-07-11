class Admin::BaseController < ApplicationController
  layout "admin"
  before_action :authenticate

  private

  def authenticate
    expected_username, expected_password = admin_credentials
    authenticate_or_request_with_http_basic("Admin") do |username, password|
      ActiveSupport::SecurityUtils.secure_compare(username, expected_username) &
        ActiveSupport::SecurityUtils.secure_compare(password, expected_password)
    end
  end

  # Fail closed in production: a missing (or blank) ADMIN_PASSWORD must never
  # degrade to the development default. Checked per request rather than at
  # boot so the secretless Docker asset-precompile stage still builds.
  def admin_credentials
    password = ENV["ADMIN_PASSWORD"]
    if Rails.env.production? && password.blank?
      raise KeyError, "ADMIN_PASSWORD must be set in production"
    end
    [ ENV.fetch("ADMIN_USERNAME", "admin"), password.presence || "password" ]
  end
end
