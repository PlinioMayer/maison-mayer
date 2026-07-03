import { forwardRef, ReactNode } from "react";
import "./page.css";

export const Page = forwardRef<HTMLDivElement, { children: ReactNode }>(({ children }, ref) => (
    <div className="page" ref={ref}>
      <div className="page-content">
        {children}
      </div>
    </div>
));

Page.displayName = 'Page';