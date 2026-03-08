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

function AppSidebar() {
    return (
        <UISidebar side="left" variant="sidebar" collapsible="offcanvas">
                <SidebarHeader>
                    <div className="flex items-center justify-between w-full pt-2 pb-2 pl-2">
                        <a href="/" className="text-lg font-semibold">
                            Noah Vogtli
                        </a>
                        <div className="pr-2">
                            <SidebarTrigger />
                        </div>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <a href="#home">
                                    <Home />
                                    <span>Home</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <a href="#about">
                                    <User />
                                    <span>About</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <a href="#projects">
                                    <Folder />
                                    <span>Projects</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <a href="#contact">
                                    <Mail />
                                    <span>Contact</span>
                                </a>
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