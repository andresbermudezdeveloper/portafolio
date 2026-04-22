'use strict';

/* =====================================================
   DATOS INICIALES
===================================================== */

const initial_skills = [
    {
        group: 'Backend',
        tags: [
            'Python', 'FastAPI', 'Java', 'Spring Boot', 'Spring Framework', 'Spring Security', 'Spring Data JPA',
            'Spring AI', 'PHP', 'Laravel', 'REST APIs', 'JWT', 'Encriptación', 'Autenticación OAuth2', 'ORMs',
            'SQLAlchemy', 'JPA/Hibernate'
        ]
    },
    {
        group: 'Bases de Datos',
        tags: ['SQL Server', 'MySQL', 'PostgreSQL', 'Elasticsearch', 'DuckDB']
    },
    {
        group: 'Frontend',
        tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design']
    },
    {
        group: 'Infraestructura',
        tags: [
            'Linux', 'Docker', 'AWS', 'CI/CD', 'Git', 'GitHub', 'Redes', 'Administración de Servidores',
            'Administración de BD'
        ]
    },
    {
        group: 'Inteligencia Artificial',
        tags: [
            'Agentes IA', 'Arquitectura de Agentes LLM', 'ChatBots', 'Orquestación de APIs IA',
            'Automatización Inteligente', 'RAG', 'OpenAI', 'Anthropic', 'Spring AI', 'MCP', 'Skills IA',
            'Fine-tuning', 'Prompts', 'Ingeniería de Prompts'
        ]
    },
    {
        group: 'Seguridad',
        tags: [
            'JWT', 'OAuth2', 'Encriptación AES', 'Hashing bcrypt', 'HTTPS/TLS', 'Spring Security',
            'Autenticación y Autorización'
        ]
    },
];

const initial_experience = [
    {
        company: 'CLC Colombia',
        role: 'Desarrollador de software',
        date: 'Jul 2025 — Presente',
        desc: 'Lidero el desarrollo end-to-end de las aplicaciones en producción, desde el diseño de arquitectura hasta el despliegue. Responsable de decisiones técnicas clave, integraciones de sistemas y garantizar la estabilidad, rendimiento y escalabilidad del software en entornos reales.',
    },
    {
        company: 'CLC Colombia',
        role: 'Analista de soporte TI',
        date: 'Abr 2025 — Jul 2025',
        desc: 'Desarrollo de aplicaciones en Python con FastAPI, administración de base de datos Microsoft SQL server, administración de servidores, integración de aplicaciones con el ERP de la empresa(DMS), soporte remoto y presencial a problemas de software y hardware, gestión de inventarios tecnológicos, configuración de equipos.',
    },
    {
        company: 'Desarrollador Freelance',
        role: 'Full Stack Developer',
        date: 'Ene 2023 — Presente',
        desc: 'Desarrollo de software a medida, desarrollo de aplicaciones web, APIs, ChatBots, automatizaciones, scripts, mantenimiento a aplicaciones, administración de servidores, administración a bases de datos.',
    },
    {
        company: 'Armada Nacional de Colombia',
        role: 'Soporte Técnico',
        date: 'Ene 2022 — Ene 2023',
        desc: 'Gestión de documentación confidencial militar con altos estándares de seguridad. Diagnóstico y resolución de incidencias en hardware y software para asegurar la continuidad operativa. Atención técnica a suboficiales y oficiales, de manera presencial y remota. Instalación y configuración de equipos y software, garantizando su correcto funcionamiento y cumplimiento de protocolos.',
    },
];

const initial_projects = [
    {
        id: 1,
        name: 'Edoolectores',
        type: 'video',
        videos: [
            { url: 'https://www.youtube.com/watch?v=xfuuXPltCyM&list=PLHKlRnBxgyRYay3ue9L1mHyA3EpVW-UDp&index=2&t=1s', label: 'Introducción al proyecto' },
            { url: 'https://www.youtube.com/watch?v=XsIFmXCL-Bo&list=PLHKlRnBxgyRYay3ue9L1mHyA3EpVW-UDp&index=1', label: 'Asesoria con el agente IA' }
        ],
        desc: `Edoolectores es una aplicación web de una librería cristiana con un catálogo amplio de títulos y recursos. El núcleo del proyecto es un agente de IA que actúa como un asesor personalizado.

Este agente permite buscar, filtrar y comparar productos, además de ofrecer recomendaciones contextualizadas según las necesidades del usuario. Su objetivo no es solo facilitar la navegación del catálogo, sino acompañar el proceso de decisión, orientando al usuario hacia el recurso más adecuado.

La plataforma adopta un enfoque híbrido. Integra un panel dinámico dentro de la experiencia conversacional del agente, desde el cual el usuario puede navegar por el catálogo, visualizar productos y gestionar acciones como agregar al carrito, sin salir de la conversación. En paralelo, también ofrece la experiencia tradicional de un e-commerce, permitiendo explorar, buscar y comprar de forma convencional.

Este enfoque dual permite adaptarse al comportamiento del usuario, combinando una interacción guiada con la libertad de navegación típica de una tienda en línea.`,
        tags: ['Python', 'FastAPI', 'Docker', 'Linux', 'Nuxt', 'Vue.js', 'TypeScript', 'IA'],
        status: 'Privado',
    },
    {
        id: 2,
        name: 'CLC Colombia - App Distribuidora',
        type: 'video',
        desc: `Aplicación web de e-commerce desarrollada para CLC Colombia, enfocada en una de las áreas clave de la organización, la distribuidora: la comercialización de su catálogo de productos. La plataforma permite exponer de forma estructurada y accesible todo el portafolio, integrando información crítica como disponibilidad de stock en tiempo real, directamente sincronizada con el ERP institucional.

El núcleo del sistema se basa en una integración sólida con el ERP, lo que garantiza consistencia en inventarios, precios y gestión de pedidos. Los usuarios pueden realizar búsquedas avanzadas, aplicar filtros y explorar el catálogo con información actualizada, mientras que los pedidos generados son enviados automáticamente al sistema central para su procesamiento.

Además, la aplicación incorpora procesos de sincronización y administración automatizada, reduciendo la intervención manual y asegurando la integridad de los datos. El resultado es una plataforma robusta, alineada con la operación interna de la organización y optimizada para ofrecer una experiencia de compra confiable y eficiente.`,
        tags: ['Python', 'FastAPI', 'Docker', 'Linux', 'HTML', 'CSS', 'JavaScript', 'IA'],
        status: 'Privado',
        videos: [{ url: 'https://www.youtube.com/watch?v=bSfwb58u4D8&list=PLHKlRnBxgyRYXB5tjtjGUYQgOISL79aZn&index=1&t=1s', label: 'Introducción al proyecto'  }],
    },
    {
        id: 3,
        name: 'SysProData',
        type: 'video',
        videos: [{ url: 'https://www.youtube.com/watch?v=9-bc9JcSgyQ&t=30s', label: 'Introducción al proyecto'  }],
        desc: 'Aplicación web y de escritorio para analizar archivos de datos masivos que los equipos convencionales no pueden procesar. Permite convertir a SQL, explorar en memoria directamente desde el navegador o ejecutar análisis desde una app de escritorio, sin límites de tamaño ni conocimiento especializado, gracias a un asistente IA.',
        tags: ['Python', 'FastAPI', 'Docker', 'Linux', 'HTML', 'CSS', 'JavaScript', 'IA'],
        status: 'Privado',
    },
    {
        id: 4,
        name: 'Asistente IA para administración de bases de datos',
        type: 'video',
        videos: [{ url: 'https://www.youtube.com/watch?v=TdjrCQRdszk&t=7s', label: 'Introducción al proyecto'  }],
        desc: 'Aplicación web para administrar bases de datos por medio de lenguaje natural usando IA. Permite operar sobre bases de datos sin necesidad de conocimiento técnico.',
        tags: ['Java', 'Spring Boot', 'Linux', 'HTML', 'CSS', 'JavaScript', 'IA'],
        status: 'Privado',
    },
];

const BASE_CERTS_URL = 'https://raw.githubusercontent.com/andresbermudezdeveloper/certificaciones/main/img/';

const initial_certs = [
    // ── Platzi ──────────────────────────────────────────────────────────────────
    { id: 1, name: 'Carrera Prework', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_carrera_prework.png', credential_url: '' },
    { id: 2, name: 'Álgebra', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_algebra.png', credential_url: '' },
    { id: 3, name: 'Complejidad Algorítmica', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_complejidad_algoritmica.png', credential_url: '' },
    { id: 4, name: 'Configurar Entorno Desarrollo Linux', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_configurar_entorno_desarrollo_linux.png', credential_url: '' },
    { id: 5, name: 'Configurar Entorno Desarrollo Windows', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_configurar_entorno_desarrollo_windows.png', credential_url: '' },
    { id: 6, name: 'Despliegue de Aplicaciones', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_despliegue_apps.png', credential_url: '' },
    { id: 7, name: 'Estrategias para Aprender Inglés', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_estrategias_aprender_ingles.png', credential_url: '' },
    { id: 8, name: 'Expresiones Regulares', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_expresiones_regulares.png', credential_url: '' },
    { id: 9, name: 'Funciones Matemáticas', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_funciones_matematicas.png', credential_url: '' },
    { id: 10, name: 'Fundamentos de Bases de Datos', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_fundamentos_bases_datos.png', credential_url: '' },
    { id: 11, name: 'Fundamentos de Ingeniería de Software', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_fundamentos_ingenieria_software.png', credential_url: '' },
    { id: 12, name: 'Fundamentos de Matemáticas', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_fundamentos_matematicas.png', credential_url: '' },
    { id: 13, name: 'Fundamentos de Python', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_fundamentos_python.png', credential_url: '' },
    { id: 14, name: 'Historia de la Programación', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_historia_programacion.png', credential_url: '' },
    { id: 15, name: 'Inglés A1', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_ingles_a1.png', credential_url: '' },
    { id: 16, name: 'Introducción a Administración de Servidores', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_introduccion_administracion_servidores.png', credential_url: '' },
    { id: 17, name: 'Introducción a Algoritmos de Ordenamiento', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_introduccion_algoritmos_ordenamiento.png', credential_url: '' },
    { id: 18, name: 'Introducción a AWS', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_introduccion_aws.png', credential_url: '' },
    { id: 19, name: 'Introducción a Backend', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_introduccion_backend.png', credential_url: '' },
    { id: 20, name: 'Introducción a DevOps', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_introduccion_devops.png', credential_url: '' },
    { id: 21, name: 'Introducción a Java', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_introduccion_java.png', credential_url: '' },
    { id: 22, name: 'Introducción a Redes', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_introduccion_redes.png', credential_url: '' },
    { id: 23, name: 'Introducción a la Web e Historia de Internet', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_introduccion_web_historia_internet.png', credential_url: '' },
    { id: 24, name: 'Java Avanzado', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_java_avanzado.png', credential_url: '' },
    { id: 25, name: 'Java POO', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_java_poo.png', credential_url: '' },
    { id: 26, name: 'Java con Spring', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_java_spring.png', credential_url: '' },
    { id: 27, name: 'Java con SQL', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_java_sql.png', credential_url: '' },
    { id: 28, name: 'Oratoria', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_oratoria.png', credential_url: '' },
    { id: 29, name: 'Patrones de Diseño', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_patternes_diseno.png', credential_url: '' },
    { id: 30, name: 'Pensamiento Lógico I', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_pensamiento_logico_1.png', credential_url: '' },
    { id: 31, name: 'Pensamiento Lógico II', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_pensamiento_logico_2.png', credential_url: '' },
    { id: 32, name: 'Pensamiento Lógico III', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_pensamiento_logico_3.png', credential_url: '' },
    { id: 33, name: 'Persistencia de Datos', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_persistencia_datos.png', credential_url: '' },
    { id: 34, name: 'Práctica de Algoritmos', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_practica_algoritmos.png', credential_url: '' },
    { id: 35, name: 'Preparación para Entrevistas Técnicas', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_preparacion_entrevistas_tecnicas.png', credential_url: '' },
    { id: 36, name: 'Programación Básica', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_programacion_basica.png', credential_url: '' },
    { id: 37, name: 'Programación Funcional en Java', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_programacion_funcional_java.png', credential_url: '' },
    { id: 38, name: 'Python', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_python.png', credential_url: '' },
    { id: 39, name: 'Python Comprehensions', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_python_comprenhensions.png', credential_url: '' },
    { id: 40, name: 'Ruta Backend Java', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_ruta_backend_java.png', credential_url: '' },
    { id: 41, name: 'Ruta Desarrollo Backend Java', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_ruta_desarrollo_backend_java.png', credential_url: '' },
    { id: 42, name: 'Ruta Fundamentos de Programación', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_ruta_fundamentos_programacion.png', credential_url: '' },
    { id: 43, name: 'Spring Data JPA', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_spring_data_jpa.png', credential_url: '' },
    { id: 44, name: 'Spring Security', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_spring_security.png', credential_url: '' },
    { id: 45, name: 'Terminal y Línea de Comandos', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_terminal.png', credential_url: '' },
    { id: 46, name: 'Testing en Java', issuer: 'Platzi', date: '', category: 'Platzi', img_url: BASE_CERTS_URL + 'platzi_certificado_testing_java.png', credential_url: '' },

    // ── Oracle Next Education (ONE) ───────────────────────────────────────────
    { id: 47, name: 'ONE — Candidato', issuer: 'Oracle ONE', date: '', category: 'ONE', img_url: BASE_CERTS_URL + 'one_certificado_candidato.png', credential_url: '' },
    { id: 48, name: 'ONE — Estudiante Backend', issuer: 'Oracle ONE', date: '', category: 'ONE', img_url: BASE_CERTS_URL + 'one_certificado_estudiante_backend.png', credential_url: '' },
    { id: 49, name: 'ONE — Finalización del Programa', issuer: 'Oracle ONE', date: '', category: 'ONE', img_url: BASE_CERTS_URL + 'one_certificado_finalizacion_programa.png', credential_url: '' },
    { id: 50, name: 'ONE — Graduado', issuer: 'Oracle ONE', date: '', category: 'ONE', img_url: BASE_CERTS_URL + 'one_certificado_graduado.png', credential_url: '' },

    // ── Alura — Certificados ──────────────────────────────────────────────────
    { id: 51, name: 'Principiante en Programación', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_principiante_programacion.png', credential_url: '' },
    { id: 52, name: 'Lógica de Programación I', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_logica_programacion_1.png', credential_url: '' },
    { id: 53, name: 'Lógica de Programación II', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_logica_programacion_2.png', credential_url: '' },
    { id: 54, name: 'Introducción a Python', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_introduccion_python.png', credential_url: '' },
    { id: 55, name: 'Estructuras y Funciones en Python', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_estructuras_funciones_python.png', credential_url: '' },
    { id: 56, name: 'Formación Aprender Java', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_formacion_aprender_java.png', credential_url: '' },
    { id: 57, name: 'Formación Java POO', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_formacion_java_poo.png', credential_url: '' },
    { id: 58, name: 'Formación Spring Boot', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_formacion_spring_boot.png', credential_url: '' },
    { id: 59, name: 'Java con Spring', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_java_spring.png', credential_url: '' },
    { id: 60, name: 'Persistencia de Datos con Spring', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_persistencia_datos_spring.png', credential_url: '' },
    { id: 61, name: 'Programación Funcional con Spring', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_programacion_funcional_spring.png', credential_url: '' },
    { id: 62, name: 'Introducción a MySQL', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_introduccion_mysql.png', credential_url: '' },
    { id: 63, name: 'MySQL Intermedio', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_mysql_intermedio.png', credential_url: '' },
    { id: 64, name: 'MySQL Avanzado', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_mysql_avanzado.png', credential_url: '' },
    { id: 65, name: 'SQL y Stored Procedures', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_sql_stored_procedures.png', credential_url: '' },
    { id: 66, name: 'Proyecto Final SQL', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_proyecto_final_sql.png', credential_url: '' },
    { id: 67, name: 'Consumir APIs', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_consumir_apis.png', credential_url: '' },
    { id: 68, name: 'Documentación y Testeo de APIs', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_documentacion_testeo_apis.png', credential_url: '' },
    { id: 69, name: 'GitHub', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_github.png', credential_url: '' },
    { id: 70, name: 'HTML y CSS I', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_html_css_1.png', credential_url: '' },
    { id: 71, name: 'HTML y CSS II', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_html_css_2.png', credential_url: '' },
    { id: 72, name: 'HTML y CSS III', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_html_css_3.png', credential_url: '' },
    { id: 73, name: 'Metodología Ágil', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_metodologia_agile.png', credential_url: '' },
    { id: 74, name: 'ChatGPT', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_chatgpt.png', credential_url: '' },
    { id: 75, name: 'Productividad con ChatGPT', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_productividad_chatgpt.png', credential_url: '' },
    { id: 76, name: 'Spring AI', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_certificado_spring_ai.png', credential_url: '' },

    // ── Alura — Insignias ─────────────────────────────────────────────────────
    { id: 77, name: 'Insignia Principiante en Programación', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_insignia_principiante_programacion.png', credential_url: '' },
    { id: 78, name: 'Insignia Conversor de Monedas', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_insignia_conversor_monedas.png', credential_url: '' },
    { id: 79, name: 'Insignia ForoHub', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_insignia_forohub.png', credential_url: '' },
    { id: 80, name: 'Insignia LiteraLura', issuer: 'Alura', date: '', category: 'Alura', img_url: BASE_CERTS_URL + 'alura_insignia_literalaura.png', credential_url: '' },

    // ── Cisco ─────────────────────────────────────────────────────────────────
    { id: 81, name: 'Conceptos Básicos de Redes', issuer: 'Cisco', date: '', category: 'Cisco', img_url: BASE_CERTS_URL + 'cisco_certificado_conceptos_basicos_redes.png', credential_url: '' },
    { id: 82, name: 'Dispositivos y Configuración Inicial', issuer: 'Cisco', date: '', category: 'Cisco', img_url: BASE_CERTS_URL + 'cisco_certificado_dispositivos_configuracion_inicial.png', credential_url: '' },
    { id: 83, name: 'Introducción a Ciberseguridad', issuer: 'Cisco', date: '', category: 'Cisco', img_url: BASE_CERTS_URL + 'cisco_certificado_introduccion_ciberseguridad.png', credential_url: '' },
    { id: 84, name: 'Seguridad en Terminales', issuer: 'Cisco', date: '', category: 'Cisco', img_url: BASE_CERTS_URL + 'cisco_certificado_seguridad_terminales.png', credential_url: '' },

    // ── Google ────────────────────────────────────────────────────────────────
    { id: 85, name: 'Data Basics', issuer: 'Google', date: '', category: 'Google', img_url: BASE_CERTS_URL + 'google_certificado_data_basics.png', credential_url: '' },
    { id: 86, name: 'Linux y SQL', issuer: 'Google', date: '', category: 'Google', img_url: BASE_CERTS_URL + 'google_certificado_linux_sql.png', credential_url: '' },

    // ── IBM ───────────────────────────────────────────────────────────────────
    { id: 87, name: 'Fundamentos de Ciberseguridad', issuer: 'IBM', date: '', category: 'IBM', img_url: BASE_CERTS_URL + 'ibm_insignia_fundamentos_ciberseguridad.png', credential_url: '' },

    // ── SENATEC ──────────────────────────────────────────────────────────────────
    { id: 88, name: 'Insignia Digital', issuer: 'SENATEC', date: '', category: 'SENATEC', img_url: BASE_CERTS_URL + 'senatec_insignia_digital.png', credential_url: '' },

    // ── Universidades ─────────────────────────────────────────────────────────
    { id: 89, name: 'Resolución de Problemas', issuer: 'Universidad de California', date: '', category: 'Universidades', img_url: BASE_CERTS_URL + 'universidad_california_certificado_resolver_problemas.png', credential_url: '' },
    { id: 90, name: 'Java POO', issuer: 'Universidad de Palermo', date: '', category: 'Universidades', img_url: BASE_CERTS_URL + 'universidad_palermo_certificado_java_poo.png', credential_url: '' },
];

/* =====================================================
   ESTADO GLOBAL DE LA APLICACIÓN
===================================================== */
const app = {
    skills: [...initial_skills],
    experience: [...initial_experience],
    projects: [...initial_projects],
    certs: [...initial_certs],

    /* Paginación y filtros de certificaciones */
    current_page: 1,
    certs_per_page: 8,
    filter_text: '',
    filter_category: 'Platzi',

    /* Control de edición */
    editing_project_id: null,
    editing_cert_id: null,
    current_media_type: 'video',
};

/* =====================================================
   UTILIDADES — YOUTUBE
===================================================== */

/**
 * Extrae el ID de video de cualquier formato de URL de YouTube.
 * @param {string} url
 * @returns {string|null}
 */
function getYoutubeId(url) {
    const patternes = [
        /youtu\.be\/([^?&\s]+)/,
        /[?&]v=([^?&\s]+)/,
        /embed\/([^?&\s]+)/,
        /shorts\/([^?&\s]+)/,
    ];
    for (const pattern of patternes) {
        const match = url.match(pattern);
        if (match) return match[1];
    }
    return null;
}

function getYoutubeThumbnail(url) {
    const id = getYoutubeId(url);
    return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : null;
}

function getYoutubeEmbed(url) {
    const id = getYoutubeId(url);
    return id ? `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1` : null;
}

/* =====================================================
   UTILIDADES — GENERALES
===================================================== */

/** Genera HTML de ícono de GitHub */
function svgGithub(size = 16) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>`;
}

/** Genera HTML de ícono de enlace externo */
function svgExternalLink(size = 14) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>`;
}

/** Genera HTML de ícono de ojo (visor) */
function svgEye(size = 14) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>`;
}

/** Genera HTML del ícono de YouTube oficial */
function svgYoutubePlay() {
    return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
    <circle cx="26" cy="26" r="26" fill="rgba(0,0,0,0.55)"/>
    <path d="M20 18l16 8-16 8V18z" fill="white"/>
  </svg>`;
}

/** Normaliza text para búsqueda insensible a acentos */
function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

/* =====================================================
   RENDER — HABILIDADES (ticker infinito por fila)
===================================================== */
function renderSkills() {
    const container = document.getElementById('skills_container');

    // Triplica los items para garantizar loop sin huecos
    function buildRow(group, reverse = false) {
        const items = group.tags
            .map(t => `<span class="ticker_item"><span class="ticker_dot"></span>${t}</span>`)
            .join('');
        const dirClass = reverse ? 'ticker_track--reverse' : '';
        return `
      <div class="ticker_row">
        <span class="ticker_label">${group.group}</span>
        <div class="ticker_mask">
          <div class="ticker_track ${dirClass}" aria-label="${group.group}">
            ${items}${items}${items}
          </div>
        </div>
      </div>`;
    }

    container.innerHTML = app.skills
        .map((g, i) => buildRow(g, i % 2 !== 0))
        .join('');
}


/* =====================================================
   RENDER — LÍNEA DE TIEMPO
===================================================== */
function renderTimeline() {
    const container = document.getElementById('timeline_container');
    container.innerHTML = app.experience.map((item, index) => `
    <div class="tl_item reveal reveal_d${(index % 3) + 1}">
      <div class="tl_date">${item.date}</div>
      <div class="tl_role">${item.role}</div>
      <div class="tl_company">${item.company}</div>
      <div class="tl_description">${item.desc}</div>
    </div>
  `).join('');
    activateObservers();
}

/* =====================================================
    RENDER — PROYECTOS (TICKER)
===================================================== */

/** Estado del ticker de proyectos */
const tickerState = {
    current: 0,
    total: 0,
};

function renderProjects() {
    tickerState.total = app.projects.length;
    const viewport = document.getElementById('ticker_viewport');
    viewport.innerHTML = app.projects.map((p, i) => buildProjectCard(p, i)).join('');

    const totalEl = document.getElementById('ticker_total');
    const currentEl = document.getElementById('ticker_current');
    if (totalEl) totalEl.textContent = tickerState.total;
    if (currentEl) currentEl.textContent = tickerState.current + 1;

    updateTickerButtons();
    activateObservers();
}

/** Navegación del ticker */
function tickerNav(direction) {
    const newIndex = tickerState.current + direction;
    if (newIndex < 0 || newIndex >= tickerState.total) return;

    tickerState.current = newIndex;
    updateTickerView();
}

function updateTickerView() {
    const viewport = document.getElementById('ticker_viewport');
    if (!viewport) return;

    viewport.style.transform = `translateX(-${tickerState.current * 100}%)`;

    const currentEl = document.getElementById('ticker_current');
    if (currentEl) currentEl.textContent = tickerState.current + 1;

    updateTickerButtons();
}

function updateTickerButtons() {
    const prevBtn = document.getElementById('ticker_prev');
    const nextBtn = document.getElementById('ticker_next');
    if (prevBtn) prevBtn.disabled = tickerState.current === 0;
    if (nextBtn) nextBtn.disabled = tickerState.current === tickerState.total - 1;
}

/** Cambia el video del proyecto actual en el ticker */
function changeProjectVideo(projectId, videoIndex) {
    const p = app.projects.find(x => x.id === projectId);
    if (!p || !p.videos || !p.videos[videoIndex]) return;

    const videoUrl = p.videos[videoIndex].url;
    const embedUrl = getYoutubeEmbed(videoUrl);

    // Actualizar el índice del video activo
    p.activeVideoIndex = videoIndex;

    // Re-renderizar los botones
    renderProjects();

    // Reproducir el video en el div principal de ESTE proyecto
    setTimeout(() => {
        const card = document.getElementById(`project_card_${projectId}`);
        const overlay = card?.querySelector('.project_media .yt_overlay');
        if (overlay && embedUrl) {
            playVideo(overlay, embedUrl);
        }
    }, 50);

    // Scroll al video
    document.querySelector('.project_media')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function buildProjectCard(p, index) {
    const media_html = buildProjectMedia(p);
    const badgeClass = p.type === 'video' ? 'badge_video' : 'badge_imagen';
    const badgeText = p.type === 'video'
        ? `${svgYoutubeMini()} Video`
        : `${svgImageMini()} Imagen`;

    // Videos: lista de links
    const videos = p.videos || [];
    const activeIndex = p.activeVideoIndex || 0;
    const linksHtml = videos.map((video, i) => {
        const label = video.label || `Video ${i + 1}`;
        const isActive = i === activeIndex ? 'active' : '';
        return `<button class="project_link ${isActive}" onclick="changeProjectVideo(${p.id}, ${i})" aria-label="${label}">${svgYoutubeMini()} ${label}</button>`;
    }).join('');

    const tagsHtml = (p.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
    const needsExpand = p.desc && p.desc.length > 200;
    const expandBtn = needsExpand
        ? `<button class="project_expand_btn" onclick="openProjectDescModal(${p.id}, '${p.name.replace(/'/g, "\\'")}')" aria-label="Leer descripción completa">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Leer más
           </button>`
        : '';

    return `
    <div class="project_card" id="project_card_${p.id}">
      <div class="project_card_inner">
        ${media_html}
      </div>
      <div class="project_info">
        <div class="project_index">${String(index + 1).padStart(2, '0')}</div>
        <span class="project_type_badge ${badgeClass}">${badgeText}</span>
        <h3 class="project_name">${p.name}</h3>
        <p class="project_desc">${p.desc}</p>
        ${expandBtn}
        ${tagsHtml ? `<div class="project_tags">${tagsHtml}</div>` : ''}
        ${linksHtml ? `<div class="project_links">${linksHtml}</div>` : ''}
      </div>
    </div>`;
}

function openProjectDescModal(projectId, projectName) {
    const p = app.projects.find(x => x.id === projectId);
    if (!p) return;

    document.getElementById('project_desc_modal_name').textContent = projectName;
    document.getElementById('project_desc_modal_body').innerHTML = p.desc.replace(/\n/g, '<br>');
    openModal('modal_project_desc');
}



function buildProjectMedia(p) {
    const videos = p.videos || [];
    const activeIndex = p.activeVideoIndex || 0;
    const videoObj = videos[activeIndex];
    const mediaUrl = videoObj?.url;

    if (p.type === 'video' && mediaUrl) {
        const embedUrl = getYoutubeEmbed(mediaUrl);
        const thumbnail = getYoutubeThumbnail(mediaUrl);
        const imgAttr = thumbnail ? `src="${thumbnail}"` : '';
        if (!embedUrl) return emptyMediaHtml();

        return `
      <div class="project_media">
        <img ${imgAttr} alt="Miniatura de ${p.name}" loading="lazy">
        <div class="yt_overlay" onclick="playVideo(this, '${embedUrl}')" role="button" aria-label="Reproducir video">
          <div class="yt_play_btn">${svgYoutubePlay()}</div>
        </div>
      </div>`;
    }
    if (p.type === 'image' && mediaUrl) {
        return `
      <div class="project_media">
        <img src="${mediaUrl}" alt="${p.name}" loading="lazy">
      </div>`;
    }
    return emptyMediaHtml();
}

function emptyMediaHtml() {
    return `
    <div class="project_media">
      <div class="media_empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
        </svg>
        <span>Sin media</span>
      </div>
    </div>`;
}

/** Reproduce video de YouTube al hacer clic en el thumbnail */
function playVideo(overlayEl, embedUrl) {
    const wrap = overlayEl.parentElement;
    wrap.innerHTML = `<iframe
    src="${embedUrl}&autoplay=1"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    title="Video del proyecto"
  ></iframe>`;
}

/* Íconos mini para badges */
function svgYoutubeMini() {
    return `<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`;
}
function svgImageMini() {
    return `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`;
}

/* =====================================================
   RENDER — CERTIFICACIONES
===================================================== */

/** Devuelve el listado filtrado según text y categoría activos */
function getFilteredCerts() {
    const text = normalizeText(app.filter_text);
    const category = app.filter_category;

    return app.certs.filter(c => {
        const matchesText =
            !text ||
            normalizeText(c.name).includes(text) ||
            normalizeText(c.issuer).includes(text) ||
            normalizeText(c.category).includes(text);
        const matchesCat = category === 'all' || c.category === category;
        return matchesText && matchesCat;
    });
}

/** Construye y renderiza los buttons de categoría */
function renderCategoryFilters() {
    const categorias = ['all', ...new Set(app.certs.map(c => c.category).filter(Boolean))];
    const container = document.getElementById('category_filters');

    container.innerHTML = categorias.map(cat => {
        const isActive = app.filter_category === cat ? 'active' : '';
        const label = cat === 'all' ? 'Todos' : cat;
        return `<button class="filter_btn ${isActive}" onclick="changeCategory('${cat}')" aria-pressed="${isActive ? 'true' : 'false'}">${label}</button>`;
    }).join('');
}

/** Renderiza la grid de certificaciones con paginación */
function renderCerts() {
    const filtered = getFilteredCerts();
    const total = filtered.length;
    const perPage = app.certs_per_page;
    const totalPages = Math.max(1, Math.ceil(total / perPage));

    // Reajustar página si quedó fuera de rango
    if (app.current_page > totalPages) app.current_page = totalPages;

    const startIdx = (app.current_page - 1) * perPage;
    const slice = filtered.slice(startIdx, startIdx + perPage);
    const grid = document.getElementById('certs_grid');
    const counter = document.getElementById('certs_counter');

    // Contador de resultados
    const from = total === 0 ? 0 : startIdx + 1;
    const to = Math.min(startIdx + perPage, total);
    counter.textContent = total === 0
        ? 'Sin resultados'
        : `Mostrando ${from}–${to} de ${total} certificaciones`;

    // Grilla
    if (slice.length === 0) {
        grid.innerHTML = `<div class="certs_empty">No se encontraron certificaciones con ese filtro.</div>`;
    } else {
        grid.innerHTML = slice.map(c => buildCertCard(c)).join('');
    }

    // Paginación
    renderPagination(totalPages);

    // Actualizar stat de hero
    document.getElementById('stat_certs').textContent = `${app.certs.length}`;

    activateObservers();
}

function buildCertCard(c) {
    const imgHtml = c.img_url
        ? `<img src="${c.img_url}" alt="Certificado ${c.name}" loading="lazy">`
        : `<div class="cert_img_placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
       </div>`;

    const hasCredential = !!c.credential_url;

    return `
    <div class="cert_card reveal"
         onclick="openViewer(${c.id})"
         role="button"
         tabindex="0"
         aria-label="Ver certificado ${c.name}"
    >
      <div class="cert_image_wrap">
        ${imgHtml}
        <div class="cert_overlay"></div>
      </div>
      <div class="cert_body">
        <div class="cert_header">
          <div class="cert_issuer">${c.issuer}</div>
        </div>
        <div class="cert_name">${c.name}</div>
        <div class="cert_footer">
          <span class="cert_date">${c.date}</span>
        </div>
      </div>
    </div>`;
}

/** Renderiza los controles de paginación */
function renderPagination(totalPages) {
    const container = document.getElementById('pagination');
    if (totalPages <= 1) { container.innerHTML = ''; return; }

    const page = app.current_page;
    let buttons = '';

    // Anterior
    buttons += `<button class="page_btn" onclick="goToPage(${page - 1})" ${page === 1 ? 'disabled' : ''} aria-label="Página anterior">← Ant</button>`;

    // Páginas visibles: window deslizante de 5
    const window = 2; // páginas a cada lado de la actual
    let startIdx = Math.max(1, page - window);
    let endIdx = Math.min(totalPages, page + window);

    if (startIdx > 1) {
        buttons += `<button class="page_btn" onclick="goToPage(1)">1</button>`;
        if (startIdx > 2) buttons += `<span class="page_info">…</span>`;
    }

    for (let i = startIdx; i <= endIdx; i++) {
        buttons += `<button class="page_btn ${i === page ? 'active' : ''}" onclick="goToPage(${i})" aria-current="${i === page ? 'page' : 'false'}">${i}</button>`;
    }

    if (endIdx < totalPages) {
        if (endIdx < totalPages - 1) buttons += `<span class="page_info">…</span>`;
        buttons += `<button class="page_btn" onclick="goToPage(${totalPages})">${totalPages}</button>`;
    }

    // Siguiente
    buttons += `<button class="page_btn" onclick="goToPage(${page + 1})" ${page === totalPages ? 'disabled' : ''} aria-label="Página siguiente">Sig →</button>`;

    // Info central
    buttons += `<span class="page_info">Pág ${page} / ${totalPages}</span>`;

    container.innerHTML = buttons;
}

/** Cambia a una página específica y hace scroll a la sección */
function goToPage(num) {
    const filtered = getFilteredCerts();
    const totalPages = Math.ceil(filtered.length / app.certs_per_page);
    if (num < 1 || num > totalPages) return;

    app.current_page = num;
    renderCerts();
    document.getElementById('certifications').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* =====================================================
   FILTROS DE CERTIFICACIONES
===================================================== */

function filterCerts() {
    app.filter_text = document.getElementById('search_input').value;
    app.current_page = 1;
    renderCerts();
}

function changeCategory(category) {
    app.filter_category = category;
    app.current_page = 1;
    renderCategoryFilters();
    renderCerts();
}

/* =====================================================
   VISOR DE IMAGEN
===================================================== */
function openViewer(id_cert) {
    const cert = app.certs.find(c => c.id === id_cert);
    if (!cert) return;

    document.getElementById('viewer_image').src = cert.img_url || '';
    document.getElementById('viewer_name').textContent = cert.name;
    document.getElementById('viewer_issuer').textContent = cert.issuer;

    const btn_link = document.getElementById('viewer_link');
    if (cert.credential_url) {
        btn_link.href = cert.credential_url;
        btn_link.style.display = 'inline-flex';
    } else {
        btn_link.style.display = 'none';
    }

    openModal('modal_viewer');
}

/* =====================================================
   MODALES — SISTEMA GENÉRICO
===================================================== */
function openModal(id_modal) {
    document.getElementById(id_modal).classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal(id_modal) {
    document.getElementById(id_modal).classList.remove('open');
    document.body.style.overflow = '';
}

/** Cierra modales al hacer clic en el backdrop */
document.querySelectorAll('.modal_backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', e => {
        if (e.target === backdrop) closeModal(backdrop.id);
    });
});

/* =====================================================
   MODAL — PROYECTOS
===================================================== */
function selectType(type) {
    app.current_media_type = type;
    document.getElementById('type_video').classList.toggle('active', type === 'video');
    document.getElementById('type_image').classList.toggle('active', type === 'image');
    document.getElementById('video_fields').style.display = type === 'video' ? '' : 'none';
    document.getElementById('image_fields').style.display = type === 'image' ? '' : 'none';
}

function previewImage() {
    const url = document.getElementById('media_url_image').value.trim();
    const preview = document.getElementById('image_preview');
    const img = document.getElementById('image_preview_src');
    if (url) { img.src = url; preview.classList.add('visible'); }
    else { preview.classList.remove('visible'); }
}

function openProjectModal(editId = null) {
    app.editing_project_id = editId;
    const isEdit = editId !== null;

    document.getElementById('modal_project_title').textContent = isEdit ? 'Editar Proyecto' : 'Agregar Proyecto';

    // Limpiar campos
    ['media_url_video', 'media_url_image', 'project_name',
        'project_desc', 'project_tags', 'project_github', 'project_live'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = '';
        });
    selectType('video');
    document.getElementById('image_preview').classList.remove('visible');

    if (isEdit) {
        const p = app.projects.find(x => x.id === editId);
        if (p) {
            selectType(p.type);
            const urlField = p.type === 'video' ? 'media_url_video' : 'media_url_image';
            document.getElementById(urlField).value = p.media_url;
            document.getElementById('project_name').value = p.name;
            document.getElementById('project_desc').value = p.desc;
            document.getElementById('project_tags').value = p.tags.join(', ');
            document.getElementById('project_github').value = p.github;
            document.getElementById('project_live').value = p.live;
            document.getElementById('project_status').value = p.status;
            if (p.type === 'image') previewImage();
        }
    }
    openModal('modal_project');
}

function saveProject() {
    const isVideo = app.current_media_type === 'video';
    const name = document.getElementById('project_name').value.trim();
    if (!name) { alert('El name del proyecto es obligatorio.'); return; }

    const media_url = isVideo
        ? document.getElementById('media_url_video').value.trim()
        : document.getElementById('media_url_image').value.trim();

    const proyecto = {
        id: app.editing_project_id || Date.now(),
        name,
        type: app.current_media_type,
        media_url,
        desc: document.getElementById('project_desc').value.trim(),
        tags: document.getElementById('project_tags').value.split(',').map(t => t.trim()).filter(Boolean),
        status: document.getElementById('project_status').value,
        github: document.getElementById('project_github').value.trim(),
        live: document.getElementById('project_live').value.trim(),
    };

    if (app.editing_project_id) {
        const index = app.projects.findIndex(p => p.id === app.editing_project_id);
        app.projects[index] = proyecto;
    } else {
        app.projects.push(proyecto);
    }

    closeModal('modal_project');
    renderProjects();
}

function editProject(id) { openModalProyecto(id); }

function deleteProject(id) {
    if (!confirm('¿Eliminar este proyecto?')) return;
    app.projects = app.projects.filter(p => p.id !== id);
    renderProjects();
}

/* =====================================================
   MODAL — CERTIFICACIONES
===================================================== */
function previewCert() {
    const url = document.getElementById('cert_image_url').value.trim();
    const preview = document.getElementById('cert_preview');
    const img = document.getElementById('cert_preview_src');
    if (url) { img.src = url; preview.classList.add('visible'); }
    else { preview.classList.remove('visible'); }
}

function openCertModal(editId = null) {
    app.editing_cert_id = editId;
    document.getElementById('modal_cert_title').textContent = editId ? 'Editar Certificación' : 'Agregar Certificación';

    ['cert_image_url', 'cert_name', 'cert_issuer',
        'cert_date', 'cert_category', 'cert_credential_url'].forEach(id => {
            document.getElementById(id).value = '';
        });
    document.getElementById('cert_preview').classList.remove('visible');

    if (editId) {
        const c = app.certs.find(x => x.id === editId);
        if (c) {
            document.getElementById('cert_image_url').value = c.img_url;
            document.getElementById('cert_name').value = c.name;
            document.getElementById('cert_issuer').value = c.issuer;
            document.getElementById('cert_date').value = c.date;
            document.getElementById('cert_category').value = c.category;
            document.getElementById('cert_credential_url').value = c.credential_url;
            previewCert();
        }
    }
    openModal('modal_cert');
}

function saveCert() {
    const name = document.getElementById('cert_name').value.trim();
    if (!name) { alert('El name del certificado es obligatorio.'); return; }

    const cert = {
        id: app.editing_cert_id || Date.now(),
        name,
        issuer: document.getElementById('cert_issuer').value.trim(),
        date: document.getElementById('cert_date').value.trim(),
        category: document.getElementById('cert_category').value.trim(),
        img_url: document.getElementById('cert_image_url').value.trim(),
        credential_url: document.getElementById('cert_credential_url').value.trim(),
    };

    if (app.editing_cert_id) {
        const index = app.certs.findIndex(c => c.id === app.editing_cert_id);
        app.certs[index] = cert;
    } else {
        app.certs.push(cert);
    }

    closeModal('modal_cert');
    renderCategoryFilters();
    renderCerts();
}

function editCert(id) { openModalCert(id); }

function deleteCert(id) {
    if (!confirm('¿Eliminar esta certificación?')) return;
    app.certs = app.certs.filter(c => c.id !== id);
    renderCategoryFilters();
    renderCerts();
}

/* =====================================================
   FORMULARIO DE CONTACTO
===================================================== */
document.getElementById('contact_form').addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = document.getElementById('btn_send');
    const originalText = btn.textContent;

    btn.textContent = '✓ ¡Mensaje enviado!';
    btn.style.background = '#22c55e';
    btn.style.borderColor = '#22c55e';
    btn.disabled = true;
    this.reset();

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.disabled = false;
    }, 3500);
});

/* =====================================================
   TEMA OSCURO / CLARO
===================================================== */
const btn_theme = document.getElementById('btn_theme');
const themeLabel = document.getElementById('theme_label');

btn_theme.addEventListener('click', () => {
    const html = document.documentElement;
    const isDark = html.dataset.theme === 'dark';
    html.dataset.theme = isDark ? 'light' : 'dark';
    themeLabel.textContent = isDark ? 'light' : 'dark';
});

/* =====================================================
   SCROLL REVEAL — IntersectionObserver
===================================================== */
let revealObserver = null;

function activateObservers() {
    const elementos = document.querySelectorAll('.reveal:not(.visible)');
    if (!revealObserver) {
        revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
    }
    elementos.forEach(el => revealObserver.observe(el));
}

/* =====================================================
   TECLADO — ESC para cerrar modales
===================================================== */
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal_backdrop.open').forEach(m => closeModal(m.id));
    }
    if (e.key === 'ArrowLeft') tickerNav(-1);
    if (e.key === 'ArrowRight') tickerNav(1);
});

/* =====================================================
   GITHUB API — AUTO-FETCH CERT IMAGE URLS
   Fetches the file list from the GitHub repo so cert
   image URLs are always up-to-date without a backend.
===================================================== */

const GITHUB_REPO = 'andresbermudezdeveloper/certificaciones';
const GITHUB_IMG_PATH = 'img';
const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_IMG_PATH}`;

/**
 * Fetches all .png filenames from the GitHub repo and maps them
 * to existing certs by matching the filename to the cert's img_url.
 * For any filename that doesn't match an existing cert, a new entry
 * is created automatically.
 */
async function syncCertsFromGithub() {
    try {
        const response = await fetch(GITHUB_API_URL, {
            headers: { 'Accept': 'application/vnd.github.v3+json' }
        });

        if (!response.ok) {
            console.warn(`GitHub API returned ${response.status} — using static cert list.`);
            return;
        }

        const files = await response.json();
        const imageFiles = files.filter(f => f.type === 'file' && /\.(png|jpg|jpeg|webp)$/i.test(f.name));

        if (!imageFiles.length) return;

        // Build a lookup from filename → existing cert
        const certByFilename = {};
        app.certs.forEach(c => {
            if (c.img_url) {
                const filename = c.img_url.split('/').pop();
                certByFilename[filename] = c;
            }
        });

        // Update existing certs with confirmed raw URLs from GitHub API
        // and add any new images that aren't in the static list yet
        const updatedCerts = [];
        let nextId = Math.max(...app.certs.map(c => c.id), 0) + 1;

        imageFiles.forEach(file => {
            const rawUrl = file.download_url;
            if (certByFilename[file.name]) {
                // Update URL with the confirmed download URL from GitHub API
                certByFilename[file.name].img_url = rawUrl;
                updatedCerts.push(certByFilename[file.name]);
            } else {
                // New image found in repo — auto-create a cert entry
                const guessedName = file.name
                    .replace(/\.(png|jpg|jpeg|webp)$/i, '')
                    .replace(/_/g, ' ')
                    .replace(/^[a-z]+\s+(certificado|insignia)\s+/i, '')
                    .split(' ')
                    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(' ');

                const issuerMatch = file.name.match(/^([^_]+)/);
                const issuer = issuerMatch
                    ? issuerMatch[1].charAt(0).toUpperCase() + issuerMatch[1].slice(1)
                    : '';

                updatedCerts.push({
                    id: nextId++,
                    name: guessedName,
                    issuer,
                    date: '',
                    category: issuer,
                    img_url: rawUrl,
                    credential_url: '',
                });
            }
        });

        // Preserve certs that have no img_url (manually added without image)
        const certsWithoutImage = app.certs.filter(c => !c.img_url);
        app.certs = [...updatedCerts, ...certsWithoutImage];

        console.log(`✓ Synced ${updatedCerts.length} certs from GitHub (${imageFiles.length} images found).`);
    } catch (err) {
        console.warn('Could not sync certs from GitHub:', err.message);
    }
}

/* =====================================================
   INITIALIZATION
===================================================== */
async function initialize() {
    document.getElementById('current_year').textContent = new Date().getFullYear();

    renderSkills();
    renderTimeline();
    renderProjects();

    // Show certs immediately with static data, then refresh after GitHub sync
    renderCategoryFilters();
    renderCerts();
    activateObservers();

    // Fetch live image list from GitHub in the background
    await syncCertsFromGithub();

    // Re-render certs with updated URLs
    renderCategoryFilters();
    renderCerts();
    activateObservers();
}

initialize();