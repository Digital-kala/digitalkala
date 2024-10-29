import { ReactElement } from "react";
import { NavBar, Footer } from ".";

export function Layout({
  children,
  pageTitle,
}: {
  children: ReactElement[] | ReactElement;
  className?: string;
  pageTitle?: string;
}) {
  return (
    <div className="h-screen overflow-y-auto">
      <NavBar pageTitle={pageTitle} />
      <div className="" id="layout">
        <div className="space-y-8 w-full h-full">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
