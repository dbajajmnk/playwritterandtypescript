# Exercise 3: Merge Conflict Practice

## Goal

Understand how merge conflicts happen.

## Steps

1. Create a branch:

```bash
git switch -c feature/message-one
```

2. Edit the text inside `sample-app/index.html` and commit.

```bash
git add .
git commit -m "Update message from branch one"
```

3. Switch back to main:

```bash
git switch main
```

4. Edit the same line in `sample-app/index.html` and commit.

```bash
git add .
git commit -m "Update message from main"
```

5. Merge feature branch:

```bash
git merge feature/message-one
```

6. Resolve conflict manually in VS Code.

7. Commit resolved conflict:

```bash
git add .
git commit -m "Resolve merge conflict"
```
