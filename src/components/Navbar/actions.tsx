import { signOut } from "@/auth";
import { Settings } from "lucide-react";
import DropdownItem from "./DropdownItem";
import { SubmitButton } from "./Submit";

const Actions = async () => {
    return (
        <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl py-1 border border-purple-100/20 transition-all duration-300 animate-in fade-in slide-in-from-top-5 z-50">
            <DropdownItem href="editProfile" icon={<Settings />}>
                Edit Profile
            </DropdownItem>
            {/* <form
        action={async () => {
            "use server";
            await signOut();
            
        }}
        >
            
                
                
            <DeleteButton/>
       
                
            
            </form> */}
            <form
        action={async () => {
            "use server";
            await signOut();
            
        }}
        >
            
                
                
            <SubmitButton/>
       
                
            
            </form>
        </div>
    )
}
export default Actions;