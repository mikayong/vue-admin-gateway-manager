import {
  mdiAccountCircle,
  mdiMonitor,
  mdiWikipedia,
  mdiLock,
  mdiRouterWireless,
} from "@mdi/js";

export default [
  {
    to: "/dashboard",
    icon: mdiMonitor,
    label: "Dashboard",
  },
  {
    to: "/tables",
    label: "Gateway",
    icon: mdiRouterWireless,
  },
  {
    to: "/profile",
    label: "Profile",
    icon: mdiAccountCircle,
  },
  {
    to: "/login",
    label: "Login",
    icon: mdiLock,
  },
  {
    href: "http://wiki.dragino.com",
    label: "Wiki",
    icon: mdiWikipedia,
    target: "_blank",
  },
];
