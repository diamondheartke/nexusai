# Main routes
from flask import Blueprint, render_template, jsonify, session, make_response

# Define the blueprint
main_bp = Blueprint(
    'main', 
    __name__, 
    template_folder='../../templates' # Points to app/templates/main
)


@main_bp.route('/')
def index():
    # 1. User hits the site, show them the sleek loading screen instantly
    return render_template('loading.html')

@main_bp.route('/api/configure-session')
def configure_session():
    try:
        # 2. Simulate or execute asset unpacking/credential verification
        # Example: Set a session variable
        session['user_initialized'] = True
        
        # Example: Set a secure cookie if needed
        response = make_response(jsonify({"status": "success", "message": "Ready"}))
        response.set_cookie('nexus_tracker', 'active_session_value', httponly=True, samesite='Lax')
        
        return response
        
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@main_bp.route('/home')
def home():
    # 3. Securely check if they actually went through the initialization step
    if not session.get('user_initialized'):
        return render_template('loading.html') # Send them back if they skipped it
        
    return render_template('main/home.html')