import React from "react";
import * as Icons from "lucide-react";

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function DynamicIcon({ name, className = "", size }: DynamicIconProps) {
  // Safe lookup with fallback icon
  const IconComponent = (Icons as any)[name];
  
  if (!IconComponent) {
    // Return a default icon like Sparkles or HelpCircle if custom one not found
    const Fallback = Icons.Sparkles;
    return <Fallback className={className} size={size} />;
  }
  
  return <IconComponent className={className} size={size} />;
}
export { DynamicIcon };
