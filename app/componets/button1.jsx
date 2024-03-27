import Link from "next/link";
import { Button } from "@/components/ui/button"


export function Button1({ bgColor, buttonText, linkHref }) {
  return (
    <Button  className={`active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl ${bgColor} text-white text-lg font-bold`}>
      <Link href={linkHref}>{buttonText}</Link>
    </Button>
  );
}
