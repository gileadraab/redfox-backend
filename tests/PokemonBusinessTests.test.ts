import { PokemonBusiness } from "../src/business/PokemonBusiness"
import { BaseError } from "../src/errors/BaseError"
import { PokemonDatabaseMock } from "./mocks/PokemonDatabaseMock"
import { IGetPokemonInputDTO, IGetPokemonsOutputDTO, IPokemonDB, IPokemonInputDTO, Pokemon } from "../src/models/Pokemon"


describe("Testando a PokemonBusiness", () => {
    const pokemonBusiness = new PokemonBusiness(
        new PokemonDatabaseMock()
    )

    test("Deve ser possível adicionar um novo pokemon", async () => {
        const input: IPokemonInputDTO[] = [
            {
                Row: 123456,
                Name: "Pokemon input Mock",
                'Pokedex Number': 123456,
                'Img name': "Img Mock",
                Generation: 123456,
                'Evolution Stage': "Evolution Stage Mock",
                Evolved: 123456,
                FamilyID: 123456,
                'Cross Gen': 123456,
                'Type 1': "Type 1 Mock",
                'Type 2': "Type 2 Mock",
                'Weather 1': "Weather 1 Mock",
                'Weather 2': "Weather 2 Mock",
                'STAT TOTAL': 123456,
                ATK: 123456,
                DEF: 123456,
                STA: 123456,
                Legendary: 123456,
                Aquireable: 123456,
                Spawns: 123456,
                Regional: 123456,
                Raidable: 123456,
                Hatchable: 123456,
                Shiny: 123456,
                Nest: 123456,
                New: 123456,
                'Not-Gettable': 123456,
                'Future Evolve': 123456,
                '100% CP @ 40': 123456,
                '100% CP @ 39': 123456,
            } 
        ]
        const response = await pokemonBusiness.addPokemon(input)

        expect(response.message).toBe("Pokemons adicionados com sucesso")
    })

    test("Erro na adição de pokemon quando já houver um pokemon com a mesma id", async () => {
        expect.assertions(2)

        try {
            const input: IPokemonInputDTO[] = [
                {
                    Row: 123456789,
                    Name: "Pokemon input Mock",
                    'Pokedex Number': 123456,
                    'Img name': "Img Mock",
                    Generation: 123456,
                    'Evolution Stage': "Evolution Stage Mock",
                    Evolved: 123456,
                    FamilyID: 123456,
                    'Cross Gen': 123456,
                    'Type 1': "Type 1 Mock",
                    'Type 2': "Type 2 Mock",
                    'Weather 1': "Weather 1 Mock",
                    'Weather 2': "Weather 2 Mock",
                    'STAT TOTAL': 123456,
                    ATK: 123456,
                    DEF: 123456,
                    STA: 123456,
                    Legendary: 123456,
                    Aquireable: 123456,
                    Spawns: 123456,
                    Regional: 123456,
                    Raidable: 123456,
                    Hatchable: 123456,
                    Shiny: 123456,
                    Nest: 123456,
                    New: 123456,
                    'Not-Gettable': 123456,
                    'Future Evolve': 123456,
                    '100% CP @ 40': 123456,
                    '100% CP @ 39': 123456,
                } 
            ]

            await pokemonBusiness.addPokemon(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(409)
                expect(error.message).toBe(`já há um pokemon cadastrado com a ID 123456789: Duplicated Pokemon Mock`)
            }
        }
    })


    test("Erro no na criação ao tentar inserir um array vazio", async () => {
        expect.assertions(2)

        try {
            const input: IPokemonInputDTO[] = []

            await pokemonBusiness.addPokemon(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'pokemon' inválido: mínimo de 1 item")
            }
        }
    })
    
})
