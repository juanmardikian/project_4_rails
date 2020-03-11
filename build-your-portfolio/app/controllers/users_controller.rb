class UsersController < ApplicationController
  before_action :authorize_request, except: :create

  def index
    @users = User.all
    puts @users
    render json: { status: 200, users: @users }
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: { status: 201, name: @user }
    else
      render json: { status: 422, error: @user.errors }
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    render json: { status: 200, user: @user }
  end

  def destroy
    @user = User.destroy(params[:id])
    render json: { status: 204 }
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
