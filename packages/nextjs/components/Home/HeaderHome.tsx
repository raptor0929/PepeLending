import React from "react";
import AndesFinanceLogo from "../Global/AndesFinanceLogo";
import { FaucetButton, RainbowKitCustomConnectButton } from "../scaffold-eth";
// import LanguageSwitcher from "../Global/LanguageSwitcher";
// import AccountConnect from "../layout/header/AccountConnect";
// import { BlackCreateWalletButton } from "../layout/header/BlackCreateWalletButton";
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useAccount } from "wagmi";

type ScrollComponentProps = {
  scrollToSection: (index: number) => void;
  activeSection: number;
};

const HeaderHome: React.FC<ScrollComponentProps> = ({ scrollToSection, activeSection }) => {
  const { address } = useAccount();
  return (
    <Navbar className="z-10 bg-background-1 py-14 px-20" maxWidth="2xl">
      <NavbarContent className="w-full justify-between">
        <NavbarBrand>
          <Link color={activeSection === 0 ? undefined : "foreground"}>
            <AndesFinanceLogo />
          </Link>
        </NavbarBrand>
        <div className="flex w-1/2 justify-center gap-6 lg:gap-20">
          <NavbarItem className="text-2xl">
            <Link color={activeSection === 0 ? undefined : "foreground"} onPress={() => scrollToSection(0)}>
              Home
            </Link>
          </NavbarItem>
          <NavbarItem className="text-2xl">
            <Link color={activeSection === 1 ? undefined : "foreground"} onPress={() => scrollToSection(1)}>
              How it works?
            </Link>
          </NavbarItem>
          <NavbarItem className="text-2xl">
            <Link color={activeSection === 2 ? undefined : "foreground"} onPress={() => scrollToSection(2)}>
              Learning
            </Link>
          </NavbarItem>
        </div>
        <div className="flex items-center gap-4">
          <NavbarItem>{/* <LanguageSwitcher /> */}</NavbarItem>
          {!address && <NavbarItem className="hidden lg:flex">{/* <BlackCreateWalletButton /> */}</NavbarItem>}
          <NavbarItem className="hidden rounded-lg bg-information px-10 py-3 text-lg font-bold lg:flex">
            {/* TODO: WALLET */}
            <RainbowKitCustomConnectButton />
            <FaucetButton />
          </NavbarItem>
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default HeaderHome;
