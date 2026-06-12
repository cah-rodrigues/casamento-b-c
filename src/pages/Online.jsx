import Countdown from "../components/Countdown";

function Online() {
    return (
        <div className="max-w-2xl mx-auto px-6 py-8">

            {/* Cabeçalho */}
            <div className="text-center">

                <h1 className="text-2xl md:text-5xl font-serif text-[#55613c]">
                    Vamos celebrar juntos,
                    <br />
                    mesmo à distância!
                </h1>

                <p className="mt-4 text-[#5c4b43] leading-8">
                    Ficaremos muito felizes em compartilhar
                    <br />
                     esse momento com você.
                </p>

            </div>

            {/*Card data e horário */}
            <div className="text-center bg-[#55613c] text-white rounded-2xl p-5 max-w-xs mx-auto mt-12">
                
                <p className="mb-4">
                    03 de janeiro de 2027
                </p>
                
                <p>
                    16:00 (horário de MS)
                </p>

            </div>

            {/*Countdown */}
            <div className="mt-8">

                <Countdown />

            </div>

            {/*Botão */}
            <div className="text-center mt-10">

                <button className="bg-[#55613c] text-white px-8 py-4 rounded-xl shadow-lg hover:opacity-80 transition">
                    Entrar na Transmissão
                </button>

            </div>

            {/* Aviso */}
            <div className="bg-[#efe6df] rounded-2xl p-5 text-center max-w-sm mx-auto mt-6">

                <p className="text-[#5c4b43]">
                    Assim que a transmissão começar,
                    <br />
                     o botão será liberado.
                </p>

            </div>

            {/* Cards Inferiores */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">

                <div className="text-center">

                    <div className="text-3xl mb-3">
                         🤍
                    </div>

                    <p className="text-[#5c4b43] leading-6">
                        Prepare seu look, seu coração e seu melhor sorriso!
                    </p>

                </div>

                <div className="text-center">

                    <div className="text-3xl mb-3">
                         📷
                    </div>

                    <p className="text-[#5c4b43] leading-6">
                        Tire fotos e compartilhe
                        com a gente usando a hashtag
                        #BrenoECarla
                    </p>

                </div>

                <div className="text-center">
        
                    <div className="text-3xl mb-3">
                         💬
                    </div>

                    <p className="text-[#5c4b43] leading-6">
                        Durante a transmissão,
                        você poderá enviar
                        mensagens no chat!
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Online;