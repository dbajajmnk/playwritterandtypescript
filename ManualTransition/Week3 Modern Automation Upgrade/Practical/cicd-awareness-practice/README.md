# CI/CD Awareness Practice Project

This project teaches CI/CD basics using a small sample app and simple automation stages.

## Goal

Understand how code moves through a delivery pipeline:

```text
Code Commit → Build → Test → Deploy
```

## Project Structure

```text
sample-app/                 Demo application
scripts/                    Build and deploy dry-run scripts
tests/                      Smoke test script
Jenkinsfile                 Jenkins pipeline as code
.github/workflows/ci.yml    GitHub Actions pipeline
docs/                       Pipeline notes and Jenkins setup notes
```

## Run Locally

```bash
npm install
npm run pipeline:local
```

Or run stages one by one:

```bash
npm run build
npm test
npm run deploy:dry-run
```

## Jenkins Practice

Use the included `Jenkinsfile` to create a Jenkins Pipeline job.

## GitHub Actions Practice

Push this project to GitHub. The workflow file is already available here:

```text
.github/workflows/ci.yml
```

## Learning Outcomes

- Understand CI and CD basics.
- Understand pipeline stages.
- Know where automation tests fit.
- Practice Jenkinsfile structure.
- Practice GitHub Actions workflow structure.
