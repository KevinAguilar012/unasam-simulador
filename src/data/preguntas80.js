// Data pool of 80 high-quality questions for UNASAM Admission Simulator
// Distributed across Aritmética, Álgebra, Geometría, Trigonometría, Física, Química, Biología, Lenguaje, Literatura, Historia, Geografía, Economía, Psicología y Cívica.

const PREGUNTAS_80 = [
  // 1-10: Matemática y Razonamiento Matemático
  {
    id: 1,
    curso: "Aritmética",
    enunciado: "Si el conjunto A = {a + b, 12, 2a - b} es un conjunto unitario, determine el valor de a × b.",
    opciones: {
      A: "24",
      B: "30",
      C: "32",
      D: "36",
      E: "40"
    },
    respuestaCorrecta: "C",
    area: "A"
  },
  {
    id: 2,
    curso: "Aritmética",
    enunciado: "Un padre decide repartir S/. 2400 entre sus tres hijos en forma directamente proporcional a sus edades que son 8, 12 y 20 años. ¿Cuánto recibe el menor de los hijos?",
    opciones: {
      A: "S/. 480",
      B: "S/. 720",
      C: "S/. 960",
      D: "S/. 1200",
      E: "S/. 400"
    },
    respuestaCorrecta: "A",
    area: "A"
  },
  {
    id: 3,
    curso: "Álgebra",
    enunciado: "Si se cumple que x + 1/x = 3, calcule el valor de x² + 1/x².",
    opciones: {
      A: "5",
      B: "7",
      C: "9",
      D: "11",
      E: "6"
    },
    respuestaCorrecta: "B",
    area: "A"
  },
  {
    id: 4,
    curso: "Álgebra",
    enunciado: "Determine el valor de k para el cual la ecuación cuadrática x² - kx + 9 = 0 presenta raíces reales e iguales.",
    opciones: {
      A: "±3",
      B: "±9",
      C: "±6",
      D: "0",
      E: "±12"
    },
    respuestaCorrecta: "C",
    area: "A"
  },
  {
    id: 5,
    curso: "Geometría",
    enunciado: "En un triángulo ABC, se traza la bisectriz interior BD. Si AB = 6 cm, BC = 8 cm y AC = 7 cm, calcule la longitud del segmento AD.",
    opciones: {
      A: "3 cm",
      B: "4 cm",
      C: "3.5 cm",
      D: "2.5 cm",
      E: "2 cm"
    },
    respuestaCorrecta: "A",
    area: "A"
  },
  {
    id: 6,
    curso: "Geometría",
    enunciado: "Calcule el volumen de un cilindro de revolución si el radio de su base mide 4 m y su altura es igual al diámetro de la base.",
    opciones: {
      A: "64π m³",
      B: "128π m³",
      C: "32π m³",
      D: "96π m³",
      E: "16π m³"
    },
    respuestaCorrecta: "B",
    area: "A"
  },
  {
    id: 7,
    curso: "Trigonometría",
    enunciado: "Si sen(θ) = 3/5 y θ pertenece al primer cuadrante, calcule el valor de la expresión E = sec(θ) + tan(θ).",
    opciones: {
      A: "1",
      B: "2",
      C: "1.5",
      D: "2.5",
      E: "3"
    },
    respuestaCorrecta: "B",
    area: "A"
  },
  {
    id: 8,
    curso: "Trigonometría",
    enunciado: "Calcule el valor exacto de la expresión M = sen(150°) + cos(240°).",
    opciones: {
      A: "0",
      B: "1",
      C: "-1",
      D: "1/2",
      E: "-1/2"
    },
    respuestaCorrecta: "A",
    area: "A"
  },
  {
    id: 9,
    curso: "Aptitud Matemática",
    enunciado: "Si 6 obreros pueden construir una zanja en 12 días trabajando 8 horas diarias, ¿cuántos días tardarán 8 obreros en construir la misma zanja trabajando 9 horas diarias?",
    opciones: {
      A: "6 días",
      B: "8 días",
      C: "10 días",
      D: "12 días",
      E: "7 días"
    },
    respuestaCorrecta: "B",
    area: "A"
  },
  {
    id: 10,
    curso: "Aptitud Matemática",
    enunciado: "Halle el término número 15 en la siguiente progresión aritmética: 7; 11; 15; 19; ...",
    opciones: {
      A: "59",
      B: "63",
      C: "67",
      D: "71",
      E: "55"
    },
    respuestaCorrecta: "B",
    area: "A"
  },

  // 11-20: Ciencias Naturales (Física y Química)
  {
    id: 11,
    curso: "Física",
    enunciado: "Un proyectil es lanzado verticalmente hacia arriba con una velocidad de 40 m/s. Despreciando la resistencia del aire, determine la altura máxima que alcanza. (g = 10 m/s²)",
    opciones: {
      A: "40 m",
      B: "60 m",
      C: "80 m",
      D: "100 m",
      E: "120 m"
    },
    respuestaCorrecta: "C",
    area: "A"
  },
  {
    id: 12,
    curso: "Física",
    enunciado: "Tres resistencias eléctricas de 12 Ω cada una se conectan en paralelo a una fuente de voltaje. Calcule la resistencia equivalente del circuito.",
    opciones: {
      A: "36 Ω",
      B: "4 Ω",
      C: "6 Ω",
      D: "8 Ω",
      E: "12 Ω"
    },
    respuestaCorrecta: "B",
    area: "A"
  },
  {
    id: 13,
    curso: "Física",
    enunciado: "Un bloque de 4 kg reposa sobre una mesa horizontal lisa. Si se le aplica una fuerza constante de 16 N en dirección horizontal, determine la velocidad que adquiere al cabo de 5 segundos.",
    opciones: {
      A: "10 m/s",
      B: "15 m/s",
      C: "20 m/s",
      D: "25 m/s",
      E: "30 m/s"
    },
    respuestaCorrecta: "C",
    area: "A"
  },
  {
    id: 14,
    curso: "Química",
    enunciado: "En el proceso de fotosíntesis realizado por las plantas terrestres, ¿cuál es el gas absorbido de la atmósfera para sintetizar glucosa?",
    opciones: {
      A: "Oxígeno (O2)",
      B: "Monóxido de carbono (CO)",
      C: "Dióxido de carbono (CO2)",
      D: "Nitrógeno (N2)",
      E: "Metano (CH4)"
    },
    respuestaCorrecta: "C",
    area: "E"
  },
  {
    id: 15,
    curso: "Química",
    enunciado: "Identifique cuál de los siguientes fenómenos corresponde estrictamente a un cambio o reacción química.",
    opciones: {
      A: "La fusión del hielo en agua líquida.",
      B: "La evaporación del alcohol etílico.",
      C: "La oxidación de un clavo de hierro expuesto al aire.",
      D: "La trituración de una roca de cuarzo.",
      E: "La disolución de azúcar en una taza de té."
    },
    respuestaCorrecta: "C",
    area: "E"
  },
  {
    id: 16,
    curso: "Química",
    enunciado: "Un átomo neutro presenta 26 protones y su número de masa es 56. ¿Cuántos electrones y neutrones posee respectivamente?",
    opciones: {
      A: "26 electrones y 30 neutrones",
      B: "26 electrones y 26 neutrones",
      C: "30 electrones y 26 neutrones",
      D: "30 electrones y 30 neutrones",
      E: "26 electrones y 56 neutrones"
    },
    respuestaCorrecta: "A",
    area: "E"
  },
  {
    id: 17,
    curso: "Biología",
    enunciado: "¿Cuál de las siguientes biomoléculas es la encargada de almacenar y transmitir la información genética en las células de los seres vivos?",
    opciones: {
      A: "Proteínas",
      B: "Lípidos",
      C: "Ácido desoxirribonucleico (ADN)",
      D: "Glúcidos",
      E: "Ácido ribonucleico (ARN)"
    },
    respuestaCorrecta: "C",
    area: "D"
  },
  {
    id: 18,
    curso: "Biología",
    enunciado: "El organelo citoplasmático que posee ADN propio y es el encargado de llevar a cabo la respiración celular aeróbica para la obtención de ATP es:",
    opciones: {
      A: "El lisosoma",
      B: "El cloroplasto",
      C: "El ribosoma",
      D: "La mitocondria",
      E: "El aparato de Golgi"
    },
    respuestaCorrecta: "D",
    area: "D"
  },
  {
    id: 19,
    curso: "Biología",
    enunciado: "El proceso de división celular que ocurre en las células germinales y da origen a cuatro células hijas haploides genéticamente distintas se denomina:",
    opciones: {
      A: "Mitosis",
      B: "Meiosis",
      C: "Bipartición",
      D: "Gemación",
      E: "Cariocinesis"
    },
    respuestaCorrecta: "B",
    area: "D"
  },
  {
    id: 20,
    curso: "Biología",
    enunciado: "La hormona producida por el páncreas que reduce los niveles de glucosa en la sangre al facilitar su ingreso en las células del cuerpo es:",
    opciones: {
      A: "El glucagón",
      B: "La adrenalina",
      C: "La tiroxina",
      D: "La insulina",
      E: "El cortisol"
    },
    respuestaCorrecta: "D",
    area: "D"
  },

  // 21-30: Humanidades (Lenguaje y Literatura)
  {
    id: 21,
    curso: "Lenguaje",
    enunciado: "Identifique la alternativa que presenta una oración compuesta por subordinación sustantiva.",
    opciones: {
      A: "Él trabaja en Huaraz y ella estudia en Caraz.",
      B: "El libro que me prestaste es muy interesante.",
      C: "Quien persevere en sus estudios logrará ingresar a la UNASAM.",
      D: "Llegamos tarde porque el tráfico estuvo pesado.",
      E: "Si estudias a conciencia, aprobarás el examen."
    },
    respuestaCorrecta: "C",
    area: "B"
  },
  {
    id: 22,
    curso: "Lenguaje",
    enunciado: "Señale la palabra que contiene un diptongo decreciente.",
    opciones: {
      A: "Cielo",
      B: "Paisaje",
      C: "Ciudad",
      D: "Cuidado",
      E: "Canción"
    },
    respuestaCorrecta: "B",
    area: "B"
  },
  {
    id: 23,
    curso: "Lenguaje",
    enunciado: "Identifique la oración en la cual se ha empleado correctamente la tilde diacrítica.",
    opciones: {
      A: "Quiero que el me de su opinión sobre el tema.",
      B: "Dé mas de sí mismo para lograr sus metas.",
      C: "Sé que tú necesitas más tiempo para estudiar.",
      D: "El té que te serví esta tibio.",
      E: "A mi no me parece que sea el camino correcto."
    },
    respuestaCorrecta: "C",
    area: "B"
  },
  {
    id: 24,
    curso: "Lenguaje",
    enunciado: "En la oración: 'El director entregó los diplomas a los estudiantes en el auditorio', ¿cuál es el objeto indirecto?",
    opciones: {
      A: "El director",
      B: "los diplomas",
      C: "a los estudiantes",
      D: "en el auditorio",
      E: "los diplomas a los estudiantes"
    },
    respuestaCorrecta: "C",
    area: "B"
  },
  {
    id: 25,
    curso: "Literatura",
    enunciado: "¿Quién es el autor de la celebrada novela indigenista peruana 'El mundo es ancho y ajeno', publicada en 1941?",
    opciones: {
      A: "José María Arguedas",
      B: "Ciro Alegría",
      C: "César Vallejo",
      D: "Mario Vargas Llosa",
      E: "Manuel González Prada"
    },
    respuestaCorrecta: "B",
    area: "B"
  },
  {
    id: 26,
    curso: "Literatura",
    enunciado: "El movimiento literario europeo de la segunda mitad del siglo XIX que se caracterizó por la representación objetiva de la realidad y el rechazo al sentimentalismo romántico es:",
    opciones: {
      A: "El Barroco",
      B: "El Neoclasicismo",
      C: "El Realismo",
      D: "El Modernismo",
      E: "El Vanguardismo"
    },
    respuestaCorrecta: "C",
    area: "B"
  },
  {
    id: 27,
    curso: "Literatura",
    enunciado: "¿A qué género literario pertenece la célebre obra clásica de Homero, 'La Ilíada', que narra los acontecimientos de la guerra de Troya?",
    opciones: {
      A: "Épico",
      B: "Lírico",
      C: "Dramático",
      D: "Narrativo",
      E: "Didáctico"
    },
    respuestaCorrecta: "A",
    area: "B"
  },
  {
    id: 28,
    curso: "Literatura",
    enunciado: "El poeta peruano César Vallejo es autor del poemario vanguardista publicado en 1922 que revolucionó la lírica en lengua española. Este libro se titula:",
    opciones: {
      A: "Los heraldos negros",
      B: "Trilce",
      C: "Poemas humanos",
      D: "España, aparta de mí este cáliz",
      E: "La ciudad y los perros"
    },
    respuestaCorrecta: "B",
    area: "B"
  },
  {
    id: 29,
    curso: "Aptitud Verbal",
    enunciado: "Identifique el sinónimo más adecuado para la palabra 'EFÍMERO'.",
    opciones: {
      A: "Duradero",
      B: "Eterno",
      C: "Pasajero",
      D: "Sagaz",
      E: "Fugitivo"
    },
    respuestaCorrecta: "C",
    area: "B"
  },
  {
    id: 30,
    curso: "Aptitud Verbal",
    enunciado: "Identifique el antónimo de la palabra 'AUSTERIDAD'.",
    opciones: {
      A: "Derroche",
      B: "Sencillez",
      C: "Sobriedad",
      D: "Pobreza",
      E: "Rigidez"
    },
    respuestaCorrecta: "A",
    area: "B"
  },

  // 31-40: Ciencias Sociales (Historia, Geografía y Economía)
  {
    id: 31,
    curso: "Historia del Perú",
    enunciado: "¿Qué cultura preincaica se desarrolló en la costa norte del Perú, destacando por su orfebrería de alta calidad, como el Tumi de oro?",
    opciones: {
      A: "Cultura Paracas",
      B: "Cultura Nasca",
      C: "Cultura Chimú / Sicán",
      D: "Cultura Chavín",
      E: "Cultura Tiahuanaco"
    },
    respuestaCorrecta: "C",
    area: "B"
  },
  {
    id: 32,
    curso: "Historia del Perú",
    enunciado: "La capitulación que firmaron los conquistadores españoles con la corona española en 1529 para iniciar formalmente la conquista del Tahuantinsuyo fue:",
    opciones: {
      A: "La Capitulación de Santa Fe",
      B: "La Capitulación de Toledo",
      C: "La Capitulación de Ayacucho",
      D: "La Capitulación de Burgos",
      E: "La Capitulación de Valladolid"
    },
    respuestaCorrecta: "B",
    area: "B"
  },
  {
    id: 33,
    curso: "Historia Universal",
    enunciado: "La Revolución Francesa de 1789 significó el fin del Antiguo Régimen en Francia. ¿Qué evento simbólico marca el inicio de esta revolución el 14 de julio?",
    opciones: {
      A: "La ejecución del rey Luis XVI.",
      B: "La toma de la Bastilla.",
      C: "La declaración de los Derechos del Hombre.",
      D: "El juramento del Juego de Pelota.",
      E: "La batalla de Waterloo."
    },
    respuestaCorrecta: "B",
    area: "B"
  },
  {
    id: 34,
    curso: "Historia Universal",
    enunciado: "¿En qué país europeo se originó el movimiento cultural y artístico denominado Renacimiento durante los siglos XIV y XV?",
    opciones: {
      A: "Francia",
      B: "España",
      C: "Italia",
      D: "Inglaterra",
      E: "Alemania"
    },
    respuestaCorrecta: "C",
    area: "B"
  },
  {
    id: 35,
    curso: "Geografía",
    enunciado: "¿Cuál es la cordillera más alta de los Andes peruanos, en la que se ubica el nevado Huascarán, pico más alto del país?",
    opciones: {
      A: "Cordillera Negra",
      B: "Cordillera Blanca",
      C: "Cordillera de Huayhuash",
      D: "Cordillera Volcánica",
      E: "Cordillera Azul"
    },
    respuestaCorrecta: "B",
    area: "B"
  },
  {
    id: 36,
    curso: "Geografía",
    enunciado: "El lago navegable más alto del mundo que compartimos geográficamente con el vecino país de Bolivia es el:",
    opciones: {
      A: "Lago Superior",
      B: "Lago Titicaca",
      C: "Lago de Maracaibo",
      D: "Lago Hurón",
      E: "Lago Victoria"
    },
    respuestaCorrecta: "B",
    area: "B"
  },
  {
    id: 37,
    curso: "Economía",
    enunciado: "A la fase del proceso económico que consiste en el traslado de los bienes y servicios producidos desde las unidades de producción (empresas) hacia las unidades de consumo (familias) se le denomina:",
    opciones: {
      A: "Producción",
      B: "Circulación",
      C: "Distribución",
      D: "Consumo",
      E: "Inversión"
    },
    respuestaCorrecta: "B",
    area: "C"
  },
  {
    id: 38,
    curso: "Economía",
    enunciado: "La entidad estatal autónoma del Perú que se encarga de regular la oferta monetaria, emitir billetes y monedas, y mantener la estabilidad de precios es:",
    opciones: {
      A: "El Ministerio de Economía y Finanzas (MEF)",
      B: "El Banco de la Nación",
      C: "El Banco Central de Reserva del Perú (BCRP)",
      D: "La Superintendencia de Banca y Seguros (SBS)",
      E: "El Banco de Crédito del Perú"
    },
    respuestaCorrecta: "C",
    area: "C"
  },
  {
    id: 39,
    curso: "Psicología y Filosofía",
    enunciado: "El proceso cognitivo que nos permite captar, registrar, organizar e interpretar los estímulos del medio ambiente a través de nuestros sentidos se conoce como:",
    opciones: {
      A: "Memoria",
      B: "Percepción",
      C: "Atención",
      D: "Aprendizaje",
      E: "Pensamiento"
    },
    respuestaCorrecta: "B",
    area: "B"
  },
  {
    id: 40,
    curso: "Educación Cívica",
    enunciado: "¿Cuál es la máxima institución del Estado encargada de interpretar la Constitución y supervisar el cumplimiento de la constitucionalidad en el Perú?",
    opciones: {
      A: "El Poder Judicial",
      B: "El Congreso de la República",
      C: "El Tribunal Constitucional",
      D: "La Corte Suprema de Justicia",
      E: "La Fiscalía de la Nación"
    },
    respuestaCorrecta: "C",
    area: "B"
  },

  // 41-50: Aritmética y Álgebra (Intermedio)
  {
    id: 41,
    curso: "Aritmética",
    enunciado: "Determine la cantidad total de divisores que posee el número entero positivo 120.",
    opciones: {
      A: "8",
      B: "12",
      C: "16",
      D: "20",
      E: "24"
    },
    respuestaCorrecta: "C",
    area: "A"
  },
  {
    id: 42,
    curso: "Aritmética",
    enunciado: "En una proporción geométrica discreta, los términos medios son 8 y 12. Si uno de los extremos es 6, calcule el valor del otro extremo.",
    opciones: {
      A: "10",
      B: "14",
      C: "16",
      D: "18",
      E: "20"
    },
    respuestaCorrecta: "C",
    area: "A"
  },
  {
    id: 43,
    curso: "Álgebra",
    enunciado: "Calcule el valor numérico del término independiente en el desarrollo del siguiente polinomio: P(x) = (x - 2)³ + (x + 3)² - 5.",
    opciones: {
      A: "1",
      B: "-4",
      C: "3",
      D: "-2",
      E: "0"
    },
    respuestaCorrecta: "B",
    area: "A"
  },
  {
    id: 44,
    curso: "Álgebra",
    enunciado: "Si se define la función f(x) = 2x - 5 con dominio en el intervalo [1, 5], determine el rango de dicha función.",
    opciones: {
      A: "[-3, 5]",
      B: "[-3, 3]",
      C: "[1, 5]",
      D: "[-5, 5]",
      E: "[0, 5]"
    },
    respuestaCorrecta: "A",
    area: "A"
  },
  {
    id: 45,
    curso: "Geometría",
    enunciado: "En un trapecio, las bases miden 12 cm y 18 cm. Determine la longitud del segmento que une los puntos medios de sus diagonales.",
    opciones: {
      A: "15 cm",
      B: "6 cm",
      C: "3 cm",
      D: "5 cm",
      E: "4 cm"
    },
    respuestaCorrecta: "C",
    area: "A"
  },
  {
    id: 46,
    curso: "Geometría",
    enunciado: "El área de una región triangular es de 24 cm². Si su base mide 8 cm, determine la longitud de la altura correspondiente a dicha base.",
    opciones: {
      A: "3 cm",
      B: "6 cm",
      C: "4 cm",
      D: "8 cm",
      E: "12 cm"
    },
    respuestaCorrecta: "B",
    area: "A"
  },
  {
    id: 47,
    curso: "Trigonometría",
    enunciado: "En un triángulo rectángulo, un ángulo agudo x cumple que tan(x) = 1/2. Calcule el valor de sen(x) × cos(x).",
    opciones: {
      A: "2/5",
      B: "1/5",
      C: "3/5",
      D: "2/3",
      E: "1/2"
    },
    respuestaCorrecta: "A",
    area: "A"
  },
  {
    id: 48,
    curso: "Trigonometría",
    enunciado: "Simplifique la siguiente expresión trigonométrica fundamental: K = (sen(x) + cos(x))² - 2sen(x)cos(x).",
    opciones: {
      A: "0",
      B: "1",
      C: "2",
      D: "sen²(x) - cos²(x)",
      E: "cos(2x)"
    },
    respuestaCorrecta: "B",
    area: "A"
  },
  {
    id: 49,
    curso: "Aptitud Matemática",
    enunciado: "¿Qué hora es en este momento si las horas transcurridas del día equivalen al triple de las horas que quedan por transcurrir?",
    opciones: {
      A: "06:00 p.m.",
      B: "08:00 p.m.",
      C: "04:00 p.m.",
      D: "06:00 a.m.",
      E: "12:00 m."
    },
    respuestaCorrecta: "A",
    area: "A"
  },
  {
    id: 50,
    curso: "Aptitud Matemática",
    enunciado: "En una granja hay patos y conejos. Si contamos en total 30 cabezas y 92 patas, ¿cuántos conejos hay en la granja?",
    opciones: {
      A: "12",
      B: "14",
      C: "16",
      D: "18",
      E: "20"
    },
    respuestaCorrecta: "C",
    area: "A"
  },

  // 51-60: Física, Química y Biología (Intermedio)
  {
    id: 51,
    curso: "Física",
    enunciado: "Un automóvil recorre 120 km a una velocidad constante de 60 km/h y luego 120 km a 40 km/h. Calcule la velocidad promedio en todo el trayecto.",
    opciones: {
      A: "50 km/h",
      B: "48 km/h",
      C: "45 km/h",
      D: "52 km/h",
      E: "46 km/h"
    },
    respuestaCorrecta: "B",
    area: "A"
  },
  {
    id: 52,
    curso: "Física",
    enunciado: "Un calorímetro contiene 100 g de agua a 20°C. Si se le agregan 100 g de agua a 80°C, despreciando pérdidas de calor, ¿cuál será la temperatura de equilibrio térmico?",
    opciones: {
      A: "40°C",
      B: "50°C",
      C: "60°C",
      D: "45°C",
      E: "55°C"
    },
    respuestaCorrecta: "B",
    area: "A"
  },
  {
    id: 53,
    curso: "Química",
    enunciado: "Señale la alternativa que contiene la fórmula correcta del gas propano, perteneciente a la familia de los alcanos.",
    opciones: {
      A: "CH4",
      B: "C2H6",
      C: "C3H8",
      D: "C4H10",
      E: "C3H6"
    },
    respuestaCorrecta: "C",
    area: "E"
  },
  {
    id: 54,
    curso: "Química",
    enunciado: "¿Cuál es el pH teórico de una solución acuosa neutra a una temperatura estándar de 25 °C?",
    opciones: {
      A: "0",
      B: "5",
      C: "7",
      D: "9",
      E: "14"
    },
    respuestaCorrecta: "C",
    area: "E"
  },
  {
    id: 55,
    curso: "Biología",
    enunciado: "El tejido vegetal especializado en el transporte de agua y sales minerales (savia bruta) desde las raíces hasta las hojas se denomina:",
    opciones: {
      A: "Floema",
      B: "Xilema",
      C: "Parénquima",
      D: "Epidermis",
      E: "Meristemo"
    },
    respuestaCorrecta: "B",
    area: "D"
  },
  {
    id: 56,
    curso: "Biología",
    enunciado: "En la genética mendeliana, el cruce de dos individuos heterocigotos (Aa × Aa) para un solo carácter genera una proporción genotípica esperada de:",
    opciones: {
      A: "3 : 1",
      B: "1 : 2 : 1",
      C: "9 : 3 : 3 : 1",
      D: "1 : 1",
      E: "2 : 1"
    },
    respuestaCorrecta: "B",
    area: "D"
  },
  {
    id: 57,
    curso: "Lenguaje",
    enunciado: "Marque la opción que presenta un ejemplo correcto de cacofonía.",
    opciones: {
      A: "El perro corrió velozmente.",
      B: "Sube para arriba inmediatamente.",
      C: "La agua está muy fría.",
      D: "La águila vuela alto.",
      E: "Pedro y Juan fueron a la playa."
    },
    respuestaCorrecta: "C",
    area: "B"
  },
  {
    id: 58,
    curso: "Literatura",
    enunciado: "¿A qué autor español de la Generación del 27 pertenece la famosa tragedia lírica titulada 'Bodas de sangre'?",
    opciones: {
      A: "Miguel de Unamuno",
      B: "Federico García Lorca",
      C: "Antonio Machado",
      D: "Juan Ramón Jiménez",
      E: "Rafael Alberti"
    },
    respuestaCorrecta: "B",
    area: "B"
  },
  {
    id: 59,
    curso: "Historia del Perú",
    enunciado: "El militar peruano que lideró la resistencia de la Sierra contra la ocupación chilena en la Campaña de la Breña durante la Guerra del Pacífico fue:",
    opciones: {
      A: "Miguel Grau",
      B: "Francisco Bolognesi",
      C: "Andrés Avelino Cáceres",
      D: "Nicolas de Piérola",
      E: "Leoncio Prado"
    },
    respuestaCorrecta: "C",
    area: "B"
  },
  {
    id: 60,
    curso: "Geografía",
    enunciado: "Las eco-regiones del Perú son áreas identificadas por características específicas. El científico peruano que propuso la clasificación de las '11 Ecorregiones del Perú' fue:",
    opciones: {
      A: "Javier Pulgar Vidal",
      B: "Antonio Brack Egg",
      C: "Augusto Weberbauer",
      D: "Julio C. Tello",
      E: "Alexander von Humboldt"
    },
    respuestaCorrecta: "B",
    area: "B"
  },

  // 61-80: Razonamiento, Ciencias e Humanidades (Avanzado)
  {
    id: 61,
    curso: "Aptitud Verbal",
    enunciado: "Señale la alternativa que contiene los conectores lógicos que dan sentido completo a la oración: 'No estudió para el examen, _______ obtuvo una nota excelente, _______ hizo trampa'.",
    opciones: {
      A: "sin embargo - porque",
      B: "pero - ya que no",
      C: "por consiguiente - dado que",
      D: "no obstante - y",
      E: "aunque - mas"
    },
    respuestaCorrecta: "A",
    area: "B"
  },
  {
    id: 62,
    curso: "Aptitud Verbal",
    enunciado: "Complete la analogía: ESCALPELO : CIRUJANO :: PINCEL : ...",
    opciones: {
      A: "Pintura",
      B: "Cuadro",
      C: "Pintor",
      D: "Escultura",
      E: "Dibujo"
    },
    respuestaCorrecta: "C",
    area: "B"
  },
  {
    id: 63,
    curso: "Aritmética",
    enunciado: "En un salón de clases de 40 estudiantes, a 24 les gusta Aritmética, a 18 Álgebra y a 8 les gustan ambos cursos. ¿A cuántos estudiantes no les gusta ninguno de los dos cursos?",
    opciones: {
      A: "4",
      B: "6",
      C: "8",
      D: "10",
      E: "12"
    },
    respuestaCorrecta: "B",
    area: "A"
  },
  {
    id: 64,
    curso: "Álgebra",
    enunciado: "Al resolver el sistema de ecuaciones lineales:\n3x + 2y = 12\n2x - y = 1\nDetermine el valor calculado para la variable y.",
    opciones: {
      A: "2",
      B: "3",
      C: "4",
      D: "1",
      E: "5"
    },
    respuestaCorrecta: "B",
    area: "A"
  },
  {
    id: 65,
    curso: "Geometría",
    enunciado: "En un polígono regular, la suma de las medidas de sus ángulos internos es 1080°. ¿Cómo se llama dicho polígono?",
    opciones: {
      A: "Hexágono",
      B: "Heptágono",
      C: "Octógono",
      D: "Decágono",
      E: "Pentágono"
    },
    respuestaCorrecta: "C",
    area: "A"
  },
  {
    id: 66,
    curso: "Trigonometría",
    enunciado: "Calcule el período de la función trigonométrica real f(x) = sen(2x).",
    opciones: {
      A: "2π",
      B: "π",
      C: "π/2",
      D: "4π",
      E: "3π"
    },
    respuestaCorrecta: "B",
    area: "A"
  },
  {
    id: 67,
    curso: "Física",
    enunciado: "Determine la energía cinética en Joules que posee una pequeña esfera de masa 2 kg cuando se desplaza con una velocidad constante de 5 m/s.",
    opciones: {
      A: "10 J",
      B: "20 J",
      C: "25 J",
      D: "50 J",
      E: "5 J"
    },
    respuestaCorrecta: "C",
    area: "A"
  },
  {
    id: 68,
    curso: "Química",
    enunciado: "¿Cuál es la masa en gramos contenida en 2 moles de moléculas de agua (H2O)? (Masas atómicas: H = 1 u, O = 16 u)",
    opciones: {
      A: "18 g",
      B: "36 g",
      C: "54 g",
      D: "72 g",
      E: "9 g"
    },
    respuestaCorrecta: "B",
    area: "E"
  },
  {
    id: 69,
    curso: "Biología",
    enunciado: "El principal polisacárido de reserva energética en las células de los animales y hongos se denomina:",
    opciones: {
      A: "Almidón",
      B: "Celulosa",
      C: "Glucógeno",
      D: "Quitina",
      E: "Glucosa"
    },
    respuestaCorrecta: "C",
    area: "D"
  },
  {
    id: 70,
    curso: "Lenguaje",
    enunciado: "Marque la oración que presenta un caso de hiato acentual.",
    opciones: {
      A: "Ella viajó a Piura ayer.",
      B: "Raúl lee un poema interesante.",
      C: "Tengo frío en las manos.",
      D: "Compró un peine nuevo.",
      E: "El auto avanza lento."
    },
    respuestaCorrecta: "B",
    area: "B"
  },
  {
    id: 71,
    curso: "Literatura",
    enunciado: "¿Qué vanguardista peruano escribió los poemarios 'Cinco metros de poemas' publicado en 1927?",
    opciones: {
      A: "César Vallejo",
      B: "Carlos Oquendo de Amat",
      C: "Martin Adán",
      D: "José María Eguren",
      E: "Javier Heraud"
    },
    respuestaCorrecta: "B",
    area: "B"
  },
  {
    id: 72,
    curso: "Historia del Perú",
    enunciado: "La llamada 'Rebelión de Túpac Amaru II' contra los abusos coloniales y las Reformas Borbónicas estalló en el Cusco en el año:",
    opciones: {
      A: "1780",
      B: "1789",
      C: "1814",
      D: "1756",
      E: "1821"
    },
    respuestaCorrecta: "A",
    area: "B"
  },
  {
    id: 73,
    curso: "Historia Universal",
    enunciado: "¿Qué tratado internacional puso fin oficialmente a la Primera Guerra Mundial en 1919?",
    opciones: {
      A: "Tratado de Utrecht",
      B: "Tratado de Versalles",
      C: "Tratado de Westfalia",
      D: "Tratado de Tordesillas",
      E: "Tratado de Ginebra"
    },
    respuestaCorrecta: "B",
    area: "B"
  },
  {
    id: 74,
    curso: "Geografía",
    enunciado: "La línea imaginaria que divide la Tierra en dos hemisferios (Norte y Sur) es:",
    opciones: {
      A: "El meridiano de Greenwich",
      B: "El trópico de Cáncer",
      C: "La línea ecuatorial",
      D: "El trópico de Capricornio",
      E: "El círculo polar ártico"
    },
    respuestaCorrecta: "C",
    area: "B"
  },
  {
    id: 75,
    curso: "Economía",
    enunciado: "Cuando se produce un aumento sostenido y generalizado del nivel de precios de los bienes y servicios en una economía durante un período, se produce:",
    opciones: {
      A: "Deflación",
      B: "Devaluación",
      C: "Inflación",
      D: "Recesión",
      E: "Especulación"
    },
    respuestaCorrecta: "C",
    area: "C"
  },
  {
    id: 76,
    curso: "Psicología y Filosofía",
    enunciado: "La escuela psicológica fundada por John B. Watson que propone estudiar únicamente la conducta observable de los individuos se denomina:",
    opciones: {
      A: "Psicoanálisis",
      B: "Conductismo",
      C: "Gestalt",
      D: "Humanismo",
      E: "Cognitivismo"
    },
    respuestaCorrecta: "B",
    area: "B"
  },
  {
    id: 77,
    curso: "Educación Cívica",
    enunciado: "Según la Constitución de 1993, el período presidencial en el Perú tiene una duración improrrogable de:",
    opciones: {
      A: "4 años",
      B: "5 años",
      C: "6 años",
      D: "3 años",
      E: "7 años"
    },
    respuestaCorrecta: "B",
    area: "B"
  },
  {
    id: 78,
    curso: "Aptitud Matemática",
    enunciado: "En una caja hay 5 calcetines rojos y 5 negros. ¿Cuántos calcetines como mínimo se deben extraer para tener la seguridad de obtener un par del mismo color?",
    opciones: {
      A: "2",
      B: "3",
      C: "4",
      D: "5",
      E: "6"
    },
    respuestaCorrecta: "B",
    area: "A"
  },
  {
    id: 79,
    curso: "Aptitud Verbal",
    enunciado: "Elija la analogía que reproduce la relación de la pareja base: SOL : CALOR :: ...",
    opciones: {
      A: "Lluvia : paraguas",
      B: "Hielo : frío",
      C: "Fuego : humo",
      D: "Viento : marea",
      E: "Noche : luna"
    },
    respuestaCorrecta: "B",
    area: "B"
  },
  {
    id: 80,
    curso: "Educación Cívica",
    enunciado: "El derecho a la vida, a la integridad física y a la libertad personal pertenecen a los derechos humanos de:",
    opciones: {
      A: "Primera Generación",
      B: "Segunda Generación",
      C: "Tercera Generación",
      D: "Cuarta Generación",
      E: "Quinta Generación"
    },
    respuestaCorrecta: "A",
    area: "B"
  }
];

export default PREGUNTAS_80;
