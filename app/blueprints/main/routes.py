# Main routes
from flask import Blueprint, render_template

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def loading():
    """Acts as the root landing destination. Displays the loading screen first."""
    return render_template('loading.html')

@main_bp.route('/home')
def home():
    """The formal, categorized main control page after loading resolves."""
    return render_template('main/index.html')
