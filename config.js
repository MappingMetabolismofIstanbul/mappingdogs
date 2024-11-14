var config = {
    style: 'mapbox://styles/dogatmn/clyseydg9001201nu65sb3kb7',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: true,
    markerColor: '#ff70ab',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Tanzifat İskeleleri',
    subtitle: 'Köpekler',
    byline: 'BAP_Mapping Metabolism of Istanbul / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul / MEF AAP_027',
    chapters: [
        {
            id: '1',
            alignment: 'full',
            hidden: false,
            title: 'Çöp Çıkaran..! Çöp Çıkaran..!',
            image: 'https://i.ibb.co/WnWbGZ0/05-07-24-Tanzifat-skelesi-300dpi.jpg',
            description: 'The image was created for the project titled “Interactive Mapping of İstanbul’s Metabolism (MEF AAP 027)” , funded by MEF University. Project Coordinator: Dr. Esra Sert (2024–2025).',
            location: {
                center: [28.965 , 41.003],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2',
            alignment: 'left',
            hidden: false,
            title: 'Köpekler',
            image: 'https://i.ibb.co/zRtGzNW/image-14.jpg',
            description: 'Köpekler aslında çöp konusunda büyük bir yardımcılardı. Çöpleri yiyerek bir arıtıcı gibi çalışıyorlar ve insanlara yardımcı olurlardı. / İstanbul’da Bir Tanzifat Amelesi, 1880 / Street Cleaner In Istanbul, 1880 - Photo Source: SALT Reasearch - Abdullah Freres ',
            location: {
                center: [28.965 , 41.003],
                zoom: 12,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/S3M6Ts3/image-15.jpg',
            description: '“...sokaklara atılan çöpleri ortadan kaldırmak ve gece vakti gezinenlerden kötü niyetli olanlara havlayıp saldırmaktan ibarettir...” (İbrahim Şinasi, Tasvir-i Efkar, nr. 192, 5 Mayıs 1864, Sayfa 1-3.) / Köpekler Etrafındaki Tanzifat Amelesi Eşeğiyle Beraber / Street Cleaner with His Donkey and Dogs Around - Original Photo Source: Osmanlı’dan Günümüze Temizlik İşçileri ve Aletleri Sergisi, Kağıthane Belediye Başkanlığı ',
            location: {
                center: [28.978 , 41.010],
                zoom: 14,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            alignment: 'middle',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/Hh44hwL/image-16.jpg',
            description: 'TR: “Şunu merak ettim fakat rahat bırakmıyor!” “Korkma efendim, külhani insancıdır, siz devam ediniz!” - Photo Source: Geveze, nr: 1, 15 Ağustos 1875',
            location: {
                center: [28.978 , 41.010],
                zoom: 16,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            alignment: 'left',
            hidden: false,
            title: 'Hayırsızada',
            image: 'https://i.ibb.co/Lv3hf7C/1-page-0001.jpg',
            description: 'Sivriada, 1910 yılında İstanbul’daki sokak köpeklerinin sürgün edildiği yer olarak bilinir. O dönemde, şehirdeki köpek nüfusu yoğunlaşmıştı ve özellikle Batılılaşma süreciyle birlikte, Osmanlı yönetimi, sokak hayvanlarını şehirden uzaklaştırmayı amaçlar. Bu karar, halk arasında büyük tepkilere yol açsa da binlerce köpek, teknelere bindirilerek İstanbul’un gözden uzak noktalarından biri olan Sivriada’ya götürülür. - Photo Source: Yeni Geveze, nr. 33, 6 Temmuz 1910, Çizen: M. Ütücüyan',
            location: {
                center: [28.9725, 40.8759],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/vvt4PnG/2-page-0001.jpg',
            description: 'Sivriada, adının da işaret ettiği gibi, kayalık ve zorlu bir araziye sahipti, yiyecek veya su kaynağı olmayan bir yerdi. Sürgüne gönderilen köpeklerin adada kendi başlarına hayatta kalmaları neredeyse imkansızdı. Ada sakinleri ise köpeklerin acı seslerine karşı gelemeyerek şikayette bulundular ve nihayet sürgüne yollanan köpekler yurtlarına geri getirildi. - Photo Source: Karikatürlerde İstanbul’un Sokak Köpekleri, Kemalettin Kuzucu, Sayfa 330.',
            location: {
                center: [28.9725, 40.8759],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
