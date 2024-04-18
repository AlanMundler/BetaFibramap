"use client";
import Layout from "../../components/Layout";
import Map from "../../components/Map";
import styles from "../Home.module.scss";
import Link from "next/link";

const DEFAULT_CENTER = [-31.419797, -64.188566];
const centro = [-31.416895, -64.183833];
const nueva = [-31.424408, -64.186827];
const guemes = [-31.425284, -64.194569];
const alberdi = [-31.41364, -64.19647];
const paz = [-31.413758, -64.167203];

export default function Home() {
  return (
    <Layout>
      <section className=" sm:ml-64 sm:mr-36">
        <h1 className=" ml-4 mr-4 relative overflow-x-auto text-xl font-semibold dark:text-white h-full px-3 py-4 bg-gray-50 dark:bg-gray-800">
          Mapa de Proveedores
        </h1>

        <div className=" mt-4 ml-4 mr-4 relative overflow-x-auto px-2 py-2 bg-gray-50 dark:bg-gray-800">
          <Map
            className={styles.homeMap}
            width="800"
            height="400"
            center={DEFAULT_CENTER}
            zoom={14}
          >
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
                <Marker position={centro}>
                  <Popup>
                    <h1 class="text-xl font-sans font-bold">Centro</h1>
                    <br />
                    <Link href="/provider/Claro">
                      <span className=" text-red-600 text-base font-sans">Claro<br/></span>
                    </Link>
                    
                    <Link href="/provider/Personal">
                      <span className=" text-blue-600 text-base font-sans">Personal<br/></span>
                      </Link>
                      <Link href="/provider/Iplan">
                      <span className=" text-pink-600 text-base font-sans">Iplan<br/></span>
                      </Link>
                  </Popup>
                </Marker>
                <Marker position={nueva}>
                  <Popup>
                    <h1 class="text-xl font-bold font-sans">Nueva Cordoba</h1>
                    <br />
                    <Link href="/provider/Claro">
                      <span className=" text-red-600 text-base font-sans">Claro<br/></span>
                    </Link>
                    
                    <Link href="/provider/Personal">
                      <span className=" text-blue-600 text-base font-sans">Personal<br/></span>
                      </Link>
                      <Link href="/provider/Iplan">
                      <span className=" text-pink-600 text-base font-sans">Iplan<br/></span>
                      </Link>
                  </Popup>
                </Marker>
                <Marker position={guemes}>
                  <Popup>
                    <h1 class="text-xl font-bold font-sans">Guemes</h1>
                    <br />
                    <Link href="/provider/Claro">
                      <span className=" text-red-600 text-base font-sans">Claro<br/></span>
                    </Link>
                    
                    <Link href="/provider/Personal">
                      <span className=" text-blue-600 text-base font-sans">Personal<br/></span>
                      </Link>
                      <Link href="/provider/Iplan">
                      <span className=" text-pink-600 text-base font-sans">Iplan<br/></span>
                      </Link>
                  </Popup>
                </Marker>
                <Marker position={alberdi}>
                  <Popup>
                    <h1 class="text-xl font-bold font-sans">Alberdi</h1>
                    <br />
                    <Link href="/provider/Claro">
                      <span className=" text-red-600 text-base font-sans">Claro<br/></span>
                    </Link>
                    
                    <Link href="/provider/Personal">
                      <span className=" text-blue-600 text-base font-sans">Personal<br/></span>
                      </Link>
                      <Link href="/provider/Iplan">
                      <span className=" text-pink-600 text-base font-sans">Iplan<br/></span>
                      </Link>
                  </Popup>
                </Marker>
                <Marker position={paz}>
                  <Popup>
                    <h1 class=" text-xl font-bold font-sans">Gral Paz</h1>
                    <br/>
                    <Link href="/provider/Claro">
                      <span className=" text-red-600 text-base font-sans">Claro<br/></span>
                    </Link>
                    
                    <Link href="/provider/Personal">
                      <span className=" text-blue-600 text-base font-sans">Personal<br/></span>
                      </Link>
                      <Link href="/provider/Iplan">
                      <span className=" text-pink-600 text-base font-sans">Iplan<br/></span>
                      </Link>
                   
                  </Popup>
                </Marker>
              </>
            )}
          </Map>
        </div>
      </section>
    </Layout>
  );
}
