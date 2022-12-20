import { BaseDatabase } from "../BaseDatabase"
import { PokemonDatabase } from "../PokemonDatabase"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${PokemonDatabase.TABLE_POKEMONS};


        CREATE TABLE IF NOT EXISTS ${PokemonDatabase.TABLE_POKEMONS} (
            id SMALLINT PRIMARY KEY,
            name VARCHAR(255),
            Pokedex_Number SMALLINT ,
            Img_name VARCHAR(255),
            Generation SMALLINT,
            Evolution_Stage VARCHAR(255),
            Evolved SMALLINT,
            FamilyID SMALLINT,
            Cross_Gen SMALLINT,
            Type_1 VARCHAR(255),
            Type_2 VARCHAR(255),
            Weather_1 VARCHAR(255),
            Weather_2 VARCHAR(255),
            STAT_TOTAL SMALLINT,
            ATK SMALLINT,
            DEF SMALLINT,
            STA SMALLINT,
            Legendary SMALLINT,
            Aquireable SMALLINT,
            Spawns SMALLINT,
            Regional SMALLINT,
            Raidable SMALLINT,
            Hatchable SMALLINT,
            Shiny SMALLINT,
            Nest SMALLINT,
            New SMALLINT,
            Not_Gettable SMALLINT,
            Future_Evolve SMALLINT,
            MAX_CP_LVL_40 INT,
            MAX_CP_LVL_39 INT
        );

        `)
    }
}

const migrations = new Migrations()
migrations.execute()