# Git Fundamentals Practice Project

This project is designed for beginners who want to practice Git commands using a small sample application.

## Learning Goals

- Understand what Git is and why it is used.
- Initialize a local repository.
- Check file status.
- Stage files.
- Commit changes.
- View commit history.
- Create and switch branches.
- Merge branches.
- Handle a simple merge conflict.
- Connect local repository with a remote repository.
- Push and pull changes.

## Prerequisites

Install Git first:

```bash
git --version
```

If Git is installed, the command should show a version number.

## Recommended Practice Flow

Open this folder in VS Code and run commands from the project root.

```bash
git init
git status
git add .
git commit -m "Initial commit"
git log --oneline
```

## Folder Structure

```text
git-fundamentals-practice/
  sample-app/
    index.html
    src/app.js
    src/styles.css
  scripts/
    powershell/
    bash/
  exercises/
  docs/
  README.md
  .gitignore
```

## Important Note

Git tracks file changes. This sample application exists so you can edit files and observe how Git detects those changes.
