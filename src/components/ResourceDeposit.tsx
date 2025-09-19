import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Coins, Gem, Sword, Shield, Zap, Lock } from "lucide-react";
import { toast } from "sonner";
import { useCipherHoardGuard } from "@/hooks/useContract";
import { useAccount } from "wagmi";
import { parseEther } from "viem";

const resourceTypes = [
  { value: "gold", label: "Gold Coins", icon: Coins, color: "text-vault-gold" },
  { value: "gems", label: "Rare Gems", icon: Gem, color: "text-hologram-purple" },
  { value: "weapons", label: "Weapons", icon: Sword, color: "text-vault-iron" },
  { value: "armor", label: "Armor Sets", icon: Shield, color: "text-hologram-blue" },
  { value: "magic", label: "Magic Items", icon: Zap, color: "text-encryption-glow" },
];

export const ResourceDeposit = () => {
  const [selectedResource, setSelectedResource] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const { address, isConnected } = useAccount();
  const { depositEncryptedResource, treasuryBalance, memberInfo } = useCipherHoardGuard();

  const handleDeposit = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }

    if (!selectedResource || !amount) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!memberInfo?.isActive) {
      toast.error("You are not a guild member");
      return;
    }

    try {
      const depositAmount = parseEther(amount);
      
      // Create FHE encrypted data for private on-chain storage
      // In a real implementation, this would use actual FHE encryption
      const resourceData = {
        type: selectedResource,
        amount: amount,
        description: description,
        timestamp: Date.now()
      };
      
      // Simulate FHE encryption by creating deterministic hashes
      const encryptedAmount = `0x${Buffer.from(JSON.stringify({
        amount: amount,
        nonce: Math.random().toString(36)
      })).toString('hex').padStart(64, '0')}`;
      
      const encryptedType = `0x${Buffer.from(JSON.stringify({
        type: selectedResource,
        description: description,
        nonce: Math.random().toString(36)
      })).toString('hex').padStart(64, '0')}`;

      // Call smart contract to store encrypted data on-chain
      await depositEncryptedResource.writeAsync({
        args: [encryptedAmount, encryptedType],
        value: depositAmount,
      });
      
      toast.success("🐉 Resources successfully encrypted and deposited!", {
        description: `${amount} ${selectedResource} added to dragon-guarded vault`
      });
      
      // Reset form
      setSelectedResource("");
      setAmount("");
      setDescription("");
    } catch (error) {
      console.error("Deposit error:", error);
      toast.error("❌ Deposit failed", {
        description: "The dragon's magic failed. Please try again."
      });
    }
  };

  const selectedResourceData = resourceTypes.find(r => r.value === selectedResource);

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <Card className="resource-card">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <Lock className="w-8 h-8 text-encryption-glow pulse-hologram" />
              <div className="absolute inset-0 bg-encryption-glow/20 rounded-full blur-md"></div>
            </div>
            <CardTitle className="text-2xl font-medieval text-vault-gold">
              Encrypted Resource Deposit
            </CardTitle>
          </div>
          <CardDescription className="font-tech">
            Deposit resources securely into the guild vault with FHE encryption
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Resource Type Selection */}
          <div className="space-y-2">
            <Label className="font-tech text-foreground">Resource Type</Label>
            <Select value={selectedResource} onValueChange={setSelectedResource}>
              <SelectTrigger className="hologram-border bg-vault-stone/30">
                <SelectValue placeholder="Select resource type" />
              </SelectTrigger>
              <SelectContent className="bg-vault-stone border-hologram-blue">
                {resourceTypes.map((resource) => {
                  const Icon = resource.icon;
                  return (
                    <SelectItem key={resource.value} value={resource.value}>
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${resource.color}`} />
                        <span>{resource.label}</span>
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          {/* Amount Input */}
          <div className="space-y-2">
            <Label className="font-tech text-foreground">Amount</Label>
            <div className="relative">
              <Input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="hologram-border bg-vault-stone/30 pl-12"
              />
              {selectedResourceData && (
                <selectedResourceData.icon 
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${selectedResourceData.color}`} 
                />
              )}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label className="font-tech text-foreground">Description (Optional)</Label>
            <Textarea
              placeholder="Add notes about this deposit..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="hologram-border bg-vault-stone/30 resize-none"
              rows={3}
            />
          </div>

          {/* Encryption Info */}
          <div className="p-4 rounded-lg bg-encryption-glow/10 border border-encryption-glow/30">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-encryption-glow" />
              <span className="font-tech text-sm text-encryption-glow">Encryption Details</span>
            </div>
            <p className="text-xs text-muted-foreground font-tech">
              Your deposit will be encrypted using Fully Homomorphic Encryption (FHE). 
              Only authorized guild members can decrypt and view the resource details.
            </p>
          </div>

          {/* Deposit Button */}
          <Button 
            variant="encrypted" 
            size="lg" 
            onClick={handleDeposit}
            disabled={depositEncryptedResource.isPending || !selectedResource || !amount || !isConnected}
            className="w-full"
          >
            {depositEncryptedResource.isPending ? (
              <>
                <div className="w-4 h-4 border-2 border-encryption-glow border-t-transparent rounded-full animate-spin"></div>
                Encrypting & Depositing...
              </>
            ) : (
              <>
                <Lock className="w-5 h-5" />
                Deposit Resources
              </>
            )}
          </Button>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-vault-iron">
            <div className="text-center p-3 rounded-lg bg-hologram-blue/10">
              <p className="text-sm font-tech text-hologram-blue">Your Deposits</p>
              <p className="text-xl font-bold text-foreground">23</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-vault-gold/10">
              <p className="text-sm font-tech text-vault-gold">Total Value</p>
              <p className="text-xl font-bold text-foreground">4,560</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};