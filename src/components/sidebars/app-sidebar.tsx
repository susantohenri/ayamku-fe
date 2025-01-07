"use client";

import * as React from "react";
import {
  AudioWaveform,
  Bot,
  Command,
  GalleryVerticalEnd,
  Users,
  Truck,
  BarChart2,
  Users2,
  UserCircle,
  LayoutDashboard,
  MapPin,
  Package,
  FileBarChart,
  LogOut,
  Megaphone,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { NavMainSidebar } from "@/components/sidebars/nav-main-sidebar";
import { NavUserSidebar } from "@/components/sidebars/nav-user-sidebar";
import { TeamSwitcherSidebar } from "@/components/sidebars/team-switcher-sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navCategories: [
    {
      category: "Company",
      items: [
        {
          title: "Dashboard",
          url: "/",
          icon: Bot,
          isActive: true,
        },
        {
          title: "Users",
          url: "/user",
          icon: Users,
        },
        {
          title: "Supplier",
          url: "#",
          icon: Truck,
        },
        {
          title: "Trade",
          url: "#",
          icon: BarChart2,
        },
        {
          title: "Sales & Marketing",
          url: "#",
          icon: Megaphone,
        },
        {
          title: "Teams",
          url: "#",
          icon: Users2,
        },
        {
          title: "Users",
          url: "#",
          icon: UserCircle,
        },
      ],
    },
    {
      category: "Client",
      items: [
        {
          title: "Overview",
          url: "/client/overview",
          icon: LayoutDashboard,
        },
        {
          title: "Locations",
          url: "#",
          icon: MapPin,
        },
        {
          title: "Stock",
          url: "#",
          icon: Package,
        },
        {
          title: "Reports",
          url: "/client/reports",
          icon: FileBarChart,
        },
      ],
    },
    {
      category: "Investor",
      items: [
        {
          title: "Dashboard",
          url: "#",
          icon: LayoutDashboard,
        },
        {
          title: "Logout",
          url: "#",
          icon: LogOut,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcherSidebar teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMainSidebar categories={data.navCategories} />
      </SidebarContent>
      <SidebarFooter>
        <NavUserSidebar user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
