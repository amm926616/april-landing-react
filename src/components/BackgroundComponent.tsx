import { motion } from "framer-motion";

export const BackgroundComponent = () => {
    return (

        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Main gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d12] via-[#1a1a24] to-[#000000]" />

            {/* Pulsing red circles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-[#e63946]/10"
                    style={{
                        width: `${100 + i * 100}px`,
                        height: `${100 + i * 100}px`,
                        left: `${10 + i * 15}%`,
                        top: `${20 + i * 10}%`,
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 10 + i * 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Music note particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={`note-${i}`}
                    className="absolute text-[#e63946]/20 text-2xl"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        rotate: Math.random() * 360,
                    }}
                    animate={{
                        y: [0, (Math.random() - 0.5) * 100],
                        x: [0, (Math.random() - 0.5) * 50],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 10 + Math.random() * 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                >
                    ♫
                </motion.div>
            ))}

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        </div>

    )
}