// Markdown Buddy - NeutralinoJS Tutorial Browser
// Port of PHP markdown tutorials application

class MarkdownBuddy {
    constructor() {
        this.currentPath = '';
        this.tutorialsDir = '';
        this.navigationData = {};
        this.settings = {
            alwaysOnTop: false
        };
        this.init();
    }

    async init() {
        try {
            // Initialize Neutralino
            await Neutralino.init();
            
            // Set window title for macOS menu bar
            try {
                await Neutralino.window.setTitle('Markdown Buddy - Tutorial Browser');
            } catch (titleError) {
                console.warn('Failed to set window title:', titleError);
            }
            
            // Load saved settings
            await this.loadSettings();
            
            // Set up event listeners
            this.setupEventListeners();
            
            // Set up tray menu (with error handling)
            try {
                this.setupTrayMenu();
            } catch (trayError) {
                console.warn('Tray setup failed:', trayError);
            }
            
            // Initialize the application
            await this.initializeApp();
            
        } catch (error) {
            console.error('Failed to initialize Neutralino:', error);
            // Fallback to demo mode
            this.initializeDemoMode();
        }
    }

    // Settings Management
    async loadSettings() {
        try {
            const savedSettings = localStorage.getItem('markdownBuddySettings');
            if (savedSettings) {
                this.settings = { ...this.settings, ...JSON.parse(savedSettings) };
            }
            
            // Apply always-on-top setting if in window mode
            if (NL_MODE === "window" && this.settings.alwaysOnTop) {
                await this.setAlwaysOnTop(true);
            }
            
            // Apply saved sidebar state
            this.applySidebarState();
            
        } catch (error) {
            console.warn('Failed to load settings:', error);
        }
    }

    applySidebarState() {
        const sidebar = document.getElementById('sidebar');
        if (this.settings.sidebarState) {
            sidebar.classList.toggle('expanded', this.settings.sidebarState === 'expanded');
            sidebar.classList.toggle('collapsed', this.settings.sidebarState === 'collapsed');
        }
    }

    async saveSettings() {
        try {
            localStorage.setItem('markdownBuddySettings', JSON.stringify(this.settings));
        } catch (error) {
            console.warn('Failed to save settings:', error);
        }
    }

    async setAlwaysOnTop(alwaysOnTop) {
        try {
            if (NL_MODE === "window") {
                await Neutralino.window.setAlwaysOnTop(alwaysOnTop);
                this.settings.alwaysOnTop = alwaysOnTop;
                await this.saveSettings();
                
                // Update UI toggle
                const toggle = document.getElementById('alwaysOnTopToggle');
                if (toggle) {
                    toggle.checked = alwaysOnTop;
                }
                
                // Update tray menu
                this.updateTrayMenu();
                
                // Show brief notification
                this.showNotification(`Always on top ${alwaysOnTop ? 'enabled' : 'disabled'}`);
                
                return true;
            }
        } catch (error) {
            console.error('Failed to set always on top:', error);
            this.showNotification('Failed to change always on top setting', true);
            return false;
        }
        return false;
    }

    async toggleAlwaysOnTop() {
        await this.setAlwaysOnTop(!this.settings.alwaysOnTop);
    }

    // Sidebar Navigation Controls
    toggleSidebarWidth() {
        const sidebar = document.getElementById('sidebar');
        const toggleIcon = document.querySelector('#sidebarToggle i');
        
        if (sidebar.classList.contains('expanded')) {
            // From expanded to normal
            sidebar.classList.remove('expanded');
            this.settings.sidebarState = 'normal';
            toggleIcon.className = 'fas fa-arrows-alt-h';
        } else if (sidebar.classList.contains('collapsed')) {
            // From collapsed to normal
            sidebar.classList.remove('collapsed');
            this.settings.sidebarState = 'normal';
            toggleIcon.className = 'fas fa-arrows-alt-h';
        } else {
            // From normal to expanded
            sidebar.classList.add('expanded');
            this.settings.sidebarState = 'expanded';
            toggleIcon.className = 'fas fa-compress-alt';
        }
        
        // Refresh navigation to update text truncation
        setTimeout(() => this.refreshTextDisplay(), 100);
        
        this.saveSettings();
        this.showNotification(`Navigation ${this.settings.sidebarState}`, false, 1500);
    }

    refreshTextDisplay() {
        // Re-render navigation items to update text truncation
        const navItems = document.querySelectorAll('.nav-folder-text, .nav-file-text');
        navItems.forEach(item => {
            const level = parseInt(item.closest('[data-level]')?.getAttribute('data-level') || '0');
            const originalText = item.getAttribute('title') || item.textContent;
            if (originalText && originalText.endsWith('...')) {
                // Extract original text from title attribute
                const fullText = item.getAttribute('title') || item.textContent;
                item.textContent = this.truncateText(fullText, level);
            }
        });
    }

    collapseSidebar() {
        const sidebar = document.getElementById('sidebar');
        const toggleIcon = document.querySelector('#sidebarToggle i');
        
        sidebar.classList.remove('expanded');
        sidebar.classList.add('collapsed');
        this.settings.sidebarState = 'collapsed';
        toggleIcon.className = 'fas fa-expand-alt';
        
        this.saveSettings();
        this.showNotification('Navigation collapsed', false, 1500);
    }

    updateTrayMenu() {
        // Skip on macOS where tray is disabled
        if (NL_OS === "Darwin" || NL_MODE !== "window") {
            return;
        }

        try {
            let tray = {
                icon: "/resources/icons/trayIcon.png",
                menuItems: [
                    {id: "HOME", text: "Go to Home"},
                    {id: "REFRESH", text: "Refresh Tutorials"},
                    {id: "SEP1", text: "-"},
                    {id: "ALWAYS_ON_TOP", text: this.settings.alwaysOnTop ? "✓ Always on Top" : "Always on Top"},
                    {id: "SEP2", text: "-"},
                    {id: "VERSION", text: "About"},
                    {id: "QUIT", text: "Quit"}
                ]
            };

            Neutralino.os.setTray(tray);
        } catch (error) {
            console.warn('Failed to update tray menu:', error);
        }
    }

    showNotification(message, isError = false, duration = 3000) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${isError ? 'error' : 'success'}`;
        notification.textContent = message;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Show with animation
        setTimeout(() => notification.classList.add('show'), 10);
        
        // Remove after specified duration
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, duration);
    }

    initializeDemoMode() {
        console.log('Initializing in demo mode...');
        
        // Set up basic event listeners
        this.setupDOMEventListeners();
        
        // Try to load real navigation even in demo mode
        this.buildNavigationFromFileSystem().catch(() => {
            // If that fails, load demo navigation
            this.loadDemoNavigation();
        });
        
        // Show welcome content
        this.showWelcomeContent();
    }

    setupEventListeners() {
        // Neutralino event listeners
        Neutralino.events.on("trayMenuItemClicked", (event) => this.onTrayMenuItemClicked(event));
        Neutralino.events.on("windowClose", () => this.onWindowClose());
        
        // DOM event listeners
        document.addEventListener('DOMContentLoaded', () => {
            this.setupDOMEventListeners();
        });
    }

    setupDOMEventListeners() {
        // Set up marked options for consistent markdown parsing
        if (window.marked) {
            // Configure marked WITHOUT automatic header IDs to prevent conflicts
            if (typeof marked.setOptions === 'function') {
                marked.setOptions({ 
                    headerIds: false,  // Disable automatic header IDs
                    headerPrefix: '',
                    gfm: true,
                    breaks: false
                });
            }
            
            // For newer versions of marked, use the more explicit configuration
            if (marked.use) {
                marked.use({
                    headerIds: false,  // Disable automatic header IDs
                    headerPrefix: '',
                    gfm: true
                });
            }
        }

        // Initialize highlight.js
        if (window.hljs) {
            hljs.highlightAll();
        }

        // Setup Always On Top toggle
        const alwaysOnTopToggle = document.getElementById('alwaysOnTopToggle');
        if (alwaysOnTopToggle) {
            // Set initial state
            alwaysOnTopToggle.checked = this.settings.alwaysOnTop;
            
            // Add event listener
            alwaysOnTopToggle.addEventListener('change', async (event) => {
                const success = await this.setAlwaysOnTop(event.target.checked);
                if (!success) {
                    // Revert the toggle if the operation failed
                    event.target.checked = this.settings.alwaysOnTop;
                }
            });
        }

        // Setup Sidebar Toggle
        const sidebarToggle = document.getElementById('sidebarToggle');
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => {
                this.toggleSidebarWidth();
            });
        }

        // Enhanced keyboard navigation and shortcuts
        this.setupKeyboardNavigation();

        // Add search functionality
        this.setupSearchFunction();

        // Setup context menus
        this.setupContextMenus();

        // Setup drag and drop (for future bookmarking)
        this.setupDragAndDrop();
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (event) => {
            // Always On Top shortcut
            if ((event.metaKey || event.ctrlKey) && event.key === 't') {
                event.preventDefault();
                this.toggleAlwaysOnTop();
                return;
            }

            // Sidebar navigation shortcuts
            if ((event.metaKey || event.ctrlKey) && event.key === 'b') {
                event.preventDefault();
                this.toggleSidebarWidth();
                return;
            }

            // Collapse sidebar shortcut
            if ((event.metaKey || event.ctrlKey) && event.shiftKey && event.key === 'B') {
                event.preventDefault();
                this.collapseSidebar();
                return;
            }

            // Quick search shortcut
            if ((event.metaKey || event.ctrlKey) && event.key === 'f') {
                event.preventDefault();
                this.focusSearch();
                return;
            }

            // Home shortcut
            if ((event.metaKey || event.ctrlKey) && event.key === 'h') {
                event.preventDefault();
                this.showWelcomeContent();
                return;
            }

            // Help shortcut
            if (event.key === 'F1' || ((event.metaKey || event.ctrlKey) && event.key === '?')) {
                event.preventDefault();
                this.showKeyboardHelp();
                return;
            }

            // Refresh navigation shortcut
            if ((event.metaKey || event.ctrlKey) && event.key === 'r') {
                event.preventDefault();
                this.refreshNavigation();
                return;
            }

            // Quit app shortcut (Cmd+Q on Mac, Ctrl+Q on other platforms)
            if ((event.metaKey || event.ctrlKey) && event.key === 'q') {
                event.preventDefault();
                this.quitApplication();
                return;
            }

            // Navigation with arrow keys
            if (event.target.classList.contains('nav-file') || event.target.classList.contains('nav-folder')) {
                this.handleArrowKeyNavigation(event);
            }
        });

        // Focus management for keyboard navigation
        document.addEventListener('focusin', (event) => {
            if (event.target.classList.contains('nav-file') || event.target.classList.contains('nav-folder')) {
                event.target.scrollIntoView({ block: 'nearest' });
            }
        });
    }

    showKeyboardHelp() {
        const helpContent = `
            <div class="help-dialog">
                <div class="help-header">
                    <h2><i class="fas fa-keyboard"></i> Keyboard Shortcuts</h2>
                    <button class="help-close" onclick="markdownBuddy.hideKeyboardHelp()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="help-content">
                    <div class="help-section">
                        <h3>Navigation</h3>
                        <div class="help-shortcuts">
                            <div class="help-shortcut">
                                <kbd>Ctrl/Cmd</kbd> + <kbd>H</kbd>
                                <span>Go to Home</span>
                            </div>
                            <div class="help-shortcut">
                                <kbd>Ctrl/Cmd</kbd> + <kbd>F</kbd>
                                <span>Focus Search</span>
                            </div>
                            <div class="help-shortcut">
                                <kbd>Ctrl/Cmd</kbd> + <kbd>R</kbd>
                                <span>Refresh Navigation</span>
                            </div>
                            <div class="help-shortcut">
                                <kbd>↑</kbd> <kbd>↓</kbd>
                                <span>Navigate items</span>
                            </div>
                            <div class="help-shortcut">
                                <kbd>←</kbd> <kbd>→</kbd>
                                <span>Collapse/Expand folders</span>
                            </div>
                            <div class="help-shortcut">
                                <kbd>Enter</kbd> / <kbd>Space</kbd>
                                <span>Open selected item</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="help-section">
                        <h3>Application</h3>
                        <div class="help-shortcuts">
                            <div class="help-shortcut">
                                <kbd>Ctrl/Cmd</kbd> + <kbd>T</kbd>
                                <span>Toggle Always on Top</span>
                            </div>
                            <div class="help-shortcut">
                                <kbd>Ctrl/Cmd</kbd> + <kbd>Q</kbd>
                                <span>Quit Application</span>
                            </div>
                            <div class="help-shortcut">
                                <kbd>F1</kbd>
                                <span>Show this help</span>
                            </div>
                            <div class="help-shortcut">
                                <kbd>Esc</kbd>
                                <span>Close dialogs/Clear search</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="help-section">
                        <h3>Mouse Actions</h3>
                        <div class="help-shortcuts">
                            <div class="help-shortcut">
                                <kbd>Right Click</kbd>
                                <span>Context menu</span>
                            </div>
                            <div class="help-shortcut">
                                <kbd>Double Click</kbd>
                                <span>Open folder view</span>
                            </div>
                            <div class="help-shortcut">
                                <kbd>Drag</kbd>
                                <span>Copy path (future: bookmarks)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Create and show help overlay
        const overlay = document.createElement('div');
        overlay.className = 'help-overlay';
        overlay.innerHTML = helpContent;
        
        document.body.appendChild(overlay);

        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.hideKeyboardHelp();
            }
        });

        // Close on Escape key
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                this.hideKeyboardHelp();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        
        document.addEventListener('keydown', escapeHandler);
    }

    hideKeyboardHelp() {
        const overlay = document.querySelector('.help-overlay');
        if (overlay) {
            overlay.remove();
        }
    }

    handleArrowKeyNavigation(event) {
        const currentItem = event.target;
        const sidebar = document.getElementById('navigation');
        const allItems = sidebar.querySelectorAll('.nav-file, .nav-folder');
        const currentIndex = Array.from(allItems).indexOf(currentItem);

        switch (event.key) {
            case 'ArrowUp':
                event.preventDefault();
                if (currentIndex > 0) {
                    allItems[currentIndex - 1].focus();
                }
                break;

            case 'ArrowDown':
                event.preventDefault();
                if (currentIndex < allItems.length - 1) {
                    allItems[currentIndex + 1].focus();
                }
                break;

            case 'ArrowRight':
                if (currentItem.classList.contains('nav-folder') && !currentItem.classList.contains('expanded')) {
                    event.preventDefault();
                    this.expandFolder(currentItem);
                }
                break;

            case 'ArrowLeft':
                if (currentItem.classList.contains('nav-folder') && currentItem.classList.contains('expanded')) {
                    event.preventDefault();
                    this.collapseFolder(currentItem);
                }
                break;

            case 'Enter':
            case ' ':
                event.preventDefault();
                currentItem.click();
                break;
        }
    }

    setupSearchFunction() {
        // Add search box to sidebar header
        const sidebarHeader = document.querySelector('.sidebar-header');
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <div class="search-box">
                <input type="text" id="navigationSearch" placeholder="Search tutorials..." autocomplete="off">
                <i class="fas fa-search search-icon"></i>
                <button class="clear-search" title="Clear search">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="search-results"></div>
        `;
        
        sidebarHeader.appendChild(searchContainer);

        const searchInput = document.getElementById('navigationSearch');
        const clearButton = searchContainer.querySelector('.clear-search');
        const resultsContainer = searchContainer.querySelector('.search-results');

        // Search functionality
        let searchTimeout;
        searchInput.addEventListener('input', (event) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.performSearch(event.target.value, resultsContainer);
            }, 300);
        });

        // Clear search
        clearButton.addEventListener('click', () => {
            searchInput.value = '';
            this.clearSearch(resultsContainer);
            searchInput.focus();
        });

        // Search shortcuts
        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.clearSearch(resultsContainer);
                searchInput.blur();
            }
        });
    }

    focusSearch() {
        const searchInput = document.getElementById('navigationSearch');
        if (searchInput) {
            searchInput.focus();
            searchInput.select();
        }
    }

    performSearch(query, resultsContainer) {
        if (!query.trim()) {
            this.clearSearch(resultsContainer);
            return;
        }

        const results = this.searchNavigation(query.toLowerCase());
        this.displaySearchResults(results, resultsContainer, query);
    }

    searchNavigation(query) {
        const results = [];
        
        const searchInItem = (key, item, path = '') => {
            const fullPath = path ? `${path}/${key}` : key;
            const name = item.name || key;
            
            if (name.toLowerCase().includes(query) || 
                key.toLowerCase().includes(query) ||
                fullPath.toLowerCase().includes(query)) {
                results.push({
                    key,
                    item,
                    fullPath,
                    matchType: name.toLowerCase().includes(query) ? 'name' : 'path'
                });
            }
            
            if (item.children) {
                Object.keys(item.children).forEach(childKey => {
                    searchInItem(childKey, item.children[childKey], fullPath);
                });
            }
        };

        Object.keys(this.navigationData).forEach(key => {
            searchInItem(key, this.navigationData[key]);
        });

        return results.slice(0, 10); // Limit results
    }

    displaySearchResults(results, container, query) {
        if (results.length === 0) {
            container.innerHTML = '<div class="search-no-results">No results found</div>';
            container.classList.add('show');
            return;
        }

        const html = results.map(result => {
            const icon = result.item.type === 'folder' ? 'fa-folder' : 'fa-file-alt';
            const highlightedName = this.highlightSearchTerm(result.item.name || result.key, query);
            
            return `
                <div class="search-result" data-path="${result.fullPath}" data-type="${result.item.type}">
                    <i class="fas ${icon}"></i>
                    <span class="result-name">${highlightedName}</span>
                    <small class="result-path">${result.fullPath}</small>
                </div>
            `;
        }).join('');

        container.innerHTML = html;
        container.classList.add('show');

        // Add click handlers
        container.querySelectorAll('.search-result').forEach(result => {
            result.addEventListener('click', () => {
                const path = result.dataset.path;
                const type = result.dataset.type;
                
                if (type === 'folder') {
                    this.showFolderContents(path, result.querySelector('.result-name').textContent);
                } else {
                    this.loadTutorial(path, result.querySelector('.result-name').textContent);
                }
                
                this.clearSearch(container);
            });
        });
    }

    highlightSearchTerm(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    clearSearch(resultsContainer) {
        resultsContainer.innerHTML = '';
        resultsContainer.classList.remove('show');
        document.getElementById('navigationSearch').value = '';
    }

    setupContextMenus() {
        // Add context menu for navigation items
        document.addEventListener('contextmenu', (event) => {
            if (event.target.closest('.nav-file') || event.target.closest('.nav-folder')) {
                event.preventDefault();
                this.showContextMenu(event, event.target.closest('.nav-file, .nav-folder'));
            }
        });

        // Hide context menu on click elsewhere
        document.addEventListener('click', () => {
            this.hideContextMenu();
        });
    }

    showContextMenu(event, item) {
        this.hideContextMenu(); // Hide any existing menu

        const menu = document.createElement('div');
        menu.className = 'context-menu';
        
        const isFolder = item.classList.contains('nav-folder');
        const isExpanded = item.classList.contains('expanded');

        let menuItems = [];
        
        if (isFolder) {
            menuItems.push({
                icon: isExpanded ? 'fa-compress-alt' : 'fa-expand-alt',
                text: isExpanded ? 'Collapse' : 'Expand',
                action: () => this.toggleFolder(item)
            });
            menuItems.push({
                icon: 'fa-folder-open',
                text: 'Open Folder View',
                action: () => {
                    const path = this.getItemPath(item);
                    const title = item.querySelector('i').nextSibling.textContent.trim();
                    this.showFolderContents(path, title);
                }
            });
        } else {
            menuItems.push({
                icon: 'fa-external-link-alt',
                text: 'Open Tutorial',
                action: () => item.click()
            });
        }

        // Common actions
        menuItems.push(
            { separator: true },
            {
                icon: 'fa-copy',
                text: 'Copy Path',
                action: () => this.copyItemPath(item)
            }
        );

        const html = menuItems.map(item => {
            if (item.separator) {
                return '<div class="context-menu-separator"></div>';
            }
            return `
                <div class="context-menu-item">
                    <i class="fas ${item.icon}"></i>
                    ${item.text}
                </div>
            `;
        }).join('');

        menu.innerHTML = html;
        document.body.appendChild(menu);

        // Position menu
        const rect = document.body.getBoundingClientRect();
        const x = Math.min(event.clientX, rect.width - 200);
        const y = Math.min(event.clientY, rect.height - menu.offsetHeight);
        
        menu.style.left = `${x}px`;
        menu.style.top = `${y}px`;

        // Add click handlers
        menu.querySelectorAll('.context-menu-item').forEach((menuItem, index) => {
            const actionItem = menuItems.filter(item => !item.separator)[index];
            if (actionItem) {
                menuItem.addEventListener('click', actionItem.action);
            }
        });
    }

    hideContextMenu() {
        const existingMenu = document.querySelector('.context-menu');
        if (existingMenu) {
            existingMenu.remove();
        }
    }

    getItemPath(item) {
        // Navigate up to find the full path
        let path = '';
        let current = item;
        
        while (current && current.classList.contains('nav-file') || current.classList.contains('nav-folder')) {
            const text = current.querySelector('i').nextSibling.textContent.trim();
            path = text + (path ? '/' + path : '');
            current = current.parentElement.closest('.nav-folder');
        }
        
        return path;
    }

    async copyItemPath(item) {
        const path = this.getItemPath(item);
        
        try {
            if (window.Neutralino && Neutralino.clipboard) {
                await Neutralino.clipboard.writeText(path);
            } else if (navigator.clipboard) {
                await navigator.clipboard.writeText(path);
            }
            this.showNotification(`Path copied: ${path}`);
        } catch (error) {
            console.warn('Failed to copy path:', error);
            this.showNotification('Failed to copy path', true);
        }
    }

    expandFolder(folderElement) {
        folderElement.classList.add('expanded');
        const childrenDiv = folderElement.querySelector('.nav-children');
        if (childrenDiv) {
            childrenDiv.classList.add('show');
        }
    }

    collapseFolder(folderElement) {
        folderElement.classList.remove('expanded');
        const childrenDiv = folderElement.querySelector('.nav-children');
        if (childrenDiv) {
            childrenDiv.classList.remove('show');
        }
    }

    setupDragAndDrop() {
        // Basic drag and drop setup for future bookmarking feature
        document.addEventListener('dragstart', (event) => {
            if (event.target.classList.contains('nav-file')) {
                const path = this.getItemPath(event.target);
                event.dataTransfer.setData('text/plain', path);
                event.target.classList.add('dragging');
            }
        });

        document.addEventListener('dragend', (event) => {
            event.target.classList.remove('dragging');
        });
    }

    setupTrayMenu() {
        // Tray menu is only available in window mode and can be problematic on macOS
        if (NL_MODE !== "window") {
            console.log("INFO: Tray menu is only available in the window mode.");
            return;
        }
        
        // Skip tray setup on macOS to avoid layout engine issues
        if (NL_OS === "Darwin") {
            console.log("INFO: Skipping tray setup on macOS to avoid layout issues.");
            return;
        }

        try {
            let tray = {
                icon: "/resources/icons/trayIcon.png",
                menuItems: [
                    {id: "HOME", text: "Go to Home"},
                    {id: "REFRESH", text: "Refresh Tutorials"},
                    {id: "SEP1", text: "-"},
                    {id: "ALWAYS_ON_TOP", text: this.settings.alwaysOnTop ? "✓ Always on Top" : "Always on Top"},
                    {id: "SEP2", text: "-"},
                    {id: "VERSION", text: "About"},
                    {id: "QUIT", text: "Quit"}
                ]
            };

            Neutralino.os.setTray(tray);
        } catch (error) {
            console.warn('Failed to set up tray menu:', error);
        }
    }

    onTrayMenuItemClicked(event) {
        switch(event.detail.id) {
            case "HOME":
                this.showWelcomeContent();
                break;
            case "REFRESH":
                this.refreshTutorials();
                break;
            case "ALWAYS_ON_TOP":
                this.toggleAlwaysOnTop();
                break;
            case "VERSION":
                Neutralino.os.showMessageBox("About Markdown Buddy",
                    `Markdown Buddy - Tutorial Browser\nBuilt with NeutralinoJS\n\nServer: v${NL_VERSION} | Client: v${NL_CVERSION}`);
                break;
            case "QUIT":
                Neutralino.app.exit();
                break;
        }
    }

    onWindowClose() {
        try {
            Neutralino.app.exit();
        } catch (error) {
            console.warn('Error during window close:', error);
            // Force close if Neutralino API fails
            if (window.close) {
                window.close();
            }
        }
    }

    quitApplication() {
        // Avoid Neutralino.app.exit() as it causes threading issues on macOS
        // when saving window properties. Just use window.close() which is safer.
        setTimeout(() => {
            try {
                // Simply close the window - this will terminate the app cleanly
                if (window.close) {
                    window.close();
                } else {
                    // Fallback for environments where window.close might not work
                    console.warn('window.close() not available, attempting Neutralino exit');
                    Neutralino.app.exit();
                }
            } catch (error) {
                console.warn('Error during quit application:', error);
                // Last resort - try to exit anyway
                try {
                    Neutralino.app.exit();
                } catch (e) {
                    console.error('Could not quit application:', e);
                }
            }
        }, 10);
    }

    async initializeApp() {
        try {
            // Initialize DOM event listeners first
            this.setupDOMEventListeners();
            
            // Load navigation with error handling
            try {
                await this.loadNavigation();
            } catch (navError) {
                console.warn('Failed to load filesystem navigation, using real structure manually:', navError);
                // Instead of demo mode, try to build the navigation manually
                await this.buildNavigationFromFileSystem();
            }
            
            // Show welcome content
            this.showWelcomeContent();
            
        } catch (error) {
            console.error('Failed to initialize app:', error);
            // Fallback to demo mode
            document.getElementById('main-content').innerHTML = `
                <div class="error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <strong>Initialization Error:</strong> ${error.message || 'Failed to initialize application'}
                    <p style="margin-top: 10px;">The app is running in demo mode with sample content.</p>
                </div>
            `;
            this.loadDemoNavigation();
        }
    }

    async loadNavigation() {
        try {
            // Load real file system structure
            const navigationElement = document.getElementById('navigation');
            
            // Check if we can access the filesystem
            if (!Neutralino.filesystem) {
                throw new Error('Filesystem API not available');
            }
            
            console.log('Scanning tutorials directory...');
            this.navigationData = await this.scanTutorialsDirectory('resources/tutorials');
            
            // Debug: log the structure
            console.log('Navigation data loaded:', this.navigationData);
            console.log('Found', Object.keys(this.navigationData).length, 'top-level categories');
            
            // Check if we got any data
            if (Object.keys(this.navigationData).length === 0) {
                throw new Error('No tutorials found');
            }
            
            this.renderNavigation(navigationElement);
            
            // Show a summary in the console
            this.logNavigationSummary();
            
        } catch (error) {
            console.error('Failed to load navigation:', error);
            throw error; // Re-throw to trigger fallback
        }
    }
    
    logNavigationSummary() {
        let totalFiles = 0;
        let totalFolders = 0;
        
        function countItems(structure) {
            Object.values(structure).forEach(item => {
                if (item.type === 'file') {
                    totalFiles++;
                } else if (item.type === 'folder') {
                    totalFolders++;
                    if (item.children) {
                        countItems(item.children);
                    }
                }
            });
        }
        
        countItems(this.navigationData);
        console.log(`📊 Navigation Summary: ${totalFiles} tutorials in ${totalFolders} folders`);
    }

    async buildNavigationFromFileSystem() {
        console.log('Building navigation from known filesystem structure...');
        
        try {
            // Build the navigation structure manually by scanning the known directories
            this.navigationData = {};
            
            // Check if we're running with Neutralino API
            if (typeof Neutralino !== 'undefined' && Neutralino.filesystem) {
                // Scan Google Scripts folder
                await this.addFolderToNavigation('google scripts', 'resources/tutorials/google scripts', '📝 Google Apps Script');
                
                // Scan Homebrew folder
                await this.addFolderToNavigation('homebrew', 'resources/tutorials/homebrew', '📦 Homebrew');
                
                // Scan Python folder
                await this.addFolderToNavigation('python', 'resources/tutorials/python', '🐍 Python');
            } else {
                console.log('Neutralino API not available, creating static navigation structure...');
                // Create a static structure based on what we know exists
                this.navigationData = await this.createStaticNavigationStructure();
            }
            
            // Render the navigation
            const navigationElement = document.getElementById('navigation');
            this.renderNavigation(navigationElement);
            
            console.log('Successfully built navigation with', Object.keys(this.navigationData).length, 'top-level categories');
            
        } catch (error) {
            console.error('Failed to build navigation from filesystem:', error);
            // Final fallback to demo
            this.loadDemoNavigation();
        }
    }
    
    async addFolderToNavigation(key, path, displayName) {
        try {
            const structure = await this.scanTutorialsDirectory(path);
            if (Object.keys(structure).length > 0) {
                this.navigationData[key] = {
                    type: 'folder',
                    name: displayName,
                    children: structure,
                    path: path
                };
            }
        } catch (error) {
            console.warn(`Failed to scan folder ${path}:`, error);
        }
    }
    
    async createStaticNavigationStructure() {
        // Create navigation structure based on what we know exists in the filesystem
        return {
            'google scripts': {
                type: 'folder',
                name: '📝 Google Apps Script',
                children: {
                    'google-apps-script-gmail-functions.md': { 
                        type: 'file', 
                        name: 'Gmail Functions',
                        path: 'tutorials/google scripts/google-apps-script-gmail-functions.md'
                    },
                    'google-apps-script-google-docs.md': { 
                        type: 'file', 
                        name: 'Google Docs',
                        path: 'tutorials/google scripts/google-apps-script-google-docs.md'
                    },
                    'google-apps-script-google-drive.md': { 
                        type: 'file', 
                        name: 'Google Drive',
                        path: 'tutorials/google scripts/google-apps-script-google-drive.md'
                    },
                    'google-apps-script-google-sheets.md': { 
                        type: 'file', 
                        name: 'Google Sheets',
                        path: 'tutorials/google scripts/google-apps-script-google-sheets.md'
                    },
                    'google-apps-script-youtube-api.md': { 
                        type: 'file', 
                        name: 'YouTube API',
                        path: 'tutorials/google scripts/google-apps-script-youtube-api.md'
                    }
                },
                path: 'tutorials/google scripts'
            },
            'homebrew': {
                type: 'folder',
                name: '📦 Homebrew',
                children: {
                    'README.md': { 
                        type: 'file', 
                        name: 'README',
                        path: 'tutorials/homebrew/README.md'
                    },
                    'cli-tools': {
                        type: 'folder',
                        name: '⚒️ CLI Tools',
                        children: {
                            'bat.md': { type: 'file', name: 'Bat', path: 'tutorials/homebrew/cli-tools/bat.md' },
                            'curl.md': { type: 'file', name: 'Curl', path: 'tutorials/homebrew/cli-tools/curl.md' },
                            'fd-find.md': { type: 'file', name: 'Fd Find', path: 'tutorials/homebrew/cli-tools/fd-find.md' },
                            'gawk.md': { type: 'file', name: 'Gawk', path: 'tutorials/homebrew/cli-tools/gawk.md' },
                            'grep.md': { type: 'file', name: 'Grep', path: 'tutorials/homebrew/cli-tools/grep.md' },
                            'jq.md': { type: 'file', name: 'Jq', path: 'tutorials/homebrew/cli-tools/jq.md' },
                            'sed.md': { type: 'file', name: 'Sed', path: 'tutorials/homebrew/cli-tools/sed.md' },
                            'wget.md': { type: 'file', name: 'Wget', path: 'tutorials/homebrew/cli-tools/wget.md' }
                        },
                        path: 'tutorials/homebrew/cli-tools'
                    },
                    'development-tools': {
                        type: 'folder',
                        name: '🔧 Development Tools',
                        children: {
                            'docker.md': { type: 'file', name: 'Docker', path: 'tutorials/homebrew/development-tools/docker.md' },
                            'ffmpeg.md': { type: 'file', name: 'Ffmpeg', path: 'tutorials/homebrew/development-tools/ffmpeg.md' },
                            'git.md': { type: 'file', name: 'Git', path: 'tutorials/homebrew/development-tools/git.md' }
                        },
                        path: 'tutorials/homebrew/development-tools'
                    },
                    'security-tools': {
                        type: 'folder',
                        name: '🔒 Security Tools',
                        children: {
                            'nmap.md': { type: 'file', name: 'Nmap', path: 'tutorials/homebrew/security-tools/nmap.md' }
                        },
                        path: 'tutorials/homebrew/security-tools'
                    },
                    'system-guides': {
                        type: 'folder',
                        name: '💻 System Guides',
                        children: {
                            'keyboard-shortcuts.md': { type: 'file', name: 'Keyboard Shortcuts', path: 'tutorials/homebrew/system-guides/keyboard-shortcuts.md' },
                            'terminal.md': { type: 'file', name: 'Terminal', path: 'tutorials/homebrew/system-guides/terminal.md' }
                        },
                        path: 'tutorials/homebrew/system-guides'
                    }
                },
                path: 'tutorials/homebrew'
            },
            'python': {
                type: 'folder',
                name: '🐍 Python Standard Library',
                children: {
                    'standard library': {
                        type: 'folder',
                        name: '📚 Standard Library',
                        children: {
                            'Binary Data Services': {
                                type: 'folder',
                                name: '0️⃣ Binary Data Services',
                                children: {},
                                path: 'tutorials/python/standard library/Binary Data Services'
                            },
                            'Internet Protocols and Support': {
                                type: 'folder',
                                name: '🌐 Internet Protocols',
                                children: {},
                                path: 'tutorials/python/standard library/Internet Protocols and Support'
                            }
                        },
                        path: 'tutorials/python/standard library'
                    }
                },
                path: 'tutorials/python'
            }
        };
    }

    async scanTutorialsDirectory(basePath) {
        try {
            const entries = await Neutralino.filesystem.readDirectory(basePath);
            const structure = {};

            for (const entry of entries) {
                const entryPath = `${basePath}/${entry.entry}`;
                
                if (entry.type === 'DIRECTORY') {
                    // Recursively scan subdirectories
                    const children = await this.scanTutorialsDirectory(entryPath);
                    
                    // Only add folders that have content (files or non-empty subfolders)
                    if (Object.keys(children).length > 0) {
                        structure[entry.entry] = {
                            type: 'folder',
                            name: this.formatDisplayName(entry.entry),
                            children: children,
                            path: entryPath
                        };
                    }
                } else if (entry.entry.endsWith('.md')) {
                    // Add markdown files
                    structure[entry.entry] = {
                        type: 'file',
                        name: this.formatDisplayName(entry.entry.replace('.md', '')),
                        path: entryPath
                    };
                }
            }

            return structure;
        } catch (error) {
            console.error('Error scanning directory:', basePath, error);
            return {};
        }
    }

    formatDisplayName(name) {
        // Add appropriate icons and format display names
        const iconMap = {
            'homebrew': '📦 Homebrew',
            'python': '🐍 Python Standard Library',
            'google scripts': '📝 Google Apps Script',
            'google-scripts': '📝 Google Apps Script',
            'standard library': '📚 Standard Library',
            'cli-tools': '⚒️ CLI Tools',
            'development-tools': '🔧 Development Tools',
            'security-tools': '🔒 Security Tools',
            'system-guides': '💻 System Guides',
            'programming-languages': '💻 Programming Languages',
            'Internet Protocols and Support': '🌐 Internet Protocols',
            'Data Compression and Archiving': '🗜️ Data Compression',
            'Generic Operating System Services': '⚙️ OS Services',
            'File and Directory Access': '📁 File & Directory',
            'Internet Data Handling': '📊 Internet Data',
            'Importing Modules': '📦 Import Modules',
            'Internationalization': '🌍 i18n',
            'Text Processing Services': '📝 Text Processing',
            'Concurrent Execution': '⚡ Concurrency',
            'Structured Markup Processing Tools': '🏗️ Markup Tools',
            'Miscellaneous Services': '🔧 Misc Services',
            'Software Packaging and Distribution': '📦 Packaging',
            'XML Processing Modules': '📄 XML Processing',
            'Custom Python Interpreters': '🐍 Interpreters',
            'Multimedia Services': '🎵 Multimedia',
            'Cryptographic Services': '🔐 Cryptography',
            'Python Runtime Services': '⚙️ Runtime',
            'Networking and Interprocess Communication': '🌐 Networking',
            'Program Frameworks': '🏗️ Frameworks',
            'Numeric and Mathematical Modules': '🔢 Math & Numeric',
            'Development Tools': '🛠️ Dev Tools',
            'Microsoft Windows Specific Services': '🪟 Windows',
            'Unix Specific Services': '🐧 Unix',
            'Binary Data Services': '0️⃣ Data Services',
            'Python Language Services': '🐍 Language',
            'Data Persistence': '💾 Persistence',
            'Functional Programming Modules': '⚡ Functional',
            'Debugging and Profiling': '🐛 Debug & Profile',
            'Superseded Modules': '⚠️ Deprecated',
            'Graphical User Interfaces with Tk': '🖼️ GUI (Tkinter)',
            'File Formats': '📄 File Formats'
        };
        
        if (iconMap[name]) {
            return iconMap[name];
        }
        
        // Handle special Python modules that start with underscores
        if (name.startsWith('__') && name.endsWith('__')) {
            return `🐍 ${name}`;
        }
        
        // Clean up long file names by removing redundant parts
        let cleanName = name;
        
        // Remove common prefixes/suffixes
        cleanName = cleanName
            .replace(' - ', ': ')
            .replace(/^google-apps-script-/, '')
            .replace(/\.md$/, '');
        
        // Format file/folder names: replace hyphens/underscores with spaces and title case
        cleanName = cleanName
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());
        
        // Truncate very long names
        if (cleanName.length > 60) {
            cleanName = cleanName.substring(0, 57) + '...';
        }
        
        return cleanName;
    }

    loadDemoNavigation() {
        // Fallback demo data
        this.navigationData = {
            'homebrew': {
                type: 'folder',
                name: '📦 Homebrew',
                children: {
                    'nmap.md': { type: 'file', name: 'Network Mapper (nmap)' },
                    'keyboard-shortcuts.md': { type: 'file', name: 'Keyboard Shortcuts' }
                }
            },
            'python': {
                type: 'folder',
                name: '� Python',
                children: {
                    'ipaddress.md': { type: 'file', name: 'IP Address Manipulation' }
                }
            },
            'google-scripts': {
                type: 'folder',
                name: '📝 Google Scripts',
                children: {
                    'google-apps-script-youtube-api.md': { type: 'file', name: 'YouTube API' },
                    'google-apps-script-google-sheets.md': { type: 'file', name: 'Google Sheets' }
                }
            }
        };

        const navigationElement = document.getElementById('navigation');
        this.renderNavigation(navigationElement);
    }

    renderNavigation(container) {
        container.innerHTML = '';
        
        // Add navigation breadcrumb/header
        const navHeader = document.createElement('div');
        navHeader.className = 'nav-header';
        navHeader.innerHTML = `
            <div class="nav-breadcrumb">
                <i class="fas fa-folder-tree"></i>
                <span class="nav-location">All Tutorials</span>
            </div>
            <div class="nav-actions">
                <button class="nav-action-btn" onclick="markdownBuddy.collapseAllFolders()" title="Collapse all folders">
                    <i class="fas fa-compress-arrows-alt"></i>
                </button>
                <button class="nav-action-btn" onclick="markdownBuddy.expandAllFolders()" title="Expand all folders">
                    <i class="fas fa-expand-arrows-alt"></i>
                </button>
                <button class="nav-action-btn" onclick="markdownBuddy.refreshNavigation()" title="Refresh navigation">
                    <i class="fas fa-sync-alt"></i>
                </button>
                <button class="nav-action-btn" onclick="markdownBuddy.showKeyboardHelp()" title="Keyboard shortcuts (F1)">
                    <i class="fas fa-keyboard"></i>
                </button>
            </div>
        `;
        container.appendChild(navHeader);

        // Add navigation items
        const navItems = document.createElement('div');
        navItems.className = 'nav-items';
        
        // Add help tip
        const helpTip = document.createElement('div');
        helpTip.className = 'help-tip';
        helpTip.innerHTML = `
            <div class="help-tip-content">
                <i class="fas fa-lightbulb"></i>
                <div class="help-tip-text">
                    <strong>Pro Tips:</strong>
                    <ul>
                        <li>Press <kbd>F1</kbd> for keyboard shortcuts</li>
                        <li>Right-click items for context menu</li>
                        <li>Use <kbd>Ctrl/Cmd+F</kbd> to search</li>
                        <li>Double-click folders to open folder view</li>
                    </ul>
                </div>
                <button class="help-tip-close" onclick="this.parentElement.parentElement.style.display='none'">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        // Check if help tip should be shown (only show first few times)
        const helpTipShownCount = parseInt(localStorage.getItem('helpTipShown') || '0');
        if (helpTipShownCount < 3) {
            container.appendChild(helpTip);
            localStorage.setItem('helpTipShown', (helpTipShownCount + 1).toString());
        }
        
        // Load saved folder states
        const folderStates = this.loadFolderStates();
        
        Object.keys(this.navigationData).forEach(key => {
            const item = this.navigationData[key];
            const element = this.createNavigationItem(key, item);
            
            // Restore folder state if it was previously expanded
            if (item.type === 'folder' && folderStates[key]) {
                setTimeout(() => {
                    element.classList.add('expanded');
                    element.setAttribute('aria-expanded', 'true');
                    const childrenDiv = element.querySelector('.nav-children');
                    const toggleIcon = element.querySelector('.folder-toggle');
                    if (childrenDiv) {
                        childrenDiv.classList.add('show');
                        childrenDiv.style.maxHeight = 'none';
                    }
                    if (toggleIcon) {
                        toggleIcon.style.transform = 'rotate(90deg)';
                    }
                }, 50);
            }
            
            navItems.appendChild(element);
        });
        
        container.appendChild(navItems);
    }

    collapseAllFolders() {
        const folders = document.querySelectorAll('.nav-folder.expanded');
        folders.forEach((folder, index) => {
            setTimeout(() => {
                folder.classList.remove('expanded');
                folder.setAttribute('aria-expanded', 'false');
                
                const childrenDiv = folder.querySelector('.nav-children');
                const toggleIcon = folder.querySelector('.folder-toggle');
                
                if (childrenDiv) {
                    childrenDiv.classList.remove('show');
                    childrenDiv.style.maxHeight = '0px';
                }
                
                if (toggleIcon) {
                    toggleIcon.style.transform = 'rotate(0deg)';
                }
            }, index * 50); // Staggered animation
        });
        
        // Clear saved folder states
        localStorage.removeItem('navFolderStates');
        this.showNotification('All folders collapsed');
    }

    expandAllFolders() {
        const folders = document.querySelectorAll('.nav-folder:not(.expanded)');
        folders.forEach((folder, index) => {
            setTimeout(() => {
                folder.classList.add('expanded');
                folder.setAttribute('aria-expanded', 'true');
                
                const childrenDiv = folder.querySelector('.nav-children');
                const toggleIcon = folder.querySelector('.folder-toggle');
                
                if (childrenDiv) {
                    childrenDiv.classList.add('show');
                    childrenDiv.style.maxHeight = childrenDiv.scrollHeight + 'px';
                    
                    setTimeout(() => {
                        if (childrenDiv.classList.contains('show')) {
                            childrenDiv.style.maxHeight = 'none';
                        }
                    }, 300);
                }
                
                if (toggleIcon) {
                    toggleIcon.style.transform = 'rotate(90deg)';
                }
                
                // Save expanded state
                const key = this.getFolderKeyFromElement(folder);
                if (key) {
                    this.saveFolderState(key, true);
                }
            }, index * 50); // Staggered animation
        });
        
        this.showNotification('All folders expanded');
    }

    getFolderKeyFromElement(folderElement) {
        // Try to extract the folder key from the element
        // This is a simplified approach - you might need to enhance based on your data structure
        const folderText = folderElement.querySelector('.nav-folder-text');
        if (!folderText) return null;
        
        const folderName = folderText.textContent.trim();
        
        // Match against known folder names
        for (const [key, item] of Object.entries(this.navigationData)) {
            if (item.name === folderName) {
                return key;
            }
        }
        
        return null;
    }

    async refreshNavigation() {
        this.showNotification('Refreshing navigation...');
        
        try {
            // Reload navigation data
            await this.loadNavigation();
            this.showNotification('Navigation refreshed successfully');
        } catch (error) {
            console.error('Failed to refresh navigation:', error);
            this.showNotification('Failed to refresh navigation', true);
        }
    }

    updateNavigationBreadcrumb(path) {
        const breadcrumbElement = document.querySelector('.nav-location');
        if (!breadcrumbElement) return;
        
        if (!path) {
            breadcrumbElement.innerHTML = 'All Tutorials';
            return;
        }
        
        const parts = path.split('/');
        const displayPath = parts.length > 2 ? 
            `${parts[0]}/.../${parts[parts.length - 1]}` : 
            parts.join('/');
            
        breadcrumbElement.innerHTML = displayPath;
    }

    createNavigationItem(key, item, level = 0) {
        const div = document.createElement('div');
        
        // Add level data attribute for CSS styling
        div.setAttribute('data-level', level);
        
        if (item.type === 'folder') {
            div.className = 'nav-folder';
            div.tabIndex = 0;
            div.setAttribute('role', 'button');
            div.setAttribute('aria-expanded', 'false');
            div.setAttribute('aria-label', `Folder: ${item.name}`);
            
            // Improved indentation calculation for deep levels
            const baseIndent = 8;
            const levelIndent = level > 3 ? 10 : 15; // Smaller indent for deeper levels
            const maxIndent = 200; // Prevent pushing content too far right
            const calculatedIndent = Math.min(baseIndent + (level * levelIndent), maxIndent);
            div.style.paddingLeft = `${calculatedIndent}px`;
            
            // Enhanced folder structure with better click targets
            div.innerHTML = `
                <div class="nav-folder-content">
                    <span class="nav-folder-toggle">
                        <i class="fas fa-chevron-right folder-toggle"></i>
                    </span>
                    <span class="nav-folder-icon">
                        <i class="fas fa-folder"></i>
                    </span>
                    <span class="nav-folder-text" title="${item.name}">${this.truncateText(item.name, level)}</span>
                    <span class="nav-folder-count" title="Number of items">${this.countFolderItems(item)}</span>
                </div>
            `;
            
            // Enhanced click handling with better event delegation
            div.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleFolder(div, key, item, level);
            });

            // Double-click to open folder view
            div.addEventListener('dblclick', (e) => {
                e.stopPropagation();
                const fullPath = item.path || key;
                this.showFolderContents(fullPath, item.name);
            });

            // Create children container
            const childrenDiv = document.createElement('div');
            childrenDiv.className = 'nav-children';
            childrenDiv.setAttribute('role', 'group');
            childrenDiv.setAttribute('data-level', level + 1);
            
            if (item.children) {
                Object.keys(item.children).forEach(childKey => {
                    const childItem = item.children[childKey];
                    const childElement = this.createNavigationItem(`${key}/${childKey}`, childItem, level + 1);
                    childrenDiv.appendChild(childElement);
                });
            }
            
            div.appendChild(childrenDiv);
            
        } else {
            div.className = 'nav-file';
            div.tabIndex = 0;
            div.setAttribute('role', 'button');
            div.setAttribute('aria-label', `File: ${item.name}`);
            
            // Improved indentation calculation for deep levels
            const baseIndent = 8;
            const levelIndent = level > 3 ? 10 : 15;
            const maxIndent = 200;
            const calculatedIndent = Math.min(baseIndent + (level * levelIndent), maxIndent);
            div.style.paddingLeft = `${calculatedIndent}px`;
            
            // Enhanced file structure
            div.innerHTML = `
                <div class="nav-file-content">
                    <span class="nav-file-icon">
                        <i class="fas fa-file-alt"></i>
                    </span>
                    <span class="nav-file-text" title="${item.name}">${this.truncateText(item.name, level)}</span>
                    <span class="nav-file-indicator"></span>
                </div>
            `;
            
            // Enhanced click handling
            div.addEventListener('click', (e) => {
                e.stopPropagation();
                const fullPath = item.path || key;
                this.loadTutorial(fullPath, item.name);
                
                // Update active state with animation
                this.setActiveNavItem(div);
            });
        }
        
        // Add drag capability for all items
        div.draggable = true;
        div.addEventListener('dragstart', (e) => {
            const fullPath = item.path || key;
            e.dataTransfer.setData('text/plain', fullPath);
            div.classList.add('dragging');
        });

        div.addEventListener('dragend', () => {
            div.classList.remove('dragging');
        });
        
        return div;
    }

    // Helper function to truncate text based on nesting level
    truncateText(text, level) {
        // Check if sidebar is expanded to allow even longer names
        const sidebar = document.getElementById('sidebar');
        const isExpanded = sidebar?.classList.contains('expanded');
        
        if (level === 0) return text; // Top level - no truncation
        
        const baseLengths = {
            1: 50,  // Level 1
            2: 45,  // Level 2
            3: 40,  // Level 3
            4: 35,  // Level 4
            5: 30,  // Level 5+
        };
        
        const expandedLengths = {
            1: 70,  // Level 1 - even longer in expanded mode
            2: 65,  // Level 2
            3: 60,  // Level 3
            4: 55,  // Level 4
            5: 50,  // Level 5+
        };
        
        const maxLengths = isExpanded ? expandedLengths : baseLengths;
        const maxLength = maxLengths[level] || maxLengths[5];
        
        if (text.length <= maxLength) return text;
        
        return text.substring(0, maxLength - 3) + '...';
    }

    countFolderItems(item) {
        if (!item.children) return 0;
        
        let count = 0;
        Object.values(item.children).forEach(child => {
            count++;
            if (child.type === 'folder' && child.children) {
                count += this.countFolderItems(child);
            }
        });
        
        return count;
    }

    setActiveNavItem(navItem) {
        // Remove active class from all nav items with smooth transition
        document.querySelectorAll('.nav-file').forEach(item => {
            item.classList.remove('active', 'active-animate');
        });
        
        // Add active class to current item
        navItem.classList.add('active');
        
        // Add animation class after a brief delay
        setTimeout(() => {
            navItem.classList.add('active-animate');
        }, 10);
        
        // Ensure the active item is visible
        navItem.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest',
            inline: 'nearest'
        });

        // Expand parent folders if needed
        this.expandParentFolders(navItem);
    }

    expandParentFolders(element) {
        let parent = element.parentElement;
        
        while (parent) {
            if (parent.classList && parent.classList.contains('nav-children')) {
                const parentFolder = parent.parentElement;
                if (parentFolder && parentFolder.classList.contains('nav-folder')) {
                    this.expandFolder(parentFolder);
                }
            }
            parent = parent.parentElement;
        }
    }

    toggleFolder(folderElement, key, item) {
        const isExpanded = folderElement.classList.contains('expanded');
        const childrenDiv = folderElement.querySelector('.nav-children');
        const toggleIcon = folderElement.querySelector('.folder-toggle');
        
        if (isExpanded) {
            // Collapse folder
            folderElement.classList.remove('expanded');
            folderElement.setAttribute('aria-expanded', 'false');
            
            if (childrenDiv) {
                childrenDiv.classList.remove('show');
                // Add smooth collapse animation
                childrenDiv.style.maxHeight = childrenDiv.scrollHeight + 'px';
                requestAnimationFrame(() => {
                    childrenDiv.style.maxHeight = '0px';
                });
            }
            
            if (toggleIcon) {
                toggleIcon.style.transform = 'rotate(0deg)';
            }
        } else {
            // Expand folder
            folderElement.classList.add('expanded');
            folderElement.setAttribute('aria-expanded', 'true');
            
            if (childrenDiv) {
                childrenDiv.classList.add('show');
                // Add smooth expand animation
                childrenDiv.style.maxHeight = '0px';
                requestAnimationFrame(() => {
                    childrenDiv.style.maxHeight = childrenDiv.scrollHeight + 'px';
                });
                
                // Reset max-height after animation
                setTimeout(() => {
                    if (childrenDiv.classList.contains('show')) {
                        childrenDiv.style.maxHeight = 'none';
                    }
                }, 300);
            }
            
            if (toggleIcon) {
                toggleIcon.style.transform = 'rotate(90deg)';
            }
        }

        // Store folder state for persistence
        this.saveFolderState(key, !isExpanded);
    }

    saveFolderState(folderKey, isExpanded) {
        try {
            let folderStates = JSON.parse(localStorage.getItem('navFolderStates') || '{}');
            folderStates[folderKey] = isExpanded;
            localStorage.setItem('navFolderStates', JSON.stringify(folderStates));
        } catch (error) {
            console.warn('Failed to save folder state:', error);
        }
    }

    loadFolderStates() {
        try {
            return JSON.parse(localStorage.getItem('navFolderStates') || '{}');
        } catch (error) {
            console.warn('Failed to load folder states:', error);
            return {};
        }
    }

    showFolderContents(path, title) {
        // Navigate to folder contents view
        console.log('Showing folder contents for:', path);
        
        const mainContent = document.getElementById('main-content');
        const breadcrumb = this.createBreadcrumb(path);
        
        // Find the folder data
        const folderData = this.getFolderData(path);
        
        if (!folderData) {
            this.showError(`Folder not found: ${path}`);
            return;
        }

        // Create folder listing
        let folderHtml = '';
        
        // Add subfolders
        const subfolders = [];
        const files = [];
        
        if (folderData.children) {
            Object.keys(folderData.children).forEach(key => {
                const item = folderData.children[key];
                if (item.type === 'folder') {
                    subfolders.push({ key, item });
                } else {
                    files.push({ key, item });
                }
            });
        }
        
        // Render subfolders
        if (subfolders.length > 0) {
            folderHtml += '<h3><i class="fas fa-folder"></i> Folders</h3><div class="folder-grid">';
            subfolders.forEach(({key, item}) => {
                const folderPath = path ? `${path}/${key}` : key;
                folderHtml += `
                    <div class="folder-card" onclick="markdownBuddy.showFolderContents('${folderPath}', '${item.name}')">
                        <i class="fas fa-folder"></i>
                        <span>${item.name}</span>
                        <small>${Object.keys(item.children || {}).length} items</small>
                    </div>
                `;
            });
            folderHtml += '</div>';
        }
        
        // Render files
        if (files.length > 0) {
            folderHtml += '<h3><i class="fas fa-file-alt"></i> Files</h3><div class="file-grid">';
            files.forEach(({key, item}) => {
                const filePath = path ? `${path}/${key}` : key;
                folderHtml += `
                    <div class="file-card" onclick="markdownBuddy.loadTutorial('${filePath}', '${item.name}')">
                        <i class="fas fa-file-markdown"></i>
                        <span>${item.name}</span>
                    </div>
                `;
            });
            folderHtml += '</div>';
        }
        
        if (folderHtml === '') {
            folderHtml = '<p class="empty-folder">This folder is empty.</p>';
        }

        mainContent.innerHTML = `
            <div class="folder-contents">
                <div class="folder-header">
                    <div class="breadcrumb">${breadcrumb}</div>
                    <h1 class="folder-title"><i class="fas fa-folder"></i> ${title}</h1>
                </div>
                <div class="folder-body">
                    ${folderHtml}
                </div>
            </div>
        `;
        
        // Update active navigation item
        this.updateActiveNavItem(path);
        
        // Store current path
        this.currentPath = path;
    }

    getFolderData(path) {
        if (!path) {
            return { children: this.navigationData };
        }
        
        const parts = path.split('/');
        let current = this.navigationData;
        
        for (const part of parts) {
            if (current[part] && current[part].children) {
                current = current[part].children;
            } else if (current[part]) {
                return current[part];
            } else {
                return null;
            }
        }
        
        return { children: current };
    }

    async loadTutorial(path, title) {
        const mainContent = document.getElementById('main-content');
        
        try {
            // Show loading state
            mainContent.innerHTML = `
                <div class="loading">
                    <i class="fas fa-spinner fa-pulse"></i>
                    <p>Loading tutorial...</p>
                </div>
            `;

            // Update navigation breadcrumb
            this.updateNavigationBreadcrumb(path);

            // Load the actual markdown file
            let markdownContent;
            try {
                // Check if we have Neutralino API available
                if (typeof Neutralino !== 'undefined' && Neutralino.filesystem) {
                    // Try to load from filesystem first
                    const filePath = path.startsWith('resources/') ? path : `resources/tutorials/${path}`;
                    markdownContent = await Neutralino.filesystem.readFile(filePath);
                } else {
                    // In browser mode, try to fetch the file via HTTP
                    console.log('Loading tutorial via HTTP fetch:', path);
                    const response = await fetch(path);
                    if (response.ok) {
                        markdownContent = await response.text();
                    } else {
                        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                    }
                }
            } catch (fileError) {
                console.warn('Failed to load file, using sample content:', fileError);
                markdownContent = this.getSampleMarkdown(path);
            }
            
            // Create tutorial content structure
            const breadcrumb = this.createBreadcrumb(path);
            
            // Parse markdown content
            let htmlContent;
            try {
                htmlContent = marked.parse(markdownContent);
            } catch (parseError) {
                console.error('Failed to parse markdown:', parseError);
                htmlContent = `<pre>${markdownContent}</pre>`;
            }
            
            const content = `
                <div class="tutorial-content">
                    <div class="tutorial-header">
                        <div class="breadcrumb">${breadcrumb}</div>
                        <div class="tutorial-meta">
                            <h1 class="tutorial-title">${title}</h1>
                            <div class="tutorial-actions">
                                <button class="btn-secondary" onclick="markdownBuddy.showWelcomeContent()" title="Go to home">
                                    <i class="fas fa-home"></i> Home
                                </button>
                                <button class="btn-secondary" onclick="markdownBuddy.toggleTableOfContents()" title="Toggle table of contents" id="tocToggle">
                                    <i class="fas fa-list"></i> Contents
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="tutorial-body">
                        <div class="table-of-contents" id="tableOfContents" style="display: none;">
                            <h3><i class="fas fa-list"></i> Table of Contents</h3>
                            <div class="toc-content"></div>
                        </div>
                        <div class="markdown-content">
                            ${htmlContent}
                        </div>
                    </div>
                </div>
            `;
            
            mainContent.innerHTML = content;
            
            // Post-process the content to ensure headers have IDs
            this.ensureHeaderIds();
            
            // Generate table of contents
            this.generateTableOfContents();
            
            // Update active nav item
            this.updateActiveNavItem(path);
            
            // Initialize code highlighting and copy buttons
            this.initializeCodeBlocks();
            
            // Handle in-page anchor links
            this.setupAnchorNavigation();
            
            // Test anchor links (debug mode)
            this.testAnchorLinks();
            
            // Store current path
            this.currentPath = path;
            
        } catch (error) {
            console.error('Failed to load tutorial:', error);
            this.showError('Failed to load tutorial. Please try again.');
        }
    }

    generateTableOfContents() {
        const tocContent = document.querySelector('.toc-content');
        const headers = document.querySelectorAll('.markdown-content h1, .markdown-content h2, .markdown-content h3, .markdown-content h4, .markdown-content h5, .markdown-content h6');
        
        if (!tocContent || headers.length === 0) return;
        
        let tocHtml = '<ul class="toc-list">';
        let lastLevel = 0;
        
        headers.forEach(header => {
            const level = parseInt(header.tagName.charAt(1));
            const text = header.textContent.trim();
            const id = header.id || this.generateHeaderId(text);
            
            // Ensure header has an ID
            if (!header.id) {
                header.id = id;
            }
            
            if (level > lastLevel) {
                for (let i = lastLevel; i < level - 1; i++) {
                    tocHtml += '<ul class="toc-list">';
                }
            } else if (level < lastLevel) {
                for (let i = level; i < lastLevel; i++) {
                    tocHtml += '</ul>';
                }
            }
            
            tocHtml += `
                <li class="toc-item toc-level-${level}">
                    <a href="#${id}" class="toc-link">
                        <span class="toc-number">${level}</span>
                        <span class="toc-text">${text}</span>
                    </a>
                </li>
            `;
            
            lastLevel = level;
        });
        
        // Close remaining lists
        for (let i = 1; i < lastLevel; i++) {
            tocHtml += '</ul>';
        }
        tocHtml += '</ul>';
        
        tocContent.innerHTML = tocHtml;
        
        // Add click handlers for smooth scrolling
        tocContent.querySelectorAll('.toc-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const target = document.querySelector(targetId);
                
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    
                    // Highlight the target briefly
                    target.style.backgroundColor = '#ffeb3b';
                    target.style.transition = 'background-color 2s';
                    setTimeout(() => {
                        target.style.backgroundColor = '';
                    }, 2000);
                }
            });
        });
    }

    toggleTableOfContents() {
        const toc = document.getElementById('tableOfContents');
        const toggle = document.getElementById('tocToggle');
        
        if (!toc || !toggle) return;
        
        const isVisible = toc.style.display !== 'none';
        
        if (isVisible) {
            toc.style.display = 'none';
            toggle.innerHTML = '<i class="fas fa-list"></i> Contents';
            toggle.title = 'Show table of contents';
        } else {
            toc.style.display = 'block';
            toggle.innerHTML = '<i class="fas fa-list-ul"></i> Hide Contents';
            toggle.title = 'Hide table of contents';
        }
    }

    createBreadcrumb(path) {
        const parts = path.split('/');
        const breadcrumbs = ['<a href="#" onclick="markdownBuddy.showWelcomeContent()">Home</a>'];
        
        let currentPath = '';
        parts.forEach((part, index) => {
            currentPath += (index > 0 ? '/' : '') + part;
            
            if (index === parts.length - 1) {
                // Last item (current page) - no link, different styling for files vs folders
                const displayName = part.replace('.md', '').replace(/-/g, ' ');
                if (part.endsWith('.md')) {
                    // It's a file - no link
                    breadcrumbs.push(`<span class="breadcrumb-file">${displayName}</span>`);
                } else {
                    // It's a folder - no link but could be styled differently
                    breadcrumbs.push(`<span class="breadcrumb-current">${displayName}</span>`);
                }
            } else {
                // Intermediate folders - make them clickable
                const displayName = part.replace(/-/g, ' ');
                const folderData = this.getFolderData(currentPath);
                
                if (folderData && folderData.children) {
                    // It's a valid folder, make it clickable
                    breadcrumbs.push(`<a href="#" onclick="markdownBuddy.showFolderContents('${currentPath}', '${displayName}')">${displayName}</a>`);
                } else {
                    // Not a valid folder, just show as text
                    breadcrumbs.push(`<span>${displayName}</span>`);
                }
            }
        });
        
        return breadcrumbs.join(' <i class="fas fa-chevron-right" style="margin: 0 8px; font-size: 0.8em;"></i> ');
    }

    updateActiveNavItem(path) {
        // Remove active class from all nav items
        document.querySelectorAll('.nav-folder, .nav-file').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to current item (simplified for demo)
        // In a real app, you'd match based on the actual path
    }
    
    ensureHeaderIds() {
        // Ensure all headers in the markdown content have proper IDs
        const markdownContent = document.querySelector('.markdown-content');
        if (!markdownContent) return;
        
        const headers = markdownContent.querySelectorAll('h1, h2, h3, h4, h5, h6');
        console.log(`Processing ${headers.length} headers for ID generation...`);
        
        headers.forEach((header, index) => {
            // Always regenerate IDs to ensure consistency with TOC links
            const id = this.generateHeaderId(header.textContent);
            
            // Ensure unique IDs by checking for duplicates
            let finalId = id;
            let counter = 1;
            while (document.getElementById(finalId) && document.getElementById(finalId) !== header) {
                finalId = `${id}-${counter}`;
                counter++;
            }
            
            header.id = finalId;
            console.log(`Set ID for header "${header.textContent.trim()}": ${finalId}`);
        });
    }

    initializeCodeBlocks() {
        // Highlight code blocks
        if (window.hljs) {
            hljs.highlightAll();
        }
        
        // Add copy buttons to code blocks
        document.querySelectorAll('pre code').forEach(codeBlock => {
            const pre = codeBlock.parentElement;
            if (!pre.querySelector('.copy-button')) {
                const copyButton = document.createElement('button');
                copyButton.className = 'copy-button';
                copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
                copyButton.onclick = () => this.copyToClipboard(codeBlock, copyButton);
                pre.style.position = 'relative';
                pre.appendChild(copyButton);
            }
        });
    }

    setupAnchorNavigation() {
        // First, ensure all headers have proper IDs
        this.ensureHeaderIds();
        
        // Enable smooth scrolling for in-page anchors
        console.log('Setting up anchor navigation...');
        
        // Find all anchor links
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        console.log(`Found ${anchorLinks.length} anchor links`);
        
        anchorLinks.forEach((anchor, index) => {
            const href = anchor.getAttribute('href');
            console.log(`Anchor ${index + 1}: ${href}`);
            
            // Remove any existing click handlers
            anchor.replaceWith(anchor.cloneNode(true));
            const newAnchor = document.querySelectorAll('a[href^="#"]')[index];
            
            newAnchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                console.log('Clicked anchor with target:', targetId);
                
                let target = document.querySelector(targetId);
                
                if (!target) {
                    console.warn('Target not found for:', targetId);
                    // Try to find header by text content matching
                    const targetText = targetId.substring(1).replace(/-/g, ' ');
                    console.log('Trying to find header with text like:', targetText);
                    
                    const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
                    headers.forEach(header => {
                        const headerText = header.textContent.toLowerCase().trim();
                        const normalizedTarget = targetText.toLowerCase().trim();
                        
                        console.log(`Comparing "${headerText}" with "${normalizedTarget}"`);
                        
                        if (headerText === normalizedTarget || 
                            headerText.replace(/[^\w\s]/g, '').replace(/\s+/g, ' ') === normalizedTarget.replace(/[^\w\s]/g, '').replace(/\s+/g, ' ')) {
                            console.log('Found matching header by text:', header);
                            target = header;
                        }
                    });
                }
                
                if (target) {
                    console.log('Target found, scrolling to:', target);
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Add temporary highlight to show the target
                    target.style.backgroundColor = '#ffeb3b';
                    target.style.transition = 'background-color 2s';
                    setTimeout(() => {
                        target.style.backgroundColor = '';
                    }, 2000);
                } else {
                    console.error('Could not find target for anchor:', targetId);
                    // List all available IDs for debugging
                    const allIds = Array.from(document.querySelectorAll('[id]')).map(el => el.id);
                    console.log('Available IDs:', allIds);
                }
            });
        });
        
        // Also check if headers have proper IDs
        const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        console.log(`Found ${headers.length} headers`);
        headers.forEach((header, index) => {
            console.log(`Header ${index + 1}: "${header.textContent.trim()}" - ID: "${header.id}"`);
        });
    }
    
    generateHeaderId(text) {
        // Generate a header ID compatible with common markdown TOC formats
        return text
            .toLowerCase()
            .trim()
            // Remove any leading numbers and dots (like "1. Basic Usage" -> "basic-usage")
            .replace(/^\d+\.\s*/, '')
            // Replace spaces, punctuation, and special characters with hyphens
            .replace(/[\s\W]+/g, '-')
            // Remove leading/trailing hyphens
            .replace(/^-+|-+$/g, '')
            // Ensure it's not empty
            || 'header';
    }
    
    testAnchorLinks() {
        // Debug method to test if TOC links have matching headers
        console.log('=== TESTING ANCHOR LINKS ===');
        
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        
        console.log(`Found ${anchorLinks.length} anchor links and ${headers.length} headers`);
        
        anchorLinks.forEach((link, index) => {
            const href = link.getAttribute('href');
            const targetId = href.substring(1);
            const target = document.getElementById(targetId);
            
            console.log(`Link ${index + 1}: "${link.textContent}" -> ${href}`);
            if (target) {
                console.log(`  ✅ Target found: "${target.textContent.trim()}"`);
            } else {
                console.log(`  ❌ Target NOT found for ID: ${targetId}`);
                
                // Try to find similar headers
                const linkText = link.textContent.toLowerCase().trim();
                headers.forEach(header => {
                    const headerText = header.textContent.toLowerCase().trim();
                    if (headerText.includes(linkText) || linkText.includes(headerText)) {
                        console.log(`  🔍 Possible match: "${header.textContent.trim()}" (ID: ${header.id})`);
                    }
                });
            }
        });
        
        console.log('=== END ANCHOR LINK TEST ===');
    }

    async copyToClipboard(codeBlock, button) {
        try {
            const text = codeBlock.textContent;
            
            // Try different clipboard methods
            let copySuccess = false;
            
            // Method 1: Neutralino clipboard API
            if (window.Neutralino && Neutralino.clipboard) {
                try {
                    await Neutralino.clipboard.writeText(text);
                    copySuccess = true;
                } catch (neutralinoError) {
                    console.warn('Neutralino clipboard failed:', neutralinoError);
                }
            }
            
            // Method 2: Web Clipboard API
            if (!copySuccess && navigator.clipboard) {
                try {
                    await navigator.clipboard.writeText(text);
                    copySuccess = true;
                } catch (webClipboardError) {
                    console.warn('Web clipboard API failed:', webClipboardError);
                }
            }
            
            // Method 3: Fallback selection method
            if (!copySuccess) {
                try {
                    const textArea = document.createElement('textarea');
                    textArea.value = text;
                    textArea.style.position = 'fixed';
                    textArea.style.opacity = '0';
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    copySuccess = true;
                } catch (fallbackError) {
                    console.warn('Fallback copy method failed:', fallbackError);
                }
            }
            
            if (copySuccess) {
                button.innerHTML = '<i class="fas fa-check"></i> Copied!';
                button.classList.add('success');
                
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-copy"></i> Copy';
                    button.classList.remove('success');
                }, 2000);
            } else {
                throw new Error('All copy methods failed');
            }
            
        } catch (error) {
            console.error('Failed to copy:', error);
            button.innerHTML = '<i class="fas fa-times"></i> Failed';
            button.classList.add('error');
            
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-copy"></i> Copy';
                button.classList.remove('error');
            }, 2000);
        }
    }

    showWelcomeContent() {
        console.log('Showing home/welcome content');
        
        // Clear current path
        this.currentPath = '';
        
        // Show the top-level categories using folder view
        const mainContent = document.getElementById('main-content');
        
        // Create folder listing for top-level categories
        let folderHtml = '';
        
        if (this.navigationData && Object.keys(this.navigationData).length > 0) {
            folderHtml += '<h2><i class="fas fa-folder"></i> Tutorial Categories</h2><div class="folder-grid">';
            
            Object.keys(this.navigationData).forEach(key => {
                const item = this.navigationData[key];
                const itemCount = item.children ? Object.keys(item.children).length : 0;
                
                folderHtml += `
                    <div class="folder-card" onclick="markdownBuddy.showFolderContents('${key}', '${item.name}')">
                        <i class="fas fa-folder"></i>
                        <span>${item.name}</span>
                        <small>${itemCount} items</small>
                    </div>
                `;
            });
            
            folderHtml += '</div>';
        } else {
            folderHtml = `
                <div class="welcome-content">
                    <h1><i class="fas fa-rocket"></i> Welcome to Markdown Buddy</h1>
                    <p class="subtitle">Your comprehensive markdown tutorial browser powered by NeutralinoJS</p>
                    
                    <div class="features-grid">
                        <div class="feature-card">
                            <i class="fas fa-book-open"></i>
                            <h3>Interactive Tutorials</h3>
                            <p>Browse through organized tutorial collections with ease</p>
                        </div>
                        
                        <div class="feature-card">
                            <i class="fas fa-code"></i>
                            <h3>Syntax Highlighting</h3>
                            <p>Code blocks highlighted for 20+ programming languages</p>
                        </div>
                        
                        <div class="feature-card">
                            <i class="fas fa-mobile-alt"></i>
                            <h3>Responsive Design</h3>
                            <p>Works seamlessly on desktop and mobile devices</p>
                        </div>
                        
                        <div class="feature-card">
                            <i class="fas fa-copy"></i>
                            <h3>Copy to Clipboard</h3>
                            <p>One-click copying for all code blocks</p>
                        </div>
                    </div>
                    
                    <div class="getting-started">
                        <h2>Getting Started</h2>
                        <p>Select a tutorial category from the sidebar to begin browsing tutorials. All your markdown files will be automatically parsed and rendered with syntax highlighting.</p>
                    </div>
                </div>
            `;
        }

        const content = `
            <div class="folder-contents">
                <div class="folder-header">
                    <h1 class="folder-title"><i class="fas fa-home"></i> Markdown Buddy</h1>
                    <p style="color: #7f8c8d; margin-top: 5px;">Your comprehensive tutorial browser</p>
                </div>
                <div class="folder-body">
                    ${folderHtml}
                </div>
            </div>
        `;

        mainContent.innerHTML = content;
        
        // Remove active class from nav items
        document.querySelectorAll('.nav-folder, .nav-file').forEach(item => {
            item.classList.remove('active');
        });
    }

    showError(message) {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = `
            <div class="error">
                <i class="fas fa-exclamation-triangle"></i>
                <strong>Error:</strong> ${message}
            </div>
        `;
    }

    async refreshTutorials() {
        await this.loadNavigation();
        this.showWelcomeContent();
    }

    getSampleMarkdown(path) {
        // Sample markdown content for demo purposes
        const samples = {
            'homebrew/cli-tools.md': `# Homebrew CLI Tools

Homebrew makes it easy to install command-line tools on macOS. Here are some essential CLI tools you should consider installing.

## Essential CLI Tools

### bat - A cat clone with wings
\`\`\`bash
brew install bat
\`\`\`

\`bat\` is a \`cat\` clone with syntax highlighting and Git integration.

\`\`\`bash
# Basic usage
bat filename.txt

# Show line numbers
bat -n filename.txt
\`\`\`

### fd - A simple, fast alternative to find
\`\`\`bash
brew install fd
\`\`\`

\`\`\`bash
# Find files by name
fd pattern

# Find files in specific directory
fd pattern /path/to/search
\`\`\`

### jq - Command-line JSON processor
\`\`\`bash
brew install jq
\`\`\`

\`\`\`bash
# Pretty print JSON
echo '{"name":"John","age":30}' | jq .

# Extract specific field
echo '{"name":"John","age":30}' | jq '.name'
\`\`\`

## Advanced Tools

### ripgrep - Fast text search
\`\`\`bash
brew install ripgrep
\`\`\`

### fzf - Fuzzy finder
\`\`\`bash
brew install fzf
\`\`\`

> **Tip:** These tools can significantly improve your command-line productivity!`,

            'python/file-operations.md': `# Python File Operations

Learn how to work with files and directories in Python using the standard library.

## Reading Files

### Basic File Reading
\`\`\`python
# Read entire file
with open('filename.txt', 'r') as file:
    content = file.read()
    print(content)

# Read line by line
with open('filename.txt', 'r') as file:
    for line in file:
        print(line.strip())
\`\`\`

### Reading with Error Handling
\`\`\`python
import os

def read_file_safely(filename):
    try:
        with open(filename, 'r') as file:
            return file.read()
    except FileNotFoundError:
        print(f"File {filename} not found")
        return None
    except IOError:
        print(f"Error reading file {filename}")
        return None
\`\`\`

## Writing Files

### Basic Writing
\`\`\`python
# Write to file (overwrites existing content)
with open('output.txt', 'w') as file:
    file.write('Hello, World!')

# Append to file
with open('output.txt', 'a') as file:
    file.write('\\nNew line')
\`\`\`

## Working with Directories

### Using pathlib (Recommended)
\`\`\`python
from pathlib import Path

# Create directory
Path('new_directory').mkdir(exist_ok=True)

# List files in directory
directory = Path('.')
for file in directory.iterdir():
    if file.is_file():
        print(file.name)
\`\`\`

### Using os module
\`\`\`python
import os

# Create directory
os.makedirs('nested/directory', exist_ok=True)

# List directory contents
for item in os.listdir('.'):
    print(item)
\`\`\`

> **Best Practice:** Always use context managers (\`with\` statements) when working with files to ensure proper resource cleanup.`,

            'google-scripts/gmail.md': `# Gmail Functions with Google Apps Script

Automate Gmail operations using Google Apps Script.

## Getting Started

### Basic Setup
\`\`\`javascript
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Gmail Tools')
    .addItem('Send Email', 'sendEmail')
    .addItem('Read Inbox', 'readInbox')
    .addToUi();
}
\`\`\`

## Sending Emails

### Simple Email
\`\`\`javascript
function sendEmail() {
  var recipient = 'recipient@example.com';
  var subject = 'Test Email from Apps Script';
  var body = 'This is a test email sent from Google Apps Script.';
  
  GmailApp.sendEmail(recipient, subject, body);
}
\`\`\`

### Email with Attachments
\`\`\`javascript
function sendEmailWithAttachment() {
  var recipient = 'recipient@example.com';
  var subject = 'Email with Attachment';
  var body = 'Please find the attached file.';
  
  // Get file from Google Drive
  var file = DriveApp.getFileById('your-file-id');
  
  GmailApp.sendEmail(
    recipient, 
    subject, 
    body, 
    {
      attachments: [file.getBlob()],
      htmlBody: '<p>Please find the <strong>attached</strong> file.</p>'
    }
  );
}
\`\`\`

## Reading Emails

### Get Inbox Threads
\`\`\`javascript
function readInbox() {
  var threads = GmailApp.getInboxThreads(0, 10); // Get first 10 threads
  
  threads.forEach(function(thread) {
    var messages = thread.getMessages();
    var firstMessage = messages[0];
    
    console.log('Subject: ' + firstMessage.getSubject());
    console.log('From: ' + firstMessage.getFrom());
    console.log('Date: ' + firstMessage.getDate());
  });
}
\`\`\`

### Search for Specific Emails
\`\`\`javascript
function searchEmails() {
  var query = 'from:sender@example.com is:unread';
  var threads = GmailApp.search(query, 0, 10);
  
  threads.forEach(function(thread) {
    var messages = thread.getMessages();
    messages.forEach(function(message) {
      console.log('Subject: ' + message.getSubject());
      console.log('Body: ' + message.getPlainBody());
    });
  });
}
\`\`\`

## Email Processing

### Auto-Reply Function
\`\`\`javascript
function autoReply() {
  var label = GmailApp.getUserLabelByName('AutoReply');
  var threads = label.getThreads();
  
  threads.forEach(function(thread) {
    var messages = thread.getMessages();
    var lastMessage = messages[messages.length - 1];
    
    if (!lastMessage.isInInbox()) return;
    
    var replySubject = 'Re: ' + lastMessage.getSubject();
    var replyBody = 'Thank you for your email. We will get back to you soon.';
    
    thread.reply(replyBody);
    thread.removeFromInbox();
    thread.addLabel(GmailApp.getUserLabelByName('Processed'));
  });
}
\`\`\`

> **Note:** Remember to enable Gmail API access in your Apps Script project settings.`
        };

        return samples[path] || `# Tutorial: ${path}

This is a sample tutorial. In a real application, this content would be loaded from actual markdown files.

## Getting Started

This tutorial covers the basics of working with ${path}.

\`\`\`javascript
// Sample code block
function example() {
    console.log('Hello from ${path}');
}
\`\`\`

## Next Steps

Continue exploring the other tutorials available in the sidebar.`;
    }
}

// Global functions for HTML onclick handlers
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('show');
    }
}

// Initialize the application
let markdownBuddy;

// Function to initialize app with error handling
function initializeMarkdownBuddy() {
    try {
        markdownBuddy = new MarkdownBuddy();
    } catch (error) {
        console.error('Failed to create MarkdownBuddy instance:', error);
        // Try to show error in the UI
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = `
                <div class="error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <strong>Initialization Error:</strong> Failed to initialize the application.
                    <p style="margin-top: 10px;">Please refresh the page or restart the application.</p>
                </div>
            `;
        }
    }
}

// Wait for DOM to be ready, then check for Neutralino
document.addEventListener('DOMContentLoaded', () => {
    // Check if Neutralino is available
    if (typeof Neutralino !== 'undefined' && Neutralino.init) {
        // Neutralino is available, initialize normally
        initializeMarkdownBuddy();
    } else {
        // Neutralino not available, wait a bit and try again
        setTimeout(() => {
            if (typeof Neutralino !== 'undefined' && Neutralino.init) {
                initializeMarkdownBuddy();
            } else {
                console.warn('Neutralino not available, running in browser mode');
                // Initialize without Neutralino features
                try {
                    markdownBuddy = new MarkdownBuddy();
                    markdownBuddy.initializeDemoMode();
                } catch (error) {
                    console.error('Failed to initialize demo mode:', error);
                }
            }
        }, 1000);
    }
});

// Also try to initialize when window loads
window.addEventListener('load', () => {
    if (!markdownBuddy) {
        initializeMarkdownBuddy();
    }
});
