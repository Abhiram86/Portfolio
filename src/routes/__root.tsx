// import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="pt-2 z-50 top-0 sticky">
        <div className="mx-auto text-zinc-400 backdrop-blur-[4px] w-fit ring-2 ring-zinc-800 bg-zinc-500/25 py-4 px-8 space-x-4 rounded-full">
          <Link
            to="/"
            className="hover:text-zinc-200"
            activeProps={{ className: "text-white" }}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="hover:text-zinc-200"
            activeProps={{ className: "text-white" }}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="hover:text-zinc-200"
            activeProps={{ className: "text-white" }}
          >
            About
          </Link>
        </div>
      </div>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
