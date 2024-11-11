import { Label } from "@radix-ui/react-label"
import { TypographyH3 } from "./typography/TypographyH3"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export const ContactForm = ()=>{
  return (
    <div className="bg-black rounded-md p-4 ">
      <div className="text-center">
        <TypographyH3>Get in touch</TypographyH3>
      </div>
      <div className="py-2 ">
        <Label>Name</Label>
        <Input className="text-black" placeholder="John Doe" />
      </div>

      <div className="py-2">
        <Label>Email</Label>
        <Input className="text-black" placeholder="john@example.com" />
      </div>

      <div className="py-2">
        <Label>Phone</Label>
        <Input className="text-black" placeholder="+2519... (optional)" />
      </div>

      <div className="py-2 mb-3">
        <Label>Message</Label>
        <Textarea className="text-black" placeholder="your message" />
      </div>

      <Button className="w-full py-4">Send Message</Button>
    </div>
  );
}