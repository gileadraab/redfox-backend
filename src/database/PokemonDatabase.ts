import { IGetPokemonInputDTO, IPokemonDB, Pokemon} from "../models/Pokemon"
import { BaseDatabase } from "./BaseDatabase"

export class PokemonDatabase extends BaseDatabase {
    public static TABLE_POKEMONS = "Pokemons"

    public insertPokemon = async (pokemon: IPokemonDB): Promise<void> => {
        console.log(`Adicionando Pokemon: ${pokemon.id} - ${pokemon.name}...`)
        await BaseDatabase
            .connection(PokemonDatabase.TABLE_POKEMONS)
            .insert(pokemon)
            console.log(`Pokemon adicionado com sucesso.`)
    }

    public searchById = async (id: number): Promise<IPokemonDB | undefined> =>  {
        const pokemonDB: IPokemonDB[] = await BaseDatabase
            .connection(PokemonDatabase.TABLE_POKEMONS)
            .select()
            .where({ id: id })

        return pokemonDB[0]
    }

    public getPokemons = async (input: IGetPokemonInputDTO): Promise<IPokemonDB[]> => {
        const search = input.search
        const order = input.order
        const sort = input.sort

        const result: IPokemonDB[] = await BaseDatabase
            .connection(PokemonDatabase.TABLE_POKEMONS)
            .orderBy(order, sort)
            .where(`name`, `LIKE`, `%${search}%`) 
            .orWhere(`id`, `LIKE`, `%${search}%`) 
            .orWhere(`Generation`, `LIKE`, `%${search}%`)
            .orWhere(`Type_1`, `LIKE`, `%${search}%`)
            .orWhere(`Type_2`, `LIKE`, `%${search}%`)
 
        return result
    }
}