"use client"

import { X, CheckCircle2, Target, Package, TrendingUp, Users, Clock } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

interface RoadmapPhase {
  name: string;
  timeline: string;
  activities: string[];
  milestones: string[];
  deliverables: string[];
  successMetrics: string[];
  resources: string[];
  transitionCriteria?: string;
}

interface ExecutionPhaseModalProps {
  open: boolean;
  onClose: () => void;
  phase: RoadmapPhase | null;
}

export default function ExecutionPhaseModal({ open, onClose, phase }: ExecutionPhaseModalProps) {
  if (!phase) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] glass-card backdrop-blur-xl bg-card/95 border-primary/30">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary/30 to-blue-500/30">
              <Target className="h-6 w-6 text-primary" />
            </div>
            {phase.name}
          </DialogTitle>
          <DialogDescription className="flex items-center gap-2 text-base">
            <Clock className="h-4 w-4" />
            {phase.timeline}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-6 mt-4">
            {/* Activities Section */}
            {phase.activities && phase.activities.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                    <CheckCircle2 className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Activities & Tasks</h3>
                </div>

                <div className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-primary/20 p-5">
                  <ul className="space-y-3">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0 group-hover:scale-150 transition-transform" />
                        <span className="text-sm text-foreground flex-1">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Milestones Section */}
            {phase.milestones && phase.milestones.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    <Target className="h-5 w-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Key Milestones</h3>
                </div>

                <div className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-purple-500/20 p-5">
                  <ul className="space-y-3">
                    {phase.milestones.map((milestone, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Badge variant="outline" className="text-xs font-bold text-purple-400 border-purple-500/30 flex-shrink-0">
                          M{idx + 1}
                        </Badge>
                        <span className="text-sm text-foreground flex-1">{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Deliverables Section */}
            {phase.deliverables && phase.deliverables.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                    <Package className="h-5 w-5 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Deliverables</h3>
                </div>

                <div className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-green-500/20 p-5">
                  <ul className="space-y-3">
                    {phase.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground flex-1">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Success Metrics Section */}
            {phase.successMetrics && phase.successMetrics.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20">
                    <TrendingUp className="h-5 w-5 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Success Metrics</h3>
                </div>

                <div className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-orange-500/20 p-5">
                  <ul className="space-y-3">
                    {phase.successMetrics.map((metric, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-orange-400">{idx + 1}</span>
                        </div>
                        <span className="text-sm text-foreground flex-1">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Resources Needed Section */}
            {phase.resources && phase.resources.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500/20 to-amber-500/20">
                    <Users className="h-5 w-5 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Resources Needed</h3>
                </div>

                <div className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-yellow-500/20 p-5">
                  <ul className="space-y-3">
                    {phase.resources.map((resource, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-yellow-400 flex-shrink-0" />
                        <span className="text-sm text-foreground flex-1">{resource}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Transition Criteria Section */}
            {phase.transitionCriteria && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500/20 to-violet-500/20">
                    <CheckCircle2 className="h-5 w-5 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Ready to Move Forward?</h3>
                </div>

                <div className="glass-card backdrop-blur-md bg-card/50 rounded-xl border border-indigo-500/20 p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {phase.transitionCriteria}
                  </p>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-border">
          <Button variant="outline" onClick={onClose} className="px-6">
            Close
          </Button>
          <Button className="px-6">
            Mark as Complete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
