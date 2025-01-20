# How to Setup Locally

Please follow the steps below to setup **Bera Agent Kit** locally on your machine.

## Step-by-Step Guide

1. **Install the Package**
   ```bash
   yarn install Webera-Finance/bera-agent-kit#releases
   ```
   Or if you want to develop locally:
   ```bash
   git clone https://github.com/webera-finance/bera-agent-kit.git
   cd bera-agent-kit
   yarn install
   ```

2. **Configure Environment Variables**
   Create a `.env` file in the root directory of the project to store your environment variables securely. Example at "[.env.example](../.env.example)"

   RPC addresses are defined at [this](../src/constants/index.ts)

3. **Basic Usage**
   ```typescript
   import { BeraAgent } from 'bera-agent-kit';
   import { createViemWalletClient } from 'bera-agent-kit/utils/createViemWalletClient';

   async function main() {
     // Create wallet client
     const walletClient = createViemWalletClient();

     // Initialize BeraAgent
     const agent = new BeraAgent({
       openAIConfig: {
         apiKey: process.env.OPENAI_API_KEY || "",
       },
       walletClient,
     });

     // Initialize and interact
     await agent.initialize();
     const response = await agent.sendMessage('Check my wallet balance');
     console.log(response);
   }
   ```

4. **Local Development**
   If you're developing locally, build the project:
   ```bash
   npm run build
   ```
   This will generate the compiled files in the `dist/` directory.

5. **Generate Documentation (Optional)**
   If you wish to generate the project documentation, use the following command:
   ```bash
   npm run docs
   ```
   The documentation will be available in the `docs/` directory.
