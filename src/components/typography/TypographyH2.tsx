import { type ReactNode } from "react";



interface TypographyProp {
  children : ReactNode
}

export function TypographyH2({children}: TypographyProp) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {
        children
      }
    </h2>
  );
}
