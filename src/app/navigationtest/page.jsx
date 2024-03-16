"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigataionTest = () => {

    // CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const q = useSearchParams.length("q");
  console.log(q);
  const handleClick = () => {
    console.log("clicked");
    router.refresh();
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click
      </Link>
      <button onClick={handleClick}>Click & Read</button>
    </div>
  );
};
export default NavigataionTest;
