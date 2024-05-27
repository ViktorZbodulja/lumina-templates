import { auth } from "@/server/auth";
import  UserButton from "./user-button";
import Link from "next/link";
import { LogIn } from "lucide-react";
//shad/cn
import { Button } from "../ui/button";


async function Nav() {
    const session = await auth();
    console.log(session);
    return (
        <header className="bg-slate-500 py-4">
            <nav>
                <ul className="flex justify-between">
                    <li>Logo</li>
                    {!session ? (
                        <li>
                            <Button asChild>
                                <Link className="flex gap-2" href="/auth/login">
                                    <LogIn size={16}/><span>Login</span>
                                </Link>
                            </Button>
                        </li>
                    ) :  (
                    <li>
                        <UserButton expires={session?.expires} user={session?.user} />
                    </li>
                )} 
                   
                </ul>
            </nav>
        </header> 
    )
}

export default Nav;
