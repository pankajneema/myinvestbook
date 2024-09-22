import * as React from "react";

import { cn } from "../../app/lib/utils";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, htmlFor, ...props }, ref) => {
    return (
      <label
        htmlFor={htmlFor}
        className={cn(
          "block text-sm font-medium text-gray-700", // You can customize this class
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </label>
    );
  }
);
Label.displayName = "Label";

export { Label };
