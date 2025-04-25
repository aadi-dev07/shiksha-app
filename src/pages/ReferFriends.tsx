
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WhatsappIcon, TelegramIcon, QrCodeIcon } from "@/components/referral/Icons";
import { useToast } from "@/hooks/use-toast";
import { Share2 } from "lucide-react";

const ReferFriends = () => {
  const { toast } = useToast();
  const referralCode = "STUDYBUDDY2024"; // This would come from your backend
  const referralsCount = 3; // This would be dynamic
  const totalNeeded = 5;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    toast({
      title: "Copied to clipboard!",
      description: "Share this code with your friends",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple to-blue-dark bg-clip-text text-transparent mb-4 animate-fade-in">
          Refer Your Friends & Earn Rewards 🎉
        </h1>
        <p className="text-muted-foreground">Share the joy of learning and earn exciting rewards!</p>
      </div>

      <Card className="p-6 mb-8 bg-gradient-to-br from-purple-light/10 to-blue-light/10 backdrop-blur">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Your Referral Code</h2>
          <div className="flex items-center justify-center gap-4">
            <code className="text-2xl font-mono bg-background px-4 py-2 rounded-lg border">
              {referralCode}
            </code>
            <Button onClick={copyToClipboard} variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <Button variant="outline" className="gap-2">
            <WhatsappIcon className="h-5 w-5" />
            WhatsApp
          </Button>
          <Button variant="outline" className="gap-2">
            <TelegramIcon className="h-5 w-5" />
            Telegram
          </Button>
          <Button variant="outline" className="gap-2">
            <QrCodeIcon className="h-5 w-5" />
            QR Code
          </Button>
        </div>

        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span>Progress</span>
            <span>{referralsCount}/{totalNeeded} Referrals</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple to-blue-dark h-2 rounded-full transition-all duration-500"
              style={{ width: `${(referralsCount/totalNeeded) * 100}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            2 more referrals to unlock 100 credits!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { tier: "Bronze", referrals: 3, reward: "50 Credits", color: "from-orange/80" },
            { tier: "Silver", referrals: 5, reward: "Skill Course", color: "from-gray-400" },
            { tier: "Gold", referrals: 10, reward: "Free Combo Program", color: "from-yellow-400" },
          ].map((tier) => (
            <Card key={tier.tier} className={`p-4 bg-gradient-to-br ${tier.color} to-transparent`}>
              <h3 className="font-bold mb-2">{tier.tier}</h3>
              <p className="text-sm mb-1">{tier.referrals} Referrals</p>
              <p className="text-sm font-semibold">{tier.reward}</p>
            </Card>
          ))}
        </div>
      </Card>

      <Button size="lg" className="w-full md:w-auto mx-auto block">
        Share Now and Earn 🚀
      </Button>
    </div>
  );
};

export default ReferFriends;
