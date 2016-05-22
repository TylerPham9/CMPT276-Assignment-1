require 'test_helper'

class CalculatorControllerTest < ActionController::TestCase
  test "should get calculator" do
    get :calculator
    assert_response :success
  end

end
