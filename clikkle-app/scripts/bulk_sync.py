import os
import re

# Configurations
BASE_DIR = r"c:\Users\umer\Desktop\vscodeappwrite\clikkle-app"
SUBPATH = "/clikkle"
PINK_COLOR = "#FD366E"
BLUE_COLOR = "#2D63FF"

# Extensions to process
code_extensions = {".tsx", ".jsx", ".json", ".css", ".svg", ".md"}

def process_file(file_path):
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        original_content = content
        
        # 1. Text Branding Replacement
        # Replace "Appwrite" with "Clikkle" (excluding paths and some technical names if possible, but global is safer for this clone)
        # Avoid replacing "Appwrite" if it's in a URL like github.com/appwrite/appwrite
        def replace_branding(match):
            text = match.group(0)
            if "github.com" in text or "npm install" in text:
                return text
            return text.replace("Appwrite", "Clikkle").replace("appwrite", "clikkle")

        # Simplified text replacement for this UI-only clone
        # We only want to replace it in human-readable text and component names
        # Avoid replacing it in 'import' or 'from' paths for now to prevent breaking node_modules
        lines = content.split('\n')
        new_lines = []
        for line in lines:
            if "import " in line or "from " in line:
                new_lines.append(line)
            else:
                line = line.replace("Appwrite", "Clikkle")
                # Careful with lowercase 'appwrite' as it might be in paths
                # But our project-wide audit already handled paths starting with /images/
                # We'll allow replacing 'appwrite' in text labels
                line = re.sub(r'(?<!/)(?<!\.)appwrite(?!\.tsx)(?!\.jsx)(?!\.ts)(?!\.js)', 'clikkle', line)
                new_lines.append(line)
        content = '\n'.join(new_lines)

        # 2. Image Path Replacement
        def replace_path(match):
            prefix = match.group(1)
            path = match.group(2)
            if path.startswith(f"{SUBPATH}/"):
                return match.group(0)
            return f"{prefix}{SUBPATH}{path}"

        content = re.sub(r'([\"\'\(\=])(/images/)', replace_path, content)

        # 3. Color Replacement
        content = re.sub(re.escape(PINK_COLOR), BLUE_COLOR, content, flags=re.IGNORECASE)
        content = re.sub(r'#f8a1ba', '#6d8ffc', content, flags=re.IGNORECASE)
        content = re.sub(r'#e11d48', '#2563eb', content, flags=re.IGNORECASE)

        if content != original_content:
            print(f"Updating {file_path}")
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(content)
            return True
        return False

    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    count = 0
    for root, dirs, files in os.walk(BASE_DIR):
        if any(skip in dirs for skip in ["node_modules", ".next", ".git"]):
            for skip in ["node_modules", ".next", ".git"]:
                if skip in dirs:
                    dirs.remove(skip)

        for file in files:
            if any(file.endswith(ext) for ext in code_extensions):
                if process_file(os.path.join(root, file)):
                    count += 1
    
    print(f"Total files updated: {count}")

if __name__ == "__main__":
    main()
