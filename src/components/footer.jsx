import React, { Component } from "react";

class Footer extends Component {
    render() {
        const { companyName = "Conjunto Residencial", year = 2024 } = this.props;

        return (
            <footer className="text-black p-6 mt-8 border-t-2 border-black">
                <div className="text-center">
                    <p className="text-sm">
                        © {year} {companyName}. Todos los derechos reservados.
                    </p>
                    <div className="mt-2 space-x-4">
                        <button className="text-gray-400 hover:text-white transition-colors">
                            Términos de Servicio
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors">
                            Política de Privacidad
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors">
                            Contacto
                        </button>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;