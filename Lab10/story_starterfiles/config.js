var config = {
    style:'mapbox://styles/croissant-cheungx/cm2xi4q8500hz01pa0socdjr2',
    accessToken: 'pk.eyJ1IjoiY3JvaXNzYW50LWNoZXVuZ3giLCJhIjoiY20xdGk1MnJvMDJvcjJrcTgxZXZ6em4wOCJ9.5aHf_tnCdC3gA9WMiCeYTw',
    showMarkers: true,
    markerColor: '#00b4d8',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Flood Risk',
    subtitle: 'With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this?',
    byline: 'Author: Kristi Zhang',
    footer: 'Source: https://www.brownstoner.com; www.wliw.org, etc. <br> Created using <a href="https://github.com/iamwfx/crs_3850_5850_mapping_countermapping/tree/main/Week12_mon_storymaps/story_starterfiles" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Flood Risk Maps',
            image: 'https://media.npr.org/assets/img/2022/10/27/gettyimages-155056803_custom-d0895ff4bf30439d0ec59cdc72f44569be54d532.jpg?s=6',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected.',
            location: {
                center: [-74.006, 40.7128],
                zoom: 12,
                pitch: 0,
                bearing: 30,
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
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Flood-related Damages to the Red Hook Houses',
            image: 'https://www.brownstoner.com/wp-content/uploads/2017/12/brooklyn-architecture-history-red-hook-houses-library-of-congress.jpg',
            description:'Red Hook Houses is one of New York City’s largest public housing complexes, located in Brooklyn’s Red Hook neighborhood. Built in the late 1930s, it was designed to provide affordable housing for low-income families. Over the years, it has faced challenges like aging infrastructure and flood risks, especially after Hurricane Sandy in 2012, which led to significant damage. Today, Red Hook Houses is undergoing major resiliency upgrades to improve infrastructure and protect residents from future storms and flooding.',
            location: {
                center: [-74.00468, 40.67564],
                zoom: 19,
                pitch: 45,
                bearing: 30,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
    ]
};
