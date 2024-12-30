interface NavLinkProps {
    href: string;
    children: React.ReactNode;
  }
const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <a 
      href={href} 
      className="relative text-purple-100 font-medium tracking-wide group"
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-pink-200">
        {children}
      </span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-300 transition-all duration-300 group-hover:w-full rounded-full opacity-0 group-hover:opacity-100" />
    </a>
  );
  export default NavLink;