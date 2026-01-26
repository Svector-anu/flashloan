# Contributing to SkillBadge

Thank you for your interest in contributing to SkillBadge! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- Clear and descriptive title
- Detailed steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment details (OS, Node version, browser)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- Clear and descriptive title
- Detailed description of the proposed functionality
- Explanation of why this enhancement would be useful
- Possible implementation approach

### Pull Requests

1. Fork the repository
2. Create a new branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following our coding standards
4. Write or update tests as needed
5. Ensure all tests pass:
   ```bash
   pnpm test
   ```
6. Commit your changes using conventional commits:
   ```bash
   git commit -m "feat: add new feature"
   ```
7. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
8. Open a Pull Request

## Development Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Install Foundry (for Base contracts):
   ```bash
   curl -L https://foundry.paradigm.xyz | bash
   foundryup
   ```

3. Install Clarinet (for Stacks contracts):
   ```bash
   curl -L https://github.com/hirosystems/clarinet/releases/latest/download/clarinet-macos-x64.tar.gz | tar xz
   ```

4. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

5. Run development server:
   ```bash
   pnpm dev
   ```

## Coding Standards

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Prefer functional programming patterns

### Solidity

- Follow Solidity style guide
- Use latest stable compiler version (^0.8.20)
- Include NatSpec comments
- Optimize for gas efficiency
- Write comprehensive tests

### Clarity

- Follow Clarity best practices
- Use descriptive function and variable names
- Include inline documentation
- Handle all error cases
- Write unit tests for all public functions

### Commit Messages

Follow conventional commits specification:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

## Testing

- Write tests for all new features
- Ensure existing tests pass
- Aim for high code coverage
- Test edge cases and error conditions

### Running Tests

```bash
# All tests
pnpm test

# Base contracts
cd contracts/base && forge test

# Stacks contracts
cd contracts/stacks && clarinet test

# Frontend
cd apps/web && pnpm test
```

## Documentation

- Update README.md for significant changes
- Add JSDoc/NatSpec comments
- Update API documentation
- Include code examples where helpful

## Review Process

1. All submissions require review
2. Reviewers will check:
   - Code quality and standards
   - Test coverage
   - Documentation
   - Security implications
3. Address review feedback promptly
4. Maintain a respectful and constructive dialogue

## Release Process

Maintainers handle releases following semantic versioning:

- MAJOR: Breaking changes
- MINOR: New features (backward compatible)
- PATCH: Bug fixes (backward compatible)

## Questions?

Feel free to open an issue for any questions about contributing.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
