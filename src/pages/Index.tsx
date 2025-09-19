import { VaultHeader } from "@/components/VaultHeader";
import { WalletConnection } from "@/components/WalletConnection";
import { ResourceDeposit } from "@/components/ResourceDeposit";
import { GuildVault } from "@/components/GuildVault";
import { VaultFooter } from "@/components/VaultFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <VaultHeader />
      <main className="space-y-8">
        <WalletConnection />
        <ResourceDeposit />
        <GuildVault />
      </main>
      <VaultFooter />
    </div>
  );
};

export default Index;
