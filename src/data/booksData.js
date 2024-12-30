
import libro1 from '/public/assets/Libros/libro2.jpg';
import libro2 from '/assets/Libros/libro2.jpg';

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
    image: '/public/assets/Libros/libro3.jpg', 
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
    image: '/public/assets/Libros/libro4.jpg', 
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
    image: '/public/assets/Libros/libro5.jpg', 
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
    image: '/public/assets/Libros/libro6.jpg', 
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
    image: '/public/assets/Libros/libro7.jpg', 
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
    image: '/public/assets/Libros/libro8.jpg', 
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
    image: '/public/assets/Libros/libro9.jpg', 
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
    image: '/public/assets/Libros/libro10.jpg', 
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
    image: '/public/assets/Libros/libro11.jpg', 
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
    image: '/public/assets/Libros/libro12.jpg', 
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
    image: '/public/assets/Libros/libro13.jpg', 
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
    image: '/public/assets/Libros/libro14.jpg', 
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
    image: '/public/assets/Libros/libro15.jpg', 
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
    image: '/public/assets/Libros/libro16.jpg', 
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
    image: '/public/assets/Libros/libro17.jpg', 
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
    image: '/public/assets/Libros/libro18.jpg', 
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
    image: '/public/assets/Libros/libro19.jpg', 
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
    image: '/public/assets/Libros/libro20.jpg', 
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
