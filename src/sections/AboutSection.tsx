import april_icon from "../assets/images/april-icon.png";
import SectionComponent from "../components/global/SectionComponent";

interface AboutSectionProps {
  id: string;
  className?: string;
}

const AboutSection = ({ id, className }: AboutSectionProps) => {
  return (
    <SectionComponent
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
            <img
              src={april_icon}
              alt="April Music Player interface showing lyrics and learning features"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white text-lg font-medium">
                April Music Player in action
              </p>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 mb-4">
                About April Music Player
              </h2>
              <p className="text-xl text-gray-300">
                April is an interactive music player designed to transform how
                you learn languages through music. With synchronized lyrics,
                vocabulary tools, and learning features, it turns your favorite
                songs into powerful language lessons.
              </p>
            </div>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors">
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Language Learning Focused
                  </h3>
                  <p className="text-gray-400">
                    Real-time lyric translations, pronunciation guides, and
                    vocabulary tracking specifically designed for language
                    learners.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors">
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Interactive Lyrics
                  </h3>
                  <p className="text-gray-400">
                    Synchronized lyrics that highlight in real-time with
                    built-in note-taking and vocabulary saving capabilities.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors">
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Personalized Learning
                  </h3>
                  <p className="text-gray-400">
                    Create custom learning paths, track your progress, and
                    review saved vocabulary with spaced repetition techniques.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-gray-400 italic">
                "Born from my own journey learning Korean through music, April
                is now shared with all language learners who want to make music
                their classroom."
              </p>
              <p className="text-red-400 font-medium mt-2">
                — Aiden, Creator of April
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionComponent>
  );
};

export default AboutSection;
