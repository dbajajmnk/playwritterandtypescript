# Git Troubleshooting

## Problem: Git is not recognized

Install Git and reopen terminal.

```bash
git --version
```

## Problem: Please tell me who you are

Set username and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Problem: Nothing to commit

This means no file change is currently pending.

```bash
git status
```

## Problem: Merge conflict

Open conflicted file, keep the correct content, remove conflict markers, then run:

```bash
git add .
git commit -m "Resolve merge conflict"
```
