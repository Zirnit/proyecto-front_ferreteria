document.addEventListener('DOMContentLoaded', () => {
    let data = {
        "productos": [
            {
                "nombre_producto": "Martillo de Acero",
                "descripcion": "Martillo de acero forjado con mango ergonómico antideslizante.",
                "precio": 100,
                "cantidad": 10,
                "fecha_creacion": "2023-01-01"
            },
            {
                "nombre_producto": "Destornillador Phillips",
                "descripcion": "Destornillador Phillips de alta precisión con punta magnética.",
                "precio": 200,
                "cantidad": 20,
                "fecha_creacion": "2023-02-01"
            },
            {
                "nombre_producto": "Llave Inglesa Ajustable",
                "descripcion": "Llave inglesa ajustable de acero inoxidable con escala métrica.",
                "precio": 150,
                "cantidad": 15,
                "fecha_creacion": "2023-03-01"
            },
            {
                "nombre_producto": "Taladro Inalámbrico",
                "descripcion": "Taladro inalámbrico de 18V con batería de larga duración y cargador rápido.",
                "precio": 250,
                "cantidad": 25,
                "fecha_creacion": "2023-04-01"
            },
            {
                "nombre_producto": "Sierra Circular",
                "descripcion": "Sierra circular de 7-1/4 pulgadas con motor de alta potencia y guía láser.",
                "precio": 300,
                "cantidad": 30,
                "fecha_creacion": "2023-05-01"
            },
            {
                "nombre_producto": "Cinta Métrica",
                "descripcion": "Cinta métrica de 5 metros con carcasa resistente y bloqueo automático.",
                "precio": 350,
                "cantidad": 35,
                "fecha_creacion": "2023-06-01"
            },
            {
                "nombre_producto": "Alicate de Corte",
                "descripcion": "Alicate de corte diagonal con mangos aislados y cuchillas endurecidas.",
                "precio": 400,
                "cantidad": 40,
                "fecha_creacion": "2023-07-01"
            },
            {
                "nombre_producto": "Nivel de Burbuja",
                "descripcion": "Nivel de burbuja de 24 pulgadas con burbujas horizontales y verticales.",
                "precio": 450,
                "cantidad": 45,
                "fecha_creacion": "2023-08-01"
            },
            {
                "nombre_producto": "Juego de Llaves Allen",
                "descripcion": "Juego de llaves Allen de 10 piezas con acabado en cromo vanadio.",
                "precio": 500,
                "cantidad": 50,
                "fecha_creacion": "2023-09-01"
            },
            {
                "nombre_producto": "Pistola de Calor",
                "descripcion": "Pistola de calor de 1500W con control de temperatura variable y boquillas intercambiables.",
                "precio": 550,
                "cantidad": 55,
                "fecha_creacion": "2023-10-01"
            }
        ]
    };

    const productList = document.getElementById('product-list');
    data.productos.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        const currentDate = new Date();
        const creationDate = new Date(product.fecha_creacion);
        const timeDiff = Math.abs(currentDate - creationDate);
        const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        productDiv.innerHTML = `
            <div class="info">
            <p class="name">${product.nombre_producto}</p>
            <p class="description">${product.descripcion}</p>
            <p class="price">$${product.precio}</p>
            <p class="quantity">Cantidad: ${product.cantidad}</p>
            <p class="date">Fecha de creación: ${product.fecha_creacion}</p>
            <p class="calc-date">Tiempo: ${daysDiff} días</p>
            </div>
        `;
        
        productList.appendChild(productDiv);
    });
});

