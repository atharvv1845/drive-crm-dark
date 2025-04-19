
import * as React from "react";
import { cn } from "@/lib/utils";

export interface CustomCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  isLoading?: boolean;
}

const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  ({ className, title, description, footer, children, isLoading, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-drive-border bg-drive-card shadow-sm",
          className
        )}
        {...props}
      >
        {(title || description) && (
          <div className="p-6">
            {title && <h3 className="text-lg font-medium text-white">{title}</h3>}
            {description && (
              <p className="mt-1 text-sm text-drive-subtext">{description}</p>
            )}
          </div>
        )}
        <div className="px-6 py-4">
          {isLoading ? (
            <div className="flex h-32 items-center justify-center">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-drive-subtext border-t-drive-primary" />
            </div>
          ) : (
            children
          )}
        </div>
        {footer && <div className="border-t border-drive-border p-4">{footer}</div>}
      </div>
    );
  }
);

CustomCard.displayName = "CustomCard";

export { CustomCard };
