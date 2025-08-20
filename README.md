# Gosu Unit Tests with CI/CD Pipeline

This project demonstrates Gosu unit testing with GitHub Actions CI/CD pipeline.

## Project Structure
```
├── src/
│   ├── main/gosu/          # Main Gosu source files
│   └── test/gosu/          # Test files
├── .github/workflows/      # GitHub Actions workflows
├── gradle/                 # Gradle wrapper
├── build.gradle           # Build configuration
└── README.md
```

## Prerequisites
- Java 11 or higher
- Gradle (wrapper included)
- Git

## Running Tests Locally

### Using Gradle Wrapper (Recommended)
```bash
# Run all tests
./gradlew test

# Run tests with coverage
./gradlew test jacocoTestReport

# Build project
./gradlew build
```

### Using IDE
Import the project as a Gradle project in your IDE and run tests directly.

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/ci.yml`) automatically:

1. **Test Stage**:
   - Runs on Ubuntu latest
   - Sets up JDK 11
   - Executes unit tests
   - Generates test reports
   - Calculates code coverage
   - Uploads coverage to Codecov

2. **Build Stage**:
   - Runs after successful tests
   - Builds the project
   - Creates build artifacts

### Triggering the Pipeline
The pipeline runs on:
- Push to `main` or `develop` branches
- Pull requests to `main` branch

## Setup Steps

1. **Clone/Create Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Enable GitHub Actions**:
   - GitHub Actions are automatically enabled for public repositories
   - For private repos, go to Settings > Actions and enable workflows

3. **Configure Codecov (Optional)**:
   - Sign up at codecov.io
   - Add your repository
   - No additional setup needed - the workflow handles token automatically for public repos

## Test Coverage
Code coverage reports are generated using JaCoCo and uploaded to Codecov for tracking.

## Adding New Tests
1. Create test files in `src/test/gosu/`
2. Extend `TestClass` from Gosu test framework
3. Use assertion methods: `assertEquals`, `assertTrue`, `assertFalse`, etc.
4. Tests are automatically discovered and run by Gradle