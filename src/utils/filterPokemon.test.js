import filterPokemon from "./filterPokemon";
import { mockPokemonsData } from "../mock/pokeData";

describe("Filter Pokemon", () => {
  test("it should return an array", () => {
    expect(filterPokemon()).toEqual(Array.isArray());
  });

  test("it should return an empty array", () => {
    const arrayLength = filterPokemon().length;
    expect(arrayLength).toHaveLength(0);
  });

  test("it should return an array with charizard object", () => {
    expect(filterPokemon()).toEqual(expect.arrayContaining("charizzard"));
  });

  /* BUNUS */
  test("it should validate the 'pokeList' argument", () => {
    /* Your solution comes here */
    expect(false).toBe(true);
  });

  test("it should validate the 'name' argument", () => {
    /* Your solution comes here */
    expect(false).toBe(true);
  });
});
