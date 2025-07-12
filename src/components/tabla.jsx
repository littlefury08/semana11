import React, { Component } from "react";


class MensualidadTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mensualidades: [],
            isDataLoaded: false,
            activeTab: 'crear',
            editingId: null,
            editingData: {}
        };
    }

    sampleData = [
        {
            id: 1,
            nombre: "Carlos Rodríguez",
            apartamento: "101",
            genero: "Masculino",
            valor: 500000,
            fechaVencimiento: "2024-01-15"
        },
        {
            id: 2,
            nombre: "Centro Balcones",
            apartamento: "201",
            genero: "Femenino",
            valor: 520000,
            fechaVencimiento: "2024-01-20"
        }
    ];

    componentDidMount() {
        try {
            const savedData = localStorage.getItem('mensualidades');
            if (savedData) {
                this.setState({
                    mensualidades: JSON.parse(savedData)
                });
            }
        } catch (error) {
            console.error('Error al cargar datos:', error);
        }
    }

    saveToLocalStorage = (data) => {
        try {
            localStorage.setItem('mensualidades', JSON.stringify(data));
        } catch (error) {
            console.error('Error al guardar datos:', error);
        }
    }

    cargarInformacion = () => {
        try {
            const savedData = localStorage.getItem('mensualidades');
            const dataToLoad = savedData ? JSON.parse(savedData) : this.sampleData;

            this.setState({
                mensualidades: dataToLoad,
                isDataLoaded: true
            });

            this.saveToLocalStorage(dataToLoad);
        } catch (error) {
            console.error('Error al cargar información:', error);
        }
    };

    agregarRegistro = () => {
        const nuevoRegistro = {
            id: Date.now(),
            nombre: "Nuevo Residente",
            apartamento: "000",
            genero: "Masculino",
            valor: 500000,
            fechaVencimiento: new Date().toISOString().split('T')[0]
        };

        this.setState(prevState => {
            const newMensualidades = [...prevState.mensualidades, nuevoRegistro];
            this.saveToLocalStorage(newMensualidades);
            return { mensualidades: newMensualidades };
        });
    };

    saveEdit = () => {
        this.setState(prevState => {
            const updatedMensualidades = prevState.mensualidades.map(item =>
                item.id === prevState.editingId ? prevState.editingData : item
            );
            this.saveToLocalStorage(updatedMensualidades);
            return {
                mensualidades: updatedMensualidades,
                editingId: null,
                editingData: {}
            };
        });
    };

    eliminarRegistro = (id) => {
        this.setState(prevState => {
            const filteredMensualidades = prevState.mensualidades.filter(item => item.id !== id);
            this.saveToLocalStorage(filteredMensualidades);
            return { mensualidades: filteredMensualidades };
        });
    };

    startEditing = (item) => {
        this.setState({
            editingId: item.id,
            editingData: { ...item }
        });
    };

    handleEditChange = (field, value) => {
        this.setState(prevState => ({
            editingData: {
                ...prevState.editingData,
                [field]: value
            }
        }));
    };

    render() {
        const { mensualidades, activeTab, editingId, editingData } = this.state;

        return (
            <div className="bg-white rounded-lg shadow-lg p-6 m-4 border-2 border-black">
                <div className="flex border-b mb-4  ">
                    <button
                        className={`px-4 py-2 border-2 border-black rounded-t-lg mr-2 ${activeTab === 'crear'
                            ? 'bg-blue-500 text-white '
                            : 'text-gray-500 hover:bg-gray-100'
                            }`}
                        onClick={() => this.setState({ activeTab: 'crear' })}
                    >
                        Crear Mensualidad
                    </button>
                    <button
                        className="px-4 py-2 border-2 border-black rounded-t-lg text-gray-400 cursor-not-allowed border-2 border-black"
                        disabled
                        title="Función no disponible"
                    >
                        Ver Estadísticas
                    </button>
                </div>

                <div className="space-y-4  ">
                    <div className="flex justify-between items-center ">
                        <h3 className="text-xl font-bold text-gray-800">
                            Gestión de Mensualidades
                        </h3>
                        <div className="flex space-x-2 ">
                            <button
                                onClick={this.cargarInformacion}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Cargar Información
                            </button>
                            <button
                                onClick={this.agregarRegistro}
                                className="btn-success flex items-center space-x-1"
                            >
                                <span>+ Agregar</span>
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border-2 border-black">
                            <thead>
                                <tr className="bg-gray-100 border-2 border-black">
                                    <th className="border px-4 py-2 border-2 border-black">Nombre</th>
                                    <th className="border px-4 py-2 border-2 border-black">Apartamento</th>
                                    <th className="border px-4 py-2 border-2 border-black">Genero</th>
                                    <th className="border px-4 py-2 border-2 border-black">Valor</th>
                                    <th className="border px-4 py-2 border-2 border-black">Fecha Vencimiento</th>
                                    <th className="border px-4 py-2 border-2 border-black">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mensualidades.map((item) => (
                                    <tr key={item.id}>
                                        <td className="border px-4 py-2 border-2 border-black">
                                            {editingId === item.id ? (
                                                <input
                                                    type="text"
                                                    value={editingData.nombre}
                                                    onChange={(e) => this.handleEditChange('nombre', e.target.value)}
                                                    className="w-full p-1 border rounded border-2 border-black"
                                                />
                                            ) : item.nombre}
                                        </td>
                                        <td className="border px-4 py-2 border-2 border-black">
                                            {editingId === item.id ? (
                                                <input
                                                    type="text"
                                                    value={editingData.apartamento}
                                                    onChange={(e) => this.handleEditChange('apartamento', e.target.value)}
                                                    className="w-full p-1 border rounded border-2 border-black"
                                                />
                                            ) : item.apartamento}
                                        </td>
                                        <td className="border px-4 py-2 border-2 border-black">
                                            {editingId === item.id ? (
                                                <select
                                                    value={editingData.genero}
                                                    onChange={(e) => this.handleEditChange('genero', e.target.value)}
                                                    className="w-full p-1 border rounded"
                                                >
                                                    <option value="Masculino">Masculino</option>
                                                    <option value="Femenino">Femenino</option>
                                                </select>
                                            ) : item.genero}
                                        </td>
                                        <td className="border px-4 py-2 border-2 border-black">
                                            {editingId === item.id ? (
                                                <input
                                                    type="number"
                                                    value={editingData.valor}
                                                    onChange={(e) => this.handleEditChange('valor', Number(e.target.value))}
                                                    className="w-full p-1 border rounded border-2 border-black"
                                                />
                                            ) : `$${item.valor.toLocaleString()}`}
                                        </td>
                                        <td className="border px-4 py-2 border-2 border-black">
                                            {editingId === item.id ? (
                                                <input
                                                    type="date"
                                                    value={editingData.fechaVencimiento}
                                                    onChange={(e) => this.handleEditChange('fechaVencimiento', e.target.value)}
                                                    className="w-full p-1 border rounded border-2 border-black"
                                                />
                                            ) : item.fechaVencimiento}
                                        </td>
                                        <td className="border px-4 py-2 border-2 border-black">
                                            <div className="flex space-x-2 border-2 ">
                                                {editingId === item.id ? (
                                                    <button
                                                        onClick={this.saveEdit}
                                                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 border-2 border-black"
                                                    >
                                                        Guardar
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => this.startEditing(item)}
                                                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 border-2 border-black"
                                                    >
                                                        Editar
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => this.eliminarRegistro(item.id)}
                                                    className="text-red-500 hover:text-red-700 transition-colors border-2 border-black "
                                                    title="Eliminar"
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default MensualidadTable;