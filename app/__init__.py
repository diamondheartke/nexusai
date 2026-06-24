from flask import Flask

def create_app():
    # Telling Flask where to look for global templates
    app = Flask(__name__, template_folder='templates', static_folder='static')
    app.config['SECRET_KEY'] = 'nexus_secret_key_123'

    # Register your blueprints
    from app.blueprints.main.routes import main_bp
    app.register_blueprint(main_bp)

    return app