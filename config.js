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
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Flood Risk',
    subtitle: 'With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this?',
    byline: 'Author: Kristi Zhang',
    para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae diam tincidunt, pretium libero eu, hendrerit turpis. In imperdiet rutrum mi ac eleifend. Vestibulum nec augue in nisl dictum mollis. Cras pretium egestas lorem ut tincidunt. Etiam erat massa, suscipit sed elit maximus, condimentum gravida quam. Phasellus dignissim posuere ante, eget pharetra leo sagittis a. Cras vel lectus quis nibh gravida luctus. Vivamus interdum nisi eget sapien bibendum, pellentesque tincidunt purus pharetra. Morbi vel lacinia dolor. Suspendisse posuere elit in lorem suscipit, ac dapibus libero accumsan. Etiam elementum massa in massa imperdiet molestie. Aliquam elementum ante odio, a tristique tortor luctus sit amet. Fusce a tincidunt ligula. Ut placerat, eros a vehicula cursus, diam ante elementum sapien, nec varius nibh est nec purus. Vestibulum vel est tempor, viverra ex id, varius lacus. Nunc eget iaculis diam.",
    para2: "In eu ligula vel elit dictum ultricies. Integer rhoncus, arcu nec ullamcorper congue, augue odio feugiat lacus, sed maximus lacus lacus in eros. Ut consectetur vel est quis facilisis. Maecenas vestibulum lacus sed urna blandit, in vulputate mauris posuere. Vestibulum non dolor a dui tristique varius. Maecenas elementum venenatis lorem, id fermentum eros pellentesque nec. Vivamus dignissim leo in odio imperdiet, vel vulputate ipsum tincidunt. Maecenas sit amet ante volutpat, congue purus eu, tempus leo. Donec tempus dignissim urna aliquam commodo. Fusce maximus lorem id consequat porta. Sed egestas, metus eget auctor pellentesque, felis lectus scelerisque risus, sed rutrum nunc purus at lorem.",
    footer: 'Source: https://www.brownstoner.com; www.wliw.org; U.S. Coast Guard via Getty Images, etc. <br> Created using <a href="https://github.com/iamwfx/crs_3850_5850_mapping_countermapping/tree/main/Week12_mon_storymaps/story_starterfiles" target="_blank">Mapbox Storytelling</a> template.',
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
        id: 'interlude',
        alignment: 'center',
        hidden: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
        video:'images/902-1_902-2364-PD2_preview.mp4',
        location: {
        center: [-73.97615, 40.71901],
        zoom: 14.84,
        pitch: 48,
        bearing: 142.44,
        },
    },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'The Red Hook Houses',
            image: 'https://www.brownstoner.com/wp-content/uploads/2017/12/brooklyn-architecture-history-red-hook-houses-library-of-congress.jpg',
            description:'Red Hook Houses is one of New York City’s largest public housing complexes, located in Brooklyn’s Red Hook neighborhood. Built in the late 1930s, it was designed to provide affordable housing for low-income families. Over the years, it has faced challenges like aging infrastructure and flood risks, especially after Hurricane Sandy in 2012, which led to significant damage. Today, Red Hook Houses is undergoing major resiliency upgrades to improve infrastructure and protect residents from future storms and flooding.',
            location: {
                center: [-74.00468, 40.67564],
                zoom: 19,
                pitch: 45,
                bearing: 30,
                speed: 0.8, 
                curve: 1,
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
