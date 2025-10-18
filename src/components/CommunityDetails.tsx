"use client"

import { Users, TrendingUp, MessageSquare, Youtube, Facebook } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface CommunityPlatform {
  name: string;
  type: 'reddit' | 'facebook' | 'youtube' | 'startup';
  memberCount: string;
  activity: string;
  sentiment?: string;
  details: string;
}

interface CommunityDetailsProps {
  platforms: CommunityPlatform[];
  totalReach: string;
  engagementLevel: 'High' | 'Medium' | 'Low';
  keyInsights?: string[];
}

const platformIcons = {
  reddit: MessageSquare,
  facebook: Facebook,
  youtube: Youtube,
  startup: TrendingUp
};

const platformColors = {
  reddit: 'from-orange-500 to-red-500',
  facebook: 'from-blue-500 to-indigo-500',
  youtube: 'from-red-500 to-pink-500',
  startup: 'from-green-500 to-emerald-500'
};

const sentimentColors = {
  'Positive': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Frustrated': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'Mixed': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'Neutral': 'bg-gray-500/20 text-gray-400 border-gray-500/30'
};

export default function CommunityDetails({
  platforms,
  totalReach,
  engagementLevel,
  keyInsights
}: CommunityDetailsProps) {
  if (!platforms || platforms.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <Users className="h-16 w-16 mx-auto mb-4 opacity-30" />
        <p className="text-lg">No community data available</p>
      </div>
    );
  }

  // Group platforms by type
  const redditPlatforms = platforms.filter(p => p.type === 'reddit');
  const facebookPlatforms = platforms.filter(p => p.type === 'facebook');
  const youtubePlatforms = platforms.filter(p => p.type === 'youtube');
  const startupPlatforms = platforms.filter(p => p.type === 'startup');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold">Community Signals</h2>
          <p className="text-muted-foreground mt-2">
            Real community data from {platforms.length} platforms
          </p>
        </div>

        {/* Summary Stats */}
        <div className="flex gap-4">
          <div className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-4">
            <p className="text-sm text-muted-foreground">Total Reach</p>
            <p className="text-2xl font-bold text-primary">{totalReach}</p>
          </div>
          <div className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-4">
            <p className="text-sm text-muted-foreground">Engagement</p>
            <Badge
              variant="outline"
              className={`text-sm font-bold ${
                engagementLevel === 'High' ? 'text-green-400 border-green-500/30' :
                engagementLevel === 'Medium' ? 'text-yellow-400 border-yellow-500/30' :
                'text-gray-400 border-gray-500/30'
              }`}
            >
              {engagementLevel}
            </Badge>
          </div>
        </div>
      </div>

      {/* Key Insights */}
      {keyInsights && keyInsights.length > 0 && (
        <div className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Key Insights
          </h3>
          <div className="space-y-2">
            {keyInsights.map((insight, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm">
                <span className="text-primary font-bold mt-0.5">•</span>
                <p className="text-muted-foreground flex-1">{insight}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reddit Section */}
      {redditPlatforms.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${platformColors.reddit}`}>
              <MessageSquare className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Reddit Communities</h3>
            <Badge variant="secondary">{redditPlatforms.length}</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {redditPlatforms.map((platform, idx) => (
              <div
                key={idx}
                className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-foreground">{platform.name}</h4>
                  {platform.sentiment && (
                    <Badge
                      variant="outline"
                      className={`text-xs ${sentimentColors[platform.sentiment as keyof typeof sentimentColors]}`}
                    >
                      {platform.sentiment}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-4 text-sm mb-2">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span className="font-semibold text-foreground">{platform.memberCount}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {platform.activity}
                  </Badge>
                </div>

                {platform.details && (
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-2">
                    {platform.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Facebook Groups Section */}
      {facebookPlatforms.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${platformColors.facebook}`}>
              <Facebook className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Facebook Groups</h3>
            <Badge variant="secondary">{facebookPlatforms.length}</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {facebookPlatforms.map((platform, idx) => (
              <div
                key={idx}
                className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all p-4"
              >
                <h4 className="font-semibold text-foreground mb-3">{platform.name}</h4>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span className="font-semibold text-foreground">{platform.memberCount}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {platform.activity}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* YouTube Section */}
      {youtubePlatforms.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${platformColors.youtube}`}>
              <Youtube className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold">YouTube Channels</h3>
            <Badge variant="secondary">{youtubePlatforms.length}</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {youtubePlatforms.map((platform, idx) => (
              <div
                key={idx}
                className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all p-4"
              >
                <h4 className="font-semibold text-foreground mb-3">{platform.name}</h4>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span className="font-semibold text-foreground">{platform.memberCount} subscribers</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {platform.activity}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Startup Activity Section */}
      {startupPlatforms.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${platformColors.startup}`}>
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Startup Activity</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {startupPlatforms.map((platform, idx) => (
              <div
                key={idx}
                className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all p-4"
              >
                <h4 className="font-semibold text-foreground mb-2">{platform.name}</h4>
                <p className="text-2xl font-bold text-primary mb-2">{platform.memberCount}</p>
                <Badge variant="secondary" className="text-xs mb-3">
                  {platform.activity}
                </Badge>
                {platform.details && (
                  <p className="text-sm text-muted-foreground">{platform.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
