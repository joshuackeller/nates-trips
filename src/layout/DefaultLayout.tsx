import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

interface DefaultLayoutProps {
  children: any;
}

const NAV_ITEMS = [
  {
    text: "Nate's Adventures",
    href: "/",
  },
  {
    text: "About Nate",
    href: "/about",
  },
];

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="max-w-5xl mx-auto px-5">
      <div className="flex justify-center">
        <div className="text-4xl font-black text-nt-green flex gap-4">
          <Image src="/pt.svg" height={20} width={20} alt="Palm Tree" />
          Nate&apos;s Trips
          <Image src="/pt.svg" height={20} width={20} alt="Palm Tree" />
        </div>
      </div>
      <div className="flex justify-around py-1">
        {NAV_ITEMS.map((item) => (
          <NavLink item={item} key={item.text} />
        ))}
      </div>
      {children}
      <div className="border-t pt-2 mb-12">
        <div className="text-gray-500 text-xs">Nate&apos;s Trips</div>
      </div>
    </div>
  );
};

interface NavLinkProps {
  item: any;
}

const NavLink = ({ item }: NavLinkProps) => {
  const router = useRouter();

  const isActive = router.pathname == item.href;
  return (
    <Link
      href={item.href}
      className={`${
        isActive ? "text-nt-pink" : "text-nt-pink/70"
      }  hover:text-nt-pink font-bold text-lg `}
    >
      {item.text}
    </Link>
  );
};

export default DefaultLayout;
