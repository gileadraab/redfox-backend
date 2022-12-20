import { PokemonDatabase } from "../database/PokemonDatabase"
import { ConflictError } from "../errors/ConflictError"
import { NotFoundError } from "../errors/NotFoundError"
import { ParamsError } from "../errors/ParamsError"
import { IGetPokemonInputDTO, IGetPokemonsOutputDTO, IPokemonDB, IPokemonInputDTO, Pokemon } from "../models/Pokemon"


export class PokemonBusiness {
    constructor(
        private pokemonDatabase: PokemonDatabase,
    ) {}

    public addPokemon = async (pokemons: IPokemonInputDTO[]) => {
        if (pokemons.length < 1) {
            throw new ParamsError("Parâmetro 'pokemon' inválido: mínimo de 1 item")
        }

        for (let pokemon of pokemons){
            const pokemonDB: IPokemonDB = {
                id: pokemon.Row,
                name: pokemon.Name,
                Pokedex_Number: pokemon['Pokedex Number'],
                Img_name: pokemon['Img name'],
                Generation: pokemon.Generation,
                Evolution_Stage: pokemon['Evolution Stage'],
                Evolved: pokemon.Evolved,
                FamilyID: pokemon.FamilyID,
                Cross_Gen: pokemon["Cross Gen"],
                Type_1: pokemon["Type 1"],
                Type_2: pokemon["Type 2"],
                Weather_1: pokemon["Weather 1"],
                Weather_2: pokemon["Weather 2"],
                STAT_TOTAL: pokemon["STAT TOTAL"],
                ATK: pokemon.ATK,
                DEF: pokemon.DEF,
                STA: pokemon.STA,
                Legendary: pokemon.Legendary,
                Aquireable: pokemon.Aquireable,
                Spawns: pokemon.Spawns,
                Regional: pokemon.Regional,
                Raidable: pokemon.Raidable,
                Hatchable: pokemon.Hatchable,
                Shiny: pokemon.Shiny,
                Nest: pokemon.Nest,
                New: pokemon.New,
                Not_Gettable: pokemon["Not-Gettable"],
                Future_Evolve: pokemon["Future Evolve"],
                MAX_CP_LVL_40: pokemon["100% CP @ 40"],
                MAX_CP_LVL_39: pokemon["100% CP @ 39"]
            }

            const isPokemonAlreadyRegistered: IPokemonDB | undefined = await this.pokemonDatabase.searchById(pokemonDB.id)
            

            if (isPokemonAlreadyRegistered) {
                
                throw new ConflictError(`já há um pokemon cadastrado com a ID ${isPokemonAlreadyRegistered.id}: ${isPokemonAlreadyRegistered.name}`)
            }

            await this.pokemonDatabase.insertPokemon(pokemonDB)
        }


        const response = {
            message: "Pokemons adicionados com sucesso",
        }

        return response
    }

    public getPokemons = async (input: IGetPokemonInputDTO): Promise<IGetPokemonsOutputDTO> => {
        const search = input.search || ""
        const order = input.order || "id"
        const sort = input.sort || "ASC"


        const getPokemonsInputDB: IGetPokemonInputDTO = {
            search,
            order,
            sort
        }
 
        const rawPokemons: IPokemonDB[] = await this.pokemonDatabase.getPokemons(getPokemonsInputDB)

        const pokemons: Pokemon[] = []

        for (let rawPokemon of rawPokemons) {
            const pokemon = new Pokemon (
                rawPokemon.id,
                rawPokemon.name,
                rawPokemon.Pokedex_Number,
                rawPokemon.Img_name,
                rawPokemon.Generation,
                rawPokemon.Evolution_Stage,
                rawPokemon.Evolved,
                rawPokemon.FamilyID,
                rawPokemon.Cross_Gen,
                rawPokemon.Type_1,
                rawPokemon.Type_2,
                rawPokemon.Weather_1,
                rawPokemon.Weather_2,
                rawPokemon.STAT_TOTAL,
                rawPokemon.ATK,
                rawPokemon.DEF,
                rawPokemon.STA,
                rawPokemon.Legendary,
                rawPokemon.Aquireable,
                rawPokemon.Spawns,
                rawPokemon.Regional,
                rawPokemon.Raidable,
                rawPokemon.Hatchable,
                rawPokemon.Shiny,
                rawPokemon.Nest,
                rawPokemon.New,
                rawPokemon.Not_Gettable,
                rawPokemon.Future_Evolve,
                rawPokemon.MAX_CP_LVL_40,
                rawPokemon.MAX_CP_LVL_39,
            )
            pokemons.push(pokemon)   
        }

        const response: IGetPokemonsOutputDTO = {
            pokemons: pokemons.map((pokemon) => ({
                id: pokemon.getId(),
                name: pokemon.getName(),
                pokedexNumber: pokemon.getPokedexNumber(),
                imgName: pokemon.imgName,
                generation: pokemon.generation,
                evolutionStage: pokemon.evolutionStage,
                evolved: pokemon.evolved,
                familyID: pokemon.familyID,
                crossGen: pokemon.crossGen,
                type1: pokemon.type1,
                type2: pokemon.type2,
                weather1: pokemon.weather1,
                weather2: pokemon.weather2,
                statTotal: pokemon.statTotal,
                atk: pokemon.atk,
                def: pokemon.def,
                sta: pokemon.sta,
                legendary: pokemon.legendary,
                aquireable: pokemon.aquireable,
                spawns: pokemon.spawns,
                regional: pokemon.regional,
                raidable: pokemon.raidable,
                hatchable: pokemon.hatchable,
                shiny: pokemon.shiny,
                nest: pokemon.nest,
                New: pokemon.New,
                notGettable: pokemon.notGettable,
                futureEvolve: pokemon.futureEvolve,
                maxCpLvl40: pokemon.maxCpLvl40,
                maxCpLvl39: pokemon.maxCpLvl39
            }))
        }

        if (response.pokemons.length <= 0){
            throw new NotFoundError("Nenhum pokemon encontrado")
        }

        return response
        
    }

}