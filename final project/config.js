var config = {
    style:'mapbox://styles/croissant-cheungx/cm4dqodt400h601rwht4e3e08',
    accessToken: 'pk.eyJ1IjoiY3JvaXNzYW50LWNoZXVuZ3giLCJhIjoiY20xdGk1MnJvMDJvcjJrcTgxZXZ6em4wOCJ9.5aHf_tnCdC3gA9WMiCeYTw',
    showMarkers: false,
    markerColor: '#7400b8',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Spatial Justice: EV Charging Station Equity in Onondaga County',
    subtitle: 'Assessing the equity of charging station distribution in Onondaga County, revealing possible service gaps and recommendations',
    byline: 'Kristi Zhang',
    para1: "Electric vehicle (EV) charging stations are critical for building a sustainable and fair transportation system. As EV adoption grows, ensuring charging infrastructure is accessible to all communities, especially underserved and low-income areas, is more important than ever.  The existing disparities in transportation and infrastructure access might leave suburban groups behind. Onondaga County, New York, with its diverse demographic and economic characteristics, offers an ideal setting to examine these challenges and highlight areas of inequity.",
    para2: "This project focuses on analyzing the distribution of EV charging stations in Onondaga County to identify service gaps and underserved areas. By using spatial analysis, it aims to clarify how current infrastructure placement aligns—or fails to align—with the needs of different communities. The findings will provide a clearer picture of where disparities exist, offering a critical foundation for future research and equitable infrastructure planning efforts.",
    footer: 'Source: Social Explorer, U.S. Department of Energy, CUGIR, Aregis Online, etc. <br> Created using <a href="https://github.com/iamwfx/crs_3850_5850_mapping_countermapping/tree/main/Week12_mon_storymaps/story_starterfiles" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'layer1 locations',
            alignment: 'left',
            hidden: false,
            title: 'Curretn EV Charging Station Locations',
            image: 'https://sonaenergy.com/wp-content/uploads/2022/03/ElectrifyAmerica-768x512.webp',
            imagedescription:'Photo Retrived From <a href="https://sonaenergy.com/" target="_blank">Visit Sona Energy</a>',
            description1: 'The current distribution of EV charging stations in Onondaga County reveals a strong concentration within the urban core of Syracuse, leaving suburban and rural areas, such as Van Buren, Marcellus, and Minoa underserved. This uneven spatial allocation suggests a prioritization of areas with higher population density and economic activity, potentially underestimate the needs of residents in peripheral communities. Furthermore, the limited availability of charging stations outside the Syracuse may create barriers for renters and residents of multi-family housing who lack access to private charging options. This map leds the necessity of incorporating equity-focused strategies into infrastructure planning to ensure that EV charging stations are accessible to all communities.',
            location: {
                center: [-76.31208, 43.05422],
                zoom: 10.8,
                pitch: 0,
                bearing: 0,},
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {layer: 'ev-charging-stations-onondaga-b0ubaz',
                    opacity: 1,
                    duration: 5000},
                    {layer: '1-mile-buffer-jeojson-b25e6c',
                    opacity: 0,},
                  {layer: '3-mile-buffer-319zps',
                    opacity: 0,},
                  {layer: 'populationonondaga',
                    opacity: 0,},
                  {layer: 'medianhouseholdincome',
                    opacity: 0,},
                  {layer: 'housingunits',
                    opacity: 0,},
            ],
            onChapterExit: [
                {layer: 'ev-charging-stations-onondaga-b0ubaz',
                    opacity: 1,
                    duration: 5000},
                    {layer: '1-mile-buffer-jeojson-b25e6c',
                    opacity: 0.2,},
                  {layer: '3-mile-buffer-319zps',
                    opacity: 0.2,},
                  {layer: 'populationonondaga',
                    opacity: 0,},
                  {layer: 'medianhouseholdincome',
                    opacity: 0.5,},
                  {layer: 'housingunits',
                    opacity: 0,},
            ]
        },
        {
            id: 'layer2 buffer',
            alignment: 'left',
            hidden: false,
            title: 'EV Charging Station 1-Mile and 3-Mile Buffer',
            description1: 'The map indicates that EV charging infrastructure in Syracuse, Onondaga County is concentrated around the commerce center, where the overlapping 1-mile and 3-mile buffers suggest convenient access for residents and commuters in central areas. However, as the distance from the city of Syracuse increases, coverage becomes more sparse, making rural and suburban areas with limited or no access within a reasonable range. This uneven distribution indicates a potential gap in accessibility for residents in outlying neighborhoods. It emphasizes the need for strategic placement of additional charging stations to promote equitable access and support EV adoption across the entire mulnicipal region.',
            location: {
                center: [-76.31208, 43.05422],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {layer: 'ev-charging-stations-onondaga-b0ubaz',
                    opacity: 1,
                    duration: 5000},
                    {layer: '1-mile-buffer-jeojson-b25e6c',
                    opacity: 0.3,},
                  {layer: '3-mile-buffer-319zps',
                    opacity: 0.7,},
                  {layer: 'populationonondaga',
                    opacity: 0,},
                  {layer: 'medianhouseholdincome',
                    opacity: 0,},
                  {layer: 'housingunits',
                    opacity: 0,},
            ],
            onChapterExit: [
                {layer: 'ev-charging-stations-onondaga-b0ubaz',
                    opacity: 1,
                    duration: 5000},
                    {layer: '1-mile-buffer-jeojson-b25e6c',
                    opacity: 0.4,},
                  {layer: '3-mile-buffer-319zps',
                    opacity: 0.3,},
                  {layer: 'populationonondaga',
                    opacity: 0,},
                  {layer: 'medianhouseholdincome',
                    opacity: 0.5,},
                  {layer: 'housingunits',
                    opacity: 0,},
            ]
        },
        {
            id: 'layer3 medianhouseholdincome',
            alignment: 'right',
            hidden: false,
            title: 'Income Disparities and EV Infrastructure Accessibility',
            image: 'https://files.americanexperiment.org/wp-content/uploads/2018/05/Wealthy-Electric-Car-owners.png',
            imagedescription:'Image Retrived From <a href="https://www.americanexperiment.org/electric-cars-are-mostly-for-wealthy-people-and-youre-subsidizing-their-purchase/" target="_blank">Electric Cars Are Mostly for Wealthy People - Center of the American Experiment</a>',
            description1: 'Median household income is one of the most important indicators for assessing the accessibility of electric vehicle infrastructure. By analyzing the relationship between income level and the distribution of charging stations, we can identify communities that may face underserved services. This map uses a one-mile buffer analysis to show coverage in all communities, aiming to support addressing possible inequalities in the distribution of charging stations.',
            description2: 'As this map overlays a buffer of EV charging stations within a 1-mile radius with median household income data, it highlights disparities in accessibility. Areas with higher median household incomes (shown in dark purple) do not always have better access to charging stations within a 1-mile radius, reflecting underlying inequalities in infrastructure for wealthier communities that can afford EVs. Conversely, some of the light purple areas (representing lower-income areas) do not always have access to charging stations without restrictions and some others have more convenient EV charging stations. This highlights the need for targeted infrastructure planning to ensure equitable access to EV charging, especially in communities that have the potential to purchase EVs but do not have convenient charging facilities.',
            location: {
                center: [-76.07339, 43.04676],
                zoom: 10,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'ev-charging-stations-onondaga-b0ubaz',
                    opacity: 1,
                    duration: 5000},
                    {layer: '1-mile-buffer-jeojson-b25e6c',
                    opacity: 0.2,},
                  {layer: '3-mile-buffer-319zps',
                    opacity: 0,},
                  {layer: 'populationonondaga',
                    opacity: 0,},
                  {layer: 'medianhouseholdincome',
                    opacity: 1,},
                  {layer: 'housingunits',
                    opacity: 0,},
                 
            ],
            onChapterExit: [
                {layer: 'ev-charging-stations-onondaga-b0ubaz',
                    opacity: 1,
                    duration: 5000},
                    {layer: '1-mile-buffer-jeojson-b25e6c',
                    opacity: 0.2,},
                  {layer: '3-mile-buffer-319zps',
                    opacity: 0.2,},
                  {layer: 'populationonondaga',
                    opacity: 0.2,},
                  {layer: 'medianhouseholdincome',
                    opacity: 0.5,},
                  {layer: 'housingunits',
                    opacity: 0,},
            ]
        },
        {
        id: 'layer4 population',
        alignment: 'right',
        hidden: false,
        title: 'Population Density and Service Equity',
        description1: 'Population density determines, to a certain extent, the level of demand for electric vehicle charging stations in a community. By analyzing the overlap between population distribution and charging station locations, we can assess whether high-density areas have received adequate service support and further optimize infrastructure layout.',
        description2: 'This map overlay explores the relationship between buffer zones around EV charging stations and population density. An interesting pattern emerges: the locations of EV charging stations correspond to areas with significant variations in population density. Some stations are even situated in sparsely populated areas, which assures further investigation into the land use and building footprints of these locations. Once again, the distribution of charging stations radiates outward from Syracuse as the central hub. However, other municipalities within Onondaga County show strong potential for EV adoption but lack sufficient charging infrastructure, highlighting a critical gap that needs to be addressed.',
        image:'https://www.researchgate.net/profile/Ahmed-Wefky/publication/240164934/figure/fig1/AS:669417901932550@1536613073125/GROWTH-OF-POPULATION-AND-VEHICLES-The-prevalence-of-electric-automobiles-in-vehicle.png',
        imagedescription:'Image Retrived From <a href="https://www.researchgate.net/publication/240164934_Estimation_of_Real_Traffic_Radiated_Emissions_from_Electric_Vehicles_in_terms_of_the_Driving_Profile_using_Neural_Networks" target="_blank">Estimation of Real Traffic Radiated Emissions from Electric Vehicles - ResearchGate</a>',
        location: {
        center: [-76.19480, 43.00750],
        zoom: 10.7,
        pitch: 40,
        bearing: 50,},
        mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'ev-charging-stations-onondaga-b0ubaz',
                    opacity: 1,
                    duration: 5000},
                  {layer: '3-mile-buffer-319zps',
                    opacity: 0.4,},
                  {layer: 'populationonondaga',
                    opacity: 0.8,
                    },
                  {layer: 'medianhouseholdincome',
                    opacity: 0,},
                  {layer: 'housingunits',
                    opacity: 0,},
            ],
            onChapterExit: [
                {layer: 'ev-charging-stations-onondaga-b0ubaz',
                    opacity: 1,
                    duration: 5000},
                  {layer: '3-mile-buffer-319zps',
                    opacity: 0.2,},
                  {layer: 'populationonondaga',
                    opacity: 0,},
                  {layer: 'medianhouseholdincome',
                    opacity: 0,},
                  {layer: 'housingunits',
                    opacity: 0.3,},
            ]
        
    },
        {
            id: 'layer5 housingunits',
            alignment: 'right',
            hidden: false,
            title: 'Housing Units and Charging Needs',
            image: 'https://plan.ongov.net/wp-content/uploads/2024/08/Housing_Chart.png',
            imagedescription:'Image retrived from <a href="https://plan.ongov.net/housing-onondaga/" target="_blank">Housing Onondaga</a>',
            description1:'The total number of housing units in a community directly influences the demand for EV charging infrastructure to a certain degree. Areas with a high concentration of housing units typically require more charging stations to meet the needs of residents, especially in densely populated neighborhoods. High housing unit counts often correlate with increased vehicle ownership, enlarging the pressure on existing public charging infrastructure. Conversely, areas with fewer housing units, such as very rural or suburban neighborhoods, may exhibit lower demand but still require strategic placement of chargers to ensure accessibility. Understanding the distribution and quantity of housing units is essential for identifying potential service gaps and planning equitable deployment of EV charging stations. <img src="https://plan.ongov.net/wp-content/uploads/2024/08/Housing_Chart.png><small>Test Citation</small>',
            description2:'This map shows EV charging stations mostly concentrated in areas with medium or lower housing unit density, as indicated by the green buffer zones overlapping lighter blue areas. Interestingly, the highest-density areas in Onondaga county have limited or no direct overlap with the buffer zones. It suggests a potential gap in charging access for the densest neighborhoods. Additionally, suburban and rural areas with lower housing density generally lack charging infrastructure altogether, which indicates an uneven distribution of stations. This highlights the need to strategically expand EV charging infrastructure to better serve both high-density urban areas and underserved suburban regions.',
            location: {
                center: [-76.19481, 43.02777],
                zoom: 12,
                pitch: 45,
                bearing: 30,
                speed: 0.4, 
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
            onChapterEnter: [
                {layer: 'ev-charging-stations-onondaga-b0ubaz',
                    opacity: 1,
                    duration: 5000},
                  {layer: '3-mile-buffer-319zps',
                    opacity: 0,},
                  {layer: 'populationonondaga',
                    opacity: 0,},
                  {layer: 'medianhouseholdincome',
                    opacity: 0,},
                  {layer: 'housingunits',
                    opacity: 0.9,},
                  {layer: 'building-footprint-onondaga-8gk3i3',
                    opacity: 0.6,},
                ],
            onChapterExit: []
        },
        {
            id: 'layer6 housingtypes',
            alignment: 'left',
            hidden: false,
            title: 'Land Use and Charging Needs',
            image: 'images/2023-current-zoning-map-1.png',
            imagedescription:'Image retrived from <a href="https://www.waer.org/2023-05-31/common-council-meets-to-discuss-rezone-syracuse-plan" target="_blank">Common Council Meets to Discuss ReZone Syracuse Plan - WAER</a>',
            description1:'Based on Syracuse’s land use map and our previous analysis, most EV charging facilities are concentrated in areas designated as mixed-use business land use. This explains the gaps we observed earlier—charging stations are often found in less densely populated areas or regions with lower median household incomes. It further highlights that the placement of EV charging stations tends to approach specific land use types. As one interviewee I interviewed mentioned, their ideal location for the next EV charging station in Syracuse would be at the entrance of the Wegmans supermarket. Such a site not only attracts high foot traffic but also caters to higher-income shoppers who are more likely to afford EVs. Additionally, the time spent grocery shopping provides an ideal window for customers to charge their vehicles, which makes it a strategic and convenient location for both users and businesses.(Zoom in to the location of charging stations in downtown business areas)',
            location: {
                center: [-76.15338, 43.04525],
                zoom: 18,
                pitch: 45,
                bearing: 30,
                speed: 0.5, 
                curve: 2,
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
            onChapterEnter: [
                {layer: 'ev-charging-stations-onondaga-b0ubaz',
                    opacity: 1,
                    duration: 4000},
                    {layer: '1-mile-buffer-jeojson-b25e6c',
                    opacity: 0,},
                  {layer: '3-mile-buffer-319zps',
                    opacity: 0,},
                  {layer: 'populationonondaga',
                    opacity: 0,},
                  {layer: 'medianhouseholdincome',
                    opacity: 0,},
                  {layer: 'housingunits',
                    opacity: 0.,},
                ],
            onChapterExit: []
        },
        {
            id: 'layer7 housingtypes',
            alignment: 'right',
            hidden: false,
            title: 'Residence Types and Charging Needs',
            image: 'https://www.phoenix.gov/sustainabilitysite/MediaAssets/New_Types_of_Charging.png',
            imagedescription:'Image retrived from <a href="https://www.phoenix.gov/sustainabilitysite/Pages/Basics-of-Charging.aspx" target="_blank">Basics of EV Charging - City of Phoenix</a>',
            description1:'In Addtion, based on research and interviews, housing unit types directly influence the demand for public EV charging stations. Residents in single-family houses often have the convenience of private charging facilities, typically located in their own garages, offering flexibility and easy to use. In contrast, residents of multi-family housing units and apartment renters rely heavily on public charging infrastructure due to the lack of private charging options. This disparity highlights the unique challenges faced by different types of housing and reveals the importance of understanding these needs when evaluating existing EV charging infrastructure.',
            location: {
                center: [-76.15058, 43.04702],
                zoom: 18,
                pitch: 45,
                bearing: -30,
                speed: 0.5, 
                curve: 2,
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
            onChapterEnter: [
                {layer: 'ev-charging-stations-onondaga-b0ubaz',
                    opacity: 1,
                    duration: 4000},
                    {layer: '1-mile-buffer-jeojson-b25e6c',
                    opacity: 0,},
                  {layer: '3-mile-buffer-319zps',
                    opacity: 0,},
                  {layer: 'populationonondaga',
                    opacity: 0,},
                  {layer: 'medianhouseholdincome',
                    opacity: 0,},
                  {layer: 'housingunits',
                    opacity: 0.,},
                ],
            onChapterExit: []
        },
        {
            id: 'layer8 Conclusion',
            alignment: 'center',
            hidden: false,
            title: 'Conclusion and Future Prospects',
            image: 'https://www.airswift.com/hs-fs/hubfs/electric%20vehicles%20charging%20station%20at%20dusk%2c%20set%20against%20a%20backdrop%20of%20wind%20turbines%2c%20symbolizing%20renewable%20energy%20use.jpg?width=2016&height=1152&name=electric%20vehicles%20charging%20station%20at%20dusk%2c%20set%20against%20a%20backdrop%20of%20wind%20turbines%2c%20symbolizing%20renewable%20energy%20use.jpg',
            imagedescription:'Image retrived from <a href="https://www.airswift.com/blog/electric-vehicles-and-charging-infrastructure" target="_blank">Electric Vehicles and Charging Infrastructure - Airswift Blog</a>',
            description1:'By analyzing multiple census and spatial data such as the distribution of electric vehicle charging stations, population density, housing unit density, land use type, and median household income in the Onondaga County area, we found that the current charging infrastructure is mainly concentrated in downtown Syracuse and commercial mixed-use areas. Although this distribution pattern can meet the high flow demand in the urban center area, there is a clear service gap in suburban and rural areas. This uneven distribution pattern shows that the existing infrastructure planning has not fully realize transportation equity, which may limit the access to electric vehicles for some residents, especially apartments(condos) residence and multi-family residents who rely on public charging facilities.',
            description2:'Future planning and research directions could focus on further optimizing the site selection of electric vehicle charging stations through comprehensive spatial suitability analysis. Specifically, a multi-criteria analysis model (eg, MCDA) can be constructed to identify the most suitable areas for the distribution of new charging stations. It could take into account multiple important factors. In addition, cooperation with community members, urban planners, stakeholders and policymakers is also crucial to combine the expansion of electric vehicle charging facilities with the goals of regional sustainable development in view of the actual needs of residents and economic feasibility. Through data-driven professional analysis and public participation, we can better achieve equity in the distribution of electric vehicle infrastructure and provide strong support for building a greener and more inclusive transportation system.(Zoom in to the location of suburban areas)',
            location: {
                center: [-76.16930, 43.03580],
                zoom: 17.5,
                pitch: 30,
                bearing: -50,
                speed: 0.5, 
                curve: 1.7,
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
            onChapterEnter: [
                {layer: 'ev-charging-stations-onondaga-b0ubaz',
                    opacity: 1,
                    duration: 4000},
                  {layer: '3-mile-buffer-319zps',
                    opacity: 0,},
                  {layer: 'populationonondaga',
                    opacity: 0,},
                  {layer: 'medianhouseholdincome',
                    opacity: 0,},
                  {layer: 'housingunits',
                    opacity: 0.,},
                ],
            onChapterExit: [
                {layer: 'ev-charging-stations-onondaga-b0ubaz',
                    opacity: 1,
                    duration: 4000},
                  {layer: '3-mile-buffer-319zps',
                    opacity: 0,},
                  {layer: 'populationonondaga',
                    opacity: 0,},
                  {layer: 'medianhouseholdincome',
                    opacity: 0,},
                  {layer: 'housingunits',
                    opacity: 0.,},
                    ]
        },
        
    ]
};
