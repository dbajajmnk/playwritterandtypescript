const fs = require('fs');
const path = require('path');

// Build stage simulation.
// Real CI/CD projects may run Maven, Gradle, npm build, Docker build, etc.
const indexPath = path.join(__dirname, '..', 'sample-app', 'index.html');

if (!fs.existsSync(indexPath)) {
  throw new Error('Build failed: index.html not found');
}

console.log('BUILD STAGE: Sample app files validated successfully.');
