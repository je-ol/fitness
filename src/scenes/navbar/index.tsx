import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ( {selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


  return (
    <nav className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
                {/* LEFT SIDE */}
                <img src={Logo} alt="logo" />
                {/* RIGHT SIDE */}
                { isAboveMediumScreens ? (
                    <div className={`${flexBetween} w-full`}>
                        {/* INNER LINKS */}
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link 
                                page="Home" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}/>
                            <Link 
                                page="Benefits" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}/>
                            <Link 
                                page="Our Classes" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}/>
                            <Link 
                                page="Contact Us" 
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}/>
                        </div>

                        {/* MEMBER BUTTONS */}
                        <div className={`${flexBetween} gap-8`}>
                            <button>Sign In</button>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                        </div>
                    </div>
                ) : 
                (
                    <button className="rounded-full bg-secondary-500 p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <Bars3Icon className="text-white h-6 w-6"/>
                    </button>
                )
                }
            </div> 
        </div>
    </nav>
  )
}

export default Navbar;