# PowerShell GitHub Upload Practice Script
# Run this script from the root of your project folder.
# Replace the repository URL before running.

git init
git status
git add .
git commit -m "Initial portfolio project commit"
git branch -M main

# Replace this URL with your own GitHub repository URL.
git remote add origin https://github.com/your-username/your-repository-name.git

git push -u origin main
