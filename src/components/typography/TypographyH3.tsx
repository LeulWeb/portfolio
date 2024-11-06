import { TypographyProp } from "./TypographyH2";

export function TypographyH3({children} : TypographyProp) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {
        children
      }
    </h3>
  );
}
