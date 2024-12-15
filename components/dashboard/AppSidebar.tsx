"use client"

import * as React from "react"
import {
  Ticket,
  House,
  Plus,
  HandCoins,
  SearchSlash,
  GlobeLock,
  Handshake,
} from "lucide-react"

import { NavMain } from "@/components/dashboard/NavMain"
import { NavProjects } from "@/components/dashboard/NavEvents"
import { NavUser } from "@/components/dashboard/NavUser"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Início",
      url: "/dashboard",
      icon: House,
    },
    {
      title: "Criar evento",
      url: "/dashboard/events/create",
      icon: Plus,
    },
    {
      title: "Compras",
      url: "/dashboard/orders",
      icon: HandCoins,
    },
  ],
  projects: [
    {
      name: "Sobre nós",
      url: "#",
      icon: SearchSlash,
    },
    {
      name: "Políticas de Privacidade",
      url: "#",
      icon: GlobeLock,
    },
    {
      name: "Termos & Condições",
      url: "#",
      icon: Handshake,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Ticket className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">EventSync</span>
                  <span className="truncate text-xs">Projeto</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}