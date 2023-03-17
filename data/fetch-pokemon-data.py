from requests import get
import json

def main():
    pokemon_data = fetch_pokemon_data()
    store_as_json_file(pokemon_data)

def fetch_pokemon_data():
    pokemon_data = []
    for i in range(1, 387):
        response = get(f"https://pokeapi.co/api/v2/pokemon/{i}/")

        if response.status_code != 200:
            print(f"Unexpected status code: {response.status_code}")
            break

        pokemon_data.append(response.json())

    return pokemon_data

def store_as_json_file(pokemon_data):
    with open("pokemon_data.json", "w") as file:
        json.dump(pokemon_data, file, indent=4)

if __name__ == "__main__":
    main()