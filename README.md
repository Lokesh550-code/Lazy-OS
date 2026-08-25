# LazyOS

A stylized, browser-based desktop environment built with React.

LazyOS is an ongoing project where I am experimenting with recreating the experience of using a desktop operating system inside a web browser. The goal isn't to recreate an actual operating system, but to build a convincing and interactive computing environment while exploring frontend architecture, state management, UI systems, and browser APIs.

> **Status:** Phase 2 — Window System Complete

---

## Current Features

### Desktop

- Custom desktop environment
- Stylized dark theme with muted orange accents
- Floating clock and date
- Minimal taskbar
- Keyboard-accessible application launcher

### Application Launcher

- Fuzzel-inspired launcher
- Application search and filtering
- Keyboard shortcuts for opening and closing the launcher
- Application registry for managing available applications

### Window System

- Open and close windows
- Drag windows around the desktop
- Resize windows
- Focus and unfocus windows
- Window stacking
- Minimize and restore windows
- Maximize and restore windows
- Dragging while maximized
- Taskbar integration
- Multiple independent window instances

### Architecture

- Centralized window state using React Context
- Window-management operations separated from presentation
- Application registry for application metadata
- Reusable utilities for window operations
- Component-based desktop architecture

---

## Tech Stack

- **React**
- **JavaScript**
- **Vite**
- **Tailwind CSS**

---

## Roadmap

LazyOS is being developed in phases.

### Phase 1 — Desktop Shell ✓

- Desktop
- Clock
- Taskbar
- Application launcher
- Keyboard shortcuts
- Application registry
- Launcher filtering

### Phase 2 — Window System ✓

- Window lifecycle
- Focus management
- Dragging
- Resizing
- Minimize / restore
- Maximize / restore
- Window stacking
- Taskbar ↔ window integration
- Window state management
- Architecture refactoring

### Phase 3 — Applications

Planned applications include:

- Terminal
- Editor
- File Manager
- Calculator
- Camera
- Music Player
- More experimental applications

### Phase 4 — Virtual Filesystem & Persistence

- Virtual filesystem
- File and directory management
- Application data persistence
- Saving and loading files
- Persistent user settings

### Phase 5 — OS/Application Integration

- File associations
- Application-to-application interaction
- Opening files with appropriate applications
- Shared OS-level services
- Deeper integration between applications

---

## Running Locally

Clone the repository:

```bash
git clone https://github.com/Lokesh550-code/Lazy-OS.git
cd Lazy-OS