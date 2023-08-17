import React, { createContext, useContext, useState } from "react"
import { Drawer } from "./Drawer";

export interface IDrowerProvider {
    isDrawerOpened: boolean;
    setIsDrawerOpened: (active: boolean) => void
    closeDrawer: () => void
    content: null | React.ReactNode
    openDrawer: (_component: React.ReactNode) => void
    setContent: (content: React.ReactNode | null) => void
}

export const DrawerContext = createContext<IDrowerProvider>({
    isDrawerOpened: false,
    setIsDrawerOpened: (_active: boolean) => { return null },
    closeDrawer: () => { return null },
    content: null,
    openDrawer: (_component: React.ReactNode) => { return null },
    setContent: (_content: React.ReactNode | null) => { return null },
})

export const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDrawerOpened, setIsDrawerOpened] = useState<boolean>(false)
    const [content, setContent] = useState<null | React.ReactNode>(null)

    const closeDrawer = () => {
        setContent(null)
        return setIsDrawerOpened(false)
    }

    const openDrawer = (component: React.ReactNode) => {        
        setContent(component)
        setIsDrawerOpened(true)
    }

    return (
        <DrawerContext.Provider value={{ isDrawerOpened, closeDrawer, setIsDrawerOpened, content, setContent, openDrawer }} >
            <Drawer />
            {children}
        </DrawerContext.Provider>
    )
}

export const useDrawerProvider = () => useContext(DrawerContext)