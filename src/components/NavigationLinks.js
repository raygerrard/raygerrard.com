import React from "react";
import { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NavigationLink } from "./NavigationLink";

const links = [
    { label: 'about', color: 'rgb(233, 255, 112)', path: '/' },
    { label: 'contact', color: 'rgb(255, 214, 112)', path: '/contact' },
];

export const NavigationLinks = () => {
    const [selected, setSelected] = useState();
    const location = useLocation();

    useEffect(() => {
        const [current] = links.filter((link) => location.pathname === link.path);
        setSelected(current.color);
    }, [location.pathname]);

    return (
        <AnimateSharedLayout>
            {links.map(({ label, path, color }) => (
                <NavigationLink
                    key={label}
                    color={color}
                    label={label}
                    path={path}
                    isSelected={selected === color}
                />
            ))}
        </AnimateSharedLayout>
    );
};