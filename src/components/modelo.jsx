import React, { Component } from "react";

class HeroSection extends Component {
    render() {
        const { backgroundImage, title, subtitle } = this.props;
        return (
            <section
                className="relative h-64 overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage: `url(${backgroundImage || 'https://ejemplo.com/imagen-apartamento.jpg'})`
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
                    <h2 className="text-4xl font-bold mb-2">{title || "Mensualidad"}</h2>
                    <p className="text-xl">{subtitle || "Conjunto Residencial"}</p>
                </div>
            </section>
        );
    }
}

export default HeroSection;