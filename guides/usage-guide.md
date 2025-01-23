# Bera Agent Kit: User Guide

## Installation

Install the package via yarn:
```bash
yarn add bera-agent-kit
```

## Basic Usage

Refer to the `examples/basic-usage.ts` for a comprehensive example of how to use the Bera Agent Kit.

### Quick Start Example
```typescript
import { BeraAgent, createViemWalletClient } from "bera-agent-kit";

async function example() {
  const walletClient = createViemWalletClient();
  const agent = new BeraAgent({
    openAIConfig: {
      apiKey: process.env.OPENAI_API_KEY || "",
    },
    walletClient,
  });

  try {
    // Initialize the agents
    await agent.initialize();

    const response = await agent.sendMessage(
      'What can you help me with on Berachain?',
    );
    console.info(`Berachain Capabilities Response: ${response}`);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Run the example if this file is executed directly
if (require.main === module) {
  example().catch(console.error);
}

```

## Contributing

See [here](./contribute-guide.md)