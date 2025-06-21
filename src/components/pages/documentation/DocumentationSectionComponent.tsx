import { motion } from "framer-motion";
import SectionComponent from "../../global/SectionComponent";
import { DocumentationType } from "../../../types/documentations.type";

export default function DocumentationSectionComponent({
  id,
  className,
  title,
  description,
  footer,
  groups,
}: DocumentationType) {
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
            {title}
          </h2>
          <p className="text-gray-400">{description}</p>
        </motion.div>

        <div className="space-y-12">
          {groups.map((group, idx) => (
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
                  {(group.shortcuts as string[][]).map((tip, i) => (
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

          <p className="text-center text-gray-400 text-sm italic">{footer}</p>
        </div>
      </div>
    </SectionComponent>
  );
}
