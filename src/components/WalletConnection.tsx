import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export const WalletConnection = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const handleDisconnect = () => {
    disconnect();
    toast.info("Wallet disconnected");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <Card className="resource-card hologram-border">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <Wallet className="w-8 h-8 text-hologram-blue" />
              {isConnected && (
                <div className="absolute -top-1 -right-1">
                  <CheckCircle className="w-5 h-5 text-encryption-glow" />
                </div>
              )}
            </div>
            <CardTitle className="text-2xl font-medieval text-vault-gold">
              Guild Treasury Access
            </CardTitle>
          </div>
          <CardDescription className="font-tech">
            Connect your wallet to access the guild's encrypted resource vault
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {!isConnected ? (
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <AlertCircle className="w-4 h-4" />
                <span className="font-tech text-sm">Wallet required for guild treasury</span>
              </div>
              
              <div className="flex justify-center">
                <ConnectButton />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-vault-stone/30 border border-encryption-glow/30">
                <div>
                  <p className="font-tech text-sm text-encryption-glow">Connected Wallet</p>
                  <p className="font-mono text-sm text-foreground break-all">
                    {address}
                  </p>
                </div>
                <CheckCircle className="w-6 h-6 text-encryption-glow" />
              </div>
              
              <div className="flex justify-center">
                <ConnectButton />
              </div>
            </div>
          )}

          {/* Guild Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-vault-iron">
            <div className="text-center p-3 rounded-lg bg-hologram-blue/10 border border-hologram-blue/30">
              <p className="text-sm font-tech text-hologram-blue">Guild Members</p>
              <p className="text-xl font-bold text-foreground">47</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-vault-gold/10 border border-vault-gold/30">
              <p className="text-sm font-tech text-vault-gold">Total Resources</p>
              <p className="text-xl font-bold text-foreground">15,420</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-encryption-glow/10 border border-encryption-glow/30">
              <p className="text-sm font-tech text-encryption-glow">Encrypted Vaults</p>
              <p className="text-xl font-bold text-foreground">8</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};