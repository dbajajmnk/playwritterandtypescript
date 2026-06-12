# Git Fundamentals Cheat Sheet

## 1. Check Git Installation

```bash
git --version
```

## 2. Configure Git User

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 3. Initialize Repository

```bash
git init
```

## 4. Check Status

```bash
git status
```

## 5. Stage Files

```bash
git add .
```

## 6. Commit Files

```bash
git commit -m "Initial commit"
```

## 7. View Commit History

```bash
git log --oneline
```

## 8. Create Branch

```bash
git branch feature/login-ui
```

## 9. Switch Branch

```bash
git switch feature/login-ui
```

## 10. Merge Branch

```bash
git switch main
git merge feature/login-ui
```

## 11. Add Remote

```bash
git remote add origin https://github.com/username/repository-name.git
```

## 12. Push Code

```bash
git push -u origin main
```

## 13. Pull Latest Code

```bash
git pull origin main
```
