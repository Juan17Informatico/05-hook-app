import { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ width, height });
    }, []);

    return (
        <>
            <section style={{ height: 200 }}>
                <h2 className="text-capitalize">
                    #{id} - {name}
                </h2>

                {/* Imagenes */}
                <div ref={pRef}>
                    {sprites.map((sprite) => (
                        <img key={sprite} src={sprite} alt={name} />
                    ))}
                </div>
            </section>

            <code>{JSON.stringify(boxSize)}</code>
        </>
    );
};
