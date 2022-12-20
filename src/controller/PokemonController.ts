import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { BaseError } from "../errors/BaseError";
import { IGetPokemonInputDTO, IPokemonInputDTO } from "../models/Pokemon";
import { convertToJson } from "../conversion/SheetConversor";
import { pokemonsRaw } from "../conversion/SheetConversor";
import * as xlsx from 'xlsx'
import * as path from 'path'


export class PokemonController {
    constructor(
        private pokemonBusiness: PokemonBusiness
    ) {}

    public addPokemon = async (req: Request, res: Response) => {
        const pokemons = convertToJson(pokemonsRaw)

        try {
            const input: IPokemonInputDTO[] = pokemons

            const response = await this.pokemonBusiness.addPokemon(input)
            res.status(201).send(response)

        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public getPokemons = async (req: Request, res: Response) => {
        try {

            const input: IGetPokemonInputDTO = {
                search: req.query.search as string,
                order: req.query.order as string,
                sort: req.query.sort as string,
            }

            const response = await this.pokemonBusiness.getPokemons(input)

            res.status(201).send(response)


        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }
}