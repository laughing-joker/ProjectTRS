import Link from "next/link"

import { Button } from "@/components/ui/button"

export function Button1() {
  return (
    <Button asChild className="aactive:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-300 text-white text-lg font-bold">
      <Link href="/Registration">Sign Up</Link>
    </Button>
  )
}
