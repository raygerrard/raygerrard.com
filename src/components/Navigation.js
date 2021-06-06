import { Logo } from "./Logo";
import { NavigationLinks } from "./NavigationLinks";

export const Navigation = () => (
    <div className="text-white text-md mb-8">
        <div className="container mx-auto">
            <div className="flex">
                <div className="flex-1 text-center">
                    <Logo />
                </div>
                <div className="hidden sm:flex items-center">
                    <NavigationLinks />
                </div>
            </div>
        </div>
    </div>
);