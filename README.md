# Markdown Buddy - Advanced NeutralinoJS Tutorial Browser

A modern, feature-rich desktop application for browsing and viewing markdown-based tutorials with advanced navigation, syntax highl### 📋 **Table of Contents**

- **Auto-generated** - Created from markdown headers
- **Always visible** - Automatically displayed for all tutorials (no toggle needed)
- **Color-coded levels** - Different colors for H1-H6
- **Smooth scrolling** - Click to jump to sections

### 🔝 **Scroll to Top Feature**

- **Floating Button** - Elegant circular button appears after scrolling 300px down
- **Smart Visibility** - Auto-shows/hides based on scroll position with smooth animations
- **Keyboard Shortcuts** - `Page Up` or `Home` keys for instant top navigation
- **Smooth Animation** - 500ms cubic-bezier easing for natural scroll motion
- **Theme Integration** - Blue (light) / Purple (dark) colors matching app theme
- **Mobile Optimized** - Responsive sizing and touch-friendly interactions
- **Accessibility** - ARIA labels and keyboard navigation support
- **Performance** - Throttled scroll detection for optimal performanceg, and responsive design. This is an enhanced NeutralinoJS port of the original PHP-based [markdown_tutorials](https://github.com/codecaine-zz/markdown_tutorials) application.

![Markdown Buddy Screenshot](screenshots/main.png)

## ✨ Features

### 📚 **Core Functionality**

- **Interactive Tutorial Browser** - Navigate through organized tutorial collections
- **Smart File System Integration** - Automatically scans and loads markdown files
- **Cross-Platform Native App** - Built with NeutralinoJS for Windows, macOS, and Linux
- **Offline First** - Works completely offline with local file access

### 🎨 **Rich Content Display**

- **Advanced Syntax Highlighting** - Code blocks highlighted with Highlight.js for 20+ languages
- **Auto-Generated Table of Contents** - Navigate through document sections easily (always visible)
- **One-Click Code Copying** - Copy any code block with a single click
- **Smooth Anchor Navigation** - Jump to sections with smooth scrolling
- **Responsive Design** - Optimized for desktop and mobile displays
- **Light/Dark Theme Toggle** - Switch instantly via toolbar (sun/moon icon)
- **Zoom Controls** - Zoom content from 80%–180% with a live indicator

### 🧭 **Advanced Navigation System**

- **🔍 Smart Search** - Real-time toolbar search with `Ctrl/Cmd+F` shortcut and fallback tutorial data
- **⬅️ Navigation History** - Previous button with smart history tracking and `Alt/Option+←` shortcut
- **🔝 Scroll to Top** - Floating button and keyboard shortcuts (`Page Up`/`Home`) for instant top navigation
- **⌨️ Full Keyboard Navigation** - Arrow keys, shortcuts, and accessibility support
- **🎯 Context Menus** - Right-click for additional actions
- **📱 Touch-Optimized** - Mobile-friendly navigation with proper touch targets
- **🎛️ Persistent State** - Remembers folder states and preferences
- **📋 Auto-Generated TOC** - Table of contents with smooth scrolling (always visible)
- **🎨 Visual Feedback** - Smooth animations and modern UI interactions
- **🧰 Toolbar with Labeled Actions** - Previous, Home, Collapse/Expand All, Refresh, Help, Pin, Theme, Zoom-/Zoom+
- **📁 Smart Sidebar Controls** - Complete hide/show toggle with floating button and full-width content expansion
- **🎲 Random Tutorial (Home)** - One-click action to open a random tutorial from the library

### 🪟 **Window Management**

- **Always On Top** - Keep window above all others (Cmd/Ctrl+T)
- **Native Integration** - Proper desktop app behavior
- **System Tray** - Quick access via system tray (Windows/Linux)
- **Keyboard Shortcuts** - Comprehensive shortcut system
- **Fast Quit** - Quit with Cmd/Ctrl+Q or Cmd/Ctrl+W (single-window app)

### ♿ **Accessibility & UX**

- **ARIA Support** - Screen reader compatible
- **Focus Management** - Proper keyboard navigation
- **High Contrast** - Accessible color schemes
- **Help System** - Interactive help with F1 key

## 🆕 Recent Updates

### September 2025 - UI/UX Enhancements & Search Improvements

#### **🎨 Modern UI Redesign**

- **Gradient Color Scheme** - Beautiful purple-to-blue gradient design system with CSS custom properties
- **Enhanced Visual Hierarchy** - Improved typography, spacing, and component styling
- **Smooth Animations** - Added elegant transitions and hover effects throughout the interface
- **Responsive Design** - Better mobile and tablet optimization with touch-friendly interactions
- **Welcome Screen Enhancement** - Added hero section with feature cards and step-by-step guidance

#### **🔍 Search System Overhaul**

- **Relocated Search Bar** - Moved from sidebar to prominent toolbar position for better visibility
- **Enhanced Search Functionality** - Real-time search with comprehensive tutorial indexing
- **Fallback Tutorial Data** - Added 14+ popular tutorials (Django, Flask, FastAPI, NeutralinoJS, etc.) for immediate search results
- **Keyboard Navigation** - Arrow keys to navigate results, Enter to open tutorials
- **Improved Search Results** - Better styling with highlighted matches and clear category paths
- **Debug Enhancements** - Added extensive logging for troubleshooting and performance monitoring

#### **🛠️ Technical Improvements**

- **Path Resolution Fix** - Resolved tutorial loading issues by correcting file path formats
- **Error Handling** - Enhanced error handling and debugging for file loading operations
- **Code Cleanup** - Removed conflicting search systems and streamlined functionality
- **Performance Optimization** - Improved search indexing and result rendering

#### **📱 Mobile & Accessibility**

- **Touch Optimization** - Enhanced touch targets and mobile-friendly interactions
- **Responsive Search** - Search bar adapts to different screen sizes seamlessly
- **Improved Focus Management** - Better keyboard navigation and focus indicators
- **Enhanced ARIA Support** - Improved screen reader compatibility

## 📸 Screenshots

### Main Application Interface

![Main Application Interface](screenshots/main.png)

The main interface showing the tutorial browser with enhanced navigation, syntax highlighting, and a responsive sidebar.

### Advanced Application Features

![Advanced Application Features](screenshots/application.png)

Enhanced view showcasing the expandable navigation system, deep folder structures, and improved content display.

### Smart Search Functionality

![Smart Search Feature](screenshots/search.png)

Real-time toolbar search with instant filtering, highlighted matches, keyboard navigation support, and fallback tutorial data.

## 🚀 Installation

### Prerequisites

#### Option 1: Using Node.js (Recommended)

```bash
# Install Node.js (v14+) from https://nodejs.org
# Then install NeutralinoJS CLI globally
npm install -g @neutralinojs/neu
```

#### Option 2: Using Bun (Fast & Modern)

```bash
# Install Bun from https://bun.sh
curl -fsSL https://bun.sh/install | bash

# Install NeutralinoJS CLI with Bun
bun install -g @neutralinojs/neu
```

#### Option 3: Manual Installation

1. Download NeutralinoJS CLI from [GitHub Releases](https://github.com/neutralinojs/neutralinojs-cli/releases)
2. Extract and add to your system PATH

### 📥 Quick Setup

```bash
# Clone the repository
git clone https://github.com/codecaine-zz/neu_markdown_buddy.git
cd neu_markdown_buddy

# First-time setup: Download NeutralinoJS runtime binaries
neu update

# Run in development mode
neu run

# Build for production
neu build
```

> **⚠️ Important:** Always run `neu update` first after installing NeutralinoJS CLI to download the required runtime binaries for your platform.

## 🎮 Navigation & Usage Guide

### 🧰 Toolbar & UI Controls

- Previous: Navigate back to the previously viewed page/section (disabled when no history)
- Home: Go to the welcome page
- Collapse All: Collapse all folders (shows a brief busy spinner)
- Expand All: Expand all folders (shows a brief busy spinner)
- Refresh: Re-scan tutorials and rebuild navigation (busy spinner)
- Help: Open in-app keyboard shortcut help (F1)
- Pin: Toggle Always on Top (Cmd/Ctrl+T)
- Theme: Toggle light/dark; icon switches sun/moon; persists
- Zoom-/Zoom+: Adjust content size (80%–180%); indicator shows current zoom; persists

### 📚 Sidebar Controls

- **Hide/Show Toggle** - Completely hide or show the sidebar with smooth transitions
- **Floating Toggle Button** - When sidebar is hidden, a floating button appears for easy access back
- **Full-Width Content** - Content expands to use the entire screen width when sidebar is hidden
- **Smart Content Layout** - Code blocks and tables utilize maximum available space
- **Centered Content** - Text content remains readable while maximizing available space
- **Width Resizing** - When visible, sidebar width can be adjusted and is automatically saved
- **Navigation Tree** - Browse tutorials organized by category and subcategory
- **Inline Actions** - Collapse/Expand/Refresh buttons at the top of navigation

### 🏠 Home Actions

- Random Tutorial: On the home screen, click “Random Tutorial” to jump to a random tutorial. A toast will show the picked title.

### 🔥 **Quick Start Shortcuts**

- **`F1`** - Show keyboard shortcuts help
- **`Alt/Opt + ←`** - Navigate back to previous page
- **`Ctrl/Cmd + F`** - Focus toolbar search box
- **`Ctrl/Cmd + H`** - Go to home
- **`Ctrl/Cmd + T`** - Toggle always on top
- **`Ctrl/Cmd + R`** - Refresh navigation
- **`Ctrl/Cmd + B`** - Toggle sidebar visibility (hide/show)
- **`Ctrl/Cmd + Shift + B`** - *(Removed - now uses simple hide/show toggle)*
- **`Ctrl/Cmd + Q`** or **`Ctrl/Cmd + W`** - Quit the app
- **`Esc`** - Clear search / Close dialogs
- **`Page Up`** or **`Home`** - Scroll to top of current page

### 🖱️ **Mouse Navigation**

- **Single Click** - Open file or expand/collapse folder
- **Double Click** - Quick expand folder or open file
- **Right Click** - Context menu with additional actions
- **Hover** - Preview file info and quick actions
- **Scroll Button Click** - Click the floating scroll-to-top button to return to page top

### ⌨️ **Keyboard Navigation**

- **`↑` `↓`** - Navigate between items
- **`←` `→`** - Collapse/expand folders
- **`Enter`** - Open selected item
- **`Tab`** - Focus navigation between sections

### 🔍 **Search Features**

- **Toolbar Location** - Prominently positioned in the center of the top toolbar for easy access
- **Real-time search** - Results appear as you type with 14+ fallback tutorials available immediately
- **Path-based search** - Find files by name, folder, or path with highlighted category information
- **Highlighted matches** - Search terms highlighted in search results with category paths
- **Keyboard Navigation** - Use arrow keys to navigate results, Enter to open tutorials
- **Quick clear** - Click X or press Esc to clear search and hide results

### � **Navigation History & Previous Button**

- **Smart History Tracking** - Automatically tracks your browsing history across tutorials, folders, and home
- **Previous Button** - Navigate back to previously viewed pages with a single click
- **Keyboard Shortcut** - Use `Alt/Option + Left Arrow` to go back quickly
- **Visual Feedback** - Button shows disabled state when no history is available
- **Dynamic Tooltips** - Hover to see where the Previous button will take you
- **Cross-Section Navigation** - Works seamlessly between tutorials, folder views, and home page

### �📋 **Table of Contents**

- **Auto-generated** - Created from markdown headers
- **Always visible** - Automatically displayed for all tutorials (no toggle needed)
- **Color-coded levels** - Different colors for H1-H6
- **Smooth scrolling** - Click to jump to sections

### 🧠 Persistence & Settings

- Theme, zoom level, sidebar state, and sidebar width are saved automatically
- Notifications confirm actions like toggling Always on Top or changing navigation state
- Settings are stored locally per device

### 🧯 Quit & Tray Behavior

- Quit via keyboard: Cmd/Ctrl+Q or Cmd/Ctrl+W (no toolbar quit button)
- Tray menu is enabled on Windows/Linux; macOS uses standard app menu/shortcuts

### 📁 **Folder Management**

- **Persistent state** - Folder open/closed states remembered
- **Batch operations** - Expand all / Collapse all buttons
- **Item counters** - Shows number of items in each folder
- **Breadcrumb navigation** - Shows current location

## 🏗️ Technology Stack

### Frontend

- **NeutralinoJS** - Lightweight cross-platform desktop framework
- **Vanilla JavaScript ES6+** - Modern JavaScript without heavy frameworks
- **Marked.js** - Fast markdown parser and compiler
- **Highlight.js** - Syntax highlighting for 20+ languages
- Code style: GitHub Dark theme
- **Font Awesome** - Professional icons and visual elements
- **Modern CSS3** - Grid, Flexbox, animations, and responsive design

### Supported Programming Languages

```text
Python, Java, PHP, JavaScript, TypeScript, C++, C#
Bash, PowerShell, SQL, JSON, YAML, XML, HTML
Docker, Go, Rust, Swift, Kotlin, Ruby, Perl
And many more...
```

## 📂 Project Structure

```text
neu_markdown_buddy/
├── 📁 resources/
│   ├── 📄 index.html          # Main application HTML
│   ├── 🎨 styles.css          # Enhanced CSS with animations
│   ├── 📁 js/
│   │   └── 📄 main.js         # Advanced navigation logic
│   ├── 📁 libs/               # Third-party libraries
│   │   ├── 📄 marked.min.js
│   │   ├── 📁 highlight.js/
│   │   └── 📁 font-awesome/
│   ├── 📁 tutorials/          # Tutorial content
│   │   ├── 📁 python/
│   │   ├── 📁 homebrew/
│   │   └── 📁 google scripts/
│   └── 📁 icons/              # Application icons
├── 📁 bin/                    # Platform binaries
├── 📄 neutralino.config.json  # App configuration
└── 📄 README.md               # This file
```

## 🎯 Tutorial Categories

The application comes with comprehensive tutorial collections:

### 🐍 **Python**

- **Standard Library** - Complete Python standard library documentation
- **Data Structures** - Lists, dictionaries, sets, and more
- **Web Development** - Flask, Django, FastAPI tutorials
- **Data Science** - NumPy, Pandas, Matplotlib guides

### 🍺 **Homebrew**

- **CLI Tools** - Command-line utilities and their usage
- **Development Tools** - Programming languages and frameworks
- **Security Tools** - Network security and penetration testing
- **System Guides** - macOS tips and terminal usage

### 📊 **Google Scripts**

- **Gmail Functions** - Email automation and processing
- **Google Sheets** - Spreadsheet automation and data manipulation
- **Google Drive** - File management and organization
- **YouTube API** - Video platform integration

## 🆕 Recent Enhancements

### Enhanced Sidebar Navigation (September 2025)

- **🎯 Complete Hide/Show Toggle** - Sidebar now completely hides instead of just collapsing to icons
- **🔄 Floating Toggle Button** - Elegant floating button appears when sidebar is hidden for easy access
- **📐 Full-Width Content Expansion** - Content automatically expands to use entire screen width
- **🎨 Smart Content Layout** - Code blocks, tables, and text adapt to available screen space
- **⌨️ Keyboard Control** - `Ctrl/Cmd + B` toggles sidebar visibility
- **💾 State Persistence** - Remembers sidebar visibility preference between sessions
- **📱 Mobile Responsive** - Floating button properly hidden on mobile devices

### Scroll-to-Top Feature (September 2025)

- **🔝 Floating Button** - Elegant scroll-to-top button with smooth animations
- **⌨️ Keyboard Shortcuts** - `Page Up` and `Home` key support for quick navigation
- **🎨 Theme Integration** - Button styling matches light/dark themes
- **📱 Mobile Responsive** - Optimized for touch devices with proper sizing
- **⚡ Performance Optimized** - Throttled scroll detection for smooth performance
- **♿ Accessible** - Full accessibility support with ARIA labels and keyboard navigation

## 🔧 Development

### Requirements

- **Node.js** 14+ or **Bun** runtime
- **NeutralinoJS CLI** for building and running
- Modern web browser for testing

### Build Commands

```bash
# Development mode (with auto-reload)
neu run

# Build production binaries
neu build

# Clean build artifacts
neu clean

# Update dependencies
neu update
```

### Adding New Tutorials

1. Create markdown files in `resources/tutorials/[category]/`
2. Use proper heading structure (H1-H6)
3. Include code blocks with language specification
4. Add images to enhance content
5. Test navigation and search functionality

## 🌟 Key Differences from PHP Version

| Feature | PHP Version | NeutralinoJS Version |
|---------|------------|---------------------|
| **Runtime** | Requires web server | Native desktop app |
| **File Access** | Server-side only | Direct filesystem access |
| **Installation** | PHP + Composer | Single executable |
| **Performance** | Server processing | Client-side rendering |
| **Offline Usage** | Requires server | Fully offline capable |
| **Distribution** | Web deployment | Cross-platform binaries |

## Acknowledgments

- Based on the original PHP [markdown_tutorials](https://github.com/codecaine-zz/markdown_tutorials) project
- Built with [NeutralinoJS](https://neutralino.js.org/) - Lightweight cross-platform app framework
- Powered by [Marked.js](https://marked.js.org/) for markdown processing
- Syntax highlighting by [Highlight.js](https://highlightjs.org/)
- Icons by [Font Awesome](https://fontawesome.com/)

## Links

- Original PHP Version: [codecaine-zz/markdown_tutorials](https://github.com/codecaine-zz/markdown_tutorials)
- Live Demo: [codefreelance.net/apps/markdown_buddy](https://codefreelance.net/apps/markdown_buddy/?page=home)
- NeutralinoJS Documentation: [neutralino.js.org/docs](https://neutralino.js.org/docs/)

[![Contributors](https://contrib.rocks/image?repo=neutralinojs/neutralinojs-minimal)](https://github.com/neutralinojs/neutralinojs-minimal/graphs/contributors)

## License

[MIT](LICENSE)

## Icon credits

- `trayIcon.png` - Made by [Freepik](https://www.freepik.com) and downloaded from [Flaticon](https://www.flaticon.com)
