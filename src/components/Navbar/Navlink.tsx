import { Button } from "../ui/button";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}
const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="relative text-black font-medium tracking-wide group"
  >
    <Button className="">{children}</Button>
  </a>
);
export default NavLink;
