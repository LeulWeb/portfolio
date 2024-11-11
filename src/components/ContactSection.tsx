
import { TypographyH1 } from "./typography/TypographyH1";
import { ContactCard } from "./ContactCard";
import { ContactForm } from "./ContactForm";

export const  ContactSection = () =>{
  return (
    <section className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="w-full text-center py-7">
          <TypographyH1>Let's talk</TypographyH1>
        </div>

        <main className="flex  flex-col md:flex-row  items-center">
          <div className=" w-full md:w-[50%]">
            <ContactCard />
          </div>
          <div className=" w-full md:w-[50%] ">
            <ContactForm />
          </div>
        </main>
      </div>
    </section>
  );
}
