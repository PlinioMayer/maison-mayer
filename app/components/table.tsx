import { ReactNode } from "react";

export const Table = ({ children }: { children: ReactNode }) => (
  <div
    className="h-full w-full overflow-hidden"
    style={{backgroundImage: "url(table.png)"}}
  >
    {children}
  </div>
);
