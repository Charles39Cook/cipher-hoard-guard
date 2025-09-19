# Cipher Hoard Guard

A secure guild treasury management system built with FHE (Fully Homomorphic Encryption) technology for complete privacy and security.

## Features

- **FHE-Encrypted Vaults**: All guild resources are encrypted using advanced cryptographic protocols
- **Multi-Wallet Support**: Connect with Rainbow, MetaMask, and other popular wallets
- **Guild Management**: Secure resource deposits and withdrawals for authorized members
- **Real-time Analytics**: Track guild treasury status and member contributions
- **Privacy-First Design**: Complete data encryption ensures maximum security

## Technologies

- **Frontend**: React 18, TypeScript, Vite
- **UI Framework**: shadcn/ui, Tailwind CSS
- **Web3**: RainbowKit, Wagmi, Viem
- **Blockchain**: Ethereum Sepolia Testnet
- **Encryption**: FHE (Fully Homomorphic Encryption)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Web3 wallet (Rainbow, MetaMask, etc.)
- Sepolia ETH for testing

### Installation

```bash
# Clone the repository
git clone https://github.com/Charles39Cook/cipher-hoard-guard.git

# Navigate to the project directory
cd cipher-hoard-guard

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
```

## Usage

1. **Connect Wallet**: Use the wallet connection interface to link your Web3 wallet
2. **Deposit Resources**: Securely deposit guild resources into FHE-encrypted vaults
3. **Manage Treasury**: View and manage guild treasury with complete privacy
4. **Withdraw Resources**: Authorized members can withdraw resources when needed

## Security Features

- **FHE Encryption**: All sensitive data is encrypted using fully homomorphic encryption
- **Smart Contract Integration**: Secure on-chain operations for resource management
- **Multi-signature Support**: Enhanced security for large transactions
- **Privacy-Preserving Analytics**: View statistics without exposing individual data

## Deployment

### Vercel Deployment

1. Fork this repository
2. Connect your GitHub account to Vercel
3. Import the project in Vercel
4. Set environment variables in Vercel dashboard
5. Deploy automatically on every push to main branch

### Manual Deployment

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions, please open an issue in the GitHub repository.
