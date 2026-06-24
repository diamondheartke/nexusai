import os

def create_nexus_structure():
    structure = [
        # Core App
        "app",

        # Blueprints
        "app/blueprints",
        "app/blueprints/main",
        "app/blueprints/analytica",
        "app/blueprints/lumina",

        # Static Assets
        "app/static",
        "app/static/css",
        "app/static/js",
        "app/static/images",
        "app/static/images/logo",
        "app/static/images/hero",
        "app/static/images/analytica",
        "app/static/images/lumina",

        # Templates
        "app/templates",
        "app/templates/main",
        "app/templates/analytica",
        "app/templates/lumina",

        # Future Growth
        "app/services",
        "app/utils",
    ]

    files = {
        # Application
        "app/__init__.py": "",

        # Main Blueprint
        "app/blueprints/main/__init__.py": "",
        "app/blueprints/main/routes.py": "# Main routes",

        # Analytica Blueprint
        "app/blueprints/analytica/__init__.py": "",
        "app/blueprints/analytica/routes.py": "# Analytica routes",

        # Lumina Blueprint
        "app/blueprints/lumina/__init__.py": "",
        "app/blueprints/lumina/routes.py": "# Lumina routes",

        # Services
        "app/services/__init__.py": "",
        "app/services/analytics_engine.py": "# Analytica engine",

        # Utils
        "app/utils/__init__.py": "",
        "app/utils/helpers.py": "# Helper functions",

        # Templates
        "app/templates/base.html": "",

        # Main Pages
        "app/templates/main/index.html": "",
        "app/templates/main/about.html": "",
        "app/templates/main/contact.html": "",

        # Analytica Pages
        "app/templates/analytica/index.html": "",
        "app/templates/analytica/dashboard.html": "",

        # Lumina Pages
        "app/templates/lumina/index.html": "",
        "app/templates/lumina/coming_soon.html": "",

        # Static Files
        "app/static/css/base.css": "",
        "app/static/css/home.css": "",

        "app/static/js/main.js": "",

        # Root Files
        "run.py": "# App entry point",
        "vercel.json": "{}",
        "requirements.txt": "flask\n",
        ".gitignore": "__pycache__/\n*.pyc\n.env\n",
        "README.md": "# Nexusai\n",
    }

    print("🚀 Creating Nexusai project structure...")

    for folder in structure:
        os.makedirs(folder, exist_ok=True)
        print(f"📁 Created folder: {folder}")

    for file_path, default_content in files.items():
        if not os.path.exists(file_path):
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(default_content)
            print(f"📄 Created file: {file_path}")

    print("\n✅ Nexusai architecture ready.")

if __name__ == "__main__":
    create_nexus_structure()
