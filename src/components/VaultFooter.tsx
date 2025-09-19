import { Shield, Lock, Users } from "lucide-react";

export const VaultFooter = () => {
  return (
    <footer className="relative mt-16 bg-gradient-vault border-t border-vault-iron overflow-hidden">
      {/* Animated Vault Door */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="vault-door-animation w-full h-full bg-gradient-to-r from-vault-iron to-vault-stone transform origin-left"></div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 rounded-full bg-hologram-blue/5 blur-2xl pulse-hologram"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 rounded-full bg-vault-gold/5 blur-2xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Guild Security */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <Shield className="w-8 h-8 text-hologram-blue" />
                <div className="absolute inset-0 bg-hologram-blue/20 rounded-full blur-md pulse-hologram"></div>
              </div>
            </div>
            <h3 className="font-medieval text-lg text-vault-gold mb-2">Guild Protection</h3>
            <p className="text-sm text-muted-foreground font-tech">
              Advanced cryptographic security protecting your guild's most valuable resources
            </p>
          </div>

          {/* Encryption Tech */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <Lock className="w-8 h-8 text-encryption-glow" />
                <div className="absolute inset-0 bg-encryption-glow/20 rounded-full blur-md pulse-hologram"></div>
              </div>
            </div>
            <h3 className="font-medieval text-lg text-vault-gold mb-2">FHE Technology</h3>
            <p className="text-sm text-muted-foreground font-tech">
              Fully Homomorphic Encryption ensures complete privacy of your deposits
            </p>
          </div>

          {/* Community */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <Users className="w-8 h-8 text-hologram-purple" />
                <div className="absolute inset-0 bg-hologram-purple/20 rounded-full blur-md pulse-hologram"></div>
              </div>
            </div>
            <h3 className="font-medieval text-lg text-vault-gold mb-2">Guild Unity</h3>
            <p className="text-sm text-muted-foreground font-tech">
              Trusted by guilds worldwide for secure resource management
            </p>
          </div>
        </div>

        {/* Vault Door Animation */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-vault-stone/30 border border-vault-iron">
            <div className="w-2 h-2 rounded-full bg-encryption-glow pulse-hologram"></div>
            <span className="font-tech text-sm text-muted-foreground">
              Vault security systems active
            </span>
          </div>
        </div>

        {/* Copyright and Links */}
        <div className="border-t border-vault-iron pt-8 text-center">
          <p className="text-sm text-muted-foreground font-tech mb-4">
            © 2024 Private Guild Vault. Secured by FHE Technology.
          </p>
          
          <div className="flex justify-center gap-6 text-xs font-tech">
            <a href="#" className="text-hologram-blue hover:text-hologram-glow transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-hologram-blue hover:text-hologram-glow transition-colors">
              Security Audit
            </a>
            <a href="#" className="text-hologram-blue hover:text-hologram-glow transition-colors">
              Guild Documentation
            </a>
          </div>
        </div>

        {/* Vault Door Status */}
        <div className="absolute bottom-4 right-6">
          <div className="flex items-center gap-2 text-xs font-tech text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-vault-gold animate-pulse"></div>
            <span>Vault Door: Securing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};