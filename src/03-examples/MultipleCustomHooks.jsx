import { useFetch } from "../hooks/";
import { useCounter } from "../hooks/useCounter";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {

    const { counter, decrement, increment } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);
    
    console.log(data?.sprites.back_default);
    
    return (
        <>
            <h1>Información de Pokémon</h1>
            <hr />
            { 
                isLoading 
                ? <LoadingMessage /> 
                : (
                    <PokemonCard 
                        id={counter} 
                        name={data.name} 
                        sprites={[
                            data.sprites.front_default,
                            data.sprites.front_shiny,
                            data.sprites.back_default,
                            data.sprites.back_shiny
                        ]} 
                    />
                )
            }
            <h2>{data?.name}</h2>

            <button 
                onClick={ () => counter > 1 ? decrement() : null}
                className="btn btn-primary mt-2"
            >
                Anteriores
            </button>
            <button
                onClick={() => increment(6)}
                className="btn btn-secundary mt-2"
            >
                Siguientes
            </button>

        </>
    );
};
