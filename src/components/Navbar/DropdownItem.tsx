interface DropdownItemProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  href,
  icon,
  children,
}) => (
  <a
    href={href}
    className="flex items-start text-center gap-2 px-4 py-2.5 hover:bg-purple-50 transition-all duration-300 group"
  >
    <span className="w-4 h-4 mr-2 text-black transition-transform duration-300 group-hover:scale-110">
      {icon}
    </span>
    <span className="font-medium text-black">{children}</span>
  </a>
);
export default DropdownItem;
