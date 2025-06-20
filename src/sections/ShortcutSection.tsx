import SectionComponent from "../components/global/SectionComponent";
import { motion } from "framer-motion";

type ShortcutSectionProps = {
  id: string;
  className?: string;
};

const shortcutGroups = [
  {
    heading: "📝 Getting Started",
    description:
      "Start by double-clicking on an item in the left layout's tree list:",
    shortcuts: [
      "Double-click an artist name to load all songs by that artist into the playlist.",
      "Double-click an album name to load all songs from that album.",
      "Double-click a single song to add just that song to the playlist.",
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

const ShortcutSection = ({ id, className }: ShortcutSectionProps) => {
  return (
    <SectionComponent id={id} className={`py-20 ${className}`}>
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[var(--crimson)] mb-4">
            Documentation
          </h2>
          <p className="text-gray-400">
            Master these shortcuts to navigate and control the app effortlessly.
          </p>
        </motion.div>

        <div className="space-y-12">
          {shortcutGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 md:p-8 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold text-[var(--crimson)] mb-4">
                {group.heading}
              </h3>

              {group.description && (
                <p className="text-gray-300 mb-4">{group.description}</p>
              )}

              {/* Simple list for flat shortcuts */}
              {"shortcuts" in group &&
              Array.isArray(group.shortcuts) &&
              typeof group.shortcuts[0] === "string" ? (
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  {(group.shortcuts as string[]).map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              ) : null}

              {/* Subsections with key combos */}
              {"subsections" in group &&
                group.subsections?.map((sub, subIndex) => (
                  <div key={subIndex} className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-300 mb-2">
                      {sub.title}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
                      {sub.shortcuts.map(([keys, desc], keyIdx) => (
                        <li
                          key={keyIdx}
                          className="flex justify-between gap-4 border border-gray-700/50 px-4 py-2 rounded-md bg-gray-700/20"
                        >
                          <span className="font-mono text-[var(--crimson)]">
                            {keys}
                          </span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

              {/* Table-style for grouped flat entries */}
              {"shortcuts" in group &&
                Array.isArray(group.shortcuts) &&
                typeof group.shortcuts[0] !== "string" && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
                    {(group.shortcuts as [string, string][]).map(
                      ([keys, desc], index) => (
                        <li
                          key={index}
                          className="flex justify-between gap-4 border border-gray-700/50 px-4 py-2 rounded-md bg-gray-700/20"
                        >
                          <span className="font-mono text-[var(--crimson)]">
                            {keys}
                          </span>
                          <span>{desc}</span>
                        </li>
                      ),
                    )}
                  </ul>
                )}
            </motion.div>
          ))}

          <p className="text-center text-gray-400 text-sm italic">
            Tip: Use these shortcuts to streamline your workflow and enhance
            your music experience!
          </p>
        </div>
      </div>
    </SectionComponent>
  );
};

export default ShortcutSection;
