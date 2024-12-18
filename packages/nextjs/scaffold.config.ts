import * as chains from "viem/chains";
import { defineChain } from "viem";

export type ScaffoldConfig = {
  targetNetworks: readonly chains.Chain[];
  pollingInterval: number;
  alchemyApiKey: string;
  walletConnectProjectId: string;
  onlyLocalBurnerWallet: boolean;
};

const mantle_sepolia = defineChain({
  id: 5003,
  name: "Mantle Sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Mantle",
    symbol: "MNT",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.sepolia.mantle.xyz"],
      webSocket: ["wss://rpc.sepolia.mantle.xyz"],
    },
    public: {
      http: ["https://rpc.sepolia.mantle.xyz"],
      webSocket: ["wss://rpc.sepolia.mantle.xyz"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://explorer.sepolia.mantle.xyz/" },
  },
  network: "Mantle Sepolia",
});

const scaffoldConfig = {
  // The networks on which your DApp is live
  targetNetworks: [mantle_sepolia], // Ensure chains.hardhat has chainId=31337

  // Polling interval for frontend (in milliseconds)
  pollingInterval: 30000,

  // Alchemy API Key
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF",

  // WalletConnect Project ID
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "3a8170812b534d0ff9d794f19a901d64",

  // Only show the Burner Wallet when running on Hardhat network
  onlyLocalBurnerWallet: true,
} as const satisfies ScaffoldConfig;

export default scaffoldConfig;
