export interface IPokemonDB {
	id: number,
    name: string,
    Pokedex_Number: number,
    Img_name: string,
    Generation: number,
    Evolution_Stage: string,
    Evolved: number,
    FamilyID: number,
    Cross_Gen: number,
    Type_1: string,
    Type_2: string,
    Weather_1: string,
    Weather_2: string,
    STAT_TOTAL: number,
    ATK: number,
    DEF: number,
    STA: number,
    Legendary: number,
    Aquireable: number,
    Spawns: number,
    Regional: number,
    Raidable: number,
    Hatchable: number,
    Shiny: number,
    Nest: number,
    New: number,
    Not_Gettable: number,
    Future_Evolve: number,
    MAX_CP_LVL_40: number,
    MAX_CP_LVL_39: number
}

export interface IPokemonInputDTO {
    Row: number,
    Name: string,
    'Pokedex Number': number,
    'Img name': string,
    Generation: number,
    'Evolution Stage': string,
    Evolved: number,
    FamilyID: number,
    'Cross Gen': number,
    'Type 1': string,
    'Type 2': string,
    'Weather 1': string,
    'Weather 2': string,
    'STAT TOTAL': number,
    ATK: number,
    DEF: number,
    STA: number,
    Legendary: number,
    Aquireable: number,
    Spawns: number,
    Regional: number,
    Raidable: number,
    Hatchable: number,
    Shiny: number,
    Nest: number,
    New: number,
    'Not-Gettable': number,
    'Future Evolve': number,
    '100% CP @ 40': number,
    '100% CP @ 39': number,
}

export class Pokemon {
    constructor(
        private id: number,
        private name: string,
        private pokedexNumber: number,
        public imgName: string,
        public generation: number,
        public evolutionStage: string,
        public evolved: number,
        public familyID: number,
        public crossGen: number,
        public type1: string,
        public type2: string,
        public weather1: string,
        public weather2: string,
        public statTotal: number,
        public atk: number,
        public def: number,
        public sta: number,
        public legendary: number,
        public aquireable: number,
        public spawns: number,
        public regional: number,
        public raidable: number,
        public hatchable: number,
        public shiny: number,
        public nest: number,
        public New: number,
        public notGettable: number,
        public futureEvolve: number,
        public maxCpLvl40: number,
        public maxCpLvl39: number
    ) {}
    
    public getId = () => {
        return this.id
    }
    
    public getName = () => {
        return this.name
    }

    public getPokedexNumber = () => {
        return this.pokedexNumber
    }
}

export interface IAddProductsInputDTO {
    id: number,
    name: string,
    tags: string[]
}

export interface IGetPokemonInputDTO {
    search: string,
    order: string,
    sort: string,
}

export interface IGetPokemonsOutputDTO {
    pokemons: {
        id: number,
        name: string,
        imgName: string,
        generation: number,
        evolutionStage: string,
        evolved: number,
        familyID: number,
        crossGen: number,
        type1: string,
        type2: string,
        weather1: string,
        weather2: string,
        statTotal: number,
        atk: number,
        def: number,
        sta: number,
        legendary: number,
        aquireable: number,
        spawns: number,
        regional: number,
        raidable: number,
        hatchable: number,
        shiny: number,
        nest: number,
        New: number,
        notGettable: number,
        futureEvolve: number,
        maxCpLvl40: number,
        maxCpLvl39: number
    }[]
}