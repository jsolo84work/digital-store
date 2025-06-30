import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import fireIcon from '../assets/fire.png';
import dotsImage from '../assets/dots.png';
import sneakerImage1 from '../assets/nike_air.png';
import sneakerImage2 from '../assets/nike-dunksbhi.png';
import sneakerImage3 from '../assets/nike-air-max.png';
import sneakerImage4 from '../assets/kswiss-cr-terrati.png';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    const slides = [
        {
            title: 'Queima de Estoque Nike',
            description: 'Descontos imperdíveis em tênis Nike para você renovar seu estilo.',
            image: sneakerImage1,
        },
        {
            title: 'Novidades Adidas',
            description: 'Conheça os lançamentos mais estilosos da Adidas.',
            image: sneakerImage2,
        },
        {
            title: 'Tênis em Alta',
            description: 'Os modelos mais procurados com descontos especiais.',
            image: sneakerImage3,
        },
        {
            title: 'Promoção Relâmpago',
            description: 'Só hoje: até 60% off em diversas marcas!',
            image: sneakerImage4,
        },
    ];

    const nextSlide = useCallback(() => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1))
    }, [slides.length])

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [nextSlide])

    const goToProducts = () => {
        navigate("/produtos")
        window.scrollTo(0, 0)
    }

    const handleSlideSelect = (index) => {
        setCurrentSlide(index)
    }

    const current = slides[currentSlide]

    return (
        <section
            className="relative overflow-hidden py-3 px-4 md:px-8 lg:px-16 bg-[#f0f0f0]"
            aria-label="Hero section with product carousel"
        >
            {/* Background blur effect */}
            <div
                className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 
            w-[400px] h-[600px] md:w-[500px] md:h-[600px] 
            bg-gradient-to-t from-[#f0f0f0] to-white blur-2xl z-0"
                aria-hidden="true"
            ></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[500px_auto] items-center gap-10 max-w-7xl mx-auto min-h-[400px]">
                {/* Content section */}
                <div className="text-center lg:text-left max-w-[900px] mx-auto lg:mx-0 transition-all duration-300">
                    <p className="text-yellow-500 text-sm font-semibold mb-2">Melhores ofertas personalizadas:</p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 leading-snug mb-6">
                        {current.title.includes("Nike") ? (
                            <>
                                Queima de Estoque{" "}
                                <span className="inline-flex items-center gap-2">
                                    Nike
                                    <img
                                        src={fireIcon || "/placeholder.svg"}
                                        alt="Ícone de fogo"
                                        className="w-16 h-16 md:w-20 md:h-20 inline-block"
                                        onError={(e) => {
                                            e.currentTarget.style.display = "none"
                                        }}
                                    />
                                </span>
                            </>
                        ) : (
                            current.title
                        )}
                    </h1>

                    <p className="text-gray-600 text-sm md:text-base font-normal mb-6 max-w-xl mx-auto lg:mx-0">
                        {current.description}
                    </p>

                    <button
                        onClick={goToProducts}
                        className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                        aria-label="Ver ofertas de produtos"
                    >
                        Ver Ofertas
                    </button>
                </div>

                {/* Image section */}
                <div className="relative flex justify-center lg:justify-end items-center w-full">
                    <img
                        src={current.image || "/placeholder.svg"}
                        alt={`Imagem do produto: ${current.title}`}
                        className="w-full object-contain drop-shadow-xl transition-all duration-300"
                        onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg?height=400&width=400"
                        }}
                    />

                    <img
                        src={dotsImage || "/placeholder.svg"}
                        alt=""
                        className="hidden md:block absolute right-[-40px] top-[10%] w-[140px] h-[140px] pointer-events-none"
                        aria-hidden="true"
                        onError={(e) => {
                            e.currentTarget.style.display = "none"
                        }}
                    />
                </div>
            </div>

            {/* Slide indicators */}
            <div className="relative z-10 flex justify-center mt-6 gap-2" role="tablist" aria-label="Slides do carrossel">
                {slides.map((slide, index) => (
                    <button
                        key={index}
                        onClick={() => handleSlideSelect(index)}
                        aria-label={`Selecionar slide ${index + 1}: ${slide.title}`}
                        aria-selected={index === currentSlide}
                        role="tab"
                        className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${index === currentSlide ? "bg-pink-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </section>
    )
}

export default Hero