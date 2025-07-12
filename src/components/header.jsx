import React from 'react';

const Header = ({ title }) => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-lg">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">CR</span>
                    </div>
                    <h1 className="text-xl font-bold">{title}</h1>
                </div>
                <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded transition-colors border-2 border-black">
                        Inicio
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded shadow-inner border-2 border-white">
                        Mensualidad
                    </button>
                    <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded transition-colors border-2 border-black">
                        Contactanos
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;