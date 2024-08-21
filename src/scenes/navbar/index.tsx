import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ( { isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
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
                )}
            </div> 
        </div>
        {/* MOBILE MENU */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl ">
                {/* CLOSE BUTTON */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="text-gray-400 h-6 w-6"/>
                    </button>
                </div>
                {/* LINKS */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
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
            </div>
        )}
    </nav>
  )
}

export default Navbar;