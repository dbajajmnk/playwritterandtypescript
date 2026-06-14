#!/usr/bin/env bash
# Run this script from the project root folder.
# Purpose: Initialize Git and create the first commit.

git init
git status
git add .
git commit -m "Initial commit"
git log --oneline
