# Jenkins Setup Notes

## Basic Steps

1. Install Jenkins.
2. Install Node.js on Jenkins machine or agent.
3. Create a new Pipeline job.
4. Connect the Git repository.
5. Select Pipeline script from SCM.
6. Use the `Jenkinsfile` from this project.
7. Run Build Now.

## Required Jenkins Tools

- Git
- Node.js
- Access to repository

## Expected Pipeline Stages

- Checkout
- Install Dependencies
- Build
- Smoke Tests
- Deploy Dry Run

## Common Mistakes

- Jenkins machine does not have Node.js installed.
- Wrong repository URL.
- Jenkins cannot access private repository.
- Long unstable tests are added into every commit pipeline.
