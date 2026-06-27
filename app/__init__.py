#app/__init__.py
from flask import Flask

def create_app():
    app = Flask(__name__)
    
    # Core configuration (Secret keys, database URLs, etc.)
    app.config['SECRET_KEY'] = 'your-super-secret-key'

    # Import the blueprints
    from app.blueprints.main.routes import main_bp
    #from app.blueprints.analytica.routes import analytica_bp
    #from app.blueprints.lumina.routes import lumina_bp

    # Register the blueprints
    app.register_blueprint(main_bp)
    #app.register_blueprint(analytica_bp, url_prefix='/analytica')
    #app.register_blueprint(lumina_bp, url_prefix='/lumina')

    return app