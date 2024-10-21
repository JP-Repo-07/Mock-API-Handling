import { Key } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function GameCard({ filteredGames, handleStarClick }: {filteredGames: any, handleStarClick: any}){
    return(
        <div className="flex flex-wrap">


        {filteredGames?.length === 0 ?
            <div className="w-full h-full flex justify-center items-center">
                No Games Found
            </div>
            :
            filteredGames?.map((data: { id: Key; isFavorite: any; img: string; }) => (
                <div key={data?.id} className="w-auto flex flex-wrap p-1">
                    <div className="relative">
                        <div className="absolute right-1 top-0.5">
                            <button className="size-5 flex justify-center items-center" onClick={() => handleStarClick(data?.id)}>{data?.isFavorite ? <FaStar className="w-full h-full" color="yellow" /> : <CiStar className="w-full h-full" color="black" />}</button>
                        </div>
                        <img className="gap-4" src={data?.img} alt={`img${data?.id}`} />
                    </div>
                </div>
            ))}
                    </div>
    )
}

export default GameCard