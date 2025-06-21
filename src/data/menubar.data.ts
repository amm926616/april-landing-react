const menuBarGroups = [
  {
    heading: "📁 File Menu",
    shortcuts: [
      [
        "Ctrl+Alt+Z",
        "Download Music - Opens Zotify GUI to download from Spotify",
      ],
      ["Ctrl+M", "Manage Music Directories - Add/remove your music folders"],
      ["Ctrl+Q", "Exit - Close the application"],
    ],
  },
  {
    heading: "👁️ Views Menu",
    shortcuts: [
      ["Ctrl+O", "Manage Playlist - Open playlist manager"],
      ["(No shortcut)", "Open Personal Dictionary"],
      ["Ctrl+I ✓", "Enable/Disable Lyrics - Toggle lyrics display"],
      ["Ctrl+L", "Show Lyrics Display - Open lyrics window"],
      ["Ctrl+H ✓", "Hide Main Window - Toggle player visibility"],
      ["Ctrl+K ✓", "Add Album Title Rows - Toggle album headers in list"],
      ["Ctrl+B ✓", "Stay in Background - Keep player running in background"],
    ],
  },
  {
    heading: "⚙️ Settings Menu",
    subsections: [
      {
        title: "🎵 Music Settings",
        shortcuts: [
          ["Ctrl+U ✓", "Play Song at Startup - Auto play when app opens"],
          [
            "Ctrl+Alt+R",
            "Reload Music Library - Refresh music from all folders",
          ],
        ],
      },
      {
        title: "🎤 Lyrics Settings",
        shortcuts: [
          ["(No shortcut)", "Font Settings - Choose lyrics font"],
          ["(No shortcut)", "Lyrics Color - Pick from 10 colors"],
          ["(No shortcut)", "Sync Threshold - Adjust lyrics timing"],
          ["(No shortcut)", "Set Custom Background - Choose background image"],
          ["(No shortcut)", "Set Default Background - Reset background"],
        ],
      },
      {
        title: "🌐 Language Settings",
        shortcuts: [
          ["(No shortcut)", "English - Default"],
          ["(No shortcut)", "Myanmar (Burmese)"],
        ],
      },
    ],
  },
  {
    heading: "❓ Help Menu",
    shortcuts: [
      ["(No shortcut)", "Keyboard Shortcuts - View all keys"],
      ["(No shortcut)", "File Preparation and Tips - Optimize your library"],
      ["(No shortcut)", "About - App information"],
    ],
  },
  {
    heading: "🌟 Key Features",
    shortcuts: [
      ["Multilingual Support", "English (ENG), Myanmar (BUR)"],
      ["Visual Icons", "Icons represent file, music, settings, and more"],
      ["Keyboard Shortcuts", "Most items have keys for quick access"],
      ["Persistent Settings ✓", "Your toggle choices are saved automatically"],
    ],
  },
  {
    heading: "💡 Usage Tips",
    shortcuts: [
      ["First-time Setup", "Use File → Manage Music Directories"],
      ["Lyrics Experience", "Enable & display lyrics via Views menu"],
      ["Customization", "Use Settings → Lyrics Settings to personalize"],
      ["Efficiency", "Master keyboard shortcuts for speed"],
      ["Language", "Switch language anytime in Settings → Language Settings"],
    ],
  },
];

export default menuBarGroups;
