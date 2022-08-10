import { AfterViewInit, Component, ElementRef,  ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorMapa {
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [ number, number ];
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements AfterViewInit {
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa! : mapboxgl.Map;

  zoomLevel: number = 15;
  center: [number, number] = [-3.867590824639972, 40.33201839439051];

  marcadores: MarcadorMapa[] = [];
  
  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    this.recuperarMarcadoresLocalStorage();

    // const markerHtml: HTMLElement = document.createElement('div');
    // markerHtml.innerHTML = "Hola mundo!!!";
    // const marker = new mapboxgl.Marker()
    //   .setLngLat( this.center )
    //   .addTo( this.mapa );
  }

  agregarMarcador() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const nuevoMarcador = new mapboxgl.Marker( { draggable: true, color })
      .setLngLat( this.center )
      .addTo( this.mapa );

      this.marcadores.push({
        color,
        marker: nuevoMarcador
      });
      
      this.guardarMarcadoresLocalStorage();

      nuevoMarcador.on('dragend', () => {
        this.guardarMarcadoresLocalStorage();
      });
  }

  borrarMarcador(i: number) {
    this.marcadores[i].marker?.remove();
    this.marcadores.splice(i, 1);

    this.guardarMarcadoresLocalStorage();
  }

  irMarcador(marcador: mapboxgl.Marker) {
    this.mapa.flyTo({
      center: marcador.getLngLat() 
    });
  }

  guardarMarcadoresLocalStorage() {
    const lngLatArr: MarcadorMapa[] = [];
    this.marcadores.forEach( m => {
      const color = m.color;
      const { lng, lat } = m.marker!.getLngLat();

      lngLatArr.push({
        color: color,
        centro: [ lng, lat ]
      })
    });

    localStorage.setItem("marcadores", JSON.stringify(lngLatArr));
  }
  
  recuperarMarcadoresLocalStorage() {
    if (localStorage.getItem("marcadores")) {
      const lngLatArr: MarcadorMapa[] =JSON.parse(localStorage.getItem("marcadores")!);

      lngLatArr.forEach( m => {
        const newMarker = new mapboxgl.Marker({
          color: m.color,
          draggable: true,

        })
          .setLngLat( m.centro! )
          .addTo( this.mapa );

        this.marcadores.push({
          color: m.color,
          marker: newMarker
        });

        newMarker.on('dragend', () => {
          this.guardarMarcadoresLocalStorage();
        });
      });
    }
  }
}
