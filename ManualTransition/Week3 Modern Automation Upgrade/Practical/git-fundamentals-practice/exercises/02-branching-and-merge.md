# Exercise 2: Branching And Merge

## Goal

Practice branch creation and merge.

## Steps

```bash
git switch -c feature/style-update
```

Edit `sample-app/src/styles.css`.

```bash
git status
git add .
git commit -m "Update app styling"
git switch main
git merge feature/style-update
```

## Expected Outcome

Your feature branch changes should be merged into main.
