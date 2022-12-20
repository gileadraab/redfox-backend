import { IGetPokemonInputDTO, IPokemonDB, Pokemon} from "../../src/models/Pokemon"
import { BaseDatabase } from "../../src/database/BaseDatabase"

export class PokemonDatabaseMock extends BaseDatabase {
    public static TABLE_POKEMONS = "Pokemons"

    public insertPokemon = async (pokemon: IPokemonDB): Promise<void> => {}

    public searchById = async (id: number): Promise<IPokemonDB | undefined> =>  {
        if (id == 123456789) {
            return {
                id: 123456789,
                name: "Duplicated Pokemon Mock",
                Pokedex_Number: 123456789,
                Img_name: "Img Mock",
                Generation: 123456789,
                Evolution_Stage: "Evo Mock",
                Evolved: 123456789,
                FamilyID: 123456789,
                Cross_Gen: 123456789,
                Type_1: "Type_1 Mock",
                Type_2: "Type_2 Mock",
                Weather_1: "Weather_1 Mock",
                Weather_2: "Weather_2 Mock",
                STAT_TOTAL: 123456789,
                ATK: 123456789,
                DEF: 123456789,
                STA: 123456789,
                Legendary: 123456789,
                Aquireable: 12345679,
                Spawns: 123456798,
                Regional: 123456789,
                Raidable: 123456789,
                Hatchable: 123456789,
                Shiny: 123456789,
                Nest: 123456789,
                New: 123456789,
                Not_Gettable: 123456789,
                Future_Evolve: 123456789,
                MAX_CP_LVL_40: 123456789,
                MAX_CP_LVL_39: 123456789
            }
        }
    }

    public getPokemons = async (input: IGetPokemonInputDTO): Promise<any> => {
        const search = input.search
        const order = input.order
        const sort = input.sort

        const result: any = await BaseDatabase
            .connection(PokemonDatabaseMock.TABLE_POKEMONS)
            .orderBy(order, sort)
            .where(`name`, `LIKE`, `%${search}%`) 
            .orWhere(`id`, `LIKE`, `%${search}%`) 
            .orWhere(`Generation`, `LIKE`, `%${search}%`)
            .orWhere(`Type_1`, `LIKE`, `%${search}%`)
            .orWhere(`Type_2`, `LIKE`, `%${search}%`)
            
        return result
    }
}