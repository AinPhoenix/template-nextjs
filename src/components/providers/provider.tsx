"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";
import TrpcProvider from "./trpc-provider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <TrpcProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </TrpcProvider>
  );
};

export default Providers;
