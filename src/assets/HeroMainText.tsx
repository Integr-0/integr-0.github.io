import { useEffect, useState } from "react";

function HeroMainText() {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => setFlipped(f => !f), 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <FlipText
                front="Integr"
                back="Erik"
                flipped={flipped}
            />
        </>
    )
}


function FlipText({ front, back, flipped }: { front: string, back: string, flipped: boolean }) {
    return (
        <span className={`flip-container ${flipped ? "flipped" : ""}`}>
            <span className="flip-front">
                <h1 className="text-5xl font-bold main-shadow">{front}</h1>
                <h1 className="text-5xl font-bold main-shadow-before">{front}</h1>
            </span>
            <span className="flip-back">
                <h1 className="text-5xl font-bold main-shadow">{back}</h1>
                <h1 className="text-5xl font-bold main-shadow-before">{back}</h1>
            </span>
        </span>
);
}

export default HeroMainText;