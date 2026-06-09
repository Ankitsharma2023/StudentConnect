
import { auth } from "@/auth";
import NavContainer from "./NavContainer";
import Actions from "./actions";

const Navbar = async () => {
    const session = await auth();
    if (!session) return;
    return (
        <NavContainer name={session.user?.name ?? ""}>
            <Actions/>
        </NavContainer>
    );
};

export default Navbar;
