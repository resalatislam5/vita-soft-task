import Link from "next/link";

function Header() {
  const links = [
    {
      name: "List",
      to: "/",
    },
    {
      name: "create",
      to: "/create",
    },
  ];
  return (
    <div className="flex justify-center gap-5 py-6 text-white font-bold text-xl bg-gray-400 ">
      {links.map((e, i) => (
        <Link className="hover:text-gray-800" href={e.to} key={i}>
          {e.name}
        </Link>
      ))}
    </div>
  );
}

export default Header;
