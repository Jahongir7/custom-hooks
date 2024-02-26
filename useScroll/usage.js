import {useScroll} from "./useScroll"

export default function NavbarComponent() {
    
  const { isScrolled, hideOnTop } = useScroll();

    return(
    <header
      className={`z-[99999] fixed top-0 left-0 right-0 transition-transform duration-300 ${isScrolled ? "-translate-y-full " : "translate-y-0"} ${
        !hideOnTop ? "bg-white-900 border-b border-[#bac5c6] " : ""
      }
      `}
    >
        ...
    </header>
    )
}