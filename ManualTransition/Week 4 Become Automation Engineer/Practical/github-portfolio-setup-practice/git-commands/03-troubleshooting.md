# Git Troubleshooting

## Problem: Remote Already Exists

```bash
git remote -v
git remote remove origin
git remote add origin <repository-url>
```

## Problem: Branch Name Issue

```bash
git branch -M main
```

## Problem: Push Rejected

First pull remote changes:

```bash
git pull origin main --rebase
git push -u origin main
```

## Problem: Wrong Files Uploaded

Update `.gitignore`, remove unwanted files, then commit again.

```bash
git rm -r --cached target
git add .
git commit -m "Remove unwanted generated files"
git push
```
