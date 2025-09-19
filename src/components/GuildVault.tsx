import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, Lock, Users, Zap, Crown } from "lucide-react";
import { Coins, Gem, Sword, Shield, Zap } from "lucide-react";
import { useCipherHoardGuard } from "@/hooks/useContract";
import { formatEther } from "viem";

const mockVaultData = [
  {
    id: 1,
    type: "gold",
    amount: "***",
    depositor: "0x...a4b2",
    timestamp: "2 hours ago",
    encrypted: true,
    icon: Coins,
    color: "text-vault-gold"
  },
  {
    id: 2,
    type: "gems",
    amount: "***",
    depositor: "0x...9f3e",
    timestamp: "5 hours ago",
    encrypted: true,
    icon: Gem,
    color: "text-hologram-purple"
  },
  {
    id: 3,
    type: "weapons",
    amount: "***",
    depositor: "0x...2c8d",
    timestamp: "1 day ago",
    encrypted: true,
    icon: Sword,
    color: "text-vault-iron"
  },
  {
    id: 4,
    type: "armor",
    amount: "***",
    depositor: "0x...7h9k",
    timestamp: "2 days ago",
    encrypted: true,
    icon: Shield,
    color: "text-hologram-blue"
  },
  {
    id: 5,
    type: "magic",
    amount: "***",
    depositor: "0x...1a5f",
    timestamp: "3 days ago",
    encrypted: true,
    icon: Zap,
    color: "text-encryption-glow"
  }
];

export const GuildVault = () => {
  const { treasuryBalance, totalMembers, totalResources, memberInfo } = useCipherHoardGuard();

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-medieval font-bold text-vault-gold mb-4">
          Guild Resource Vault
        </h2>
        <p className="text-muted-foreground font-tech max-w-2xl mx-auto">
          Encrypted deposits from guild members. All amounts and details are protected by FHE encryption.
        </p>
      </div>

      {/* Vault Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="resource-card text-center">
          <CardContent className="pt-6">
            <Users className="w-8 h-8 text-hologram-blue mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{totalMembers?.toString() || "0"}</p>
            <p className="text-sm font-tech text-hologram-blue">Active Members</p>
          </CardContent>
        </Card>
        
        <Card className="resource-card text-center">
          <CardContent className="pt-6">
            <Lock className="w-8 h-8 text-encryption-glow mx-auto mb-2 pulse-hologram" />
            <p className="text-2xl font-bold text-foreground">
              {treasuryBalance ? formatEther(treasuryBalance) : "***"}
            </p>
            <p className="text-sm font-tech text-encryption-glow">Total Deposits</p>
          </CardContent>
        </Card>
        
        <Card className="resource-card text-center">
          <CardContent className="pt-6">
            <Crown className="w-8 h-8 text-vault-gold mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">100%</p>
            <p className="text-sm font-tech text-vault-gold">Dragon Protection</p>
          </CardContent>
        </Card>
        
        <Card className="resource-card text-center">
          <CardContent className="pt-6">
            <EyeOff className="w-8 h-8 text-hologram-purple mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">Private</p>
            <p className="text-sm font-tech text-hologram-purple">Visibility</p>
          </CardContent>
        </Card>
      </div>

      {/* Vault Contents */}
      <Card className="resource-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="font-medieval text-vault-gold">Recent Deposits</CardTitle>
              <CardDescription className="font-tech">
                Encrypted resource deposits from guild members
              </CardDescription>
            </div>
            <Badge variant="outline" className="border-encryption-glow text-encryption-glow">
              <Lock className="w-3 h-3 mr-1" />
              FHE Protected
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-4">
            {mockVaultData.map((deposit) => {
              const Icon = deposit.icon;
              return (
                <div 
                  key={deposit.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-vault-stone/30 border border-vault-iron hover:border-hologram-blue/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Icon className={`w-6 h-6 ${deposit.color}`} />
                      <div className="absolute inset-0 bg-current opacity-20 rounded-full blur-sm"></div>
                    </div>
                    
                    <div>
                      <p className="font-tech text-foreground capitalize">
                        {deposit.type}
                      </p>
                      <p className="text-sm text-muted-foreground font-tech">
                        From: {deposit.depositor}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-lg text-foreground">
                        {deposit.amount}
                      </span>
                      {deposit.encrypted && (
                        <Lock className="w-4 h-4 text-encryption-glow pulse-hologram" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground font-tech">
                      {deposit.timestamp}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-6 p-4 rounded-lg bg-encryption-glow/10 border border-encryption-glow/30">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-4 h-4 text-encryption-glow" />
              <span className="font-tech text-sm text-encryption-glow">Privacy Notice</span>
            </div>
            <p className="text-xs text-muted-foreground font-tech">
              All deposit amounts and sensitive data are encrypted using Fully Homomorphic Encryption. 
              Only authorized guild members with proper credentials can decrypt and view actual values.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};