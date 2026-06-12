import { useState } from "react";

function Presencial() {
    const [acessoLiberado, setAcessoLiberado] = useState(false);
    const [senha, setSenha] = useState("");

    return (
        <div className="max-w-4xl mx-auto px-6 py-20">

            {acessoLiberado ? (
               <div className="max-w-3xl mx-auto">

                    <h1 className="text-5xl font-serif text-[#55613c] text-center mb-12">
                        Informações da Cerimônia
                    </h1>

                    <div className="space-y-8">

                        <div className="bg-white rounded-3xl p-8 shadow-md text-[#5c4b43]">
                            <h2 className="text-2xl font-serif mb-2">
                                Data
                            </h2>

                            <p>
                                03 de Janeiro de 2027 às 10:30 am
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-md text-[#5c4b43]">
                            <h2 className="text-2xl font-serif mb-4">
                                Local
                            </h2>

                            <p className="mb-2">
                                Salão do Reino das Testemunhas de Jeová
                            </p>

                            <p className="mb-6">
                                R. Antônio Lucio, S/N <br />
                                Lt.19 e 20 <br />
                                Parque dos Diamantes <br />
                                Rochedo, MS <br />
                            </p>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3750.2739536690597!2d-54.88959592477214!3d-19.95497798143905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDU3JzE3LjkiUyA1NMKwNTMnMTMuMyJX!5e0!3m2!1spt-BR!2sbr!4v1780957037253!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                className="rounded-2xl shadow-md"
                            ></iframe>

                            <div className="mt-6">

                                <a href="https://maps.app.goo.gl/xz9fCqMeYh9eLVNZ7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#55613c] text-white px-8 py-4 rounded-xl shadow-lg hover:opacity-80 transition">
                                    Como Chegar
                                </a>
                            </div>

                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-md text-[#5c4b43]">
                            <h2 className="text-2xl font-serif mb-2">
                                Estacionamento
                            </h2>

                            <p>
                                Haverá estacionamento disponível no local.
                            </p>
                        </div>

                    </div>

                    </div>
                    ) : (
                        <div className="max-w-md mx-auto text-center">
                            <h1 className="text-4xl font-serif text-[#55613c] mb-6">
                                Informações para convidados presenciais
                            </h1>

                            <p>
                                Digite a senha do convite para acessar.
                            </p>

                            <input 
                                type="password"
                                placeholder="Digite a senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                className="w-full border border-[#d9d1cb] rounded-xl px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[#55613c]"
                            />

                            <button
                                 className="bg-[#55613c] text-white px-8 py-4 rounded-xl shadow-lg hover:opacity-80 transition"
                                onClick={() => {
                                    if (senha === "brenoecarla") {
                                        setAcessoLiberado(true);
                                    }
                                }}
                            >
                                Acessar
                            </button>

                        </div>
            )}

        </div>
    );
}

export default Presencial;