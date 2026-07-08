import { CSSProperties, forwardRef, ReactNode } from "react";
import "./page.css";

export const Page = forwardRef<HTMLDivElement, { children: ReactNode, style?: CSSProperties }>(({ children, style }, ref) => (
    <div style={style} className="page" ref={ref}>
      {children}
    </div>
));

Page.displayName = 'Page';