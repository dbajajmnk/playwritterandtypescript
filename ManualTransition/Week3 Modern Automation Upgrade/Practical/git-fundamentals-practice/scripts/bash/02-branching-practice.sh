#!/usr/bin/env bash
# Purpose: Practice branch creation, switching, committing, and merging.

git switch -c feature/update-homepage

echo "Now edit sample-app/index.html manually, then run the next commands step by step."

git status
# git add .
# git commit -m "Update homepage content"
# git switch main
# git merge feature/update-homepage
# git log --oneline --graph --all
