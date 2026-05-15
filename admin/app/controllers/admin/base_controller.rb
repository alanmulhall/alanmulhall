class Admin::BaseController < ApplicationController
  layout "admin"
  before_action :authenticate

  private

  def authenticate
    authenticate_or_request_with_http_basic("Admin") do |username, password|
      ActiveSupport::SecurityUtils.secure_compare(username, ENV.fetch("ADMIN_USERNAME", "admin")) &
        ActiveSupport::SecurityUtils.secure_compare(password, ENV.fetch("ADMIN_PASSWORD", "password"))
    end
  end
end
