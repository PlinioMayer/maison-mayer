import { ReactNode } from "react";

export const Table = ({ children }: { children: ReactNode }) => (
  <div
    className="h-screen w-screen"
    style={{backgroundImage: "url(table.png)"}}
  >
    {children}
  </div>
);
