//import styles from './name.module.scss';
import { FC } from "react"
import { DrawerProvider } from "../components/Drawer/DrawerProvider";
import { FilterProvider } from "../components/FilterMenu/FilterProvider";
import { SnackbarProvider } from "notistack";
import UserProvider from "./UserProvider";

const MainProvider = ({ children }: { children: React.ReactNode }) => {



    return (
        <UserProvider>
            <SnackbarProvider>
                <FilterProvider>
                    <DrawerProvider>
                        <>{children}</>
                    </DrawerProvider>
                </FilterProvider>
            </SnackbarProvider>
        </UserProvider>
    )
};

export default MainProvider;
