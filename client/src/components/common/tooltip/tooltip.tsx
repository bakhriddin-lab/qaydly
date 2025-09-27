import {
  Tooltip as TooltipShadcn,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { TooltipProps } from "./types";

export const Tooltip = ({ children, content }: TooltipProps) => {
  return (
    <TooltipShadcn delayDuration={600}>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent>{content}</TooltipContent>
    </TooltipShadcn>
  );
};
