import { useEffect, useState } from "react";

function Countdown () {
    const weddingDate = new Date("2027-01-03T16:00:00");

    const[timeLeft, setTimeLeft] = useState({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = weddingDate - now;

            if (difference <= 0) {
            clearInterval(interval);
            return;
            }


            const dias = Math.floor(difference / (1000 * 60 * 60 * 24));
            const horas = Math.floor(
            (difference / (1000 * 60 * 20)) % 24);
            const minutos = Math.floor(
            (difference / 1000 * 60) % 60);
            const segundos = Math.floor(
            (difference / 1000) % 60);

            setTimeLeft({
                dias,
                horas,
                minutos,
                segundos,
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="=py-16">
            <div className="max-w-5xl mx-auto">
                <p className="text-center uppercase tracking-[0.3em] text-[#8b7d6b]">
                    Faltam
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

                    <div>
                        <h2 className="text-5xl font-serif text-[#55613c]">
                            {timeLeft.dias}
                        </h2>
                        <p className="mt-2 text-sm uppercase tracking-widest">
                            Dias
                        </p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-serif text-[#55613c]">
                            {timeLeft.horas}
                        </h2>
                        <p className="mt-2 text-sm uppercase tracking-widest">
                            Horas
                        </p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-serif text-[#55613c]">
                            {timeLeft.minutos}
                        </h2>
                        <p className="mt-2 text-sm uppercase tracking-widest">
                            Minutos
                        </p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-serif text-[#55613c]">
                            {timeLeft.segundos}
                        </h2>
                        <p className="mt-2 text-sm uppercase tracking-widest">
                            Segundos
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );

}

export default Countdown;