**Automated API Testing with Postman CLI and GitHub Actions**

This project uses Postman CLI to run API tests automatically every time changes are pushed to the repository. The tests are defined in a Postman Collection and executed in a CI environment using GitHub Actions.

**Workflow Overview**
The GitHub Actions workflow is defined in .github/workflows/postman-tests.yml and performs the following steps:

1. Triggers on Push: Any push to the repository will start the workflow.
2. Installs Postman CLI: Downloads and installs the latest Postman CLI tool.
3. Authenticates via API Key: Logs in to Postman CLI using a secure API key stored in GitHub Secrets.
4. Runs the Test Collection: Executes a predefined Postman Collection that contains all test scripts.

**What You Need to Set Up**
1. Postman Collection: The Collection ID(Your Postman collection ID) must be shared to your Postman workspace and contain test scripts.
2. Postman API Key:
(i) Create a Postman API key.
(ii) Store it in your GitHub repository secrets as POSTMAN_API_KEY.

**Benefits**
1. Fast Feedback: Tests run automatically on every push, helping you catch issues early.
2. CI-Ready: Easily integrated into your deployment pipelines.
3. Scalable: Supports environment variables, test data, and visual reporting.
