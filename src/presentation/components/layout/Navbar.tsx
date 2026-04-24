"use client";

import React, { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import { NAV_ITEMS } from "@/src/presentation/data/siteData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 lg:px-10 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 no-underline">
          <div className="w-8 h-8 bg-white rounded-[5px] flex items-center justify-center shadow-lg">
            <span
              className="text-[#0c1f52] font-black text-sm"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              A
            </span>
          </div>
          <span
            className="text-white font-black text-xl tracking-[4px]"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            AWEBCO
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-white/85 hover:text-white text-[13.5px] font-medium
                           no-underline flex items-center gap-0.5 transition-colors duration-200"
              >
                {item.label}
                {item.hasDropdown && (
                  <KeyboardArrowDownIcon sx={{ fontSize: 17, opacity: 0.7 }} />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outlined"
            startIcon={<AccountCircleOutlinedIcon sx={{ fontSize: 16 }} />}
            sx={{
              color: "white",
              borderColor: "rgba(255,255,255,0.5)",
              borderWidth: "1.5px",
              borderRadius: "999px",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "0.82rem",
              px: 2.2,
              py: 0.75,
              "&:hover": {
                borderColor: "white",
                backgroundColor: "rgba(255,255,255,0.08)",
                borderWidth: "1.5px",
              },
            }}
          >
            Log In
          </Button>

          <Button
            variant="contained"
            endIcon={<RocketLaunchOutlinedIcon sx={{ fontSize: 15 }} />}
            sx={{
              background: "linear-gradient(135deg, #c0392b 0%, #962d22 100%)",
              borderRadius: "999px",
              textTransform: "none",
              fontWeight: 700,
              fontSize: "0.82rem",
              px: 2.5,
              py: 0.9,
              boxShadow: "0 4px 18px rgba(192,57,43,0.45)",
              "&:hover": {
                background: "linear-gradient(135deg, #d44233 0%, #a83228 100%)",
                boxShadow: "0 6px 22px rgba(192,57,43,0.55)",
                transform: "translateY(-1px)",
              },
              transition: "all 0.25s ease",
            }}
          >
            START A PROJECT
          </Button>
        </div>

        {/* Mobile Toggle */}
        <IconButton
          className="flex md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          sx={{ color: "white" }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-3 bg-[#0c1f52]/95 backdrop-blur-md rounded-2xl p-4 mx-2 border border-white/10 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center justify-between text-white/85 py-2.5 px-3
                         text-sm font-medium no-underline hover:text-white hover:bg-white/5
                         rounded-xl transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
              {item.hasDropdown && (
                <KeyboardArrowDownIcon sx={{ fontSize: 16, opacity: 0.5 }} />
              )}
            </a>
          ))}

          <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-white/10">
            <Button
              fullWidth
              variant="outlined"
              startIcon={<AccountCircleOutlinedIcon />}
              sx={{
                color: "white",
                borderColor: "rgba(255,255,255,0.4)",
                borderRadius: "999px",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Log In
            </Button>
            <Button
              fullWidth
              variant="contained"
              endIcon={<RocketLaunchOutlinedIcon />}
              sx={{
                background: "linear-gradient(135deg, #c0392b, #962d22)",
                borderRadius: "999px",
                textTransform: "none",
                fontWeight: 700,
                boxShadow: "0 4px 14px rgba(192,57,43,0.4)",
              }}
            >
              START A PROJECT
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
