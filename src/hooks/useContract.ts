import { useContract, useContractRead, useContractWrite, useAccount } from 'wagmi';
import { CipherHoardGuardABI } from '@/config/contract';

// Contract address for Sepolia testnet
const CONTRACT_ADDRESS = '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6';

export const useCipherHoardGuard = () => {
  const { address } = useAccount();
  
  const contract = useContract({
    address: CONTRACT_ADDRESS,
    abi: CipherHoardGuardABI,
  });

  // Read functions
  const { data: treasuryBalance } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CipherHoardGuardABI,
    functionName: 'getTreasuryBalance',
  });

  const { data: memberInfo } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CipherHoardGuardABI,
    functionName: 'getMemberInfo',
    args: address ? [address] : undefined,
    enabled: !!address,
  });

  const { data: totalMembers } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CipherHoardGuardABI,
    functionName: 'totalMembers',
  });

  const { data: totalResources } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CipherHoardGuardABI,
    functionName: 'totalResources',
  });

  // Write functions
  const depositEncryptedResource = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CipherHoardGuardABI,
    functionName: 'depositEncryptedResource',
  });

  const withdrawResource = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CipherHoardGuardABI,
    functionName: 'withdrawResource',
  });

  const performEncryptedOperation = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CipherHoardGuardABI,
    functionName: 'performEncryptedOperation',
  });

  return {
    contract,
    treasuryBalance,
    memberInfo,
    totalMembers,
    totalResources,
    depositEncryptedResource,
    withdrawResource,
    performEncryptedOperation,
  };
};
