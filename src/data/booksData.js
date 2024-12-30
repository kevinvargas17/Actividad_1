import libro1 from '../img/Libros/libro1.jpg';
import libro2 from '../img/Libros/libro2.jpg';
import libro3 from '../img/Libros/libro3.jpg';
import libro4 from '../img/Libros/libro4.jpg';
import libro5 from '../img/Libros/libro5.jpg';
import libro6 from '../img/Libros/libro6.jpg';
import libro7 from '../img/Libros/libro7.jpg';
import libro8 from '../img/Libros/libro8.jpg';
import libro9 from '../img/Libros/libro9.jpg';
import libro10 from '../img/Libros/libro10.jpg';
import libro11 from '../img/Libros/libro11.jpg';
import libro12 from '../img/Libros/libro12.jpg';
import libro13 from '../img/Libros/libro13.jpg';
import libro14 from '../img/Libros/libro14.jpg';
import libro15 from '../img/Libros/libro15.jpg';
import libro16 from '../img/Libros/libro16.jpg';
import libro17 from '../img/Libros/libro17.jpg';
import libro18 from '../img/Libros/libro18.jpg';
import libro19 from '../img/Libros/libro19.jpg';
import libro20 from '../img/Libros/libro20.jpg';

// Tasa de cambio aproximada 1 USD = 4000 COP
const usdToCOP = 4000;

const books = [
  { 
    id: 1, 
    image: libro1, 
    title: "De Mí Para Mí, La Tormenta Pasará (Spanish Edition)", 
    edition: "Edición en Español", 
    author: "Nacarid Portal", 
    rating: "4.8", 
    reviews: "1034", 
    format: "Pasta blanda", 
    price: "74040", 
    originalPrice: "87960", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], // Cambié esto para que sea un array
    otherFormat: "Audiolibro" 
  },
  { 
    id: 2, 
    image: libro2, 
    title: "50 Cápsulas de Amor Propio", 
    edition: "Edición en Español", 
    author: "Sara Espejo", 
    rating: "4.9", 
    reviews: "1289", 
    format: "Pasta blanda", 
    price: "66480", 
    originalPrice: "71960", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], // Cambié esto también
    otherFormat: "Audiolibro" 
  },
  { 
    id: 3, 
    image: libro3, 
    title: "El Poder de la Disciplina", 
    edition: "Edición en Español", 
    author: "Daniel Habif", 
    rating: "4.7", 
    reviews: "958", 
    format: "Pasta blanda", 
    price: "83960", 
    originalPrice: "10,000", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], 
    otherFormat: "Kindle" 
  },
  { 
    id: 4, 
    image: libro4, 
    title: "La Magia del Orden", 
    edition: "Edición en Español", 
    author: "Marie Kondo", 
    rating: "4.6", 
    reviews: "1245", 
    format: "Pasta blanda", 
    price: "70000", 
    originalPrice: "79960", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], 
    otherFormat: "Kindle" 
  },
  { 
    id: 5, 
    image: libro5, 
    title: "El Alquimista", 
    edition: "Edición en Español", 
    author: "Paulo Coelho", 
    rating: "4.9", 
    reviews: "3645", 
    format: "Pasta blanda", 
    price: "59960", 
    originalPrice: "75960", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], 
    otherFormat: "Audiolibro" 
  },
  { 
    id: 6, 
    image: libro6, 
    title: "De Mí Para Mí, La Tormenta Pasará", 
    edition: "Edición en Español", 
    author: "Nacarid Portal", 
    rating: "4.8", 
    reviews: "1034", 
    format: "Pasta blanda", 
    price: "74040", 
    originalPrice: "87960", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], 
    otherFormat: "Audiolibro" 
  },
  { 
    id: 7, 
    image: libro7, 
    title: "50 Cápsulas de Amor Propio", 
    edition: "Edición en Español", 
    author: "Sara Espejo", 
    rating: "4.9", 
    reviews: "1289", 
    format: "Pasta blanda", 
    price: "66480", 
    originalPrice: "71960", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], 
    otherFormat: "Audiolibro" 
  },
  { 
    id: 8, 
    image: libro8, 
    title: "El Poder de la Disciplina", 
    edition: "Edición en Español", 
    author: "Daniel Habif", 
    rating: "4.7", 
    reviews: "958", 
    format: "Pasta blanda", 
    price: "83960", 
    originalPrice: "10,000", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], 
    otherFormat: "Kindle" 
  },
  { 
    id: 9, 
    image: libro9, 
    title: "La Magia del Orden", 
    edition: "Edición en Español", 
    author: "Marie Kondo", 
    rating: "4.6", 
    reviews: "1245", 
    format: "Pasta blanda", 
    price: "70000", 
    originalPrice: "79960", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], 
    otherFormat: "Kindle" 
  },
  { 
    id: 10, 
    image: libro10, 
    title: "El Alquimista", 
    edition: "Edición en Español", 
    author: "Paulo Coelho", 
    rating: "4.9", 
    reviews: "3645", 
    format: "Pasta blanda", 
    price: "59960", 
    originalPrice: "75960", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], 
    otherFormat: "Audiolibro" 
  },
  { 
    id: 11, 
    image: libro11, 
    title: "De Mí Para Mí, La Tormenta Pasará (Spanish Edition)", 
    edition: "Edición en Español", 
    author: "Nacarid Portal", 
    rating: "4.8", 
    reviews: "1034", 
    format: "Pasta blanda", 
    price: "74040", 
    originalPrice: "87960", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], 
    otherFormat: "Audiolibro" 
  },
  { 
    id: 12, 
    image: libro12, 
    title: "50 Cápsulas de Amor Propio", 
    edition: "Edición en Español", 
    author: "Sara Espejo", 
    rating: "4.9", 
    reviews: "1289", 
    format: "Pasta blanda", 
    price: "66480", 
    originalPrice: "71960", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], 
    otherFormat: "Audiolibro" 
  },
  { 
    id: 13, 
    image: libro13, 
    title: "El Poder de la Disciplina", 
    edition: "Edición en Español", 
    author: "Daniel Habif", 
    rating: "4.7", 
    reviews: "958", 
    format: "Pasta blanda", 
    price: "83960", 
    originalPrice: "10,000", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], 
    otherFormat: "Kindle" 
  },
  { 
    id: 14, 
    image: libro14, 
    title: "La Magia del Orden", 
    edition: "Edición en Español", 
    author: "Marie Kondo", 
    rating: "4.6", 
    reviews: "1245", 
    format: "Pasta blanda", 
    price: "70000", 
    originalPrice: "79960", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], 
    otherFormat: "Kindle" 
  },
  { 
    id: 15, 
    image: libro15, 
    title: "El Alquimista", 
    edition: "Edición en Español", 
    author: "Paulo Coelho", 
    rating: "4.9", 
    reviews: "3645", 
    format: "Pasta blanda", 
    price: "59960", 
    originalPrice: "75960", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], 
    otherFormat: "Audiolibro" 
  },
  { 
    id: 16, 
    image: libro16, 
    title: "De Mí Para Mí, La Tormenta Pasará", 
    edition: "Edición en Español", 
    author: "Nacarid Portal", 
    rating: "4.8", 
    reviews: "1034", 
    format: "Pasta blanda", 
    price: "74040", 
    originalPrice: "87960", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], 
    otherFormat: "Audiolibro" 
  },
  { 
    id: 17, 
    image: libro17, 
    title: "50 Cápsulas de Amor Propio", 
    edition: "Edición en Español", 
    author: "Sara Espejo", 
    rating: "4.9", 
    reviews: "1289", 
    format: "Pasta blanda", 
    price: "66480", 
    originalPrice: "71960", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], 
    otherFormat: "Audiolibro" 
  },
  { 
    id: 18, 
    image: libro18, 
    title: "El Poder de la Disciplina", 
    edition: "Edición en Español", 
    author: "Daniel Habif", 
    rating: "4.7", 
    reviews: "958", 
    format: "Pasta blanda", 
    price: "83960", 
    originalPrice: "10,000", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], 
    otherFormat: "Kindle" 
  },
  { 
    id: 19, 
    image: libro19, 
    title: "La Magia del Orden", 
    edition: "Edición en Español", 
    author: "Marie Kondo", 
    rating: "4.6", 
    reviews: "1245", 
    format: "Pasta blanda", 
    price: "70000", 
    originalPrice: "79960", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], 
    otherFormat: "Kindle" 
  },
  { 
    id: 20, 
    image: libro20, 
    title: "El Alquimista", 
    edition: "Edición en Español", 
    author: "Paulo Coelho", 
    rating: "4.9", 
    reviews: "3645", 
    format: "Pasta blanda", 
    price: "59960", 
    originalPrice: "75960", 
    delivery: "Entrega GRATIS", 
    options: ["Nuevo", "Usado"], 
    otherFormat: "Audiolibro" 
  }
];

export default books;
