import Example from "./Example";
import { TypographyH1 } from "./typography/TypographyH1"

export const ServiceSection = ()=>{
    return (
      <section className="min-h-screen  md:w-10/12 w-11/12  mx-auto">
        <div className="w-full text-center">
          <TypographyH1>What I can build ?</TypographyH1>
        </div>

        <Example/>
      </section>
    );
}