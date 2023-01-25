import { Header } from "../components/Header"
import {
    
} from "@chakra-ui/react"

import { Outlet } from "react-router"

export const Common = () => {
    return (<>
            <Header />
        <Outlet />
    </>
    )
}