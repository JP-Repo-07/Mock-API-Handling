import { data } from "../../data/Data";
import CarouselComponent from "../components/CarouselComponent";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import GameProvider from "../components/GameProvider";
import GameCard from "../components/GameCard";

type GameItem = {
	id: number;
	name: string;
	provider: string;
	img: string;
	isFavorite: boolean;
	category: string;
}

function Home() {

	const [gamesData, setGamesData] = useState<GameItem[]>()
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('');
	const [selectedProviders, setSelectedProviders] = useState('');
	const [hideSearch, setHideSearch] = useState(true)
	const [toggleProviders, setToggleProviders] = useState(true)
	const [toggleFavorites, setToggleFavorites] = useState(false)

	const handleSearch = (e: any) => {
		setSearchTerm(e.target.value)
	}

	const handleFavorites = () => {
		setToggleFavorites(!toggleFavorites)
	}

	const handleCategoryClick = (category: string) => {
		setSelectedCategory(category);
	};

	const handleProviderClick = (provider: string) => {
		setSelectedProviders(provider)
		toggleProvidersComponent()
	};

	const hideSearchBar = () => {
		setHideSearch(!hideSearch)
	}
	const toggleProvidersComponent = () => {
		setToggleProviders(!toggleProviders)
	}

	useEffect(() => {
		const fetchData = (): Promise<GameItem[]> => {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve(data);
				}, 5000);
			});
		};

		fetchData().then(fetchedData => {
			setGamesData(fetchedData);
		});
	}, [])

	const handleStarClick = (id: number) => {
		const updatedGames = gamesData?.map(game =>
			game.id === id ? { ...game, isFavorite: !game.isFavorite } : game
		);
		setGamesData(updatedGames);
	};

	const filteredGames = gamesData?.filter(game => {
		const matchesSearchTerm = game.name.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesFavoriteFilter = toggleFavorites ? game.isFavorite : true;

		// Add your category filtering logic here
		const matchesCategory = selectedCategory
			? game.category === selectedCategory
			: true;

		const matchesProvider = selectedProviders.length > 0
			? game.provider === selectedProviders
			: true;

		return matchesFavoriteFilter && matchesProvider && matchesSearchTerm && matchesCategory;
	});


	const slides = [
		"https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg",
		"https://static.bandainamcoent.eu/high/dark-souls/dark-souls-3/00-page-setup/ds3_game-thumbnail.jpg ",
		"https://i.ytimg.com/vi/rfI-cruH5cc/maxresdefault.jpg",
		"https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg",
	]

	return (
		<div className="App absolute">
			{toggleProviders ? ""
				:
				<GameProvider handleProviderClick={handleProviderClick} />
			}
			<div className="sm:w-full p-2 m-auto bg-color-gray">
				<CarouselComponent slides={slides} />
			</div>
			<div className="flex justify-between px-3">
				<button onClick={hideSearchBar}>
					Search
				</button>
				<div>|</div>
				<button onClick={() => handleCategoryClick("")}>Start</button>
				<button onClick={() => handleCategoryClick("New")}>New</button>
				<button onClick={() => handleCategoryClick("Slots")}>Slots</button>
				<button onClick={() => handleCategoryClick("Live")}>Live</button>
				<button onClick={() => handleCategoryClick("Jackpots")}>Jackpots</button>
			</div>
			<div className="flex p-2">
				{
					hideSearch ? ""
						:
						<SearchBar searchTerm={searchTerm} handleSearch={handleSearch} toggleProvidersComponent={toggleProvidersComponent} handleFavorites={handleFavorites} />
				}
			</div>
				<GameCard filteredGames={filteredGames} handleStarClick={handleStarClick} />
		</div>
	);
}

export default Home;