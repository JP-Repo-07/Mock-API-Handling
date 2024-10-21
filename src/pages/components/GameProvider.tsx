function GameProvider({ handleProviderClick }: {handleProviderClick: any}){
    return (
        <div className="fixed bottom-0 left-0 w-full h-1/2 bg-white z-10 shadow-md">
        <div className="bg-blue-500 text-white p-2">
            Game Providers
        </div>
        <div className="flex flex-wrap justify-between p-3 gap-5">
            <button onClick={() => handleProviderClick("Pragmatic Play")} className="border bg-blue-700 rounded-[10px] text-white p-2">Pragmatic Play</button>
            <button onClick={() => handleProviderClick("Expanse")} className="border bg-blue-700 rounded-[10px] text-white p-2">Expanse</button>
            <button onClick={() => handleProviderClick("PlayTech")} className="border bg-blue-700 rounded-[10px] text-white p-2">PlayTech</button>
            <button onClick={() => handleProviderClick("GameArt")} className="border bg-blue-700 rounded-[10px] text-white p-2">GameArt</button>
            <button onClick={() => handleProviderClick("Skywind Group")} className="border bg-blue-700 rounded-[10px] text-white p-2">Skywind Group</button>
            <button onClick={() => handleProviderClick("Every Matrix")} className="border bg-blue-700 rounded-[10px] text-white p-2">Every Matrix</button>
            <button onClick={() => handleProviderClick("")} className="border bg-blue-700 rounded-[10px] text-white p-2">Clear</button>
        </div>
    </div>
    )
}

export default GameProvider