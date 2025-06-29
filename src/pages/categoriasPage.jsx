import { useNavigate } from 'react-router-dom';

const categorias = [
    {
        nome: 'Camisetas',
        imagem: 'https://cdn.pixabay.com/photo/2016/11/29/10/19/shirt-1868979_1280.jpg',
    },
    {
        nome: 'Calças',
        imagem: 'https://cdn.pixabay.com/photo/2014/08/26/21/49/jeans-428614_1280.jpg',
    },
    {
        nome: 'Bonés',
        imagem: 'https://cdn.pixabay.com/photo/2021/06/18/10/30/cap-6345767_1280.jpg',
    },
    {
        nome: 'Tênis',
        imagem: 'https://cdn.pixabay.com/photo/2015/09/13/16/48/shoes-938432_1280.jpg',
    },
    {
        nome: 'Headphones',
        imagem: 'https://cdn.pixabay.com/photo/2018/09/07/23/58/headphone-3661771_960_720.jpg',
    },
];

const CategoriasPage = () => {
    const navigate = useNavigate();

    const handleClick = (categoria) => {
        navigate(`/produtos?categoria=${encodeURIComponent(categoria)}`);
    };

    return (
        <div className="min-h-screen bg-purple-100 py-16 px-4 sm:px-6 md:px-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-pink-600 mb-2 tracking-wide">
                Categorias:
            </h1>
            <div className="h-1 w-24 bg-pink-600 mx-auto rounded-full mb-12"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {categorias.map((cat) => (
                    <div
                        key={cat.nome}
                        onClick={() => handleClick(cat.nome)}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105 overflow-hidden flex flex-col"
                    >
                        <img
                            src={cat.imagem}
                            alt={cat.nome}
                            className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-t-2xl"
                        />
                        <div className="p-5 text-center">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 hover:text-pink-600 transition-colors">
                                {cat.nome}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriasPage;