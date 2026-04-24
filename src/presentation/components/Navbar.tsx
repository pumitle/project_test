"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  { label: "Services", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Industries", hasDropdown: false },
  { label: "Work", hasDropdown: false },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>, label: string) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(label);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  return (
    <AppBar
      position="absolute"
      className="!bg-transparent !shadow-none"
      sx={{ zIndex: 10 }}
    >
      <Toolbar className="flex items-center justify-between px-6 py-2 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex items-center gap-2 font-heading text-2xl font-bold tracking-wide text-white select-none">
          <span className="bg-white text-[--navy] rounded-md px-1 font-black text-xl leading-none">
            A
          </span>
          AWEBCO
        </div>

        {/* Nav Links — Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <React.Fragment key={link.label}>
              <Button
                color="inherit"
                endIcon={link.hasDropdown ? <KeyboardArrowDownIcon /> : null}
                onClick={
                  link.hasDropdown
                    ? (e) => handleOpen(e, link.label)
                    : undefined
                }
                className="!text-white/90 hover:!text-white !font-body !font-medium !text-sm"
              >
                {link.label}
              </Button>

              {link.hasDropdown && (
                <Menu
                  anchorEl={anchorEl}
                  open={activeMenu === link.label}
                  onClose={handleClose}
                  slotProps={{
                    paper: {
                      sx: {
                        bgcolor: "#1a2d6b",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "white",
                        mt: 1,
                      },
                    },
                  }}
                >
                  {["Option One", "Option Two", "Option Three"].map((item) => (
                    <MenuItem
                      key={item}
                      onClick={handleClose}
                      className="!text-white/80 hover:!text-white hover:!bg-white/10 !text-sm"
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<LoginIcon />}
            className="!border-white/30 !text-white !text-sm"
          >
            Log In
          </Button>
          <Button
            variant="contained"
            color="primary"
            endIcon={<RocketLaunchIcon />}
            className="!text-sm"
          >
            START A PROJECT
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <IconButton color="inherit" className="md:!hidden">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}