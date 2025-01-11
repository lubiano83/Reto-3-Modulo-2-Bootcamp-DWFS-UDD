class Libro {
    constructor(titulo, autor, año, disponible = false) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.disponible = disponible;
    }
}

class Biblioteca {
    #date = new Date();

    constructor() {
        this.libros = [];
    }

    agregarLibro(libro) {
        try {
            if (libro instanceof Libro) { // Verifica que sea una instancia de Libro o sus subclases
                this.libros.push(libro);
                console.log(`El libro de título: ${libro.titulo}, fue añadido a la biblioteca.`);
            } else {
                throw new Error("El objeto añadido no es un libro válido.");
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    buscarPorTitulo(titulo) {
        const libroBuscado = this.libros.find(libro => libro.titulo === titulo);
        console.log("Libro Buscado:", libroBuscado);
        return libroBuscado;
    }

    prestarLibro(titulo) {
        const libroBuscado = this.libros.find(libro => libro.titulo === titulo);
        if (!libroBuscado) return console.log("Ese libro no lo tenemos de momento.");
        if (libroBuscado.disponible === true) {
            libroBuscado.disponible = false;
            console.log(`El libro de título: ${libroBuscado.titulo}, fue prestado de manera exitosa el: ${this.#date}.`);
        } else {
            console.log(`El libro de título: ${libroBuscado.titulo}, no está disponible.`);
        }
    }

    mostrarLibros() {
        this.libros.forEach(libro => {
            console.log(libro);
        });
    }
}

class LibroInfantil extends Libro {
    constructor(titulo, autor, año, disponible = false, edadMinima) {
        super(titulo, autor, año, disponible);
        this.edadMinima = edadMinima;
    }
}

// Crear una instancia de Biblioteca
const biblioteca = new Biblioteca();

// Agregar libros normales
biblioteca.agregarLibro(new Libro("aaaa", "bbbb", 2025));
biblioteca.agregarLibro(new Libro("cccc", "dddd", 2024));
biblioteca.agregarLibro(new Libro("eeee", "ffff", 2023));

// Agregar libros infantiles
const libroInfantil1 = new LibroInfantil("Cuentos para niños", "Hans Christian Andersen", 1835, true, 6);
const libroInfantil2 = new LibroInfantil("El Principito", "Antoine de Saint-Exupéry", 1943, true, 8);
biblioteca.agregarLibro(libroInfantil1);
biblioteca.agregarLibro(libroInfantil2);

// Métodos
biblioteca.buscarPorTitulo("aaaa");
biblioteca.prestarLibro("aaaa");
biblioteca.mostrarLibros();