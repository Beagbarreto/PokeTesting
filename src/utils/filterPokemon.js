export default function filterPokemon(pokeList, name) {
  if (name === "") return [];
  return (
    Array.isArray(pokeList) &&
    pokeList.filter((pokemon) => {
      return pokemon.name.includes(name);
    })
  );
}

// Create two more tests to validate the input values passed to the filter function, the scenarios are the following:

// 1. The `pokeList` argument is `null`, `undefined` or not an `array`.
// 2. The `name` argument is `null`, `undefined` or not a `string`.
