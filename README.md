# BadgeMint

A decentralized soulbound achievement NFT minter supporting Base (EVM) and Stacks blockchains.

## Overview

BadgeMint allows users to mint non-transferable achievement badges on both Base and Stacks networks. These soulbound tokens represent verifiable accomplishments and cannot be transferred once minted.

## Features

- Mint soulbound NFT badges on Base and Stacks
- Non-transferable tokens bound to recipient addresses
- Query badge ownership and metadata
- Multi-chain support with unified interface
- Responsive black and white UI

## Technology Stack

### Frontend
- Next.js 14+ with TypeScript
- Tailwind CSS (black & white theme)
- pnpm workspaces

### Base (EVM)
- Solidity ^0.8.20
- Foundry for development and testing
- Reown (WalletConnect) for wallet connection
- ethers v6 for contract interaction

### Stacks
- Clarity v4 contracts
- Clarinet for development and testing
- @stacks/connect for wallet connection
- @stacks/transactions for contract calls

## Project Structure

```
badgemint/
├── apps/web/                    # Next.js frontend
├── contracts/
│   ├── base/                   # Solidity + Foundry
│   └── stacks/                 # Clarity v4 + Clarinet
├── packages/
│   ├── shared/                 # UI components & types
│   ├── base-adapter/           # Reown wallet integration
│   └── stacks-adapter/         # Stacks wallet integration
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── SECURITY.md
├── CODE_OF_CONDUCT.md
├── .env.example
├── .gitignore
├── package.json
└── pnpm-workspace.yaml
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0
- Foundry (for Base contracts)
- Clarinet (for Stacks contracts)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/svector-anu/badgemint.git
cd badgemint
```

2. Install dependencies:
```bash
pnpm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`

### Development

Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Testing

Run all tests:
```bash
pnpm test
```

Test Base contracts:
```bash
cd contracts/base
forge test
```

Test Stacks contracts:
```bash
cd contracts/stacks
clarinet test
```

### Building

Build for production:
```bash
pnpm build
```

## Smart Contracts

### Base Contract

The Base contract (`BadgeMint.sol`) implements:
- `mintBadge(address recipient, string memory achievement)` - Mint a soulbound badge
- `getBadge(address owner)` - Read badge data
- `hasBadge(address owner)` - Check badge ownership
- Non-transferable token logic

### Stacks Contract

The Stacks contract (`skill-badge.clar`) implements:
- `(mint-badge (recipient principal) (achievement (string-utf8 256)))` - Mint badge
- `(get-badge (owner principal))` - Read badge data
- `(has-badge (owner principal))` - Check ownership
- Soulbound token restrictions

## Deployment

### Base Deployment

```bash
cd contracts/base
forge script script/Deploy.s.sol --rpc-url $BASE_RPC_URL --broadcast
```

### Stacks Deployment

```bash
cd contracts/stacks
clarinet deployments apply -p testnet
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Security

For security concerns, please review [SECURITY.md](SECURITY.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For questions and support, please open an issue in the GitHub repository.
