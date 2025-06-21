const shortcutGroups = [
  {
    heading: "📝 Getting Started",
    description:
      "Start by double-clicking on an item in the left layout's tree list:",
    shortcuts: [
      [
        "Double-click an artist name to load all songs by that artist into the playlist.",
      ],
      ["Double-click an album name to load all songs from that album."],
      ["Double-click a single song to add just that song to the playlist."],
    ],
  },
  {
    heading: "🔗 General (Main UI & Playlist)",
    subsections: [
      {
        title: "Playback Control",
        shortcuts: [
          ["Space", "Play/Pause"],
          ["Ctrl + Shift + →", "Play next song"],
          ["→ / ←", "Seek forward / backward"],
          ["0 / Home", "Return to start of song"],
          ["Ctrl + P", "Stop song"],
          ["Shift + Alt + R", "Restart current song"],
          ["Ctrl + Alt + R", "Reload directories (update database)"],
        ],
      },
      {
        title: "Navigation & Playlist",
        shortcuts: [
          ["Ctrl + R", "Play random song"],
          ["Ctrl + T", "Play song at top of playlist"],
          ["Ctrl + G", "Scroll to currently playing row"],
          ["Enter", "Play selected song (when playlist focused)"],
          ["Del", "Remove selected song(s) from playlist"],
          ["Ctrl + C", "Copy file path of selected song"],
          ["Ctrl + D", "Restore table (reset filters)"],
        ],
      },
      {
        title: "Search & Focus",
        shortcuts: [
          ["Ctrl + F", "Focus playlist search bar"],
          ["Ctrl + Shift + F", "Focus main search bar"],
          ["Ctrl + J", "Focus playlist (without search)"],
        ],
      },
      {
        title: "Lyrics & Metadata",
        shortcuts: [
          ["Ctrl + L", "Activate LRC display"],
          ["Ctrl + I", "Toggle lyrics sync on/off"],
          ["F2", "Edit selected song’s metadata"],
        ],
      },
      {
        title: "Playback Modes",
        shortcuts: [
          ["Ctrl + 1", "Toggle playlist loop"],
          ["Ctrl + 2", "Toggle repeat (current song)"],
          ["Ctrl + 3", "Toggle shuffle"],
        ],
      },
      {
        title: "UI & Actions",
        shortcuts: [
          ["F11", "Toggle fullscreen"],
          ["Ctrl + S", "Save playlist"],
          ["Ctrl + Q", "Quit application"],
          ["Esc", "Close active dialog/sub-window"],
        ],
      },
    ],
  },
  {
    heading: "📜 Lyrics (LRC) View",
    subsections: [
      {
        title: "Playback & Navigation",
        shortcuts: [
          ["Space", "Play/Pause"],
          ["← / →", "Seek backward / forward"],
          ["D", "Jump to start of current lyric"],
          ["↑ / ↓", "Previous/next lyric line (if interactive)"],
          ["R", "Restart song"],
        ],
      },
      {
        title: "Tools & UI",
        shortcuts: [
          ["F", "Toggle fullscreen"],
          ["Ctrl + D", "Open dictionary"],
          ["E", "Open lyrics notebook"],
          ["Ctrl + C", "Copy current lyric text"],
          ["Ctrl + Y", "Create lyrics animation"],
        ],
      },
    ],
  },
  {
    heading: "📔 Lyrics Notebook",
    shortcuts: [
      ["Ctrl + S", "Save text"],
      ["Esc / Ctrl + W", "Close without saving"],
    ],
  },
  {
    heading: "📚 Personal Dictionary",
    shortcuts: [
      ["Ctrl + S", "Search word"],
      ["Ctrl + Q", "Delete selected entry"],
      ["Enter (in word box)", "Search"],
      ["Enter (in meaning box)", "Save new entry"],
      ["Esc / Ctrl + W", "Close window"],
    ],
  },
];

export default shortcutGroups;
