import React from "react"
import {
    Sidebar as UISidebar,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarTrigger,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import { Home, User, Folder, Mail } from "lucide-react"

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

function AppSidebar() {
    return (
        <UISidebar side="left" variant="sidebar" collapsible="offcanvas">
                <SidebarHeader>
                    <div className="flex items-center justify-between w-full pt-2 pb-2 pl-2">
                        <Link to="/" className="text-lg font-semibold">
                            Noah Vogtli
                        </Link>
                        <div className="pr-2">
                            <SidebarTrigger />
                        </div>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link to="/">
                                    <Home />
                                    <span>Home</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link to="/about">
                                    <User />
                                    <span>About</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link to="/projects">
                                    <Folder />
                                    <span>Projects</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <Link to="/contact">
                                    <Mail />
                                    <span>Contact</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarContent>

                <SidebarFooter>
                    <SidebarSeparator />
                    <div className="p-2 text-sm">© {new Date().getFullYear()} Noah Vogtli</div>
                </SidebarFooter>
            </UISidebar>
    )
}

export default AppSidebar