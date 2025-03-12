from flask import Flask

app = Flask(__name__)

# Load configuration from a separate config file if needed
# app.config.from_object('config')

# Import views
from app.views import home, login, signup, settings

# Register blueprints or routes if using them
# app.register_blueprint(home.bp)
# app.register_blueprint(login.bp)
# app.register_blueprint(signup.bp)
# app.register_blueprint(settings.bp)

if __name__ == "__main__":
    app.run(debug=True)