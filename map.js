function initMap() {
    // Example coordinates - replace with your restaurants' locations
    const center = { lat: 40.7128, lng: -74.0060 }; // NYC
    
    const map = new google.maps.Map(document.getElementById("golden-map"), {
        zoom: 13,
        center: center,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#d4af37" }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [{ "color": "#111111" }]
            }
        ]
    });

    // Restaurant markers (add all 8 locations)
    const restaurants = [
        {
            name: "Ocean Pearl",
            position: { lat: 40.713, lng: -74.008 },
            type: "michelin",
            url: "https://example.com/ocean-pearl"
        },
        // Add 7 more restaurants...
    ];

    restaurants.forEach(restaurant => {
        const marker = new google.maps.Marker({
            position: restaurant.position,
            map: map,
            title: restaurant.name,
            icon: {
                url: restaurant.type === "michelin" ? 
                    "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png" :
                    "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                scaledSize: new google.maps.Size(32, 32)
            }
        });
        
        marker.addListener("click", () => {
            window.open(restaurant.url, "_blank");
        });
    });
}