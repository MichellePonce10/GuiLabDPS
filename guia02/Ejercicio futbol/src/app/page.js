import styles from "./page.module.css"; 



const Equipos = ({ equipos }) => { return (
<div className={styles.container__list}>
 <h2 className={styles.title}>Equipos de Fútbol</h2>
 {equipos.map((equipo) => (
 <div key={equipo.id}>
 <h3 className={styles.nameclub}>{equipo.nombre}</h3>
 

 <ul> 

 {equipo.plantilla.map((jugador) => (
 <li className={styles.container__list} key={jugador.id}>






 <strong>{jugador.nombre}</strong>
 <p>Altura: {jugador.Altura}m <br></br> Peso:
{jugador.Peso}Kg</p>

<img src={jugador.image} alt="producto" style={{ width: '250px', height: 'auto' }} />


 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
);
}

export default function Home() {
 // Simula la obtención de datos desde tu JSON
  const equiposData = [
 {"id": 1,
 "nombre": "Real Ratadrid",
 "plantilla":[{"id": 1,"nombre":"Eden Hazard",image:'https://phantom-marca-mx.unidadeditorial.es/df664815ec965603571f9a5cf0a1f195/resize/828/f/jpg/mx/assets/multimedia/imagenes/2024/02/03/17069586953729.jpg',"Altura":"1.75","Peso":"74"},
  {"id": 2,"nombre":"Gonzalo García",image:'https://madridistareal.com/wp-content/uploads/2024/11/ND-CASTILLA-INTERCITY-ALEGRIA-GONZALO-03_1VC6425.jpg',"Altura":"1.82","Peso":"74"},
 {"id": 3,"nombre":"Karim Benzema",image:'https://media.cnn.com/api/v1/images/stellar/prod/220310092648-benzema-tease.jpg?c=16x9&q=h_833,w_1480,c_fill',"Altura":"1.85","Peso":"81"}
 ]},
 {"id": 2,
 "nombre": "Barcelona",
 "plantilla":[
 {"id": 1,"nombre":"Marc-André ter Stegen",image:'https://www.prensalibre.com/wp-content/uploads/2024/09/Marc-Andre-ter-Stegen-e1726787554489.jpg?quality=52',"Altura":"1.75","Peso":"74Kg"},
{"id": 2,"nombre":"IñigoMartinez",image:'https://cadenaser.com/resizer/v2/GB24NS6B7REPTPJ63WM65OCSAE.jpg?auth=2454ae05aa468a6181032c019e125f6a3b06c3c5ceb336ab0ed223ef17fa4a25',"Altura":"1.82","Peso":"74"},
 {"id": 3,"nombre":"Gavi",image:'https://www.fcbarcelona.com/photo-resources/2025/02/02/bcb0aee1-e558-4731-ba37-7ebb6726567f/250202_EA023749.JPG?width=1200&height=750',"Altura":"1.85","Peso":"81"}
 ]},
 {
    "id": 3,
    "nombre": "Manchester City",
    "plantilla": [
      {"id": 1, "nombre": "Rodrigo Hernández Cascante",image:'https://villarrealcf.es/wp-content/uploads/2024/10/rodrigo.jpg', "Altura": "1,90", "Peso": "82"},
      {"id": 2, "nombre": "Omar Marmoush",image:'https://mibundesliga.com/wp-content/uploads/2024/11/marmo.jpg', "Altura": "1,80", "Peso": "81"},
      {"id": 3, "nombre": "Nico González",image:'https://www.sportingpedia.com/wp-content/uploads/2025/07/Nico_Gonzalez.webp', "Altura": "1,80", "Peso": "88"}
    ]},
    {
      "id":4,"nombre":"Argentina",
      "plantilla":[
        {"id":1,"nombre":"Lionel Messi",image:'https://fifpro.org/media/1w0dfejt/lionel-messi_1.jpg?rxy=0.4619229519611197,0.19443102361750342&width=1600&height=1024&rnd=133770410615370000',"Altura":"1,70","Peso":"67"},
        {"id":2,"nombre":"Enzo Fernández",image:'https://e0.365dm.com/22/12/1600x900/skysports-enzo-fernandez-argentina_6007891.jpg?20221228162137',"Altura":"1,78","Peso":"76"},
        {"id":3,"nombre":"Thiago Almada",image:'https://images.pagina12.com.ar/styles/focal_16_9_960x540/public/2024-03/821557-almada.jpeg?h=c74750f6&itok=P0wAVrcS',"Altura":"1,71","Peso":"63"}
    ]
    },
    {
      "id":5,"nombre":"Chelsea",
      "plantilla":[
        {"id":1,"nombre":"João Pedro",image:'https://e00-xlk-ue-marca.uecdn.es/uploads/2025/07/02/686544f38ae19.jpeg',"Altura":"1,82","Peso":"70"},
        {"id":2,"nombre":"Dário Essugo",image:'https://img.chelseafc.com/image/upload/f_auto,w_1440,c_fill,g_faces,q_90/restricted/2025/Dario%20Essugo/GettyImages-1856150771.jpg',"Altura":"1,80","Peso":"83"},
        {"id":3,"nombre":"Marc Guiu",image:'https://estaticos-cdn.prensaiberica.es/clip/efe53a28-c042-40b4-9a6c-2ba944ea9969_16-9-discover-aspect-ratio_default_0.jpg',"Altura":"1,87","Peso":"82"}
      ]
    }

    

 // ... agregar otros equipos
 ];
 return ( 
   <main className={styles.main}>
<div>
 <h1>Mi Aplicación de Fútbol</h1>
 <Equipos equipos={equiposData}/>
 </div>
 </main>


 



);
}