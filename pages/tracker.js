import { useEffect, useState } from "react";
import Head from "next/head";
import { Card, Button } from "react-bootstrap";

const Tracker = () => {
  const [showCard, setShowCard] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");
  const [cardImage, setCardImage] = useState("");
  const [gmapsLink, setGmapsLink] = useState("");

  useEffect(() => {
    const loadLeaflet = async () => {
      const L = await import("leaflet");

      const map = L.map("map").setView([-6.2088, 106.8456], 11);

      const tiles = L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }
      ).addTo(map);

      const markers = [
        {
          coordinates: [-6.154211877816065, 106.855709603498],
          title: "Bank Sampah Hijau Selaras Mandiri",
          popupDescription: "Jakarta",
          cardDescription:
            "Kompleks Angkasa Pura Blok PQRS RT:14 RW:06 Kelurahan, RT.14/RW.11, Kebon Kosong, Kemayoran, Central Jakarta City, Jakarta 10630",
          cardImage:
            "https://lh5.googleusercontent.com/p/AF1QipP5WzxsPDVWVHbasg13knzHDCTakkqJs6_bgjXJ=w426-h240-k-no",
          gmapsLink: "https://goo.gl/maps/y7LtbGx3RWaMLnRY7",
        },
        {
          coordinates: [-6.221567865281104, 106.83856038399733],
          title: "Bank Sampah Induk Gesit",
          popupDescription: "Jakarta",
          cardDescription: "Jl. Menteng Pulo No.01, RW.1, Menteng Atas, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12960",
          cardImage:
            "https://lh5.googleusercontent.com/p/AF1QipObY2Pv_hCYM7FGDodpb37pKDmnUBx-M5TM9fxX=w408-h306-k-no",
          gmapsLink: "https://goo.gl/maps/KkhSYeD3iyVpHMD59",
        },
        {
          coordinates: [-6.214373926627798, 106.75537877158739],
          title: "Bank Sampah Berdikari",
          popupDescription: "Jakarta",
          cardDescription:
            "Jl. Lap. Merah Gg. H.Yasin No.6, RW.3, Joglo, Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11640",
          cardImage:
            "https://lh5.googleusercontent.com/p/AF1QipO9P8ew7C0KXOF8Bsb4LXDOhnv_MIwySp8MBmyb=w408-h816-k-no",
          gmapsLink: "https://goo.gl/maps/m9xPmqQn3QZFYGUL7",
        },
        {
          coordinates: [-6.397203934091779, 106.84172294081958],
          title: "Bank Sampah Induk Rumah Harum",
          popupDescription: "Depok",
          cardDescription:
            "Jl. Merdeka No.1, RW.01, Abadijaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16411",
          cardImage:
            "https://lh5.googleusercontent.com/p/AF1QipPdcJXVfs0N9IBA-3fRMxgUCjlKCYNG_rVa1PGh=w408-h839-k-no",
          gmapsLink: "https://goo.gl/maps/GDQ4HttE67Lc2Yvb6",
        },
        {
          coordinates: [-6.245176991242413, 106.82897498086002],
          title: "Bank Sampah Mekar Sari",
          popupDescription: "Jakarta",
          cardDescription:
            "Jl. Mampang Prapatan IV No.5, RT.8/RW.5, Mampang Prpt., Kec, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12790",
          cardImage:
            "https://lh5.googleusercontent.com/p/AF1QipPl3qYAwqhsziIuAUnJUivRB8UBG0Zue0RUollQ=w408-h544-k-no",
          gmapsLink: "https://goo.gl/maps/SuESM966paHp3SX49",
        },
        {
          coordinates: [-6.370790898729583, 106.86635096907573],
          title: "Bank Sampah Bumi Daya Bersih",
          popupDescription: "Depok",
          cardDescription:
            "Jl. Bbd Raya, Mekarsari, Kec. Cimanggis, Kota Depok, Jawa Barat 16452",
          cardImage:
            "https://lh5.googleusercontent.com/p/AF1QipMAJPXZE8pK5dJK8otQxcTVXe0UUv0V3oxoE8kV=w408-h461-k-no",
          gmapsLink: "https://goo.gl/maps/WUKDXNFdSTpAWfDm6",
        },
        {
          coordinates: [-6.237234178242163, 106.70460432698559],
          title: "Bank Sampah Sumber Mutiara",
          popupDescription: "Tangerang",
          cardDescription:
            "jl lembang Jl. Onar, RT.04/RW.008, Sudimara Bar., Kec. Ciledug, Kota Tangerang, Banten 15151",
          cardImage:
            "https://lh5.googleusercontent.com/p/AF1QipOZrB4j5iD6zPGrrMpcvLZ51bLA20lfeAA1yh4-=w408-h904-k-no",
          gmapsLink: "https://goo.gl/maps/tGqCBRTSEbK23nED7",
        },
        {
          coordinates: [-6.315042607222037, 107.0012351843584],
          title: "Bank Sampah VIDA",
          popupDescription: "Bekasi",
          cardDescription:
            "Jl. Taman Apel Hijau I No.69, RT.002/RW.001, Padurenan, Kec. Mustika Jaya, Kota Bks, Jawa Barat 16340",
          cardImage:
            "https://lh5.googleusercontent.com/p/AF1QipPC6VA0EtKudc1NZH2EvgLrvzIE_ksEwyFD6OJp=w408-h306-k-no",
          gmapsLink: "https://goo.gl/maps/KhUWK1ybs2LCkdeK8",
        },
        {
          coordinates: [-6.215863516940817, 106.9779788337702],
          title: "Bank Sampah Dadali",
          popupDescription: "Bekasi",
          cardDescription:
            "Kp Rawa Pasung RT.001 RW.004, No 129, RT.003/RW.004, Kali Baru, Kecamatan Medan Satria, Kota Bks, Jawa Barat 17132",
          cardImage:
            "https://lh5.googleusercontent.com/p/AF1QipPW2ZScT5fOis3o9fg2F7lX0xZd9nLCrODeopHp=w408-h725-k-no",
          gmapsLink: "https://goo.gl/maps/BBZx91Ue4SAHP1VT6",
        },
      ];

      markers.forEach((markerData) => {
        const marker = L.marker(markerData.coordinates)
          .addTo(map)
          .bindPopup(
            `<b>${markerData.title}</b><br />${markerData.popupDescription}`
          )
          .openPopup();

        marker.on("click", () => {
          setShowCard(true);
          setCardTitle(markerData.title);
          setCardDescription(markerData.cardDescription);
          setCardImage(markerData.cardImage);
          setGmapsLink(markerData.gmapsLink);
        });
      });

      map.on("click", () => {
        setShowCard(false);
      });
    };

    loadLeaflet();
  }, []);

  return (
    <div>
      <Head>
        <title>Tracker Page</title>
      </Head>

      <div id="map" className="leaflet-container"></div>
      {showCard && (
        <Card className="cardTracker">
          <Card.Img src={cardImage} />
          <Card.Body>
            <Card.Title>{cardTitle}</Card.Title>
            <Card.Text>{cardDescription}</Card.Text>
            <Button
              className="gmaps-button"
              variant="primary"
              href={gmapsLink}
              target="_blank"
            >
              Open in Google Maps
            </Button>
          </Card.Body>
        </Card>
      )}
      
    </div>
  );
};

export default Tracker;
