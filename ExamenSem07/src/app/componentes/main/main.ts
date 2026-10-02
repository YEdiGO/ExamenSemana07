import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  // Idiomas disponibles
  idiomas = [
    { bandera: '🇬🇧', nombre: 'Inglés', descripcion: 'El idioma global para estudiar, viajar y trabajar.' },
    { bandera: '🇫🇷', nombre: 'Francés', descripcion: 'El idioma del arte, la cultura y la diplomacia.' },
    { bandera: '🇩🇪', nombre: 'Alemán', descripcion: 'Ideal para estudiar e investigar en Europa.' },
    { bandera: '🇮🇹', nombre: 'Italiano', descripcion: 'Aprende la lengua de la gastronomía y el diseño.' },
    { bandera: '🇧🇷', nombre: 'Portugués', descripcion: 'Habla con más de 250 millones de personas.' },
    { bandera: '🇨🇳', nombre: 'Chino mandarín', descripcion: 'Un idioma clave para los negocios del futuro.' },
  ];

  // Programas de estudio
  programas = [
    { nombre: 'Regular', detalle: '3 veces por semana, ritmo constante.' },
    { nombre: 'Intensivo', detalle: 'Diario, avanza un nivel en menos tiempo.' },
    { nombre: 'Conversación', detalle: 'Practica hablar con docentes y compañeros.' },
    { nombre: 'Certificaciones', detalle: 'Preparación para TOEFL, IELTS, DELF y otros.' },
  ];

  // Niveles de aprendizaje
  niveles = [
    { codigo: 'A1-A2', nombre: 'Básico', descripcion: 'Frases simples y conversaciones del día a día.' },
    { codigo: 'B1-B2', nombre: 'Intermedio', descripcion: 'Te comunicas con fluidez en temas conocidos.' },
    { codigo: 'C1-C2', nombre: 'Avanzado', descripcion: 'Dominas el idioma en contextos académicos y laborales.' },
  ];

  // Modalidades de enseñanza
  modalidades = [
    { icono: '🏫', nombre: 'Presencial', detalle: 'Clases en nuestras aulas con docentes en vivo.' },
    { icono: '💻', nombre: 'Virtual', detalle: 'Clases en vivo por videollamada desde tu casa.' },
    { icono: '🔀', nombre: 'Semipresencial', detalle: 'Combina clases en aula y clases en línea.' },
  ];

  // Docentes y sus especialidades
  docentes = [
    { nombre: 'Prof. Emily Carter', especialidad: 'Inglés', detalle: 'Certificación IELTS y TOEFL', iniciales: 'EC' },
    { nombre: 'Prof. Claire Dubois', especialidad: 'Francés', detalle: 'Diploma DELF/DALF', iniciales: 'CD' },
    { nombre: 'Prof. Hans Müller', especialidad: 'Alemán', detalle: 'Certificación Goethe', iniciales: 'HM' },
    { nombre: 'Prof. Li Wei', especialidad: 'Chino mandarín', detalle: 'Certificación HSK', iniciales: 'LW' },
  ];

  // Horarios
  horarios = [
    { turno: 'Mañana', dias: 'Lunes a viernes', hora: '8:00 a. m. - 12:00 m.' },
    { turno: 'Tarde', dias: 'Lunes a viernes', hora: '2:00 p. m. - 6:00 p. m.' },
    { turno: 'Noche', dias: 'Lunes a viernes', hora: '6:30 p. m. - 9:30 p. m.' },
    { turno: 'Sabatino', dias: 'Sábados', hora: '9:00 a. m. - 1:00 p. m.' },
  ];

  // Promociones vigentes
  promociones = [
    { titulo: 'Matrícula gratis', descuento: '100% dto.', vigencia: 'Hasta el 31 de octubre' },
    { titulo: 'Trae a un amigo', descuento: '2x1', vigencia: 'Hasta el 15 de noviembre' },
    { titulo: 'Pago por ciclo completo', descuento: '20% dto.', vigencia: 'Hasta el 30 de noviembre' },
  ];

  // Testimonios de estudiantes
  testimonios = [
    { estudiante: 'Lucía Paredes', idioma: 'Inglés', comentario: 'Pasé de nivel básico a intermedio en un año. Las clases son muy dinámicas.', estrellas: '★★★★★' },
    { estudiante: 'Diego Rojas', idioma: 'Alemán', comentario: 'Los docentes explican con paciencia. Ya aprobé mi examen Goethe.', estrellas: '★★★★★' },
    { estudiante: 'Andrea Flores', idioma: 'Francés', comentario: 'Me encantan los horarios flexibles, pude estudiar y trabajar.', estrellas: '★★★★☆' },
  ];
}