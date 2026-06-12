# Purpose: Practice branch creation, switching, committing, and merging.

git switch -c feature/update-homepage

# After running this command, edit sample-app/index.html manually.
# Then run the commands below.

git status
git add .
git commit -m "Update homepage content"

git switch main
git merge feature/update-homepage

git log --oneline --graph --all
