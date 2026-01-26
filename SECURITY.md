# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of SkillBadge seriously. If you discover a security vulnerability, please follow these steps:

### Please Do Not

- Open a public GitHub issue for security vulnerabilities
- Disclose the vulnerability publicly before it has been addressed

### Please Do

1. Email security details to: svector.anu@gmail.com
2. Include the following information:
   - Type of vulnerability
   - Full paths of source files related to the vulnerability
   - Location of the affected source code (tag/branch/commit)
   - Step-by-step instructions to reproduce the issue
   - Proof-of-concept or exploit code (if possible)
   - Impact of the vulnerability
   - Suggested fix (if available)

### What to Expect

- Acknowledgment of your email within 48 hours
- Regular updates on the progress of addressing the vulnerability
- Notification when the vulnerability is fixed
- Public disclosure coordinated with you (if desired)
- Credit for the discovery (if desired)

## Security Best Practices

### Smart Contracts

- All contracts undergo thorough testing before deployment
- External audits are conducted for major releases
- Follow principle of least privilege
- Implement proper access controls
- Use established patterns and libraries

### Frontend

- Environment variables are never exposed to client
- All user inputs are validated and sanitized
- HTTPS is enforced in production
- Dependencies are regularly updated
- Security headers are properly configured

### Wallet Integration

- Private keys never leave user's wallet
- All transactions require explicit user approval
- Contract addresses are verified before interaction
- Network mismatches are prevented

## Known Security Considerations

### Soulbound Tokens

- Tokens are non-transferable by design
- Once minted, badges cannot be revoked (by design)
- Badge metadata is immutable after minting

### Multi-Chain

- Each chain operates independently
- Cross-chain state is not synchronized
- Users must manage separate wallets per chain

## Dependency Security

We use automated tools to monitor dependencies:

- Dependabot for dependency updates
- npm audit for vulnerability scanning
- Regular manual review of critical dependencies

## Disclosure Policy

When a security vulnerability is fixed:

1. A security advisory is published
2. CVE is requested (if applicable)
3. Affected users are notified
4. Fix is released with detailed changelog
5. Public disclosure after users have time to update

## Bug Bounty Program

We currently do not have a formal bug bounty program, but we deeply appreciate security researchers who responsibly disclose vulnerabilities. Recognition will be provided in our security advisories.

## Contact

For security concerns: svector.anu@gmail.com

For general questions: Open a GitHub issue

## Updates

This security policy may be updated periodically. Please check back regularly for the latest information.

Last updated: 2026-01-25
