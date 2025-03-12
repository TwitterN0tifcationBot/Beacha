from flask import Flask
from app.views.home import home_blueprint
from app.views.login import login_blueprint
from app.views.signup import signup_blueprint
from app.views.settings import settings_blueprint

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'your_secret_key'  # Replace with a strong secret key

    app.register_blueprint(home_blueprint)
    app.register_blueprint(login_blueprint)
    app.register_blueprint(signup_blueprint)
    app.register_blueprint(settings_blueprint)

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)