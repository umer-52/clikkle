import os
import re
import sys

directory = "c:/Users/umer/Desktop/vscodeappwrite/clikkle-app/components"
page_dir = "c:/Users/umer/Desktop/vscodeappwrite/clikkle-app/app"

def fix_img_tag(match, file_path):
    attrs_str = match.group(1)
    
    is_self_closing = attrs_str.endswith('/')
    if is_self_closing:
        attrs_str = attrs_str[:-1].rstrip()
        
    # Check for alt and loading
    has_alt = bool(re.search(r'\balt\b', attrs_str, re.IGNORECASE))
    has_loading = bool(re.search(r'\bloading\b', attrs_str))
    
    if not has_alt:
        attrs_str += ' alt=""'
        
    is_above_fold = bool(re.search(r'hero|header|banner|nav', file_path.lower()))
    
    if not has_loading and not is_above_fold:
        attrs_str += ' loading="lazy"'

    if is_self_closing:
        return f'<img {attrs_str} />'
    else:
        return f'<img {attrs_str}>'

img_pattern = re.compile(r'<img\s+([^>]*?)>', re.IGNORECASE)

modified_files = []
for base_dir in [directory, page_dir]:
    for root, dirs, files in os.walk(base_dir):
        if 'node_modules' in root or '.next' in root: continue
        for file in files:
            if file.endswith('.tsx') or file.endswith('.jsx'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                new_content = img_pattern.sub(lambda m: fix_img_tag(m, filepath), content)
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    modified_files.append(filepath)

print(f"Modified {len(modified_files)} files.")
