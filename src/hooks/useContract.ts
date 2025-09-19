import { useReadContract, useWriteContract, useAccount } from 'wagmi';
import { CipherHoardGuardABI } from '@/config/contract';
import { CHAIN_ID } from '@/config/env';
import { Address } from 'viem';

// Contract address for Sepolia testnet
const CONTRACT_ADDRESS = '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6';

export const useCipherHoardGuard = () => {
  const { address } = useAccount();

  // Read total treasury balance
  const { data: treasuryBalance } = useReadContract({
    abi: CipherHoardGuardABI,
    address: CONTRACT_ADDRESS,
    functionName: 'getTreasuryBalance',
    args: [],
    query: {
      enabled: !!CONTRACT_ADDRESS,
      watch: true,
    },
  });

  // Read total active members
  const { data: totalMembers } = useReadContract({
    abi: CipherHoardGuardABI,
    address: CONTRACT_ADDRESS,
    functionName: 'getTotalActiveMembers',
    args: [],
    query: {
      enabled: !!CONTRACT_ADDRESS,
      watch: true,
    },
  });

  // Read total encrypted resources count
  const { data: totalResources } = useReadContract({
    abi: CipherHoardGuardABI,
    address: CONTRACT_ADDRESS,
    functionName: 'getTotalEncryptedResourcesCount',
    args: [],
    query: {
      enabled: !!CONTRACT_ADDRESS,
      watch: true,
    },
  });

  // Read member info
  const { data: memberInfo } = useReadContract({
    abi: CipherHoardGuardABI,
    address: CONTRACT_ADDRESS,
    functionName: 'getMemberInfo',
    args: [address as Address],
    query: {
      enabled: !!address && !!CONTRACT_ADDRESS,
      watch: true,
      select: (data: any) => ({
        isActive: data[0],
        totalDeposits: data[1],
        encryptedMemberData: data[2],
      }),
    },
  });

  // Write function for depositing encrypted resources
  const depositEncryptedResource = useWriteContract({
    abi: CipherHoardGuardABI,
    address: CONTRACT_ADDRESS,
    functionName: 'depositEncryptedResource',
  });

  return {
    treasuryBalance,
    totalMembers,
    totalResources,
    memberInfo,
    depositEncryptedResource,
  };
};
