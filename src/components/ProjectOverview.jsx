import React from 'react';

const ProjectOverview = ({ onClose }) => {
    return (
        <div className="po-container">

            {/* Encabezado */}
            <div className="po-header">
                <div className="po-brand">
                    <h2>GuitarChuck</h2>
                    <p>Resumen del Proyecto</p>
                </div>
                <button onClick={onClose} className="po-close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            {/* Introducción */}
            <div className="po-intro">
                <p>
                    Este proyecto fue desarrollado como parte del curso de Juan Pablo de la Torre.
                    La idea no fue copiar una solución cerrada, sino entender y adaptar la lógica
                    del carrito para que tenga sentido dentro de una aplicación real.
                </p>
                <p>
                    El foco estuvo en manejar estado, persistencia y organización del código,
                    sin sumar complejidad innecesaria.
                </p>
            </div>

            {/* Línea de tiempo */}
            <div className="po-timeline">

                {/* Contexto */}
                <article className="po-section">
                    <div className="po-dot"></div>
                    <span className="po-label">Contexto</span>
                    <div className="po-card">
                        <p>
                            GuitarChuck es una tienda de guitarras inspiradas en músicos clásicos.
                            Permite navegar un catálogo, agregar productos al carrito y modificar cantidades.
                        </p>
                        <p className="po-card-accent">
                            El objetivo principal fue que el carrito sea persistente y consistente,
                            incluso después de recargar la página.
                        </p>
                    </div>
                </article>

                {/* Alcance */}
                <article className="po-section">
                    <div className="po-dot"></div>
                    <span className="po-label">Alcance</span>
                    <div className="po-card">
                        <p>
                            Para este ejercicio decidí mantener los datos en memoria y dejar fuera
                            cualquier integración con backend, usuarios o pagos.
                        </p>
                        <p>
                            La intención fue concentrarme en resolver bien un problema puntual,
                            sin desviar la atención hacia otras capas del sistema.
                        </p>
                    </div>
                </article>

                {/* Estructura */}
                <article className="po-section">
                    <div className="po-dot"></div>
                    <span className="po-label">Organización</span>
                    <div className="po-card">
                        <div className="po-code-box">
                            <pre>
                                {`src/
 ├── components/    # Componentes visuales
 ├── hooks/         # Lógica del carrito
 ├── data/          # Catálogo de productos
 └── App.jsx        # Composición general`}
                            </pre>
                        </div>
                        <p>
                            Esta separación me permitió ubicar rápidamente dónde tocar el código.
                            Si el problema es visual, está en components.
                            Si es de lógica, vive en hooks.
                        </p>
                    </div>
                </article>

                {/* Decisiones */}
                <article className="po-section">
                    <div className="po-dot"></div>
                    <span className="po-label">Decisiones</span>

                    <div className="po-decision">

                        <div className="po-card">
                            <h4><span>01.</span> Custom Hook para el carrito</h4>
                            <p>
                                Centralicé toda la lógica del carrito en un hook propio.
                                Esto evitó duplicar código y mantuvo los componentes enfocados
                                únicamente en renderizar la interfaz.
                            </p>
                        </div>

                        <div className="po-card">
                            <h4><span>02.</span> Persistencia con localStorage</h4>
                            <p>
                                Cada cambio en el carrito se sincroniza automáticamente.
                                De esta forma el usuario no pierde su progreso al recargar.
                            </p>
                        </div>

                        <div className="po-card">
                            <h4><span>03.</span> Feedback visual</h4>
                            <p>
                                Agregué notificaciones para que el usuario tenga confirmación
                                inmediata de cada acción sin interrumpir el flujo.
                            </p>
                        </div>

                    </div>
                </article>

                {/* Estado */}
                <article className="po-section">
                    <div className="po-dot"></div>
                    <span className="po-label">Estado</span>
                    <div className="po-card">
                        <p>
                            El estado principal vive dentro del hook del carrito y se pasa
                            a los componentes que lo necesitan mediante props.
                        </p>
                        <p>
                            Para el tamaño de esta aplicación, este enfoque resultó claro
                            y fácil de seguir.
                        </p>
                    </div>
                </article>

                {/* Aprendizajes */}
                <article className="po-section">
                    <div className="po-dot"></div>
                    <span className="po-label">Aprendizajes</span>
                    <div className="po-card">
                        <p>
                            Este proyecto reforzó la importancia de separar responsabilidades
                            y no mezclar lógica con presentación.
                        </p>
                        <p>
                            También me ayudó a entender que una solución simple,
                            bien aplicada, suele ser suficiente.
                        </p>
                    </div>
                </article>

            </div>

            {/* Pie de página */}
            <footer className="po-footer">
                <p>GuitarChuck · Proyecto de aprendizaje · 2026</p>
            </footer>

        </div>
    );
};

export default ProjectOverview;
