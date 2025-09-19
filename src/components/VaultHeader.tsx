import { Lock, Eye, Zap } from "lucide-react";
import dragonLogo from "@/assets/dragon-vault-logo.png";

export const VaultHeader = () => {
  return (
    <header className="relative py-8 px-6 border-b border-vault-iron bg-gradient-vault">
      {/* Background Holographic Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-hologram-blue/5 blur-xl pulse-hologram"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-hologram-purple/5 blur-xl pulse-hologram"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src={dragonLogo} 
                alt="Dragon Vault Logo" 
                className="w-16 h-16 object-contain"
              />
              <div className="absolute inset-0 bg-hologram-blue/20 rounded-full blur-md pulse-hologram"></div>
            </div>
            <div>
              <h1 className="text-2xl font-medieval font-bold text-vault-gold">
                Private Guild Vault
              </h1>
              <p className="text-sm text-muted-foreground font-tech">
                Secured Resource Banking
              </p>
            </div>
          </div>

          {/* Security Indicators */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-vault-stone/50 border border-hologram-blue/30">
              <Zap className="w-4 h-4 text-hologram-blue" />
              <span className="text-xs font-tech text-hologram-blue">FHE Active</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-vault-stone/50 border border-encryption-glow/30">
              <Eye className="w-4 h-4 text-encryption-glow" />
              <span className="text-xs font-tech text-encryption-glow">Dragon Guard</span>
            </div>
          </div>
        </div>

        {/* Main Header Message */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-medieval font-bold text-foreground mb-4">
            Guild Secrets Secured by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-hologram pulse-hologram">
              FHE
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-tech">
            Deposit your guild resources with complete privacy. Only authorized guild members 
            can access the encrypted treasury through advanced cryptographic protocols.
          </p>
        </div>
      </div>
    </header>
  );
};