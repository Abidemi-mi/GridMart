
import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";


const Header = () => {
  
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/official-dark-logo.jpg"
              alt={`${APP_NAME} logo`}
              width={48}
              height={48}
              priority={true}
              className="hidden dark:block rounded-xl  "
            />
            <Image
              src="/images/official-light-logo.jpg"
              alt={`${APP_NAME} logo`}
              width={48}
              height={48}
              priority={true}
              className="block dark:hidden"
            />
            <span className="hidden lg:block font-bold text-2xl ml-2">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
