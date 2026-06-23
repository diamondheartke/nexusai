import os

def create_nexus_structure():
    # Define the directory layout
    structure = [
        "app",
        "app/blueprints",
        "app/blueprints/main",
        "app/blueprints/analysis",
        "app/blueprints/learning",
        "app/static",
        "app/static/css",
        "app/static/js",
        "app/static/images",
        "app/templates",
        "app/templates/main",
        "app/templates/analysis",
        "app/templates/learning",
    ]

    # Files that need to exist for the structure to work immediately
    files = {
        "app/__init__.py": "",
        "app/blueprints/main/__init__.py": "",
        "app/blueprints/main/routes.py": "# Main routes",
        "app/blueprints/analysis/__init__.py": "",
        "app/blueprints/analysis/routes.py": "# Analysis routes",
        "app/blueprints/learning/__init__.py": "",
        "app/blueprints/learning/routes.py": "# Learning routes",
        "app/templates/base.html": "",
        "app/templates/main/index.html": "",
        "app/templates/analysis/dashboard.html": "",
        "app/templates/learning/modules.html": "",
        "run.py": "# App entry point",
        "vercel.json": "{}",
        "requirements.txt": "flask\n"
    }

    print("🚀 Creating Nexusai project structure...")

    # Create directories
    for folder in structure:
        os.makedirs(folder, exist_ok=True)
        print(f"📁 Created folder: {folder}")

    # Create base files
    for file_path, default_content in files.items():
        if not os.path.exists(file_path):
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(default_content)
            print(f"📄 Created file: {file_path}")

    print("\n✅ Setup complete! architecture is ready.")

if __name__ == "__main__":
    create_nexus_structure()
