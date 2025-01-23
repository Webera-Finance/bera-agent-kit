# Contributing to Bera Agent Kit

## Getting Started

### Prerequisites
- Node.js (latest LTS version)
- Yarn package manager
- Git

### Development Setup
1. Fork the repository on GitHub
2. Clone your forked repository
3. Install dependencies:
   ```bash
   yarn install
   ```
4. Create a new branch for your contribution:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Project Structure

### Directory Overview
- `src/`
  - `ai-agents/`: Core AI agent functionality
  - `constants/`: Constant values, ABIs, and prompt templates
  - `tools/`: Project-specific interaction implementations
  - `utils/`: Utility functions and helpers

### Key Files
- `index.ts`: Main entry point for Bera Agent Kit
- `tools/allTools.ts`: Central tool registration
- `constants/promts.ts`: Tool descriptions and configurations

## Contributing a New Tool

### Step-by-Step Guide

1. **Create Tool Directory**
   - Create a new folder under `/src/tools/`
   - Example: `/src/tools/yourProtocol/`
   - Include necessary implementation files

2. **Define Tool Configuration**
   Update `/src/tools/allTools.ts`:
   ```typescript
   import { yourProtocolTool } from './yourProtocol/yourProtocolTool';

   export function createTools() {
     return {
       // ... existing tools ...
       your_protocol_action: yourProtocolTool,
     };
   }
   ```

3. **Add Tool Description**
   Update `/src/constants/promts.ts`:
   ```typescript
   You have access to these tools:
   // ... existing tools ...
   - "your_protocol_action": Description of what your tool does
   ```

4. **Implement Tool**
   - Follow `ToolConfig` interface
   - Include comprehensive error handling
   - Add type definitions
   - Maintain consistent code style

5. **Testing Requirements**
   - Write unit tests in `test/` directory
   - Ensure 100% test coverage for new tools
   - Verify agent integration

6. **Real Test**
   - Write your test prompt in `examples/basic-usage.ts`
   - Run `yarn package` to verify

## Code Quality

### Coding Standards
- Follow TypeScript best practices
- Use ESLint for code linting
- Format code with Prettier
- Write clear, concise comments

### Pull Request Process
1. Ensure all tests pass
2. Update documentation
3. Add a clear, descriptive PR title
4. Reference any related issues

## Reporting Issues

### Bug Reports
- Use GitHub Issues
- Provide detailed reproduction steps
- Include environment details
- Attach relevant logs or error messages

### Feature Requests
- Explain the proposed feature
- Provide use cases
- Discuss potential implementation approaches

## Community

- Be respectful and inclusive
- Help fellow contributors
- Follow our Code of Conduct

## Questions?

Reach out via:
- GitHub Issues
- Project Discussion Forums
- Community Chat Channels
