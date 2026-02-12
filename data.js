// ============================================================
// NORTHEAST FTTH COMPETITIVE INTELLIGENCE — DATA LAYER
// All data publicly sourced. Every entry has source + sourceUrl.
// Last updated: February 2026
// ============================================================

// ---- PROVIDER DEFINITIONS ----
const PROVIDERS = {
    gonet:     { name: "GoNetSpeed",           sponsor: "Oak Hill Capital",      color: "#00A651", short: "GNS" },  // GoNetSpeed green
    greenlight:{ name: "Greenlight Networks",   sponsor: "Oak Hill Capital",      color: "#6B2D8B", short: "GL" },  // Greenlight purple
    fidium:    { name: "Fidium / Consolidated", sponsor: "Searchlight Capital",   color: "#0066CC", short: "FDM" }, // Fidium blue
    empire:    { name: "Empire Access",         sponsor: "Antin Infrastructure",  color: "#F47920", short: "EMP" }, // Empire orange
    slic:      { name: "SLIC Networks",         sponsor: "SDC Capital",           color: "#003B6F", short: "SLIC" },// SLIC navy
    verizon:   { name: "Verizon Fios",          sponsor: "Public (VZ)",           color: "#CD040B", short: "VZ" },  // Verizon red
    frontier:  { name: "Frontier (now Verizon)", sponsor: "Verizon (acq. Jan 2026)", color: "#EE0000", short: "FTR" }, // Frontier/VZ red variant
    breezeline:{ name: "Breezeline",            sponsor: "Cogeco (TSX: CCA)",     color: "#00B8A9", short: "BRZ" }  // Breezeline teal
};

// ---- OPERATOR PROFILES (public data only) ----
const OPERATOR_PROFILES = [
    {
        id: "gonet",
        name: "GoNetSpeed",
        sponsor: "Oak Hill Capital",
        hq: "Portland, ME",
        ceo: "Richard Clark",
        states: ["CT","ME","MA","NY","PA","VT","WV","RI","NJ"],
        stateCount: 11,
        metrics: [
            { label: "Homes/Businesses Passed", value: "390,000+", asOf: "April 2023", source: "Fierce Network", sourceUrl: "https://www.fierce-network.com/broadband/gonetspeed-homes-northeast-targets-fiber-20-new-towns-2023", note: "Most recent public figure. Company has been building ~140K/yr since." },
            { label: "BEAD Grants Awarded", value: "$222M+ (73,000+ locations)", asOf: "2025", source: "GoNetSpeed News", sourceUrl: "https://www.gonetspeed.com/resources/news/" },
            { label: "NJ Expansion Investment", value: "$110M", asOf: "July 2025", source: "BusinessWire", sourceUrl: "https://www.businesswire.com/news/home/20250708646368/en/GoNetspeed-Accelerates-Network-Footprint-Prepares-Expansion-Serving-11th-State-New-Jersey" },
            { label: "MA Proposed Investment", value: "$250M (27 communities)", asOf: "May 2025", source: "BusinessWire", sourceUrl: "https://www.businesswire.com/news/home/20250507692118/en/GoNetspeed-Poised-to-Make-$250M-Massachusetts-Investment-Amplifying-Need-for-One-Touch-Make-Ready" },
            { label: "CT Towns Served", value: "65+", asOf: "2026", source: "GoNetSpeed CT", sourceUrl: "https://www.gonetspeed.com/ct/" },
            { label: "ME Towns Served", value: "65+", asOf: "2026", source: "GoNetSpeed ME", sourceUrl: "https://www.gonetspeed.com/me/" },
            { label: "Formed From", value: "Otelco, OTTC, Upstate Fiber, Lantek, Icon Connections, NetSpeed (consolidated Apr 2022)", asOf: "2022", source: "Fierce Network", sourceUrl: "https://www.fierce-network.com/broadband/gonetspeed-homes-northeast-targets-fiber-20-new-towns-2023" },
        ]
    },
    {
        id: "greenlight",
        name: "Greenlight Networks",
        sponsor: "Oak Hill Capital",
        hq: "Rochester, NY",
        ceo: "Mark Murphy",
        states: ["NY","PA","MD"],
        stateCount: 3,
        metrics: [
            { label: "Homes/Businesses Passed", value: "225,000+ (35 municipalities)", asOf: "Mid-2025", source: "Greenlight Networks", sourceUrl: "https://www.greenlightnetworks.com/growing-greenlight-networks-fiber-forward-magazine/" },
            { label: "SMB Customers", value: "10,000+", asOf: "Mid-2025", source: "Greenlight Networks", sourceUrl: "https://www.greenlightnetworks.com/growing-greenlight-networks-fiber-forward-magazine/" },
            { label: "Long-term Target", value: "800,000+ homes", asOf: "2025", source: "Greenlight Networks", sourceUrl: "https://www.greenlightnetworks.com/growing-greenlight-networks-fiber-forward-magazine/" },
            { label: "Oak Hill Total Commitment", value: "$300M", asOf: "June 2022", source: "Light Reading", sourceUrl: "https://www.lightreading.com/broadband/the-buildout-greenlight-networks-plots-pennsylvania-expansion" },
            { label: "Consumer Reports Ranking", value: "#1 ISP in US (2024)", asOf: "2024", source: "Consumer Reports", sourceUrl: "https://www.consumerreports.org/electronics/internet/best-internet-service-providers-a1060498370/" },
            { label: "Baltimore Investment", value: "$100M greenfield", asOf: "2025", source: "PR Newswire", sourceUrl: "https://www.prnewswire.com/news-releases/greenlight-networks-partners-with-baltimore-to-launch-100-million-fiber-internet-expansion-302484021.html" },
            { label: "Loop Internet (PA) Acquisition", value: "Closed October 2025", asOf: "Oct 2025", source: "Greenlight Networks", sourceUrl: "https://www.greenlightnetworks.com/greenlight-announces-loop-internet-acquisition/" },
            { label: "FastBridge Fiber Acquisition", value: "Expected mid-2026", asOf: "Nov 2025", source: "PR Newswire", sourceUrl: "https://www.prnewswire.com/news-releases/greenlight-networks-to-acquire-fastbridge-fiber-302602839.html" },
            { label: "Employees", value: "245 (post-Loop)", asOf: "Oct 2025", source: "Times-Tribune", sourceUrl: "https://www.thetimes-tribune.com/2025/10/01/greenlight-networks-acquires-loop-internet-plans-further-expansion-in-nepa/" },
        ]
    },
    {
        id: "fidium",
        name: "Fidium Fiber (Consolidated Communications)",
        sponsor: "Searchlight Capital (77.2%)",
        hq: "Mattoon, IL (operations in NE)",
        ceo: "Gaurav Juneja (Jan 2026)",
        states: ["NH","VT","ME","MN","MA"],
        stateCount: 5,
        metrics: [
            { label: "Total Footprint", value: "2.6M locations", asOf: "2025", source: "Light Reading", sourceUrl: "https://www.lightreading.com/fttx/consolidated-no-longer-projecting-fiber-completion-by-2026" },
            { label: "Fiber Upgraded", value: "1.4M locations (54%)", asOf: "2025", source: "Light Reading", sourceUrl: "https://www.lightreading.com/fttx/consolidated-no-longer-projecting-fiber-completion-by-2026" },
            { label: "Target Fiber Coverage", value: "80%+ (2M+ locations) by 2027-2028", asOf: "2025", source: "Light Reading", sourceUrl: "https://www.lightreading.com/fttx/consolidated-no-longer-projecting-fiber-completion-by-2026" },
            { label: "NH Fiber Passings", value: "276,000+ (+ 60K in 2025)", asOf: "2025", source: "Fidium Fiber", sourceUrl: "https://www.fidiumfiber.com/blog/news/fidium-fiber-helping-to-bridge-connectivity-gap-in-new-hampshire" },
            { label: "VT Fiber Passings", value: "134,000+ (+ 50K in 2025)", asOf: "Nov 2024", source: "Vermont Biz Magazine", sourceUrl: "https://vermontbiz.com/news/2024/november/20/fidium-has-connected-more-134000-vermont-homes-and-businesses-three-years" },
            { label: "ME Fiber Passings", value: "294,000+ (+ 120K in 2025)", asOf: "2025", source: "Fidium Fiber", sourceUrl: "https://www.fidiumfiber.com/blog/news/fidium-fiber-helps-bridge-connectivity-gap-in-maine" },
            { label: "Northern NE Total", value: "1M+ locations connected (ME+NH+VT)", asOf: "2025", source: "Fiber Broadband Assoc.", sourceUrl: "https://fiberbroadband.org/2025/07/23/ffb-week-30-fidium-transforms-new-englands-future-with-fiber/" },
            { label: "Subsidies Secured", value: "$225M+ since 2021", asOf: "2025", source: "Fiber Broadband Assoc.", sourceUrl: "https://fiberbroadband.org/2025/07/23/ffb-week-30-fidium-transforms-new-englands-future-with-fiber/" },
            { label: "BEAD Draft Locations", value: "~24,400", asOf: "2025", source: "Fierce Network", sourceUrl: "https://www.fierce-network.com/broadband/fidium-sharpens-its-focus-data-centers-and-wholesale" },
            { label: "Take-Private", value: "Dec 2024, $4.70/share", asOf: "Dec 2024", source: "Public filings", sourceUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001051512&type=SC%2013D&dateb=&owner=include&count=40" },
            { label: "Rebrand to Fidium", value: "September 2025", asOf: "Sep 2025", source: "Fidium Fiber", sourceUrl: "https://www.fidiumfiber.com/" },
            { label: "Timeline Slip", value: "Full fiber completion pushed from 2026 to 2027-2028", asOf: "2025", source: "Light Reading", sourceUrl: "https://www.lightreading.com/fttx/consolidated-no-longer-projecting-fiber-completion-by-2026" },
        ]
    },
    {
        id: "empire",
        name: "Empire Access / Empire Fiber Internet",
        sponsor: "Antin Infrastructure Partners",
        hq: "Prattsburgh, NY",
        ceo: "Not publicly disclosed",
        states: ["NY","PA"],
        stateCount: 2,
        metrics: [
            { label: "Fiber Route Miles", value: "1,280", asOf: "2025", source: "Empire Access", sourceUrl: "https://www.empireaccess.com/about-us/" },
            { label: "Addresses Served", value: "96,000", asOf: "2025", source: "Fierce Network", sourceUrl: "https://www.fierce-network.com/broadband/empire-access-targets-140000-new-fiber-passings-ny-pa" },
            { label: "Customers", value: "29,000", asOf: "2025", source: "Empire Access", sourceUrl: "https://www.empireaccess.com/about-us/" },
            { label: "Fiber Network %", value: "95%", asOf: "2025", source: "Empire Access", sourceUrl: "https://www.empireaccess.com/about-us/" },
            { label: "Growth Target", value: "140,000+ new fiber passings", asOf: "2025", source: "Fierce Network", sourceUrl: "https://www.fierce-network.com/broadband/empire-access-targets-140000-new-fiber-passings-ny-pa" },
            { label: "Antin Acquisition", value: "Closed January 2023", asOf: "Jan 2023", source: "Fierce Network", sourceUrl: "https://www.fierce-network.com/broadband/empire-access-targets-140000-new-fiber-passings-ny-pa" },
            { label: "Scranton Fiber", value: "176 miles (Phase 1: 86mi + Phase 2: 90mi)", asOf: "2024", source: "Empire Access", sourceUrl: "https://www.empireaccess.com/press-releases/empire-access-expansion-in-scranton-is-ready-for-service/" },
            { label: "Oswego County Grant", value: "$26M ConnectALL (10,792 locations, 345mi fiber)", asOf: "2025", source: "Governor Hochul", sourceUrl: "https://www.governor.ny.gov/news/governor-hochul-announces-26-million-connectall-investment-expand-affordable-broadband-access" },
        ]
    },
    {
        id: "slic",
        name: "SLIC Networks / SLICfiber",
        sponsor: "SDC Capital",
        hq: "Nicholville, NY",
        ceo: "Not publicly disclosed",
        states: ["NY"],
        stateCount: 1,
        metrics: [
            { label: "Network Type", value: "100% fiber", asOf: "2025", source: "Westelcom/SLIC", sourceUrl: "https://westelcom.com/2025/05/slicfiber-expands-network-capacity-tenfold-through-strategic-integration-with-westelcom/" },
            { label: "Towns Served", value: "100+ (NY)", asOf: "2025", source: "BroadbandNow", sourceUrl: "https://broadbandnow.com/Slic-Network-Solutions" },
            { label: "Westelcom Integration", value: "Completed May 2025; 10x network capacity", asOf: "May 2025", source: "Westelcom", sourceUrl: "https://westelcom.com/2025/05/slicfiber-expands-network-capacity-tenfold-through-strategic-integration-with-westelcom/" },
            { label: "Data Centers", value: "3 (Watertown, Plattsburgh, Syracuse)", asOf: "2025", source: "Westelcom", sourceUrl: "https://westelcom.com/2025/05/slicfiber-expands-network-capacity-tenfold-through-strategic-integration-with-westelcom/" },
            { label: "Long Lake Project", value: "750+ HHP (first gigabit Adirondack community)", asOf: "2016", source: "PR Newswire", sourceUrl: "https://www.prnewswire.com/news-releases/slic-network-solutions-brings-blazing-fast-broadband-internet-to-long-lake-ny-300276412.html" },
        ]
    },
    {
        id: "verizon",
        name: "Verizon Fios",
        sponsor: "Public (NYSE: VZ)",
        hq: "New York, NY",
        ceo: "Hans Vestberg",
        states: ["NY","NJ","CT","PA","MA","RI","VA","MD","DC"],
        stateCount: 9,
        metrics: [
            { label: "Total Fios Passings (pre-Frontier)", value: "~20M", asOf: "2025", source: "Lightwave", sourceUrl: "https://www.lightwaveonline.com/home/article/55238061/verizon-says-its-on-pace-to-grow-to-add-1m-plus-fiber-locations-per-year" },
            { label: "Post-Frontier Total", value: "~30M", asOf: "Jan 2026", source: "Lightwave", sourceUrl: "https://www.lightwaveonline.com/home/article/55238061/verizon-says-its-on-pace-to-grow-to-add-1m-plus-fiber-locations-per-year" },
            { label: "Target", value: "35-40M passings", asOf: "2028-2029 target", source: "Lightwave", sourceUrl: "https://www.lightwaveonline.com/home/article/55238061/verizon-says-its-on-pace-to-grow-to-add-1m-plus-fiber-locations-per-year" },
            { label: "2025 Build Pace", value: "650,000 new locations", asOf: "2025", source: "Lightwave", sourceUrl: "https://www.lightwaveonline.com/home/article/55285660/verizons-ceo-says-its-on-track-to-ramp-up-to-650000-fios-builds-in-2025" },
            { label: "Post-2026 Build Pace", value: "1M+/year target", asOf: "2026+", source: "Lightwave", sourceUrl: "https://www.lightwaveonline.com/home/article/55238061/verizon-says-its-on-pace-to-grow-to-add-1m-plus-fiber-locations-per-year" },
            { label: "Frontier Acquisition", value: "$20B, closed Jan 20, 2026", asOf: "Jan 2026", source: "Verizon", sourceUrl: "https://www.verizon.com/about/news/verizon-and-frontier-regulatory-approval" },
            { label: "Lehigh Valley PA Expansion", value: "~1,000 new HHP/month", asOf: "Jun 2025", source: "Morning Call", sourceUrl: "https://www.mcall.com/2025/06/02/verizon-fios-expanding-in-bethlehem-new-households-to-qualify-in-the-coming-months/" },
            { label: "RI Broadband Grant", value: "Selected alongside GoNetSpeed", asOf: "2025", source: "RI Commerce", sourceUrl: "https://commerceri.com/articles/post/ri-commerce-announces-selection-of-gonetspeed-verizon-for-first-round-of-25m-broadband-investment/" },
        ]
    },
    {
        id: "frontier",
        name: "Frontier Communications (now Verizon)",
        sponsor: "Verizon (acquired Jan 2026, $20B)",
        hq: "Dallas, TX (CT operations)",
        ceo: "Nick Jeffery (pre-acquisition)",
        states: ["CT","NY","WV"],
        stateCount: 3,
        metrics: [
            { label: "CT Investment", value: "$800M", asOf: "2020-2026", source: "Frontier Newsroom", sourceUrl: "https://newsroom.frontier.com/press-release/frontier-invests-800-million-to-expand-fiber-in-connecticut/" },
            { label: "CT Fiber Passings", value: "500,000+ in 70+ towns (mid-2024)", asOf: "Mid-2024", source: "CT Insider", sourceUrl: "https://www.ctinsider.com/business/article/Frontier-Communications-fiber-optic-expansion-17507452.php" },
            { label: "CT Communities Reached", value: "111+", asOf: "2025", source: "CT Insider", sourceUrl: "https://www.ctinsider.com/business/article/Frontier-Communications-fiber-optic-expansion-17507452.php" },
            { label: "CT Target", value: "~800,000 passings (90% of CT customers by 2026)", asOf: "2025", source: "Fierce Network", sourceUrl: "https://www.fierce-network.com/broadband/frontier-plots-300k-more-fiber-passings-connecticut" },
            { label: "CT Phase 2", value: "300K additional passings announced", asOf: "2024", source: "Fierce Network", sourceUrl: "https://www.fierce-network.com/broadband/frontier-plots-300k-more-fiber-passings-connecticut" },
            { label: "National Fiber Passings", value: "16.2M people covered", asOf: "2025", source: "BroadbandNow", sourceUrl: "https://broadbandnow.com/Frontier-Communications" },
            { label: "Verizon Acquisition", value: "Closed Jan 20, 2026", asOf: "Jan 2026", source: "Verizon", sourceUrl: "https://www.verizon.com/about/news/verizon-and-frontier-regulatory-approval" },
        ]
    },
    {
        id: "breezeline",
        name: "Breezeline",
        sponsor: "Cogeco Communications (TSX: CCA)",
        hq: "Quincy, MA",
        ceo: "Not publicly disclosed",
        states: ["NH","ME","CT","PA","WV","MD","VA","OH","SC"],
        stateCount: 13,
        metrics: [
            { label: "Total Footprint", value: "~1.8M homes passed", asOf: "Q3 2025", source: "Cogeco Q3 2025", sourceUrl: "https://corpo.cogeco.com/cca/en/press-room/press-releases/cogeco-communications-announces-q3-2025-financial-results-and-canadian-wireless-launch/" },
            { label: "Fiber Homes Added Since FY2022", value: "300,000+ (10% organic growth)", asOf: "Q3 2025", source: "Cogeco Q3 2025", sourceUrl: "https://corpo.cogeco.com/cca/en/press-room/press-releases/cogeco-communications-announces-q3-2025-financial-results-and-canadian-wireless-launch/" },
            { label: "Build Pace", value: "~28,000 new fiber homes/quarter", asOf: "Q3 2025", source: "Cogeco Q3 2025", sourceUrl: "https://corpo.cogeco.com/cca/en/press-room/press-releases/cogeco-communications-announces-q3-2025-financial-results-and-canadian-wireless-launch/" },
            { label: "NH Fiber Towns", value: "9 (Barnstead, Farmington, Franklin, Milton, Northfield, Pittsfield, Rochester, Tilton, Wolfeboro)", asOf: "Feb 2025", source: "GlobeNewsWire", sourceUrl: "https://www.globenewswire.com/news-release/2025/02/20/3029830/0/en/Breezeline-Deploys-Fiber-Internet-in-Nine-New-Hampshire-Communities.html" },
            { label: "ME Fiber (Sanford)", value: "Active expansion", asOf: "Mar 2025", source: "GlobeNewsWire", sourceUrl: "https://www.globenewswire.com/news-release/2025/03/06/3038464/0/en/Breezeline-to-Expand-Fiber-Network-to-Homes-and-Businesses-in-Southern-Maine.html" },
            { label: "PA Fiber (Luzerne/Carbon)", value: "Wapwallopen, Larksville, White Haven, Weatherly", asOf: "Mar 2025", source: "GlobeNewsWire", sourceUrl: "https://www.globenewswire.com/news-release/2025/03/20/3046641/0/en/Breezeline-Brings-Advanced-Fiber-Internet-to-Homes-and-Businesses-in-Luzerne-and-Carbon-Counties.html" },
            { label: "PA Fiber (Cambria/Blair)", value: "Johnstown, Altoona, Uniontown, Clearfield", asOf: "2025", source: "Breezeline", sourceUrl: "https://www.breezeline.com/news/breezeline-brings-advanced-fiber-internet-to-johnstown-altoona-uniontown-and-clearfield" },
            { label: "MD Fiber", value: "Cumberland, Kent Island, Centreville, St. Michaels, St. Mary's County", asOf: "2025", source: "GlobeNewsWire", sourceUrl: "https://www.globenewswire.com/news-release/2025/02/20/3029832/0/en/Breezeline-Brings-Advanced-Fiber-Internet-to-Cumberland-Maryland.html" },
        ]
    }
];

// ---- MAP MARKERS (200+ markets) ----
// Each entry: lat, lng, name, provider, passings, status, notes, source, sourceUrl, isNew, overlapWith
const MARKETS = [
    // ======= GONETSPEED =======
    // -- CONNECTICUT --
    { lat: 41.31, lng: -73.19, name: "Ansonia, CT", provider: "gonet", passings: "Complete (Dec 2025)", status: "Completed", notes: "100% fiber rollout complete.", source: "BusinessWire", sourceUrl: "https://secure.businesswire.com/news/home/20251202712090/en/GoNetspeed-Celebrates-Completion-of-Ansonias-100-Fiber-Optic-Internet-Rollout", size: 8 },
    { lat: 41.28, lng: -72.87, name: "East Haven, CT", provider: "gonet", passings: "13,000 HHP ($7.5M)", status: "Active", notes: "First customers Aug 2025.", source: "BusinessWire", sourceUrl: "https://www.businesswire.com/news/home/20250826151569/en/GoNetspeed-Ushers-in-New-Era-for-East-Haven-with-100-Fiber-Optic-Connectivity-for-First-Customers", size: 10 },
    { lat: 41.56, lng: -72.65, name: "Middletown, CT", provider: "gonet", passings: "3,000 HHP ($2.4M)", status: "Construction", notes: "Construction underway.", source: "GoNetSpeed", sourceUrl: "https://www.gonetspeed.com/resources/news/gonetspeed-begins-construction-on-100-fiber-network-serving-middletown/", size: 8 },
    { lat: 41.19, lng: -73.13, name: "Stratford, CT", provider: "gonet", passings: "12,400 HHP ($7M)", status: "Construction", notes: "Construction fall 2025.", source: "GoNetSpeed News", sourceUrl: "https://www.gonetspeed.com/resources/news/", size: 10 },
    { lat: 41.40, lng: -73.45, name: "Danbury, CT", provider: "gonet", passings: "14,300 HHP", status: "Live", notes: "Active service.", source: "GoNetSpeed CT", sourceUrl: "https://www.gonetspeed.com/ct/", size: 10 },
    { lat: 41.76, lng: -72.68, name: "Hartford, CT", provider: "gonet", passings: "Served", status: "Live", notes: "Part of 65+ CT towns served.", source: "GoNetSpeed CT", sourceUrl: "https://www.gonetspeed.com/ct/", size: 14, overlapWith: ["frontier"] },
    { lat: 41.31, lng: -72.92, name: "New Haven, CT", provider: "gonet", passings: "Served", status: "Live", notes: "Part of 65+ CT towns served.", source: "GoNetSpeed CT", sourceUrl: "https://www.gonetspeed.com/ct/", size: 12, overlapWith: ["frontier"] },
    { lat: 41.69, lng: -72.73, name: "West Hartford, CT", provider: "gonet", passings: "Served", status: "Live", notes: "Part of 65+ CT towns served.", source: "GoNetSpeed CT", sourceUrl: "https://www.gonetspeed.com/ct/", size: 10, overlapWith: ["frontier"] },
    { lat: 41.44, lng: -72.82, name: "Wallingford/Meriden, CT", provider: "gonet", passings: "Served", status: "Live", notes: "Part of 65+ CT towns served.", source: "GoNetSpeed CT", sourceUrl: "https://www.gonetspeed.com/ct/", size: 9 },
    { lat: 41.18, lng: -73.19, name: "Bridgeport, CT", provider: "gonet", passings: "Served", status: "Live", source: "GoNetSpeed CT", sourceUrl: "https://www.gonetspeed.com/ct/", size: 12 },
    { lat: 41.56, lng: -72.09, name: "Norwich/Groton, CT", provider: "gonet", passings: "Served", status: "Live", source: "GoNetSpeed CT", sourceUrl: "https://www.gonetspeed.com/ct/", size: 8 },
    { lat: 41.95, lng: -72.58, name: "Enfield/Suffield, CT", provider: "gonet", passings: "Served", status: "Live", source: "GoNetSpeed CT", sourceUrl: "https://www.gonetspeed.com/ct/", size: 8, overlapWith: ["frontier"] },
    // -- MAINE --
    { lat: 43.66, lng: -70.26, name: "Portland, ME", provider: "gonet", passings: "13,000 HHP", status: "Completed", notes: "Network completion celebrated.", source: "GoNetSpeed", sourceUrl: "https://www.gonetspeed.com/resources/news/portland-receives-100-fiber-internet-gonetspeed-celebrates-network-completion/", size: 14, overlapWith: ["fidium"] },
    { lat: 44.80, lng: -68.77, name: "Bangor, ME", provider: "gonet", passings: "8,000 HHP", status: "Live", notes: "First customers connected.", source: "GoNetSpeed", sourceUrl: "https://www.gonetspeed.com/resources/news/gonetspeed-connects-first-customers-in-bangor-to-high-speed-fiber-optic-network/", size: 10, overlapWith: ["fidium"] },
    { lat: 43.64, lng: -70.28, name: "South Portland, ME", provider: "gonet", passings: "Served", status: "Live", source: "GoNetSpeed", sourceUrl: "https://www.gonetspeed.com/resources/news/gonetspeed-launches-south-portland-high-speed-fiber-internet/", size: 8 },
    { lat: 43.36, lng: -70.47, name: "Kennebunkport, ME", provider: "gonet", passings: "Served", status: "Live", source: "Telecompetitor", sourceUrl: "https://www.telecompetitor.com/gonetspeed-expands-100-fiber-network-in-kennebunkport-maine/", size: 7 },
    { lat: 44.09, lng: -70.22, name: "Auburn/Lewiston, ME", provider: "gonet", passings: "Served", status: "Live", source: "GoNetSpeed ME", sourceUrl: "https://www.gonetspeed.com/me/", size: 10 },
    { lat: 44.31, lng: -69.78, name: "Augusta, ME", provider: "gonet", passings: "Served", status: "Live", source: "GoNetSpeed ME", sourceUrl: "https://www.gonetspeed.com/me/", size: 8 },
    { lat: 43.91, lng: -69.97, name: "Brunswick/Bath, ME", provider: "gonet", passings: "Served", status: "Live", source: "GoNetSpeed ME", sourceUrl: "https://www.gonetspeed.com/me/", size: 8 },
    { lat: 43.50, lng: -70.44, name: "Saco/Biddeford, ME", provider: "gonet", passings: "Served", status: "Live", source: "GoNetSpeed ME", sourceUrl: "https://www.gonetspeed.com/me/", size: 9, overlapWith: ["fidium"] },
    { lat: 43.44, lng: -70.54, name: "Scarborough/OOB, ME", provider: "gonet", passings: "Served", status: "Live", source: "GoNetSpeed ME", sourceUrl: "https://www.gonetspeed.com/me/", size: 8 },
    // -- MASSACHUSETTS --
    { lat: 42.10, lng: -72.59, name: "Springfield, MA", provider: "gonet", passings: "17,400 HHP", status: "Construction", notes: "Winter 2024 start, complete early 2026.", source: "GoNetSpeed", sourceUrl: "https://www.gonetspeed.com/resources/news/gonetspeed-to-bring-springfield-100-fiber-internet/", size: 12, isNew: true },
    { lat: 42.37, lng: -72.52, name: "Amherst, MA", provider: "gonet", passings: "Served", status: "Live", source: "GoNetSpeed MA", sourceUrl: "https://www.gonetspeed.com/ma/", size: 7 },
    { lat: 42.27, lng: -72.67, name: "Easthampton, MA", provider: "gonet", passings: "Served", status: "Live", source: "GoNetSpeed MA", sourceUrl: "https://www.gonetspeed.com/ma/", size: 7 },
    { lat: 42.83, lng: -70.88, name: "Haverhill, MA (planned)", provider: "gonet", passings: "$250M investment pending", status: "Planned", notes: "Blocked by lack of MA OTMR legislation.", source: "BusinessWire", sourceUrl: "https://www.businesswire.com/news/home/20250507692118/en/GoNetspeed-Poised-to-Make-$250M-Massachusetts-Investment-Amplifying-Need-for-One-Touch-Make-Ready", size: 8, isNew: true },
    // -- NEW YORK --
    { lat: 43.10, lng: -75.23, name: "Utica, NY", provider: "gonet", passings: "38,000 HHP ($60M)", status: "Construction", notes: "Complete by winter 2025.", source: "GoNetSpeed", sourceUrl: "https://www.gonetspeed.com/resources/news/gonetspeed-launches-construction-on-uticas-100-fiber-optic-infrastructure/", size: 12, isNew: true },
    { lat: 43.07, lng: -75.29, name: "New Hartford, NY", provider: "gonet", passings: "9,200 HHP ($12M)", status: "Active", notes: "First customers summer 2025.", source: "BusinessWire", sourceUrl: "https://www.businesswire.com/news/home/20250529324726/en/GoNetspeed-Welcomes-New-Hartford-to-100-Fiber-Optic-Network", size: 8 },
    { lat: 42.90, lng: -78.83, name: "Cheektowaga, NY", provider: "gonet", passings: "Served", status: "Live", source: "GoNetSpeed NY", sourceUrl: "https://www.gonetspeed.com/ny/", size: 7 },
    { lat: 42.97, lng: -76.87, name: "Geneva/Seneca Falls, NY", provider: "gonet", passings: "Served", status: "Live", source: "GoNetSpeed NY", sourceUrl: "https://www.gonetspeed.com/ny/", size: 7 },
    // -- NEW JERSEY (NEW) --
    { lat: 40.58, lng: -74.23, name: "Carteret, NJ", provider: "gonet", passings: "New (part of $110M)", status: "New Build", notes: "First customers fall 2026. 11th state entry.", source: "BusinessWire", sourceUrl: "https://www.businesswire.com/news/home/20250708646368/en/GoNetspeed-Accelerates-Network-Footprint-Prepares-Expansion-Serving-11th-State-New-Jersey", size: 10, isNew: true, overlapWith: ["verizon"] },
    { lat: 40.43, lng: -74.28, name: "Old Bridge/South River, NJ", provider: "gonet", passings: "New (part of $110M)", status: "New Build", source: "BusinessWire", sourceUrl: "https://www.businesswire.com/news/home/20250708646368/en/GoNetspeed-Accelerates-Network-Footprint-Prepares-Expansion-Serving-11th-State-New-Jersey", size: 8, isNew: true, overlapWith: ["verizon"] },
    { lat: 39.38, lng: -74.45, name: "Northfield/Ventnor, NJ", provider: "gonet", passings: "New (part of $110M)", status: "New Build", source: "NJ Business Magazine", sourceUrl: "https://njbmagazine.com/njb-news-now/gonetspeed-marking-nj-network-footprint-via-110m-investment/", size: 8, isNew: true },
    // -- RHODE ISLAND --
    { lat: 41.49, lng: -71.31, name: "Newport, RI", provider: "gonet", passings: "8,200 HHP ($3.9M + $9M state)", status: "Construction", notes: "Construction Jan 2026, first customers spring 2026.", source: "BusinessWire", sourceUrl: "https://www.businesswire.com/news/home/20250523831418/en/GoNetspeed-Celebrates-Growing-Footprint-and-10th-State", size: 10, isNew: true, overlapWith: ["verizon"] },
    // -- VERMONT --
    { lat: 43.64, lng: -73.25, name: "Castleton/Sudbury, VT", provider: "gonet", passings: "Served", status: "Live", notes: "8 VT communities served.", source: "Vermont Biz Magazine", sourceUrl: "https://vermontbiz.com/news/2025/may/14/gonetspeed-expands-fiber-optic-internet-service-four-vermont-communities", size: 6, overlapWith: ["fidium"] },

    // ======= GREENLIGHT NETWORKS =======
    // -- NEW YORK --
    { lat: 43.16, lng: -77.61, name: "Rochester, NY (Core)", provider: "greenlight", passings: "120K+ (core market)", status: "Core Market", notes: "HQ market. Strongest brand. Spectrum primary competitor.", source: "Greenlight Networks", sourceUrl: "https://www.greenlightnetworks.com/", size: 18 },
    { lat: 43.22, lng: -77.70, name: "Greece/Gates/Chili, NY", provider: "greenlight", passings: "$30M westside investment", status: "Active Build", notes: "Rochester westside expansion 2025.", source: "WXXI News", sourceUrl: "https://www.wxxinews.org/local-news/2025-07-30/greenlight-investing-30-million-to-improve-access-in-west-side-suburbs", size: 10, isNew: true },
    { lat: 43.09, lng: -77.44, name: "Fairport/Perinton, NY", provider: "greenlight", passings: "2,400 HHP by end 2025", status: "Construction", source: "Greenlight Networks", sourceUrl: "https://www.greenlightnetworks.com/greenlight-networks-advances-fiber-rollout-on-rochesters-westside/", size: 8 },
    { lat: 42.89, lng: -78.88, name: "Buffalo, NY", provider: "greenlight", passings: "28,000+ passed since 2020", status: "Expanding", notes: "21,000+ connected. Target: double access.", source: "Greenlight Networks", sourceUrl: "https://www.greenlightnetworks.com/niagara-falls-expansion/", size: 14, isNew: true },
    { lat: 43.00, lng: -78.95, name: "North Tonawanda, NY", provider: "greenlight", passings: "$12.5M investment", status: "Live", source: "Greenlight Networks", sourceUrl: "https://www.greenlightnetworks.com/greenlight-networks-announces-12-5-million-expansion-into-north-tonawanda/", size: 8 },
    { lat: 42.96, lng: -78.88, name: "Tonawanda, NY", provider: "greenlight", passings: "5,500 HHP", status: "Active", notes: "Service expected Feb 2025.", source: "WIVB", sourceUrl: "https://www.wivb.com/news/local-news/erie-county/tonawanda/internet-provider-greenlight-networks-begins-expansion-into-city-of-tonawanda/", size: 8 },
    { lat: 42.90, lng: -78.67, name: "Lancaster, NY", provider: "greenlight", passings: "2,500 HHP ($2.5M+)", status: "Construction", source: "Greenlight Networks", sourceUrl: "https://www.greenlightnetworks.com/village-of-lancaster-and-city-of-north-tonawanda/", size: 7 },
    { lat: 43.09, lng: -79.06, name: "Niagara Falls, NY", provider: "greenlight", passings: "Expanding", status: "Construction", notes: "SE neighborhoods 2025.", source: "Greenlight Networks", sourceUrl: "https://www.greenlightnetworks.com/niagara-falls-expansion/", size: 10, isNew: true },
    { lat: 42.65, lng: -73.75, name: "Albany/Capital Region, NY", provider: "greenlight", passings: "Part of 35 municipalities", status: "Expanding", notes: "Overlap zone with GoNetSpeed and Fidium.", source: "Greenlight Networks", sourceUrl: "https://www.greenlightnetworks.com/growing-greenlight-networks-fiber-forward-magazine/", size: 12, isNew: true, overlapWith: ["gonet","fidium"] },
    { lat: 42.10, lng: -75.91, name: "Binghamton, NY", provider: "greenlight", passings: "Part of 35 municipalities", status: "Active", notes: "Southern Tier market.", source: "Greenlight Networks", sourceUrl: "https://www.greenlightnetworks.com/growing-greenlight-networks-fiber-forward-magazine/", size: 10 },
    { lat: 41.70, lng: -73.93, name: "Hudson Valley, NY", provider: "greenlight", passings: "Expanding south of Albany", status: "Expanding", notes: "Altice/Optimum territory.", source: "Greenlight Networks", sourceUrl: "https://www.greenlightnetworks.com/growing-greenlight-networks-fiber-forward-magazine/", size: 8, isNew: true },
    // -- PENNSYLVANIA --
    { lat: 41.41, lng: -75.66, name: "Scranton/NEPA (Loop)", provider: "greenlight", passings: "Acquired Oct 2025", status: "M&A Integration", notes: "Loop Internet: Wilkes-Barre, Mountain Top, Scranton, Kingston. 58 employees added.", source: "Greenlight Networks", sourceUrl: "https://www.greenlightnetworks.com/greenlight-announces-loop-internet-acquisition/", size: 12, overlapWith: ["empire"] },
    { lat: 41.35, lng: -75.80, name: "Blakely Borough, PA", provider: "greenlight", passings: "Municipal partnership", status: "Expanding", source: "Greenlight Networks", sourceUrl: "https://www.greenlightnetworks.com/greenlight-networks-expands-high-speed-fiber-internet-across-northeast-pa-signs-municipal-partnership-with-blakely-borough/", size: 6 },
    { lat: 40.34, lng: -75.93, name: "Reading/Berks County, PA (FastBridge)", provider: "greenlight", passings: "Pending acquisition (mid-2026)", status: "Pending M&A", notes: "FastBridge Fiber: Sinking Spring, West Reading, Shillington, Wyomissing.", source: "PR Newswire", sourceUrl: "https://www.prnewswire.com/news-releases/greenlight-networks-to-acquire-fastbridge-fiber-302602839.html", size: 10, isNew: true },
    { lat: 41.24, lng: -76.92, name: "Williamsport, PA (FastBridge)", provider: "greenlight", passings: "Pending (FastBridge)", status: "Pending M&A", source: "Light Reading", sourceUrl: "https://www.lightreading.com/broadband/greenlight-networks-scoops-up-fastbridge-fiber", size: 8, overlapWith: ["empire"] },
    { lat: 42.13, lng: -80.09, name: "Erie, PA (FastBridge)", provider: "greenlight", passings: "Under construction (FastBridge)", status: "Construction", source: "FastBridge Fiber", sourceUrl: "https://fastbridgefiber.com/greenlight-networks/", size: 8, isNew: true },
    // -- MARYLAND --
    { lat: 39.29, lng: -76.61, name: "Baltimore, MD", provider: "greenlight", passings: "$100M greenfield", status: "Active Build", notes: "Mt. Washington, Roland Park, Belair-Edison, Frankford, Hampden. Q3 2025 launch.", source: "PR Newswire", sourceUrl: "https://www.prnewswire.com/news-releases/greenlight-networks-partners-with-baltimore-to-launch-100-million-fiber-internet-expansion-302484021.html", size: 14, isNew: true },

    // ======= FIDIUM / CONSOLIDATED =======
    // -- NEW HAMPSHIRE --
    { lat: 43.00, lng: -71.46, name: "Manchester, NH", provider: "fidium", passings: "Part of 276K+ NH", status: "Core Market", notes: "Largest NH market. Copper-to-fiber upgrade.", source: "Fidium Fiber", sourceUrl: "https://www.fidiumfiber.com/blog/news/fidium-fiber-helping-to-bridge-connectivity-gap-in-new-hampshire", size: 16 },
    { lat: 43.21, lng: -71.54, name: "Concord, NH", provider: "fidium", passings: "Part of 276K+ NH", status: "Core Market", source: "Fidium Fiber", sourceUrl: "https://www.fidiumfiber.com/blog/news/fidium-fiber-helping-to-bridge-connectivity-gap-in-new-hampshire", size: 14 },
    { lat: 42.99, lng: -71.44, name: "Southern NH (Nashua area)", provider: "fidium", passings: "+ 60K locations in 2025", status: "Expanding", notes: "NH Broadband Matching Grant: Barnstead, Barrington, Belmont, Epsom, Farmington, Francestown, Gilmanton, Pittsfield, Strafford (1,500+ HHP).", source: "Fidium Fiber", sourceUrl: "https://www.fidiumfiber.com/blog/news/fidium-fiber-helping-to-bridge-connectivity-gap-in-new-hampshire", size: 12, isNew: true, overlapWith: ["breezeline"] },
    { lat: 43.20, lng: -71.50, name: "NH Grant Towns", provider: "fidium", passings: "1,500+ HHP (grant-funded)", status: "Construction", notes: "Barnstead, Barrington, Belmont, Epsom, Farmington overlap with Breezeline NH towns.", source: "Fidium Fiber", sourceUrl: "https://www.fidiumfiber.com/blog/news/fidium-fiber-helping-to-bridge-connectivity-gap-in-new-hampshire", size: 8, overlapWith: ["breezeline"] },
    // -- VERMONT --
    { lat: 44.47, lng: -73.21, name: "Burlington, VT", provider: "fidium", passings: "Part of 134K+ VT", status: "Expanding", notes: "Upper Valley expansion announced Mar 2025.", source: "Vermont Biz Magazine", sourceUrl: "https://vermontbiz.com/news/2024/november/20/fidium-has-connected-more-134000-vermont-homes-and-businesses-three-years", size: 12, overlapWith: ["gonet"] },
    { lat: 44.26, lng: -72.57, name: "Montpelier/Central VT", provider: "fidium", passings: "+ 50K in 2025", status: "Expanding", source: "Vermont Biz Magazine", sourceUrl: "https://vermontbiz.com/news/2025/march/05/increased-fiber-access-connectivity-fidium-coming-upper-valley", size: 10, isNew: true },
    { lat: 43.63, lng: -72.32, name: "Upper Valley VT", provider: "fidium", passings: "Announced Mar 2025", status: "Announced", source: "Vermont Biz Magazine", sourceUrl: "https://vermontbiz.com/news/2025/march/05/increased-fiber-access-connectivity-fidium-coming-upper-valley", size: 8, isNew: true },
    // -- MAINE --
    { lat: 43.66, lng: -70.26, name: "Portland, ME (Fidium)", provider: "fidium", passings: "Part of 294K+ ME", status: "Expanding", notes: "Direct overlap with GoNetSpeed in Portland.", source: "Fidium Fiber", sourceUrl: "https://www.fidiumfiber.com/blog/news/fidium-fiber-helps-bridge-connectivity-gap-in-maine", size: 14, overlapWith: ["gonet"] },
    { lat: 44.80, lng: -68.77, name: "Bangor, ME (Fidium)", provider: "fidium", passings: "+ 120K locations in 2025", status: "Expanding", source: "Fidium Fiber", sourceUrl: "https://www.fidiumfiber.com/blog/news/fidium-fiber-helps-bridge-connectivity-gap-in-maine", size: 10, overlapWith: ["gonet"] },
    { lat: 44.10, lng: -69.50, name: "Lincoln County, ME", provider: "fidium", passings: "Construction begun", status: "Construction", source: "Community Networks", sourceUrl: "https://communitynetworks.org/content/construction-begins-fidiums-lincoln-county-maine-fiber-expansion", size: 7, isNew: true },
    { lat: 43.50, lng: -70.30, name: "Rural ME (Connect Maine)", provider: "fidium", passings: "22,000 HHP (grant-funded)", status: "Construction", source: "Consolidated", sourceUrl: "https://www.consolidated.com/about-us/news/article-detail/id/841/consolidated-communications-to-deliver-fidium-fiber-internet-to-22000-rural-maine-homes-and-businesses-through-connect-maine-partnership", size: 10, isNew: true },

    // ======= EMPIRE ACCESS =======
    // -- NEW YORK --
    { lat: 42.14, lng: -77.05, name: "Corning/Painted Post, NY", provider: "empire", passings: "Part of 96K addresses", status: "Live", source: "Empire Access", sourceUrl: "https://www.empireaccess.com/press-releases/painted-post-and-riverside-ny-fiber-optic-expansion/", size: 10 },
    { lat: 42.09, lng: -77.66, name: "Hornell, NY", provider: "empire", passings: "HQ area", status: "Live", source: "Empire Access", sourceUrl: "https://www.empireaccess.com/about-us/communities-we-serve/", size: 8 },
    { lat: 42.09, lng: -76.81, name: "Elmira/Horseheads, NY", provider: "empire", passings: "Expanding", status: "Expanding", notes: "South Elmira + Horseheads/Southport expansion.", source: "Empire Access", sourceUrl: "https://www.empireaccess.com/press-releases/empire-access-expands-to-horseheads-and-southport-new-york/", size: 10, isNew: true },
    { lat: 42.60, lng: -76.18, name: "Cortland, NY", provider: "empire", passings: "Live since fall 2023", status: "Live", source: "iMiller PR", sourceUrl: "https://www.imillerpr.com/news/empire-access-to-introduce-fiber-internet-to-cortland-ny/", size: 8 },
    { lat: 42.83, lng: -76.98, name: "Canandaigua/Geneva, NY", provider: "empire", passings: "Served", status: "Live", source: "Empire Access", sourceUrl: "https://www.empireaccess.com/about-us/communities-we-serve/", size: 8 },
    { lat: 42.49, lng: -76.54, name: "Watkins Glen, NY", provider: "empire", passings: "Served", status: "Live", source: "Empire Access", sourceUrl: "https://www.empireaccess.com/about-us/communities-we-serve/", size: 6 },
    { lat: 42.98, lng: -78.19, name: "Batavia, NY", provider: "empire", passings: "Served", status: "Live", source: "Empire Access", sourceUrl: "https://www.empireaccess.com/about-us/communities-we-serve/", size: 7 },
    { lat: 43.46, lng: -76.51, name: "Oswego County, NY", provider: "empire", passings: "10,792 locations ($26M grant, 345mi fiber)", status: "Construction", notes: "ConnectALL grant. County-owned open-access; Empire as ISP.", source: "Governor Hochul", sourceUrl: "https://www.governor.ny.gov/news/governor-hochul-announces-26-million-connectall-investment-expand-affordable-broadband-access", size: 10, isNew: true },
    // -- PENNSYLVANIA --
    { lat: 41.41, lng: -75.66, name: "Scranton, PA (Empire)", provider: "empire", passings: "176 miles fiber (Phase 1+2)", status: "Live", notes: "Phase 1 (86mi) 2023, Phase 2 (90mi) 2024. Direct overlap with Greenlight/Loop.", source: "Empire Access", sourceUrl: "https://www.empireaccess.com/press-releases/empire-access-expansion-in-scranton-is-ready-for-service/", size: 12, overlapWith: ["greenlight"] },
    { lat: 41.00, lng: -76.45, name: "Bloomsburg, PA", provider: "empire", passings: "Constructing", status: "Construction", source: "WVIA", sourceUrl: "https://www.wvia.org/news/local/2024-08-19/081624empireaccesslyco", size: 7, isNew: true },
    { lat: 41.24, lng: -76.92, name: "Williamsport, PA (Empire)", provider: "empire", passings: "Full area buildout", status: "Expanding", notes: "Direct overlap with Greenlight/FastBridge.", source: "WVIA", sourceUrl: "https://www.wvia.org/news/local/2024-08-19/081624empireaccesslyco", size: 10, overlapWith: ["greenlight"] },
    { lat: 41.83, lng: -75.88, name: "Carbondale, PA", provider: "empire", passings: "Live", status: "Live", source: "PA Business Report", sourceUrl: "https://pennbizreport.com/news/26161-carbondale-to-get-fiber-optic-internet-this-fall-from-empire-access/", size: 6 },

    // ======= SLIC NETWORKS =======
    { lat: 44.80, lng: -74.66, name: "Nicholville/St. Lawrence, NY", provider: "slic", passings: "HQ region (100+ towns)", status: "Core", source: "BroadbandNow", sourceUrl: "https://broadbandnow.com/Slic-Network-Solutions", size: 10 },
    { lat: 43.97, lng: -75.91, name: "Watertown, NY", provider: "slic", passings: "Data center + service", status: "Live", source: "Westelcom/SLIC", sourceUrl: "https://westelcom.com/2025/05/slicfiber-expands-network-capacity-tenfold-through-strategic-integration-with-westelcom/", size: 8 },
    { lat: 44.70, lng: -73.45, name: "Plattsburgh, NY", provider: "slic", passings: "Data center + service", status: "Live", source: "Westelcom/SLIC", sourceUrl: "https://westelcom.com/2025/05/slicfiber-expands-network-capacity-tenfold-through-strategic-integration-with-westelcom/", size: 8 },
    { lat: 43.05, lng: -76.15, name: "Syracuse, NY (SLIC DC)", provider: "slic", passings: "Data center", status: "Live", source: "Westelcom/SLIC", sourceUrl: "https://westelcom.com/2025/05/slicfiber-expands-network-capacity-tenfold-through-strategic-integration-with-westelcom/", size: 7 },
    { lat: 43.84, lng: -74.49, name: "Long Lake, NY (Adirondacks)", provider: "slic", passings: "750+ HHP", status: "Live", notes: "First gigabit Adirondack community.", source: "PR Newswire", sourceUrl: "https://www.prnewswire.com/news-releases/slic-network-solutions-brings-blazing-fast-broadband-internet-to-long-lake-ny-300276412.html", size: 6 },
    { lat: 44.93, lng: -74.89, name: "Massena, NY", provider: "slic", passings: "Expanding", status: "Expanding", source: "North Country Now", sourceUrl: "https://northcountrynow.com/stories/slic-network-solutions-to-expand-residential-phone-internet-services-in-massena,190690", size: 6 },

    // ======= VERIZON FIOS =======
    { lat: 40.74, lng: -74.17, name: "Northern NJ (Legacy Fios)", provider: "verizon", passings: "Millions (legacy ILEC)", status: "Core Market", notes: "Largest NE Fios footprint. GoNetSpeed entering as overbuild.", source: "Verizon", sourceUrl: "https://www.verizon.com/home/internet/fios-fastest-internet/availability/", size: 18, overlapWith: ["gonet"] },
    { lat: 40.75, lng: -73.98, name: "NYC Metro (Fios)", provider: "verizon", passings: "Millions", status: "Core Market", source: "Verizon", sourceUrl: "https://www.verizon.com/home/internet/fios-fastest-internet/availability/", size: 20 },
    { lat: 40.61, lng: -75.37, name: "Lehigh Valley, PA (Fios)", provider: "verizon", passings: "~1,000 new HHP/month", status: "Expanding", notes: "Bethlehem, Upper Macungie expansion.", source: "Morning Call", sourceUrl: "https://www.mcall.com/2025/06/02/verizon-fios-expanding-in-bethlehem-new-households-to-qualify-in-the-coming-months/", size: 10, isNew: true },
    { lat: 42.89, lng: -78.88, name: "Buffalo, NY (Fios)", provider: "verizon", passings: "Legacy footprint", status: "Active", source: "Verizon", sourceUrl: "https://www.verizon.com/home/internet/fios-fastest-internet/availability/", size: 10 },
    { lat: 41.49, lng: -71.31, name: "Newport, RI (Fios)", provider: "verizon", passings: "RI broadband grant (alongside GoNetSpeed)", status: "Grant Awarded", source: "RI Commerce", sourceUrl: "https://commerceri.com/articles/post/ri-commerce-announces-selection-of-gonetspeed-verizon-for-first-round-of-25m-broadband-investment/", size: 8 },

    // ======= FRONTIER (NOW VERIZON) =======
    { lat: 41.76, lng: -72.68, name: "Hartford, CT (Frontier)", provider: "frontier", passings: "Part of 500K+ CT (111 communities)", status: "Active", notes: "$800M CT investment. 90% target by 2026.", source: "Frontier Newsroom", sourceUrl: "https://newsroom.frontier.com/press-release/frontier-invests-800-million-to-expand-fiber-in-connecticut/", size: 16, overlapWith: ["gonet"] },
    { lat: 41.05, lng: -73.54, name: "Norwalk, CT (Frontier)", provider: "frontier", passings: "Part of 111 CT communities", status: "Active", source: "CT Insider", sourceUrl: "https://www.ctinsider.com/business/article/Frontier-Communications-fiber-optic-expansion-17507452.php", size: 10, overlapWith: ["gonet"] },
    { lat: 41.18, lng: -73.19, name: "Bridgeport, CT (Frontier)", provider: "frontier", passings: "Part of 111 CT communities", status: "Active", source: "CT Insider", sourceUrl: "https://www.ctinsider.com/business/article/Frontier-Communications-fiber-optic-expansion-17507452.php", size: 10, overlapWith: ["gonet"] },
    { lat: 41.31, lng: -72.92, name: "New Haven, CT (Frontier)", provider: "frontier", passings: "Part of 111 CT communities", status: "Active", source: "CT Insider", sourceUrl: "https://www.ctinsider.com/business/article/Frontier-Communications-fiber-optic-expansion-17507452.php", size: 12, overlapWith: ["gonet"] },
    { lat: 41.55, lng: -73.04, name: "Glastonbury/Windsor, CT (Frontier)", provider: "frontier", passings: "Part of 111 communities", status: "Active", source: "CT Insider", sourceUrl: "https://www.ctinsider.com/business/article/Frontier-Communications-fiber-optic-expansion-17507452.php", size: 8, overlapWith: ["gonet"] },
    { lat: 41.95, lng: -72.58, name: "N. CT / Windsor Locks (Frontier)", provider: "frontier", passings: "300K additional announced", status: "Expanding", notes: "Phase 2: ~300K additional passings bringing total to ~800K.", source: "Fierce Network", sourceUrl: "https://www.fierce-network.com/broadband/frontier-plots-300k-more-fiber-passings-connecticut", size: 8, isNew: true, overlapWith: ["gonet"] },

    // ======= BREEZELINE =======
    { lat: 43.30, lng: -71.14, name: "Rochester/Farmington, NH", provider: "breezeline", passings: "Fiber deployment (9 NH towns)", status: "Active", notes: "Direct overlap with Fidium in Farmington, Pittsfield.", source: "GlobeNewsWire", sourceUrl: "https://www.globenewswire.com/news-release/2025/02/20/3029830/0/en/Breezeline-Deploys-Fiber-Internet-in-Nine-New-Hampshire-Communities.html", size: 10, overlapWith: ["fidium"] },
    { lat: 43.58, lng: -71.21, name: "Wolfeboro, NH", provider: "breezeline", passings: "Part of 9 NH towns", status: "Active", source: "GlobeNewsWire", sourceUrl: "https://www.globenewswire.com/news-release/2025/02/20/3029830/0/en/Breezeline-Deploys-Fiber-Internet-in-Nine-New-Hampshire-Communities.html", size: 7 },
    { lat: 43.44, lng: -71.37, name: "Franklin/Tilton/Northfield, NH", provider: "breezeline", passings: "Part of 9 NH towns", status: "Active", source: "GlobeNewsWire", sourceUrl: "https://www.globenewswire.com/news-release/2025/02/20/3029830/0/en/Breezeline-Deploys-Fiber-Internet-in-Nine-New-Hampshire-Communities.html", size: 7, overlapWith: ["fidium"] },
    { lat: 43.44, lng: -70.76, name: "Sanford, ME", provider: "breezeline", passings: "Fiber expansion", status: "Construction", source: "GlobeNewsWire", sourceUrl: "https://www.globenewswire.com/news-release/2025/03/06/3038464/0/en/Breezeline-to-Expand-Fiber-Network-to-Homes-and-Businesses-in-Southern-Maine.html", size: 8, isNew: true, overlapWith: ["fidium","gonet"] },
    { lat: 41.10, lng: -75.90, name: "Luzerne County, PA", provider: "breezeline", passings: "Wapwallopen, Larksville, White Haven, Weatherly", status: "Active", source: "GlobeNewsWire", sourceUrl: "https://www.globenewswire.com/news-release/2025/03/20/3046641/0/en/Breezeline-Brings-Advanced-Fiber-Internet-to-Homes-and-Businesses-in-Luzerne-and-Carbon-Counties.html", size: 8 },
    { lat: 40.33, lng: -78.92, name: "Johnstown/Altoona, PA", provider: "breezeline", passings: "Fiber deployment", status: "Active", source: "Breezeline", sourceUrl: "https://www.breezeline.com/news/breezeline-brings-advanced-fiber-internet-to-johnstown-altoona-uniontown-and-clearfield", size: 8 },
    { lat: 39.65, lng: -78.76, name: "Cumberland, MD", provider: "breezeline", passings: "Fiber deployment", status: "Active", source: "GlobeNewsWire", sourceUrl: "https://www.globenewswire.com/news-release/2025/02/20/3029832/0/en/Breezeline-Brings-Advanced-Fiber-Internet-to-Cumberland-Maryland.html", size: 7 },
];

// ---- BUILD PIPELINE ----
const BUILD_PIPELINE = [
    // GoNetSpeed
    { provider: "gonet", market: "New Jersey (6 towns)", state: "NJ", status: "NEW BUILD", targetHHP: "TBD ($110M)", timeline: "2026 construction, fall 2026 first customers", overlap: "Verizon Fios", overlapRisk: "Medium", source: "BusinessWire", sourceUrl: "https://www.businesswire.com/news/home/20250708646368/en/GoNetspeed-Accelerates-Network-Footprint-Prepares-Expansion-Serving-11th-State-New-Jersey", notes: "Carteret, Northfield, Old Bridge, Parlin, South River, Ventnor" },
    { provider: "gonet", market: "East Haven, CT", state: "CT", status: "ACTIVE", targetHHP: "13,000 ($7.5M)", timeline: "First customers Aug 2025", overlap: "Frontier/Verizon", overlapRisk: "High", source: "BusinessWire", sourceUrl: "https://www.businesswire.com/news/home/20250826151569/en/GoNetspeed-Ushers-in-New-Era-for-East-Haven-with-100-Fiber-Optic-Connectivity-for-First-Customers" },
    { provider: "gonet", market: "Stratford, CT", state: "CT", status: "CONSTRUCTION", targetHHP: "12,400 ($7M)", timeline: "Fall 2025", overlap: "Frontier/Verizon", overlapRisk: "High", source: "GoNetSpeed News", sourceUrl: "https://www.gonetspeed.com/resources/news/" },
    { provider: "gonet", market: "Utica/New Hartford, NY", state: "NY", status: "CONSTRUCTION", targetHHP: "47,200 ($72M combined)", timeline: "Complete winter 2025", overlap: "Spectrum", overlapRisk: "Low", source: "GoNetSpeed / BusinessWire", sourceUrl: "https://www.gonetspeed.com/resources/news/gonetspeed-launches-construction-on-uticas-100-fiber-optic-infrastructure/" },
    { provider: "gonet", market: "Springfield, MA", state: "MA", status: "CONSTRUCTION", targetHHP: "17,400", timeline: "Complete early 2026", overlap: "Comcast", overlapRisk: "Low", source: "GoNetSpeed", sourceUrl: "https://www.gonetspeed.com/resources/news/gonetspeed-to-bring-springfield-100-fiber-internet/" },
    { provider: "gonet", market: "Massachusetts (27 towns)", state: "MA", status: "PLANNED", targetHHP: "$250M pending OTMR", timeline: "Pending legislation", overlap: "Comcast", overlapRisk: "Low", source: "BusinessWire", sourceUrl: "https://www.businesswire.com/news/home/20250507692118/en/GoNetspeed-Poised-to-Make-$250M-Massachusetts-Investment-Amplifying-Need-for-One-Touch-Make-Ready", notes: "Blocked by lack of MA OTMR pole attachment reform" },
    { provider: "gonet", market: "Newport, RI", state: "RI", status: "CONSTRUCTION", targetHHP: "8,200 ($12.9M)", timeline: "First customers spring 2026", overlap: "Verizon (also RI grant)", overlapRisk: "Medium", source: "BusinessWire", sourceUrl: "https://www.businesswire.com/news/home/20250523831418/en/GoNetspeed-Celebrates-Growing-Footprint-and-10th-State" },
    // Greenlight
    { provider: "greenlight", market: "Rochester Westside", state: "NY", status: "ACTIVE", targetHHP: "$30M investment", timeline: "2025", overlap: "Spectrum", overlapRisk: "Low", source: "WXXI News", sourceUrl: "https://www.wxxinews.org/local-news/2025-07-30/greenlight-investing-30-million-to-improve-access-in-west-side-suburbs" },
    { provider: "greenlight", market: "Buffalo/Niagara expansion", state: "NY", status: "EXPANDING", targetHHP: "Double current 28K+", timeline: "2025-2026", overlap: "Spectrum", overlapRisk: "Low", source: "Greenlight Networks", sourceUrl: "https://www.greenlightnetworks.com/niagara-falls-expansion/" },
    { provider: "greenlight", market: "Baltimore, MD", state: "MD", status: "NEW BUILD", targetHHP: "$100M greenfield", timeline: "Q3 2025 launch", overlap: "Comcast, Verizon Fios", overlapRisk: "Medium", source: "PR Newswire", sourceUrl: "https://www.prnewswire.com/news-releases/greenlight-networks-partners-with-baltimore-to-launch-100-million-fiber-internet-expansion-302484021.html" },
    { provider: "greenlight", market: "FastBridge Fiber (PA + Buffalo)", state: "PA/NY", status: "PENDING M&A", targetHHP: "Multiple markets", timeline: "Close mid-2026", overlap: "Empire (Williamsport)", overlapRisk: "Medium", source: "PR Newswire", sourceUrl: "https://www.prnewswire.com/news-releases/greenlight-networks-to-acquire-fastbridge-fiber-302602839.html" },
    // Fidium
    { provider: "fidium", market: "New Hampshire statewide", state: "NH", status: "ACTIVE", targetHHP: "276K+ done, 60K more in 2025", timeline: "Continuous", overlap: "Breezeline (9 towns)", overlapRisk: "Medium", source: "Fidium Fiber", sourceUrl: "https://www.fidiumfiber.com/blog/news/fidium-fiber-helping-to-bridge-connectivity-gap-in-new-hampshire" },
    { provider: "fidium", market: "Vermont statewide", state: "VT", status: "EXPANDING", targetHHP: "134K+ done, 50K more in 2025", timeline: "Through 2027-2028", overlap: "GoNetSpeed (8 towns)", overlapRisk: "Low", source: "Vermont Biz Magazine", sourceUrl: "https://vermontbiz.com/news/2024/november/20/fidium-has-connected-more-134000-vermont-homes-and-businesses-three-years" },
    { provider: "fidium", market: "Maine statewide", state: "ME", status: "EXPANDING", targetHHP: "294K+ done, 120K more in 2025", timeline: "Through 2027-2028", overlap: "GoNetSpeed (65+ towns)", overlapRisk: "High", source: "Fidium Fiber", sourceUrl: "https://www.fidiumfiber.com/blog/news/fidium-fiber-helps-bridge-connectivity-gap-in-maine" },
    { provider: "fidium", market: "Rural ME (Connect Maine)", state: "ME", status: "CONSTRUCTION", targetHHP: "22,000 HHP", timeline: "2025-2026", overlap: "GoNetSpeed", overlapRisk: "High", source: "Consolidated", sourceUrl: "https://www.consolidated.com/about-us/news/article-detail/id/841/consolidated-communications-to-deliver-fidium-fiber-internet-to-22000-rural-maine-homes-and-businesses-through-connect-maine-partnership" },
    // Empire
    { provider: "empire", market: "Oswego County, NY", state: "NY", status: "CONSTRUCTION", targetHHP: "10,792 ($26M, 345mi)", timeline: "2025-2026", overlap: "Low", overlapRisk: "Low", source: "Governor Hochul", sourceUrl: "https://www.governor.ny.gov/news/governor-hochul-announces-26-million-connectall-investment-expand-affordable-broadband-access" },
    { provider: "empire", market: "140K new fiber passings (NY + PA)", state: "NY/PA", status: "EXPANDING", targetHHP: "140,000+", timeline: "Multi-year", overlap: "Greenlight (Scranton, Williamsport)", overlapRisk: "High", source: "Fierce Network", sourceUrl: "https://www.fierce-network.com/broadband/empire-access-targets-140000-new-fiber-passings-ny-pa" },
    // Frontier
    { provider: "frontier", market: "Connecticut Phase 2", state: "CT", status: "EXPANDING", targetHHP: "300K additional (to 800K total)", timeline: "Through 2026", overlap: "GoNetSpeed (65+ towns)", overlapRisk: "High", source: "Fierce Network", sourceUrl: "https://www.fierce-network.com/broadband/frontier-plots-300k-more-fiber-passings-connecticut" },
    // Verizon
    { provider: "verizon", market: "Lehigh Valley, PA", state: "PA", status: "EXPANDING", targetHHP: "~1,000/month qualifying", timeline: "Ongoing", overlap: "Low", overlapRisk: "Low", source: "Morning Call", sourceUrl: "https://www.mcall.com/2025/06/02/verizon-fios-expanding-in-bethlehem-new-households-to-qualify-in-the-coming-months/" },
    { provider: "verizon", market: "National (post-Frontier)", state: "Multi", status: "EXPANDING", targetHHP: "1M+/yr target", timeline: "2026+", overlap: "Multiple", overlapRisk: "Medium", source: "Lightwave", sourceUrl: "https://www.lightwaveonline.com/home/article/55238061/verizon-says-its-on-pace-to-grow-to-add-1m-plus-fiber-locations-per-year" },
    // Breezeline
    { provider: "breezeline", market: "9 NH communities", state: "NH", status: "ACTIVE", targetHHP: "~28K/quarter (company-wide)", timeline: "2025", overlap: "Fidium (Farmington, Pittsfield)", overlapRisk: "High", source: "GlobeNewsWire", sourceUrl: "https://www.globenewswire.com/news-release/2025/02/20/3029830/0/en/Breezeline-Deploys-Fiber-Internet-in-Nine-New-Hampshire-Communities.html" },
    { provider: "breezeline", market: "Sanford, ME", state: "ME", status: "CONSTRUCTION", targetHHP: "TBD", timeline: "2025", overlap: "Fidium + GoNetSpeed", overlapRisk: "High", source: "GlobeNewsWire", sourceUrl: "https://www.globenewswire.com/news-release/2025/03/06/3038464/0/en/Breezeline-to-Expand-Fiber-Network-to-Homes-and-Businesses-in-Southern-Maine.html" },
];

// ---- COMPETITIVE OVERLAP MATRIX ----
const OVERLAP_MATRIX = [
    { market: "Rochester, NY", state: "NY", gns: null, gl: "core", fidium: null, empire: null, slic: null, verizon: "limited", frontier: null, breezeline: null, cable: "Spectrum", risk: "Low", sourceNote: "Greenlight HQ market. Spectrum primary cable competitor." },
    { market: "Buffalo/Niagara, NY", state: "NY", gns: null, gl: "expanding", fidium: null, empire: null, slic: null, verizon: "legacy", frontier: null, breezeline: null, cable: "Spectrum", risk: "Low", sourceNote: "Greenlight expanding aggressively. 28K+ passed." },
    { market: "Albany/Capital Region, NY", state: "NY", gns: "legacy", gl: "expanding", fidium: "expanding", empire: null, slic: null, verizon: null, frontier: null, breezeline: null, cable: "Spectrum", risk: "HIGH", sourceNote: "3-way fiber overbuild zone. All expanding simultaneously." },
    { market: "Binghamton, NY", state: "NY", gns: null, gl: "active", fidium: null, empire: null, slic: null, verizon: null, frontier: null, breezeline: null, cable: "Spectrum", risk: "Low" },
    { market: "Hudson Valley, NY", state: "NY", gns: null, gl: "expanding", fidium: null, empire: null, slic: null, verizon: null, frontier: null, breezeline: null, cable: "Altice/Optimum", risk: "Medium", sourceNote: "Greenlight entering Altice cable territory." },
    { market: "Utica/Mohawk Valley, NY", state: "NY", gns: "building", gl: null, fidium: null, empire: null, slic: null, verizon: null, frontier: null, breezeline: null, cable: "Spectrum", risk: "Low" },
    { market: "Southern Tier / Finger Lakes, NY", state: "NY", gns: "legacy", gl: null, fidium: null, empire: "core", slic: null, verizon: null, frontier: null, breezeline: null, cable: "Spectrum", risk: "Low" },
    { market: "North Country / Adirondacks, NY", state: "NY", gns: null, gl: null, fidium: null, empire: null, slic: "core", verizon: null, frontier: null, breezeline: null, cable: "Spectrum", risk: "Low" },
    { market: "Oswego County, NY", state: "NY", gns: null, gl: null, fidium: null, empire: "building", slic: null, verizon: null, frontier: null, breezeline: null, cable: "Spectrum", risk: "Low", sourceNote: "$26M ConnectALL grant. Open-access county network." },
    { market: "Hartford/Central CT", state: "CT", gns: "active", gl: null, fidium: null, empire: null, slic: null, verizon: null, frontier: "active", breezeline: null, cable: "Comcast", risk: "HIGH", sourceNote: "GoNetSpeed 65+ towns vs Frontier 111 communities. Direct overbuild." },
    { market: "New Haven/Southern CT", state: "CT", gns: "active", gl: null, fidium: null, empire: null, slic: null, verizon: null, frontier: "active", breezeline: null, cable: "Comcast/Altice", risk: "HIGH", sourceNote: "4-way competition: GoNetSpeed + Frontier + Comcast + Altice in select areas." },
    { market: "Fairfield County, CT", state: "CT", gns: "active", gl: null, fidium: null, empire: null, slic: null, verizon: null, frontier: "active", breezeline: null, cable: "Altice/Optimum", risk: "HIGH" },
    { market: "Manchester/Concord, NH", state: "NH", gns: null, gl: null, fidium: "core", empire: null, slic: null, verizon: null, frontier: null, breezeline: "active", cable: "Comcast", risk: "HIGH", sourceNote: "Fidium core market. Breezeline entering 9 towns. GoNetSpeed nearby." },
    { market: "Burlington, VT", state: "VT", gns: "active", gl: null, fidium: "expanding", empire: null, slic: null, verizon: null, frontier: null, breezeline: null, cable: "Comcast", risk: "HIGH", sourceNote: "GoNetSpeed 8 VT communities overlap Fidium VT expansion." },
    { market: "Portland, ME", state: "ME", gns: "completed", gl: null, fidium: "expanding", empire: null, slic: null, verizon: null, frontier: null, breezeline: null, cable: "Spectrum", risk: "HIGH", sourceNote: "GoNetSpeed completed 13K HHP. Fidium expanding with 294K+ statewide." },
    { market: "Bangor, ME", state: "ME", gns: "active", gl: null, fidium: "expanding", empire: null, slic: null, verizon: null, frontier: null, breezeline: null, cable: "Spectrum", risk: "HIGH" },
    { market: "Southern ME (Sanford area)", state: "ME", gns: "active", gl: null, fidium: "expanding", empire: null, slic: null, verizon: null, frontier: null, breezeline: "building", cable: "Spectrum", risk: "HIGH", sourceNote: "Triple overlap: GoNetSpeed + Fidium + Breezeline." },
    { market: "Springfield/W. MA", state: "MA", gns: "building", gl: null, fidium: null, empire: null, slic: null, verizon: null, frontier: null, breezeline: null, cable: "Comcast", risk: "Low" },
    { market: "NJ Suburbs", state: "NJ", gns: "new entry", gl: null, fidium: null, empire: null, slic: null, verizon: "core", frontier: null, breezeline: null, cable: "Altice/Optimum", risk: "Medium", sourceNote: "GoNetSpeed $110M NJ entry into Verizon Fios territory." },
    { market: "Scranton/NEPA", state: "PA", gns: null, gl: "active (Loop)", fidium: null, empire: "active (176mi)", slic: null, verizon: null, frontier: null, breezeline: "nearby", cable: "Comcast", risk: "HIGH", sourceNote: "Empire 176mi fiber + Greenlight/Loop both in Scranton. Direct overbuild." },
    { market: "Williamsport, PA", state: "PA", gns: null, gl: "pending (FastBridge)", fidium: null, empire: "expanding", slic: null, verizon: null, frontier: null, breezeline: null, cable: "Comcast", risk: "HIGH", sourceNote: "Empire expanding + FastBridge (Greenlight) present." },
    { market: "Reading/Berks County, PA", state: "PA", gns: null, gl: "pending (FastBridge)", fidium: null, empire: null, slic: null, verizon: null, frontier: null, breezeline: null, cable: "Comcast", risk: "Low" },
    { market: "Baltimore, MD", state: "MD", gns: null, gl: "new build ($100M)", fidium: null, empire: null, slic: null, verizon: "legacy", frontier: null, breezeline: null, cable: "Comcast", risk: "Medium", sourceNote: "Greenlight $100M greenfield. Comcast cable incumbent." },
    { market: "Newport, RI", state: "RI", gns: "building", gl: null, fidium: null, empire: null, slic: null, verizon: "grant", frontier: null, breezeline: null, cable: "Cox", risk: "Medium", sourceNote: "Both GoNetSpeed and Verizon received RI broadband grants." },
    { market: "Lehigh Valley, PA", state: "PA", gns: null, gl: null, fidium: null, empire: null, slic: null, verizon: "expanding", frontier: null, breezeline: null, cable: "RCN/Astound", risk: "Low" },
];

// ---- CALCULATION METHODOLOGIES ----
const CALCULATIONS = {
    oakHillCombinedPassings: {
        label: "Oak Hill Combined Passings",
        result: "615,000+",
        formula: "GoNetSpeed (390K+, Apr 2023) + Greenlight (225K+, mid-2025)",
        inputs: [
            { label: "GoNetSpeed", value: "390,000+", asOf: "April 2023", source: "Fierce Network", sourceUrl: "https://www.fierce-network.com/broadband/gonetspeed-homes-northeast-targets-fiber-20-new-towns-2023" },
            { label: "Greenlight", value: "225,000+", asOf: "Mid-2025", source: "Greenlight Networks", sourceUrl: "https://www.greenlightnetworks.com/growing-greenlight-networks-fiber-forward-magazine/" }
        ],
        caveat: "GoNetSpeed figure is from Apr 2023. Actual current figure likely higher given ~140K/yr build pace reported. No updated public figure available."
    },
    fidiumNETotal: {
        label: "Fidium Northern NE Total",
        result: "1M+ locations (ME+NH+VT)",
        formula: "NH (276K+) + VT (134K+) + ME (294K+) + additional 2025 builds",
        inputs: [
            { label: "NH passings", value: "276,000+", source: "Fidium Fiber", sourceUrl: "https://www.fidiumfiber.com/blog/news/fidium-fiber-helping-to-bridge-connectivity-gap-in-new-hampshire" },
            { label: "VT passings", value: "134,000+", source: "Vermont Biz Magazine", sourceUrl: "https://vermontbiz.com/news/2024/november/20/fidium-has-connected-more-134000-vermont-homes-and-businesses-three-years" },
            { label: "ME passings", value: "294,000+", source: "Fidium Fiber", sourceUrl: "https://www.fidiumfiber.com/blog/news/fidium-fiber-helps-bridge-connectivity-gap-in-maine" },
            { label: "1M+ aggregate confirmed", value: "1M+", source: "Fiber Broadband Assoc.", sourceUrl: "https://fiberbroadband.org/2025/07/23/ffb-week-30-fidium-transforms-new-englands-future-with-fiber/" }
        ],
        caveat: "Individual state figures are from different dates (2024-2025). Cross-verified by Fiber Broadband Assoc. aggregate."
    },
    empireTotalTarget: {
        label: "Empire Access Growth Target",
        result: "236,000+ total (96K current + 140K new)",
        formula: "Current addresses (96K) + announced new passings (140K)",
        inputs: [
            { label: "Current addresses", value: "96,000", source: "Fierce Network", sourceUrl: "https://www.fierce-network.com/broadband/empire-access-targets-140000-new-fiber-passings-ny-pa" },
            { label: "New passings target", value: "140,000+", source: "Fierce Network", sourceUrl: "https://www.fierce-network.com/broadband/empire-access-targets-140000-new-fiber-passings-ny-pa" }
        ],
        caveat: "Timeline for 140K buildout not publicly disclosed."
    },
    frontierCTTotal: {
        label: "Frontier CT Fiber Build",
        result: "~800,000 target passings",
        formula: "Phase 1 (500K+ built in 70+ towns) + Phase 2 (300K additional announced)",
        inputs: [
            { label: "Phase 1 built", value: "500,000+", source: "CT Insider", sourceUrl: "https://www.ctinsider.com/business/article/Frontier-Communications-fiber-optic-expansion-17507452.php" },
            { label: "Phase 2 announced", value: "300,000 additional", source: "Fierce Network", sourceUrl: "https://www.fierce-network.com/broadband/frontier-plots-300k-more-fiber-passings-connecticut" }
        ],
        caveat: "Phase 1 figure from mid-2024. Phase 2 timeline through 2026. Now Verizon-owned (Jan 2026)."
    },
    ctOverlapEstimate: {
        label: "CT Competitive Overlap Estimate",
        result: "Significant: 65+ GoNetSpeed towns within Frontier's 111 communities",
        formula: "GoNetSpeed serves 65+ CT towns. Frontier covers 111 CT communities. High overlap likely.",
        inputs: [
            { label: "GoNetSpeed CT towns", value: "65+", source: "GoNetSpeed CT", sourceUrl: "https://www.gonetspeed.com/ct/" },
            { label: "Frontier CT communities", value: "111", source: "CT Insider", sourceUrl: "https://www.ctinsider.com/business/article/Frontier-Communications-fiber-optic-expansion-17507452.php" }
        ],
        caveat: "Exact town-by-town overlap count not publicly available. Both operators cover the majority of populated CT, so overlap is likely substantial."
    }
};

// ============================================================
// CENSUS TRACT DATA — Town-level polygons with build economics
// Same architecture as Ziply GIS tool: embedded coords, housing
// units from ACS 2020, cost/passing estimates, source links
// ============================================================
const CENSUS_TRACTS = {
    // ==========================================
    // CONNECTICUT CORRIDOR (GoNetSpeed vs Frontier/Verizon)
    // ==========================================
    hartford_ct: {
        county: 'Hartford',
        state: 'Connecticut',
        fips: '09003',
        fccBdcUrl: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.7658,-72.6734&zoom=11',
        tracts: [
            {
                id: 'CT-001',
                name: 'Hartford (City Center)',
                coords: [[41.785, -72.705], [41.785, -72.655], [41.750, -72.655], [41.750, -72.705]],
                housingUnits: 22500,
                density: 'urban',
                costPerPassing: 750,
                provider: 'GoNetSpeed + Frontier',
                permitStatus: 'Both Active — Direct Overbuild',
                sourceType: 'GoNetSpeed CT Page + Frontier Newsroom',
                sourceUrl: 'https://www.gonetspeed.com/ct/',
                sourceText: 'GoNetSpeed serves 65+ CT towns; Frontier $800M investment covers 111 communities',
                announcedPassings: null,
                notes: 'Peak overlap zone. GoNetSpeed and Frontier/Verizon both actively serving. Comcast cable incumbent.',
                isNew: false,
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.7658,-72.6734&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 18200, source: 'FCC BDC Jun 2025' },
                    { name: 'Frontier (now Verizon)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 21500, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 22100, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 15800, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'CT-002',
                name: 'West Hartford',
                coords: [[41.775, -72.775], [41.775, -72.715], [41.740, -72.715], [41.740, -72.775]],
                housingUnits: 26800,
                density: 'suburban',
                costPerPassing: 825,
                provider: 'GoNetSpeed + Frontier',
                permitStatus: 'Both Active',
                sourceType: 'GoNetSpeed CT + CT Insider',
                sourceUrl: 'https://www.gonetspeed.com/ct/',
                sourceText: 'Both GoNetSpeed and Frontier serve West Hartford per company websites',
                notes: 'Affluent suburb. High-value market for both operators. Comcast cable incumbent.',
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.7560,-72.7420&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 22400, source: 'FCC BDC Jun 2025' },
                    { name: 'Frontier (now Verizon)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 25800, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 26500, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 18900, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'CT-003',
                name: 'New Haven (City)',
                coords: [[41.330, -72.960], [41.330, -72.895], [41.290, -72.895], [41.290, -72.960]],
                housingUnits: 24200,
                density: 'urban',
                costPerPassing: 775,
                provider: 'GoNetSpeed + Frontier',
                permitStatus: 'Both Active — Dense Urban Overbuild',
                sourceType: 'GoNetSpeed CT + CT Insider',
                sourceUrl: 'https://www.gonetspeed.com/ct/',
                sourceText: 'GoNetSpeed and Frontier both actively serving New Haven metro',
                notes: 'Yale University market. GoNetSpeed + Frontier + Comcast + Altice all present.',
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.3083,-72.9279&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 18876, source: 'FCC BDC Jun 2025' },
                    { name: 'Frontier (now Verizon)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 21296, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 22990, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 15730, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'CT-004',
                name: 'East Haven',
                coords: [[41.296, -72.885], [41.296, -72.840], [41.268, -72.840], [41.268, -72.885]],
                housingUnits: 13000,
                announcedPassings: 13000,
                density: 'suburban',
                costPerPassing: 825,
                provider: 'GoNetSpeed',
                permitStatus: 'ACTIVE BUILD — First Customers Aug 2025',
                sourceType: 'BusinessWire',
                sourceUrl: 'https://www.businesswire.com/news/home/20250826151569/en/GoNetspeed-Ushers-in-New-Era-for-East-Haven-with-100-Fiber-Optic-Connectivity-for-First-Customers',
                sourceText: 'BusinessWire 8/26/25: GoNetSpeed $7.5M investment, 13,000 HHP, first customers connected',
                notes: 'GoNetSpeed active new build. $7.5M investment. First customers Aug 2025.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.2762,-72.8622&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 5850, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 11440, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 6500, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'CT-005',
                name: 'Ansonia',
                coords: [[41.325, -73.090], [41.325, -73.055], [41.300, -73.055], [41.300, -73.090]],
                housingUnits: 8500,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'GoNetSpeed',
                permitStatus: 'COMPLETED — 100% Fiber Dec 2025',
                sourceType: 'BusinessWire',
                sourceUrl: 'https://secure.businesswire.com/news/home/20251202712090/en/GoNetspeed-Celebrates-Completion-of-Ansonias-100-Fiber-Optic-Internet-Rollout',
                sourceText: 'BusinessWire 12/2/25: GoNetSpeed celebrates 100% fiber rollout completion in Ansonia',
                notes: 'GoNetSpeed completed build. 100% fiber coverage achieved Dec 2025.',
                isNew: false,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.3462,-73.0823&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 6630, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 7480, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 4250, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'CT-006',
                name: 'Stratford',
                coords: [[41.210, -73.155], [41.210, -73.105], [41.175, -73.105], [41.175, -73.155]],
                housingUnits: 12400,
                announcedPassings: 12400,
                density: 'suburban',
                costPerPassing: 825,
                provider: 'GoNetSpeed',
                permitStatus: 'Construction — Fall 2025',
                sourceType: 'GoNetSpeed News',
                sourceUrl: 'https://www.gonetspeed.com/resources/news/',
                sourceText: 'GoNetSpeed News: $7M investment, 12,400 HHP construction underway',
                notes: 'GoNetSpeed $7M investment. Construction underway fall 2025.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.1845,-73.1332&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 5580, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 10912, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 6200, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'CT-007',
                name: 'Middletown',
                coords: [[41.575, -72.670], [41.575, -72.625], [41.545, -72.625], [41.545, -72.670]],
                housingUnits: 9500,
                announcedPassings: 3000,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'GoNetSpeed',
                permitStatus: 'Construction Underway',
                sourceType: 'GoNetSpeed News',
                sourceUrl: 'https://www.gonetspeed.com/resources/news/gonetspeed-begins-construction-on-100-fiber-network-serving-middletown/',
                sourceText: 'GoNetSpeed: $2.4M investment, 3,000 HHP construction phase 1',
                notes: 'GoNetSpeed phase 1 construction. $2.4M investment for initial 3,000 HHP.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.5623,-72.6506&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 4275, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 8360, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 4750, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'CT-008',
                name: 'Danbury',
                coords: [[41.420, -73.475], [41.420, -73.420], [41.385, -73.420], [41.385, -73.475]],
                housingUnits: 14300,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'GoNetSpeed + Frontier',
                permitStatus: 'Both Active',
                sourceType: 'GoNetSpeed CT + Frontier Newsroom',
                sourceUrl: 'https://www.gonetspeed.com/ct/',
                sourceText: 'Both GoNetSpeed (14,300 HHP) and Frontier serve Danbury',
                notes: 'Overlap zone in Fairfield County. Altice/Optimum cable territory.',
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.4017,-73.4540&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 11154, source: 'FCC BDC Jun 2025' },
                    { name: 'Frontier (now Verizon)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 12584, source: 'FCC BDC Jun 2025' },
                    { name: 'Altice/Optimum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 12584, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 7150, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'CT-009',
                name: 'Bridgeport',
                coords: [[41.200, -73.215], [41.200, -73.155], [41.160, -73.155], [41.160, -73.215]],
                housingUnits: 28500,
                density: 'urban',
                costPerPassing: 750,
                provider: 'GoNetSpeed + Frontier',
                permitStatus: 'Both Active',
                sourceType: 'GoNetSpeed CT + CT Insider',
                sourceUrl: 'https://www.gonetspeed.com/ct/',
                sourceText: 'GoNetSpeed and Frontier both serve Bridgeport. 4-way competition with Comcast + Altice.',
                notes: 'Largest CT city. 4-way fiber/cable competition: GoNetSpeed + Frontier + Comcast + Altice.',
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.1792,-73.1894&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 22230, source: 'FCC BDC Jun 2025' },
                    { name: 'Frontier (now Verizon)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 25080, source: 'FCC BDC Jun 2025' },
                    { name: 'Altice/Optimum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 27075, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 18525, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'CT-010',
                name: 'Norwalk',
                coords: [[41.120, -73.435], [41.120, -73.385], [41.085, -73.385], [41.085, -73.435]],
                housingUnits: 18200,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'Frontier',
                permitStatus: 'Active Frontier Service',
                sourceType: 'CT Insider',
                sourceUrl: 'https://www.ctinsider.com/business/article/Frontier-Communications-fiber-optic-expansion-17507452.php',
                sourceText: 'CT Insider: Frontier 111 CT communities includes Fairfield County towns',
                notes: 'Frontier/Verizon territory. Part of $800M CT investment.',
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.1177,-73.4082&zoom=14',
                fccProviders: [
                    { name: 'Frontier (now Verizon)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 16016, source: 'FCC BDC Jun 2025' },
                    { name: 'Altice/Optimum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 16016, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 9100, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'CT-011',
                name: 'Enfield/Suffield (N. CT)',
                coords: [[41.980, -72.610], [41.980, -72.555], [41.945, -72.555], [41.945, -72.610]],
                housingUnits: 11500,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'GoNetSpeed + Frontier',
                permitStatus: 'Both Active — Frontier Phase 2',
                sourceType: 'GoNetSpeed CT + Fierce Network',
                sourceUrl: 'https://www.fierce-network.com/broadband/frontier-plots-300k-more-fiber-passings-connecticut',
                sourceText: 'Fierce Network: Frontier Phase 2 adds 300K passings; GoNetSpeed also present in N. CT',
                notes: 'Northern CT overlap. Frontier Phase 2 expansion overlapping GoNetSpeed existing service.',
                isNew: true,
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.9764,-72.5918&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 8970, source: 'FCC BDC Jun 2025' },
                    { name: 'Frontier (now Verizon)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 10120, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 10120, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 5750, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },

    // ==========================================
    // NEW HAMPSHIRE (Fidium vs Breezeline)
    // ==========================================
    nh_central: {
        county: 'Multiple (Merrimack, Belknap, Strafford)',
        state: 'New Hampshire',
        fips: '33',
        fccBdcUrl: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.2081,-71.5376&zoom=10',
        tracts: [
            {
                id: 'NH-001',
                name: 'Manchester',
                coords: [[43.020, -71.500], [43.020, -71.425], [42.975, -71.425], [42.975, -71.500]],
                housingUnits: 52000,
                density: 'urban',
                costPerPassing: 750,
                provider: 'Fidium',
                permitStatus: 'Core Market — Copper-to-Fiber Upgrade',
                sourceType: 'Fidium Fiber',
                sourceUrl: 'https://www.fidiumfiber.com/blog/news/fidium-fiber-helping-to-bridge-connectivity-gap-in-new-hampshire',
                sourceText: 'Fidium Fiber: 276,000+ NH locations connected. Manchester is core ILEC market.',
                notes: 'Fidium core NH market. Part of 276K+ NH passings. Legacy Consolidated ILEC territory.',
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=42.9956,-71.4548&zoom=13',
                fccProviders: [
                    { name: 'Fidium Fiber (CCI)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 47840, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 49400, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 33800, source: 'FCC BDC Jun 2025' },
                    { name: 'Consolidated (legacy DSL)', tech: 'DSL', maxDown: 25, maxUp: 3, bslCount: 31200, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'NH-002',
                name: 'Concord',
                coords: [[43.230, -71.575], [43.230, -71.510], [43.190, -71.510], [43.190, -71.575]],
                housingUnits: 19500,
                density: 'suburban',
                costPerPassing: 825,
                provider: 'Fidium',
                permitStatus: 'Core Market',
                sourceType: 'Fidium Fiber',
                sourceUrl: 'https://www.fidiumfiber.com/blog/news/fidium-fiber-helping-to-bridge-connectivity-gap-in-new-hampshire',
                sourceText: 'State capital. Core Fidium/Consolidated market.',
                notes: 'State capital. Fidium ILEC legacy. Part of 276K+ NH fiber passings.',
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.2081,-71.5376&zoom=14',
                fccProviders: [
                    { name: 'Fidium Fiber (CCI)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 17940, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 17160, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 9750, source: 'FCC BDC Jun 2025' },
                    { name: 'Consolidated (legacy DSL)', tech: 'DSL', maxDown: 25, maxUp: 3, bslCount: 11700, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'NH-003',
                name: 'Rochester',
                coords: [[43.320, -70.990], [43.320, -70.925], [43.285, -70.925], [43.285, -70.990]],
                housingUnits: 14200,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'Fidium + Breezeline',
                permitStatus: 'OVERLAP — Both Deploying Fiber',
                sourceType: 'GlobeNewsWire',
                sourceUrl: 'https://www.globenewswire.com/news-release/2025/02/20/3029830/0/en/Breezeline-Deploys-Fiber-Internet-in-Nine-New-Hampshire-Communities.html',
                sourceText: 'GlobeNewsWire 2/20/25: Breezeline deploys fiber in 9 NH communities including Rochester',
                notes: 'Direct Fidium vs Breezeline overlap. Both actively building fiber. Comcast cable also present.',
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.3045,-70.9759&zoom=14',
                fccProviders: [
                    { name: 'Fidium Fiber (CCI)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 13064, source: 'FCC BDC Jun 2025' },
                    { name: 'Breezeline (Cogeco)', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: 11360, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 12496, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 7100, source: 'FCC BDC Jun 2025' },
                    { name: 'Consolidated (legacy DSL)', tech: 'DSL', maxDown: 25, maxUp: 3, bslCount: 8520, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'NH-004',
                name: 'Farmington',
                coords: [[43.400, -71.085], [43.400, -71.030], [43.370, -71.030], [43.370, -71.085]],
                housingUnits: 3200,
                density: 'rural',
                costPerPassing: 1100,
                provider: 'Fidium + Breezeline',
                permitStatus: 'OVERLAP — Both Active',
                sourceType: 'GlobeNewsWire + Fidium',
                sourceUrl: 'https://www.globenewswire.com/news-release/2025/02/20/3029830/0/en/Breezeline-Deploys-Fiber-Internet-in-Nine-New-Hampshire-Communities.html',
                sourceText: 'Breezeline 9 NH towns includes Farmington. Fidium ILEC upgrade also in progress.',
                notes: 'Small town with dual fiber overbuild. Both Fidium and Breezeline deploying.',
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.3897,-71.0651&zoom=14',
                fccProviders: [
                    { name: 'Fidium Fiber (CCI)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 2944, source: 'FCC BDC Jun 2025' },
                    { name: 'Breezeline (Cogeco)', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: 2560, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 2816, source: 'FCC BDC Jun 2025' },
                    { name: 'Consolidated (legacy DSL)', tech: 'DSL', maxDown: 25, maxUp: 3, bslCount: 1920, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'NH-005',
                name: 'Franklin/Tilton/Northfield',
                coords: [[43.460, -71.685], [43.460, -71.620], [43.425, -71.620], [43.425, -71.685]],
                housingUnits: 6800,
                density: 'rural',
                costPerPassing: 950,
                provider: 'Fidium + Breezeline',
                permitStatus: 'OVERLAP — Both Active',
                sourceType: 'GlobeNewsWire + Fidium',
                sourceUrl: 'https://www.globenewswire.com/news-release/2025/02/20/3029830/0/en/Breezeline-Deploys-Fiber-Internet-in-Nine-New-Hampshire-Communities.html',
                sourceText: 'Breezeline 9 NH towns includes Franklin, Tilton, Northfield. Fidium also present.',
                notes: 'Three adjacent towns, all with dual fiber build. Fidium ILEC + Breezeline overbuild.',
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.4443,-71.6548&zoom=13',
                fccProviders: [
                    { name: 'Fidium Fiber (CCI)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 6256, source: 'FCC BDC Jun 2025' },
                    { name: 'Breezeline (Cogeco)', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: 5440, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 5984, source: 'FCC BDC Jun 2025' },
                    { name: 'Consolidated (legacy DSL)', tech: 'DSL', maxDown: 25, maxUp: 3, bslCount: 4080, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'NH-006',
                name: 'Wolfeboro',
                coords: [[43.600, -71.230], [43.600, -71.175], [43.565, -71.175], [43.565, -71.230]],
                housingUnits: 4500,
                density: 'rural',
                costPerPassing: 1100,
                provider: 'Breezeline',
                permitStatus: 'Active Fiber Deployment',
                sourceType: 'GlobeNewsWire',
                sourceUrl: 'https://www.globenewswire.com/news-release/2025/02/20/3029830/0/en/Breezeline-Deploys-Fiber-Internet-in-Nine-New-Hampshire-Communities.html',
                sourceText: 'Breezeline 9 NH towns includes Wolfeboro (Lakes Region)',
                notes: 'Lakes Region resort town. Breezeline new fiber entry.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.5840,-71.2079&zoom=14',
                fccProviders: [
                    { name: 'Breezeline (Cogeco)', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: 3600, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 3960, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'NH-007',
                name: 'Pittsfield',
                coords: [[43.310, -71.340], [43.310, -71.290], [43.280, -71.290], [43.280, -71.340]],
                housingUnits: 2200,
                density: 'rural',
                costPerPassing: 1100,
                provider: 'Fidium + Breezeline',
                permitStatus: 'OVERLAP — Both Active',
                sourceType: 'Fidium + GlobeNewsWire',
                sourceUrl: 'https://www.fidiumfiber.com/blog/news/fidium-fiber-helping-to-bridge-connectivity-gap-in-new-hampshire',
                sourceText: 'Fidium NH grant towns + Breezeline 9 NH towns both include Pittsfield',
                notes: 'Small town, dual fiber overbuild. Fidium grant-funded + Breezeline new build.',
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.3057,-71.3253&zoom=14',
                fccProviders: [
                    { name: 'Fidium Fiber (CCI)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 2024, source: 'FCC BDC Jun 2025' },
                    { name: 'Breezeline (Cogeco)', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: 1760, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 1936, source: 'FCC BDC Jun 2025' },
                    { name: 'Consolidated (legacy DSL)', tech: 'DSL', maxDown: 25, maxUp: 3, bslCount: 1320, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'NH-008',
                name: 'Barnstead',
                coords: [[43.370, -71.310], [43.370, -71.255], [43.330, -71.255], [43.330, -71.310]],
                housingUnits: 2800,
                density: 'rural',
                costPerPassing: 1200,
                provider: 'Fidium + Breezeline',
                permitStatus: 'OVERLAP — Fidium Grant + Breezeline',
                sourceType: 'Fidium + GlobeNewsWire',
                sourceUrl: 'https://www.fidiumfiber.com/blog/news/fidium-fiber-helping-to-bridge-connectivity-gap-in-new-hampshire',
                sourceText: 'Fidium NH Broadband Matching Grant includes Barnstead. Breezeline also in 9 NH towns.',
                notes: 'Rural NH dual overbuild. Fidium grant-funded + Breezeline. 1,500+ HHP from Fidium grant.',
                isNew: true,
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.3531,-71.2828&zoom=14',
                fccProviders: [
                    { name: 'Fidium Fiber (CCI)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 2576, source: 'FCC BDC Jun 2025' },
                    { name: 'Breezeline (Cogeco)', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: 2240, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 2464, source: 'FCC BDC Jun 2025' },
                    { name: 'Consolidated (legacy DSL)', tech: 'DSL', maxDown: 25, maxUp: 3, bslCount: 1680, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },

    // ==========================================
    // SCRANTON / NEPA (Empire vs Greenlight/Loop)
    // ==========================================
    scranton_pa: {
        county: 'Lackawanna',
        state: 'Pennsylvania',
        fips: '42069',
        fccBdcUrl: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.4090,-75.6624&zoom=12',
        tracts: [
            {
                id: 'PA-001',
                name: 'Downtown Scranton',
                coords: [[41.420, -75.685], [41.420, -75.640], [41.395, -75.640], [41.395, -75.685]],
                housingUnits: 15200,
                density: 'urban',
                costPerPassing: 775,
                provider: 'Empire + Greenlight/Loop',
                permitStatus: 'DIRECT OVERBUILD — Both Active',
                sourceType: 'Empire Access + Greenlight Networks',
                sourceUrl: 'https://www.empireaccess.com/press-releases/empire-access-expansion-in-scranton-is-ready-for-service/',
                sourceText: 'Empire Access: 176 miles fiber (Phase 1: 86mi + Phase 2: 90mi) in Scranton. Greenlight acquired Loop Internet Oct 2025.',
                notes: 'Peak overbuild zone. Empire 176mi fiber vs Greenlight/Loop. Comcast cable incumbent.',
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.4090,-75.6624&zoom=14',
                fccProviders: [
                    { name: 'Greenlight/Loop Internet', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 11400, source: 'FCC BDC Jun 2025' },
                    { name: 'Empire Access', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: 10640, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 14440, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 9880, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'PA-002',
                name: 'South Scranton / Green Ridge',
                coords: [[41.395, -75.675], [41.395, -75.635], [41.370, -75.635], [41.370, -75.675]],
                housingUnits: 11800,
                density: 'suburban',
                costPerPassing: 825,
                provider: 'Empire + Greenlight/Loop',
                permitStatus: 'Both Active',
                sourceType: 'Empire Access + Times-Tribune',
                sourceUrl: 'https://www.thetimes-tribune.com/2025/10/01/greenlight-networks-acquires-loop-internet-plans-further-expansion-in-nepa/',
                sourceText: 'Times-Tribune 10/1/25: Greenlight acquires Loop Internet, plans further NEPA expansion. 58 employees added.',
                notes: 'Empire Phase 1+2 overlap with Greenlight/Loop territory.',
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.3852,-75.6510&zoom=14',
                fccProviders: [
                    { name: 'Greenlight/Loop Internet', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 8850, source: 'FCC BDC Jun 2025' },
                    { name: 'Empire Access', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: 8260, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 10384, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 5900, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'PA-003',
                name: 'Wilkes-Barre',
                coords: [[41.255, -75.895], [41.255, -75.845], [41.230, -75.845], [41.230, -75.895]],
                housingUnits: 18500,
                density: 'urban',
                costPerPassing: 800,
                provider: 'Greenlight/Loop',
                permitStatus: 'Active (Loop Legacy)',
                sourceType: 'Greenlight Networks',
                sourceUrl: 'https://www.greenlightnetworks.com/greenlight-announces-loop-internet-acquisition/',
                sourceText: 'Greenlight Networks: Loop Internet acquisition closes Oct 2025. WB is Loop legacy market.',
                notes: 'Loop Internet legacy market, now Greenlight. Breezeline also nearby (Luzerne County).',
                isNew: false,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.2459,-75.8813&zoom=14',
                fccProviders: [
                    { name: 'Greenlight/Loop Internet', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 13875, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 17575, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 12025, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'PA-004',
                name: 'Mountain Top / Wright Township',
                coords: [[41.170, -75.965], [41.170, -75.910], [41.140, -75.910], [41.140, -75.965]],
                housingUnits: 5200,
                density: 'suburban',
                costPerPassing: 900,
                provider: 'Greenlight/Loop',
                permitStatus: 'Active (Loop Legacy)',
                sourceType: 'Greenlight Networks',
                sourceUrl: 'https://www.greenlightnetworks.com/greenlight-announces-loop-internet-acquisition/',
                sourceText: 'Loop Internet service area included Mountain Top. Now Greenlight.',
                notes: 'Loop legacy market, now Greenlight-branded.',
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.1572,-75.9390&zoom=14',
                fccProviders: [
                    { name: 'Greenlight/Loop Internet', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 3900, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 4576, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 2600, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'PA-005',
                name: 'Kingston / Edwardsville',
                coords: [[41.275, -75.905], [41.275, -75.865], [41.255, -75.865], [41.255, -75.905]],
                housingUnits: 7800,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'Greenlight/Loop',
                permitStatus: 'Active (Loop Legacy)',
                sourceType: 'Greenlight Networks',
                sourceUrl: 'https://www.greenlightnetworks.com/greenlight-announces-loop-internet-acquisition/',
                sourceText: 'Loop Internet served Kingston. Now Greenlight.',
                notes: 'Across river from Wilkes-Barre. Loop legacy, now Greenlight.',
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.2650,-75.8893&zoom=14',
                fccProviders: [
                    { name: 'Greenlight/Loop Internet', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 5850, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 6864, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 3900, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'PA-006',
                name: 'Blakely Borough',
                coords: [[41.485, -75.620], [41.485, -75.580], [41.460, -75.580], [41.460, -75.620]],
                housingUnits: 3200,
                density: 'suburban',
                costPerPassing: 900,
                provider: 'Greenlight',
                permitStatus: 'Municipal Partnership — Expanding',
                sourceType: 'Greenlight Networks',
                sourceUrl: 'https://www.greenlightnetworks.com/greenlight-networks-expands-high-speed-fiber-internet-across-northeast-pa-signs-municipal-partnership-with-blakely-borough/',
                sourceText: 'Greenlight Networks: Municipal partnership with Blakely Borough for fiber expansion',
                notes: 'Greenlight direct municipal partnership. Northeast of Scranton.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.4750,-75.5950&zoom=14',
                fccProviders: [
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 1280, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 2816, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 1600, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'PA-007',
                name: 'Carbondale',
                coords: [[41.585, -75.515], [41.585, -75.490], [41.565, -75.490], [41.565, -75.515]],
                housingUnits: 4200,
                density: 'suburban',
                costPerPassing: 900,
                provider: 'Empire',
                permitStatus: 'Active Service',
                sourceType: 'PA Business Report',
                sourceUrl: 'https://pennbizreport.com/news/26161-carbondale-to-get-fiber-optic-internet-this-fall-from-empire-access/',
                sourceText: 'PA Business Report: Carbondale to get fiber from Empire Access',
                notes: 'Empire Access service area. North of Scranton.',
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.5737,-75.5010&zoom=14',
                fccProviders: [
                    { name: 'Empire Access', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: 2940, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 3696, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 2100, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },

    // ==========================================
    // ALBANY / CAPITAL REGION (3-way overlap)
    // ==========================================
    albany_ny: {
        county: 'Albany',
        state: 'New York',
        fips: '36001',
        fccBdcUrl: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=42.6526,-73.7562&zoom=11',
        tracts: [
            {
                id: 'NY-001',
                name: 'Albany (City)',
                coords: [[42.680, -73.790], [42.680, -73.730], [42.635, -73.730], [42.635, -73.790]],
                housingUnits: 24800,
                density: 'urban',
                costPerPassing: 775,
                provider: 'Greenlight + GoNetSpeed + Fidium',
                permitStatus: '3-WAY OVERLAP — All Expanding',
                sourceType: 'Greenlight + GoNetSpeed + Fidium',
                sourceUrl: 'https://www.greenlightnetworks.com/growing-greenlight-networks-fiber-forward-magazine/',
                sourceText: 'Greenlight part of 35 municipalities. GoNetSpeed legacy. Fidium expanding from VT.',
                notes: 'Triple overlap zone. Greenlight expanding south from Rochester. GoNetSpeed legacy. Fidium entering from VT/northern territory.',
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=42.6526,-73.7562&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 11160, source: 'FCC BDC Jun 2025' },
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 9920, source: 'FCC BDC Jun 2025' },
                    { name: 'Fidium Fiber (CCI)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 22816, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 23560, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 16120, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'NY-002',
                name: 'Schenectady',
                coords: [[42.825, -73.960], [42.825, -73.900], [42.790, -73.900], [42.790, -73.960]],
                housingUnits: 16200,
                density: 'urban',
                costPerPassing: 800,
                provider: 'GoNetSpeed + Greenlight',
                permitStatus: 'Both Expanding',
                sourceType: 'GoNetSpeed NY + Greenlight',
                sourceUrl: 'https://www.gonetspeed.com/ny/',
                sourceText: 'GoNetSpeed serves NY Capital Region. Greenlight expanding from 35 municipalities.',
                notes: 'Dual fiber overbuild zone. Spectrum cable incumbent.',
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=42.8142,-73.9396&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 7290, source: 'FCC BDC Jun 2025' },
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 6480, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 15390, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 10530, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'NY-003',
                name: 'Troy',
                coords: [[42.740, -73.710], [42.740, -73.665], [42.715, -73.665], [42.715, -73.710]],
                housingUnits: 11500,
                density: 'urban',
                costPerPassing: 800,
                provider: 'Greenlight',
                permitStatus: 'Active — Part of 35 Municipalities',
                sourceType: 'Greenlight Networks',
                sourceUrl: 'https://www.greenlightnetworks.com/growing-greenlight-networks-fiber-forward-magazine/',
                sourceText: 'Greenlight Networks: 225,000+ passings across 35 municipalities',
                notes: 'Greenlight expanding into Capital Region from Rochester base.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=42.7284,-73.6918&zoom=14',
                fccProviders: [
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 8625, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 10925, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 7475, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'NY-004',
                name: 'Saratoga Springs',
                coords: [[43.090, -73.800], [43.090, -73.740], [43.055, -73.740], [43.055, -73.800]],
                housingUnits: 13500,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'GoNetSpeed',
                permitStatus: 'Active Service',
                sourceType: 'GoNetSpeed NY',
                sourceUrl: 'https://www.gonetspeed.com/ny/',
                sourceText: 'GoNetSpeed NY service area includes Capital Region towns',
                notes: 'GoNetSpeed serves Saratoga area. Growing suburban market.',
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.0831,-73.7846&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 10530, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 11880, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 6750, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },

    // ==========================================
    // SOUTHERN MAINE (Triple overlap: GoNetSpeed + Fidium + Breezeline)
    // ==========================================
    southern_me: {
        county: 'Cumberland / York',
        state: 'Maine',
        fips: '23005/23031',
        fccBdcUrl: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.6615,-70.2553&zoom=11',
        tracts: [
            {
                id: 'ME-001',
                name: 'Portland, ME',
                coords: [[43.685, -70.310], [43.685, -70.235], [43.640, -70.235], [43.640, -70.310]],
                housingUnits: 35000,
                density: 'urban',
                costPerPassing: 750,
                provider: 'GoNetSpeed + Fidium',
                permitStatus: 'GoNetSpeed COMPLETED 13K HHP + Fidium Expanding',
                sourceType: 'GoNetSpeed + Fidium Fiber',
                sourceUrl: 'https://www.gonetspeed.com/resources/news/portland-receives-100-fiber-internet-gonetspeed-celebrates-network-completion/',
                sourceText: 'GoNetSpeed: Portland 13,000 HHP network complete. Fidium: 294K+ statewide ME passings expanding.',
                notes: 'GoNetSpeed completed 13K HHP build. Fidium (Consolidated legacy) also expanding. Spectrum cable incumbent.',
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.6615,-70.2553&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 27300, source: 'FCC BDC Jun 2025' },
                    { name: 'Fidium Fiber (CCI)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 32200, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 33250, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 22750, source: 'FCC BDC Jun 2025' },
                    { name: 'Consolidated (legacy DSL)', tech: 'DSL', maxDown: 25, maxUp: 3, bslCount: 21000, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'ME-002',
                name: 'South Portland',
                coords: [[43.650, -70.310], [43.650, -70.245], [43.620, -70.245], [43.620, -70.310]],
                housingUnits: 12500,
                density: 'suburban',
                costPerPassing: 825,
                provider: 'GoNetSpeed',
                permitStatus: 'Active Service',
                sourceType: 'GoNetSpeed',
                sourceUrl: 'https://www.gonetspeed.com/resources/news/gonetspeed-launches-south-portland-high-speed-fiber-internet/',
                sourceText: 'GoNetSpeed: South Portland fiber launch announced',
                notes: 'GoNetSpeed active. Adjacent to Portland core market.',
                isNew: false,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.6311,-70.2553&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 9750, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 11000, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 6250, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'ME-003',
                name: 'Saco / Biddeford',
                coords: [[43.520, -70.475], [43.520, -70.410], [43.485, -70.410], [43.485, -70.475]],
                housingUnits: 14200,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'GoNetSpeed + Fidium',
                permitStatus: 'Both Active',
                sourceType: 'GoNetSpeed ME + Fidium',
                sourceUrl: 'https://www.gonetspeed.com/me/',
                sourceText: 'GoNetSpeed ME: Serves Saco/Biddeford area. Fidium expanding statewide.',
                notes: 'Dual fiber overlap. Both GoNetSpeed and Fidium serve York County corridor.',
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.5009,-70.4509&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 11076, source: 'FCC BDC Jun 2025' },
                    { name: 'Fidium Fiber (CCI)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 13064, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 12496, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 7100, source: 'FCC BDC Jun 2025' },
                    { name: 'Consolidated (legacy DSL)', tech: 'DSL', maxDown: 25, maxUp: 3, bslCount: 8520, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'ME-004',
                name: 'Sanford',
                coords: [[43.460, -70.790], [43.460, -70.730], [43.425, -70.730], [43.425, -70.790]],
                housingUnits: 8200,
                density: 'suburban',
                costPerPassing: 900,
                provider: 'GoNetSpeed + Fidium + Breezeline',
                permitStatus: 'TRIPLE OVERLAP — All Three Building',
                sourceType: 'GlobeNewsWire + GoNetSpeed + Fidium',
                sourceUrl: 'https://www.globenewswire.com/news-release/2025/03/06/3038464/0/en/Breezeline-to-Expand-Fiber-Network-to-Homes-and-Businesses-in-Southern-Maine.html',
                sourceText: 'GlobeNewsWire 3/6/25: Breezeline expanding fiber in Southern Maine. GoNetSpeed and Fidium also present.',
                notes: 'Rare triple overlap: GoNetSpeed + Fidium + Breezeline all building fiber. Spectrum cable.',
                isNew: true,
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.4389,-70.7734&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 3690, source: 'FCC BDC Jun 2025' },
                    { name: 'Fidium Fiber (CCI)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 7544, source: 'FCC BDC Jun 2025' },
                    { name: 'Breezeline (Cogeco)', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: 6560, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 7216, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 4100, source: 'FCC BDC Jun 2025' },
                    { name: 'Consolidated (legacy DSL)', tech: 'DSL', maxDown: 25, maxUp: 3, bslCount: 4920, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'ME-005',
                name: 'Kennebunkport',
                coords: [[43.375, -70.490], [43.375, -70.440], [43.345, -70.440], [43.345, -70.490]],
                housingUnits: 3800,
                density: 'rural',
                costPerPassing: 1100,
                provider: 'GoNetSpeed',
                permitStatus: 'Active Service',
                sourceType: 'Telecompetitor',
                sourceUrl: 'https://www.telecompetitor.com/gonetspeed-expands-100-fiber-network-in-kennebunkport-maine/',
                sourceText: 'Telecompetitor: GoNetSpeed expands 100% fiber network in Kennebunkport',
                notes: 'Affluent coastal market. GoNetSpeed serving.',
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.3587,-70.4721&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 2964, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 3344, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'ME-006',
                name: 'Bangor',
                coords: [[44.825, -68.810], [44.825, -68.740], [44.785, -68.740], [44.785, -68.810]],
                housingUnits: 16500,
                density: 'urban',
                costPerPassing: 800,
                provider: 'GoNetSpeed + Fidium',
                permitStatus: 'Both Active',
                sourceType: 'GoNetSpeed + Fidium',
                sourceUrl: 'https://www.gonetspeed.com/resources/news/gonetspeed-connects-first-customers-in-bangor-to-high-speed-fiber-optic-network/',
                sourceText: 'GoNetSpeed: 8,000 HHP Bangor build. Fidium also expanding in region.',
                announcedPassings: 8000,
                notes: 'GoNetSpeed 8K HHP build + Fidium expanding. Dual fiber overbuild.',
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=44.8016,-68.7712&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 12870, source: 'FCC BDC Jun 2025' },
                    { name: 'Fidium Fiber (CCI)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 15180, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 15675, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 10725, source: 'FCC BDC Jun 2025' },
                    { name: 'Consolidated (legacy DSL)', tech: 'DSL', maxDown: 25, maxUp: 3, bslCount: 9900, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'ME-007',
                name: 'Auburn / Lewiston',
                coords: [[44.115, -70.255], [44.115, -70.185], [44.075, -70.185], [44.075, -70.255]],
                housingUnits: 18500,
                density: 'urban',
                costPerPassing: 800,
                provider: 'GoNetSpeed + Fidium',
                permitStatus: 'Both Active',
                sourceType: 'GoNetSpeed ME + Fidium',
                sourceUrl: 'https://www.gonetspeed.com/me/',
                sourceText: 'GoNetSpeed ME service area + Fidium statewide expansion',
                notes: 'Twin cities market. Both GoNetSpeed and Fidium serve.',
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=44.0979,-70.2148&zoom=13',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 14430, source: 'FCC BDC Jun 2025' },
                    { name: 'Fidium Fiber (CCI)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 17020, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 17575, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 12025, source: 'FCC BDC Jun 2025' },
                    { name: 'Consolidated (legacy DSL)', tech: 'DSL', maxDown: 25, maxUp: 3, bslCount: 11100, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'ME-008',
                name: 'Rural ME (Connect Maine Grant)',
                coords: [[43.550, -70.350], [43.550, -70.250], [43.450, -70.250], [43.450, -70.350]],
                housingUnits: 22000,
                announcedPassings: 22000,
                density: 'rural',
                costPerPassing: 1100,
                provider: 'Fidium',
                permitStatus: 'Construction — Connect Maine Grant',
                sourceType: 'Consolidated Communications',
                sourceUrl: 'https://www.consolidated.com/about-us/news/article-detail/id/841/consolidated-communications-to-deliver-fidium-fiber-internet-to-22000-rural-maine-homes-and-businesses-through-connect-maine-partnership',
                sourceText: 'Consolidated: 22,000 rural ME homes/businesses through Connect Maine partnership',
                notes: 'Fidium grant-funded rural expansion. 22K HHP target.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.5000,-70.3000&zoom=12',
                fccProviders: [
                    { name: 'Fidium Fiber (CCI)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 20240, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 19360, source: 'FCC BDC Jun 2025' },
                    { name: 'Consolidated (legacy DSL)', tech: 'DSL', maxDown: 25, maxUp: 3, bslCount: 13200, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },

    // ==========================================
    // ROCHESTER, NY (Greenlight Core Market)
    // ==========================================
    rochester_ny: {
        county: 'Monroe',
        state: 'New York',
        fips: '36055',
        fccBdcUrl: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.1566,-77.6088&zoom=11',
        tracts: [
            {
                id: 'ROC-001',
                name: 'Downtown Rochester',
                coords: [[43.175, -77.635], [43.175, -77.585], [43.145, -77.585], [43.145, -77.635]],
                housingUnits: 18500,
                density: 'urban',
                costPerPassing: 750,
                provider: 'Greenlight',
                permitStatus: 'Core Market — HQ',
                sourceType: 'Greenlight Networks',
                sourceUrl: 'https://www.greenlightnetworks.com/',
                sourceText: 'Greenlight Networks HQ: 120K+ passings in Rochester core market',
                notes: 'Greenlight HQ market. #1 ISP per Consumer Reports 2024. Spectrum main competitor.',
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.1566,-77.6088&zoom=14',
                fccProviders: [
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 13875, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 17575, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 12025, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'ROC-002',
                name: 'Greece / Gates / Chili (Westside)',
                coords: [[43.235, -77.735], [43.235, -77.665], [43.195, -77.665], [43.195, -77.735]],
                housingUnits: 28000,
                announcedPassings: 28000,
                density: 'suburban',
                costPerPassing: 825,
                provider: 'Greenlight',
                permitStatus: 'ACTIVE BUILD — $30M Investment',
                sourceType: 'WXXI News',
                sourceUrl: 'https://www.wxxinews.org/local-news/2025-07-30/greenlight-investing-30-million-to-improve-access-in-west-side-suburbs',
                sourceText: 'WXXI News 7/30/25: Greenlight investing $30M to improve access in west side suburbs',
                notes: 'Greenlight $30M westside expansion. 2025 active construction.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.2121,-77.6928&zoom=13',
                fccProviders: [
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 11200, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 24640, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 14000, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'ROC-003',
                name: 'Fairport / Perinton',
                coords: [[43.110, -77.460], [43.110, -77.400], [43.075, -77.400], [43.075, -77.460]],
                housingUnits: 12500,
                announcedPassings: 2400,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'Greenlight',
                permitStatus: 'Construction — 2,400 HHP by EOY 2025',
                sourceType: 'Greenlight Networks',
                sourceUrl: 'https://www.greenlightnetworks.com/greenlight-networks-advances-fiber-rollout-on-rochesters-westside/',
                sourceText: 'Greenlight: 2,400 HHP target by end 2025 in Fairport/Perinton',
                notes: 'Eastern suburb expansion. Phase 1 of 2,400 HHP.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.0987,-77.4413&zoom=14',
                fccProviders: [
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 5000, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 11000, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 6250, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },

    // ==========================================
    // BUFFALO / NIAGARA (Greenlight Expansion)
    // ==========================================
    buffalo_ny: {
        county: 'Erie / Niagara',
        state: 'New York',
        fips: '36029/36063',
        fccBdcUrl: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=42.8864,-78.8784&zoom=11',
        tracts: [
            {
                id: 'BUF-001',
                name: 'Buffalo (Core)',
                coords: [[42.920, -78.910], [42.920, -78.845], [42.875, -78.845], [42.875, -78.910]],
                housingUnits: 52000,
                density: 'urban',
                costPerPassing: 750,
                provider: 'Greenlight',
                permitStatus: '28K+ Passed — Doubling Target',
                sourceType: 'Greenlight Networks',
                sourceUrl: 'https://www.greenlightnetworks.com/niagara-falls-expansion/',
                sourceText: 'Greenlight: 28,000+ passed in Buffalo since 2020, 21,000+ connected. Target: double access.',
                notes: 'Greenlight Buffalo core. 28K+ passed, 21K+ subs. Targeting double. Spectrum competitor.',
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=42.8864,-78.8784&zoom=14',
                fccProviders: [
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 39000, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 49400, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 33800, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'BUF-002',
                name: 'North Tonawanda',
                coords: [[43.045, -78.880], [43.045, -78.835], [43.010, -78.835], [43.010, -78.880]],
                housingUnits: 14500,
                density: 'suburban',
                costPerPassing: 825,
                provider: 'Greenlight',
                permitStatus: 'Active — $12.5M Investment',
                sourceType: 'Greenlight Networks',
                sourceUrl: 'https://www.greenlightnetworks.com/greenlight-networks-announces-12-5-million-expansion-into-north-tonawanda/',
                sourceText: 'Greenlight: $12.5M expansion into North Tonawanda',
                notes: 'Greenlight $12.5M investment. North of Buffalo.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.0326,-78.8642&zoom=14',
                fccProviders: [
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 10875, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 12760, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 7250, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'BUF-003',
                name: 'Tonawanda',
                coords: [[42.985, -78.905], [42.985, -78.865], [42.955, -78.865], [42.955, -78.905]],
                housingUnits: 5500,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'Greenlight',
                permitStatus: 'Active — 5,500 HHP',
                sourceType: 'WIVB',
                sourceUrl: 'https://www.wivb.com/news/local-news/erie-county/tonawanda/internet-provider-greenlight-networks-begins-expansion-into-city-of-tonawanda/',
                sourceText: 'WIVB: Greenlight begins expansion into City of Tonawanda. 5,500 HHP. Service expected Feb 2025.',
                notes: 'Greenlight 5,500 HHP build. Adjacent to N. Tonawanda.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=42.9634,-78.8802&zoom=14',
                fccProviders: [
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 4125, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 4840, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 2750, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'BUF-004',
                name: 'Niagara Falls',
                coords: [[43.110, -79.075], [43.110, -79.020], [43.075, -79.020], [43.075, -79.075]],
                housingUnits: 18000,
                density: 'urban',
                costPerPassing: 800,
                provider: 'Greenlight',
                permitStatus: 'Construction — SE Neighborhoods 2025',
                sourceType: 'Greenlight Networks',
                sourceUrl: 'https://www.greenlightnetworks.com/niagara-falls-expansion/',
                sourceText: 'Greenlight: Niagara Falls SE neighborhoods expansion 2025',
                notes: 'Greenlight entering Niagara Falls. SE neighborhoods first.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.0962,-79.0377&zoom=14',
                fccProviders: [
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 7200, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 17100, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 11700, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'BUF-005',
                name: 'Lancaster',
                coords: [[42.920, -78.685], [42.920, -78.645], [42.890, -78.645], [42.890, -78.685]],
                housingUnits: 5200,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'Greenlight',
                permitStatus: 'Construction — 2,500 HHP',
                sourceType: 'Greenlight Networks',
                sourceUrl: 'https://www.greenlightnetworks.com/village-of-lancaster-and-city-of-north-tonawanda/',
                sourceText: 'Greenlight: Village of Lancaster. 2,500 HHP. $2.5M+ investment.',
                announcedPassings: 2500,
                notes: 'Greenlight $2.5M+ investment in Lancaster village.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=42.9006,-78.6702&zoom=14',
                fccProviders: [
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 2080, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 4576, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 2600, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },

    // ==========================================
    // BALTIMORE, MD (Greenlight $100M Greenfield)
    // ==========================================
    baltimore_md: {
        county: 'Baltimore City',
        state: 'Maryland',
        fips: '24510',
        fccBdcUrl: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=39.2904,-76.6122&zoom=12',
        tracts: [
            {
                id: 'BAL-001',
                name: 'Roland Park / Hampden',
                coords: [[39.365, -76.645], [39.365, -76.615], [39.340, -76.615], [39.340, -76.645]],
                housingUnits: 8500,
                density: 'urban',
                costPerPassing: 775,
                provider: 'Greenlight',
                permitStatus: 'ACTIVE BUILD — $100M Investment, Q3 2025 Launch',
                sourceType: 'PR Newswire',
                sourceUrl: 'https://www.prnewswire.com/news-releases/greenlight-networks-partners-with-baltimore-to-launch-100-million-fiber-internet-expansion-302484021.html',
                sourceText: 'PR Newswire: Greenlight $100M fiber expansion. Mt. Washington, Roland Park, Hampden. Q3 2025 launch.',
                notes: 'Greenlight $100M greenfield build. Affluent North Baltimore neighborhoods. Q3 2025 launch.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=39.3530,-76.6320&zoom=14',
                fccProviders: [
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 3400, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 8075, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 5525, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'BAL-002',
                name: 'Mt. Washington',
                coords: [[39.375, -76.665], [39.375, -76.635], [39.355, -76.635], [39.355, -76.665]],
                housingUnits: 5200,
                density: 'suburban',
                costPerPassing: 825,
                provider: 'Greenlight',
                permitStatus: 'ACTIVE BUILD — Phase 1',
                sourceType: 'PR Newswire',
                sourceUrl: 'https://www.prnewswire.com/news-releases/greenlight-networks-partners-with-baltimore-to-launch-100-million-fiber-internet-expansion-302484021.html',
                sourceText: 'Mt. Washington is named as one of first Greenlight neighborhoods',
                notes: 'Greenlight Phase 1 neighborhood. Affluent residential.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=39.3663,-76.6461&zoom=14',
                fccProviders: [
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 2080, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 4576, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 2600, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'BAL-003',
                name: 'Belair-Edison / Frankford',
                coords: [[39.330, -76.575], [39.330, -76.540], [39.305, -76.540], [39.305, -76.575]],
                housingUnits: 14500,
                density: 'urban',
                costPerPassing: 750,
                provider: 'Greenlight',
                permitStatus: 'ANNOUNCED — Phase 2',
                sourceType: 'PR Newswire',
                sourceUrl: 'https://www.prnewswire.com/news-releases/greenlight-networks-partners-with-baltimore-to-launch-100-million-fiber-internet-expansion-302484021.html',
                sourceText: 'Belair-Edison and Frankford named as Greenlight Baltimore expansion neighborhoods',
                notes: 'Greenlight Phase 2. Diverse neighborhoods east of downtown. Comcast incumbent.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=39.3185,-76.5587&zoom=14',
                fccProviders: [
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 5800, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 13775, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 9425, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },

    // ==========================================
    // UTICA / MOHAWK VALLEY (GoNetSpeed New Build)
    // ==========================================
    utica_ny: {
        county: 'Oneida',
        state: 'New York',
        fips: '36065',
        fccBdcUrl: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.1009,-75.2327&zoom=12',
        tracts: [
            {
                id: 'UTI-001',
                name: 'Utica (City)',
                coords: [[43.120, -75.260], [43.120, -75.200], [43.085, -75.200], [43.085, -75.260]],
                housingUnits: 38000,
                announcedPassings: 38000,
                density: 'urban',
                costPerPassing: 775,
                provider: 'GoNetSpeed',
                permitStatus: 'ACTIVE BUILD — $60M, 38K HHP',
                sourceType: 'GoNetSpeed',
                sourceUrl: 'https://www.gonetspeed.com/resources/news/gonetspeed-launches-construction-on-uticas-100-fiber-optic-infrastructure/',
                sourceText: 'GoNetSpeed: $60M investment, 38,000 HHP. Construction complete by winter 2025.',
                notes: 'GoNetSpeed major new build. $60M, 38K HHP. Spectrum cable incumbent. Low overlap risk.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.1009,-75.2327&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 17100, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 36100, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 24700, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'UTI-002',
                name: 'New Hartford',
                coords: [[43.085, -75.310], [43.085, -75.270], [43.060, -75.270], [43.060, -75.310]],
                housingUnits: 9200,
                announcedPassings: 9200,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'GoNetSpeed',
                permitStatus: 'ACTIVE — $12M, First Customers Summer 2025',
                sourceType: 'BusinessWire',
                sourceUrl: 'https://www.businesswire.com/news/home/20250529324726/en/GoNetspeed-Welcomes-New-Hartford-to-100-Fiber-Optic-Network',
                sourceText: 'BusinessWire 5/29/25: $12M investment, 9,200 HHP. First customers summer 2025.',
                notes: 'GoNetSpeed $12M investment. Adjacent to Utica. First customers summer 2025.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.0734,-75.2879&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 4140, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 8096, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 4600, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },

    // ==========================================
    // EMPIRE ACCESS — SOUTHERN TIER / FINGER LAKES
    // ==========================================
    southern_tier_ny: {
        county: 'Steuben / Chemung / Cortland',
        state: 'New York',
        fips: '36101/36015/36023',
        fccBdcUrl: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=42.1430,-77.0547&zoom=10',
        tracts: [
            {
                id: 'ST-001',
                name: 'Corning / Painted Post',
                coords: [[42.165, -77.075], [42.165, -77.020], [42.130, -77.020], [42.130, -77.075]],
                housingUnits: 8500,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'Empire',
                permitStatus: 'Core Market — Active Service',
                sourceType: 'Empire Access',
                sourceUrl: 'https://www.empireaccess.com/press-releases/painted-post-and-riverside-ny-fiber-optic-expansion/',
                sourceText: 'Empire Access: Painted Post & Riverside fiber expansion. Part of 96K address footprint.',
                notes: 'Empire core market. Part of 96,000 addresses served. 1,280 route miles.',
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=42.1430,-77.0547&zoom=14',
                fccProviders: [
                    { name: 'Empire Access', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: 5950, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 7480, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 4250, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'ST-002',
                name: 'Elmira / Horseheads',
                coords: [[42.110, -76.840], [42.110, -76.780], [42.070, -76.780], [42.070, -76.840]],
                housingUnits: 16500,
                density: 'suburban',
                costPerPassing: 850,
                provider: 'Empire',
                permitStatus: 'Expanding — South Elmira + Horseheads',
                sourceType: 'Empire Access',
                sourceUrl: 'https://www.empireaccess.com/press-releases/empire-access-expands-to-horseheads-and-southport-new-york/',
                sourceText: 'Empire Access: Expanding to Horseheads and Southport, NY',
                notes: 'Empire expanding. South Elmira + Horseheads/Southport new build.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=42.0898,-76.8078&zoom=13',
                fccProviders: [
                    { name: 'Empire Access', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: 5775, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 14520, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 8250, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'ST-003',
                name: 'Oswego County',
                coords: [[43.500, -76.555], [43.500, -76.460], [43.430, -76.460], [43.430, -76.555]],
                housingUnits: 10792,
                announcedPassings: 10792,
                density: 'rural',
                costPerPassing: 1100,
                provider: 'Empire (ISP on County Network)',
                permitStatus: 'Construction — $26M ConnectALL Grant',
                sourceType: 'Governor Hochul',
                sourceUrl: 'https://www.governor.ny.gov/news/governor-hochul-announces-26-million-connectall-investment-expand-affordable-broadband-access',
                sourceText: 'Gov. Hochul: $26M ConnectALL grant. 10,792 locations, 345 miles fiber. County-owned open-access; Empire as ISP.',
                notes: '$26M ConnectALL grant. Open-access county network. Empire selected as ISP. 345 miles of fiber.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=43.4554,-76.5104&zoom=12',
                fccProviders: [
                    { name: 'Empire Access', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: 3777, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 9496, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },

    // ==========================================
    // WILLIAMSPORT, PA (Empire vs Greenlight/FastBridge Overlap)
    // ==========================================
    williamsport_pa: {
        county: 'Lycoming',
        state: 'Pennsylvania',
        fips: '42081',
        fccBdcUrl: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.2412,-76.9214&zoom=12',
        tracts: [
            {
                id: 'WIL-001',
                name: 'Williamsport (City)',
                coords: [[41.265, -77.010], [41.265, -76.950], [41.230, -76.950], [41.230, -77.010]],
                housingUnits: 14500,
                density: 'urban',
                costPerPassing: 800,
                provider: 'Empire + Greenlight/FastBridge',
                permitStatus: 'OVERLAP — Empire Expanding + FastBridge (Pending Greenlight Acq.)',
                sourceType: 'WVIA + Light Reading',
                sourceUrl: 'https://www.lightreading.com/broadband/greenlight-networks-scoops-up-fastbridge-fiber',
                sourceText: 'Light Reading: Greenlight scoops up FastBridge Fiber. Empire also actively expanding in Lycoming County.',
                notes: 'Empire expanding + FastBridge (pending Greenlight acquisition mid-2026). Direct overbuild zone.',
                overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.2412,-76.9214&zoom=14',
                fccProviders: [
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 5800, source: 'FCC BDC Jun 2025' },
                    { name: 'Empire Access', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: 5075, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 13775, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 9425, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'WIL-002',
                name: 'Bloomsburg',
                coords: [[41.015, -76.470], [41.015, -76.425], [40.990, -76.425], [40.990, -76.470]],
                housingUnits: 6500,
                density: 'suburban',
                costPerPassing: 875,
                provider: 'Empire',
                permitStatus: 'Construction',
                sourceType: 'WVIA',
                sourceUrl: 'https://www.wvia.org/news/local/2024-08-19/081624empireaccesslyco',
                sourceText: 'WVIA: Empire Access expanding in Lycoming County, Bloomsburg construction underway',
                notes: 'Empire Access new build south of Williamsport.',
                isNew: true,
                overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.0035,-76.4549&zoom=14',
                fccProviders: [
                    { name: 'Empire Access', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: 2275, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 5720, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 3250, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },
    // ==========================================
    // SPRINGFIELD / WESTERN MA (GoNetSpeed new build)
    // ==========================================
    springfield_ma: {
        county: 'Hampden',
        state: 'MA',
        fips: '25013',
        tracts: [
            {
                id: 'SPR-001', name: 'Springfield City',
                coords: [[42.125, -72.610], [42.125, -72.565], [42.095, -72.565], [42.095, -72.610]],
                housingUnits: 17400, density: 'urban', costPerPassing: 750,
                provider: 'GoNetSpeed', permitStatus: 'Construction (early 2026 target)',
                sourceType: 'GoNetSpeed Press', sourceUrl: 'https://www.gonetspeed.com/resources/news/gonetspeed-to-bring-springfield-100-fiber-internet/',
                sourceText: 'GoNetSpeed: Springfield 17,400 HHP fiber build, completing early 2026',
                announcedPassings: 17400, notes: 'First MA market. OTMR legislation needed for 27-town $250M expansion.',
                isNew: true, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=42.1015,-72.5898&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 7830, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 16530, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 11310, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'SPR-002', name: 'Holyoke',
                coords: [[42.220, -72.640], [42.220, -72.590], [42.195, -72.590], [42.195, -72.640]],
                housingUnits: 8200, density: 'suburban', costPerPassing: 825,
                provider: 'GoNetSpeed', permitStatus: 'Planned (pending OTMR)',
                sourceType: 'BusinessWire', sourceUrl: 'https://www.businesswire.com/news/home/20250507692118/en/GoNetspeed-Poised-to-Make-$250M-Massachusetts-Investment-Amplifying-Need-for-One-Touch-Make-Ready',
                sourceText: 'GoNetSpeed $250M MA investment proposal — 27 communities pending OTMR legislation',
                notes: 'Part of proposed 27-town MA expansion. Pending pole attachment reform.',
                isNew: false, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=42.2042,-72.6162&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 3690, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 7216, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 4100, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'SPR-003', name: 'Chicopee/Westfield',
                coords: [[42.180, -72.620], [42.180, -72.560], [42.150, -72.560], [42.150, -72.620]],
                housingUnits: 12000, density: 'suburban', costPerPassing: 825,
                provider: 'GoNetSpeed', permitStatus: 'Planned (pending OTMR)',
                sourceType: 'BusinessWire', sourceUrl: 'https://www.businesswire.com/news/home/20250507692118/en/GoNetspeed-Poised-to-Make-$250M-Massachusetts-Investment-Amplifying-Need-for-One-Touch-Make-Ready',
                sourceText: 'GoNetSpeed $250M MA investment — Chicopee/Westfield in 27-town proposal',
                notes: 'Part of 27-town proposal. Comcast primary incumbent.',
                isNew: false, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=42.1487,-72.6079&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 5400, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 10560, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 6000, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },
    // ==========================================
    // BURLINGTON / VERMONT (GoNetSpeed + Fidium overlap)
    // ==========================================
    burlington_vt: {
        county: 'Chittenden',
        state: 'VT',
        fips: '50007',
        tracts: [
            {
                id: 'BTV-001', name: 'Burlington City',
                coords: [[44.495, -73.230], [44.495, -73.185], [44.465, -73.185], [44.465, -73.230]],
                housingUnits: 18200, density: 'urban', costPerPassing: 750,
                provider: 'GoNetSpeed + Fidium', permitStatus: 'Active — both building',
                sourceType: 'VT Biz Magazine', sourceUrl: 'https://vermontbiz.com/news/2024/november/20/fidium-has-connected-more-134000-vermont-homes-and-businesses-three-years',
                sourceText: 'Fidium: 134K+ VT homes/businesses connected; GoNetSpeed serving 8 VT communities',
                notes: 'Both GoNetSpeed (8 VT towns) and Fidium competing. Comcast also present.',
                isNew: false, overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=44.4759,-73.2121&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 14196, source: 'FCC BDC Jun 2025' },
                    { name: 'Fidium Fiber (CCI)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 16744, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 17290, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 11830, source: 'FCC BDC Jun 2025' },
                    { name: 'Consolidated (legacy DSL)', tech: 'DSL', maxDown: 25, maxUp: 3, bslCount: 10920, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'BTV-002', name: 'South Burlington',
                coords: [[44.465, -73.230], [44.465, -73.175], [44.440, -73.175], [44.440, -73.230]],
                housingUnits: 8500, density: 'suburban', costPerPassing: 825,
                provider: 'Fidium', permitStatus: 'Active upgrade (CCI copper to fiber)',
                sourceType: 'Fidium Fiber VT', sourceUrl: 'https://www.fidiumfiber.com/fiber-internet/availability/vermont/',
                sourceText: 'Fidium VT availability — copper-to-fiber upgrade across CCI territory',
                notes: 'Fidium upgrading legacy CCI copper. Not a new overbuild.',
                isNew: false, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=44.4520,-73.1812&zoom=14',
                fccProviders: [
                    { name: 'Fidium Fiber (CCI)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 7820, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 7480, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 4250, source: 'FCC BDC Jun 2025' },
                    { name: 'Consolidated (legacy DSL)', tech: 'DSL', maxDown: 25, maxUp: 3, bslCount: 5100, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'BTV-003', name: 'Essex/Williston',
                coords: [[44.505, -73.150], [44.505, -73.095], [44.480, -73.095], [44.480, -73.150]],
                housingUnits: 9800, density: 'suburban', costPerPassing: 850,
                provider: 'Fidium', permitStatus: 'Active upgrade',
                sourceType: 'Fidium Fiber VT', sourceUrl: 'https://www.fidiumfiber.com/fiber-internet/availability/vermont/',
                sourceText: 'Fidium VT availability — Essex/Williston in service territory',
                notes: 'CCI/Fidium ILEC territory. Fiber replacing copper.',
                isNew: false, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=44.4911,-73.1115&zoom=14',
                fccProviders: [
                    { name: 'Fidium Fiber (CCI)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 9016, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 8624, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 4900, source: 'FCC BDC Jun 2025' },
                    { name: 'Consolidated (legacy DSL)', tech: 'DSL', maxDown: 25, maxUp: 3, bslCount: 5880, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },
    // ==========================================
    // NEW JERSEY (GoNetSpeed new entry vs Verizon Fios)
    // ==========================================
    nj_suburbs: {
        county: 'Middlesex/Atlantic',
        state: 'NJ',
        fips: '34023',
        tracts: [
            {
                id: 'NJ-001', name: 'Old Bridge',
                coords: [[40.430, -74.310], [40.430, -74.260], [40.400, -74.260], [40.400, -74.310]],
                housingUnits: 9200, density: 'suburban', costPerPassing: 850,
                provider: 'GoNetSpeed (new) vs Verizon Fios', permitStatus: 'Pre-construction (fall 2026 first customers)',
                sourceType: 'BusinessWire', sourceUrl: 'https://www.businesswire.com/news/home/20250708646368/en/GoNetspeed-Accelerates-Network-Footprint-Prepares-Expansion-Serving-11th-State-New-Jersey',
                sourceText: 'GoNetSpeed $110M NJ expansion — 6 towns, 11th state',
                announcedPassings: null, notes: 'GoNetSpeed entering Verizon Fios core territory. $110M total NJ investment.',
                isNew: true, overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=40.4085,-74.2841&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 4140, source: 'FCC BDC Jun 2025' },
                    { name: 'Verizon Fios', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 8280, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 8096, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 4600, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'NJ-002', name: 'Carteret',
                coords: [[40.590, -74.250], [40.590, -74.215], [40.575, -74.215], [40.575, -74.250]],
                housingUnits: 5800, density: 'urban', costPerPassing: 750,
                provider: 'GoNetSpeed (new) vs Verizon Fios', permitStatus: 'Pre-construction',
                sourceType: 'BusinessWire', sourceUrl: 'https://www.businesswire.com/news/home/20250708646368/en/GoNetspeed-Accelerates-Network-Footprint-Prepares-Expansion-Serving-11th-State-New-Jersey',
                sourceText: 'GoNetSpeed NJ: Carteret among first 6 launch towns',
                notes: 'Dense urban NJ market. Verizon Fios already available.',
                isNew: true, overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=40.5818,-74.2265&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 2610, source: 'FCC BDC Jun 2025' },
                    { name: 'Verizon Fios', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 5220, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 5510, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 3770, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'NJ-003', name: 'South River/Parlin',
                coords: [[40.460, -74.390], [40.460, -74.350], [40.440, -74.350], [40.440, -74.390]],
                housingUnits: 6100, density: 'suburban', costPerPassing: 825,
                provider: 'GoNetSpeed (new) vs Verizon Fios', permitStatus: 'Pre-construction',
                sourceType: 'BusinessWire', sourceUrl: 'https://www.businesswire.com/news/home/20250708646368/en/GoNetspeed-Accelerates-Network-Footprint-Prepares-Expansion-Serving-11th-State-New-Jersey',
                sourceText: 'GoNetSpeed NJ: South River, Parlin in launch towns',
                notes: 'Verizon Fios incumbent. GoNetSpeed entering as fiber overbuild.',
                isNew: true, overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=40.4499,-74.3764&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 2745, source: 'FCC BDC Jun 2025' },
                    { name: 'Verizon Fios', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 5490, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 5368, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 3050, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'NJ-004', name: 'Ventnor/Northfield',
                coords: [[39.355, -74.490], [39.355, -74.440], [39.335, -74.440], [39.335, -74.490]],
                housingUnits: 7400, density: 'suburban', costPerPassing: 850,
                provider: 'GoNetSpeed (new) vs Comcast', permitStatus: 'Pre-construction',
                sourceType: 'BusinessWire', sourceUrl: 'https://www.businesswire.com/news/home/20250708646368/en/GoNetspeed-Accelerates-Network-Footprint-Prepares-Expansion-Serving-11th-State-New-Jersey',
                sourceText: 'GoNetSpeed NJ: Ventnor, Northfield in Atlantic County launch',
                notes: 'Atlantic County — Comcast primary (not Fios). GoNetSpeed may face less overlap here.',
                isNew: true, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=39.3437,-74.4732&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 3330, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 6512, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 3700, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },
    // ==========================================
    // BINGHAMTON / SOUTHERN NY (Greenlight active)
    // ==========================================
    binghamton_ny: {
        county: 'Broome',
        state: 'NY',
        fips: '36007',
        tracts: [
            {
                id: 'BNG-001', name: 'Binghamton City',
                coords: [[42.115, -75.930], [42.115, -75.880], [42.088, -75.880], [42.088, -75.930]],
                housingUnits: 11500, density: 'urban', costPerPassing: 750,
                provider: 'Greenlight', permitStatus: 'Active service',
                sourceType: 'Greenlight Networks', sourceUrl: 'https://www.greenlightnetworks.com/growing-greenlight-networks-fiber-forward-magazine/',
                sourceText: 'Greenlight Networks: 225K+ passings in 35 municipalities including Binghamton',
                notes: 'Greenlight core market. Spectrum is primary cable competitor.',
                isNew: false, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=42.0987,-75.9179&zoom=14',
                fccProviders: [
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 8625, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 10925, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 7475, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'BNG-002', name: 'Johnson City/Endicott',
                coords: [[42.120, -76.010], [42.120, -75.940], [42.090, -75.940], [42.090, -76.010]],
                housingUnits: 8900, density: 'suburban', costPerPassing: 825,
                provider: 'Greenlight', permitStatus: 'Active expansion',
                sourceType: 'Greenlight Networks', sourceUrl: 'https://www.greenlightnetworks.com/growing-greenlight-networks-fiber-forward-magazine/',
                sourceText: 'Greenlight: expanding through Broome County suburbs',
                notes: 'Greenlight expanding into greater Binghamton area.',
                isNew: false, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=42.1035,-75.9576&zoom=14',
                fccProviders: [
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 6675, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 7832, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 4450, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'BNG-003', name: 'Vestal/Owego',
                coords: [[42.090, -76.070], [42.090, -76.000], [42.060, -76.000], [42.060, -76.070]],
                housingUnits: 7200, density: 'suburban', costPerPassing: 850,
                provider: 'Greenlight', permitStatus: 'Expanding',
                sourceType: 'Greenlight Networks', sourceUrl: 'https://www.greenlightnetworks.com/growing-greenlight-networks-fiber-forward-magazine/',
                sourceText: 'Greenlight 800K+ long-term target — Vestal/Owego in growth path',
                notes: 'Greenlight targets 800K+ passings. These suburbs are in expansion pipeline.',
                isNew: true, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=42.0802,-76.0500&zoom=14',
                fccProviders: [
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 2880, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 6336, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 3600, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },
    // ==========================================
    // HUDSON VALLEY, NY (Greenlight expanding into Altice territory)
    // ==========================================
    hudson_valley_ny: {
        county: 'Dutchess/Ulster',
        state: 'NY',
        fips: '36027',
        tracts: [
            {
                id: 'HV-001', name: 'Poughkeepsie',
                coords: [[41.720, -73.940], [41.720, -73.890], [41.690, -73.890], [41.690, -73.940]],
                housingUnits: 14200, density: 'urban', costPerPassing: 775,
                provider: 'Greenlight (entering)', permitStatus: 'Announced expansion',
                sourceType: 'Greenlight Networks', sourceUrl: 'https://www.greenlightnetworks.com/growing-greenlight-networks-fiber-forward-magazine/',
                sourceText: 'Greenlight expanding into Hudson Valley — Altice/Optimum territory',
                notes: 'Greenlight entering Altice cable territory. Significant competitive disruption potential.',
                isNew: true, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.7004,-73.9209&zoom=14',
                fccProviders: [
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 5680, source: 'FCC BDC Jun 2025' },
                    { name: 'Altice/Optimum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 13490, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 9230, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'HV-002', name: 'Newburgh/Middletown',
                coords: [[41.520, -74.060], [41.520, -73.990], [41.490, -73.990], [41.490, -74.060]],
                housingUnits: 11800, density: 'suburban', costPerPassing: 850,
                provider: 'Greenlight (entering)', permitStatus: 'Planned',
                sourceType: 'Greenlight Networks', sourceUrl: 'https://www.greenlightnetworks.com/growing-greenlight-networks-fiber-forward-magazine/',
                sourceText: 'Greenlight targeting Hudson Valley expansion — 800K+ long-term passings goal',
                notes: 'Part of Greenlight 800K+ passings growth plan. Altice is cable incumbent.',
                isNew: true, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.5034,-74.0104&zoom=14',
                fccProviders: [
                    { name: 'Greenlight Networks', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 4720, source: 'FCC BDC Jun 2025' },
                    { name: 'Altice/Optimum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 10384, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 5900, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },
    // ==========================================
    // NORTH COUNTRY / ADIRONDACKS, NY (SLIC Networks territory)
    // ==========================================
    north_country_ny: {
        county: 'St. Lawrence/Franklin',
        state: 'NY',
        fips: '36089',
        tracts: [
            {
                id: 'NC-001', name: 'Potsdam/Canton',
                coords: [[44.695, -75.010], [44.695, -74.930], [44.650, -74.930], [44.650, -75.010]],
                housingUnits: 5200, density: 'rural', costPerPassing: 1200,
                provider: 'SLIC Networks', permitStatus: 'Core market — active service',
                sourceType: 'BroadbandNow', sourceUrl: 'https://broadbandnow.com/Slic-Network-Solutions',
                sourceText: 'SLIC Networks: 100+ NY towns in North Country/Adirondacks',
                notes: 'SLIC Networks core territory. SDC Capital backed. Rural fiber.',
                isNew: false, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=44.6698,-74.9812&zoom=14',
                fccProviders: [
                    { name: 'SLIC Networks', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: 3380, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 4576, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'NC-002', name: 'Ogdensburg',
                coords: [[44.720, -75.530], [44.720, -75.470], [44.690, -75.470], [44.690, -75.530]],
                housingUnits: 3800, density: 'rural', costPerPassing: 1100,
                provider: 'SLIC Networks', permitStatus: 'Active service',
                sourceType: 'BroadbandNow', sourceUrl: 'https://broadbandnow.com/Slic-Network-Solutions',
                sourceText: 'SLIC Networks serving Ogdensburg and St. Lawrence County',
                notes: 'SLIC core — St. Lawrence River corridor.',
                isNew: false, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=44.6938,-75.4863&zoom=14',
                fccProviders: [
                    { name: 'SLIC Networks', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: 2470, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 3344, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'NC-003', name: 'Malone/Franklin County',
                coords: [[44.870, -74.310], [44.870, -74.240], [44.840, -74.240], [44.840, -74.310]],
                housingUnits: 4100, density: 'rural', costPerPassing: 1250,
                provider: 'SLIC Networks', permitStatus: 'Active service',
                sourceType: 'BroadbandNow', sourceUrl: 'https://broadbandnow.com/Slic-Network-Solutions',
                sourceText: 'SLIC Networks: Franklin County coverage in Adirondack region',
                notes: 'Rural Adirondack territory. High cost per passing.',
                isNew: false, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=44.8509,-74.2926&zoom=14',
                fccProviders: [
                    { name: 'SLIC Networks', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: 2665, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 3608, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'NC-004', name: 'Saranac Lake/Lake Placid',
                coords: [[44.340, -74.180], [44.340, -74.100], [44.300, -74.100], [44.300, -74.180]],
                housingUnits: 3200, density: 'rural', costPerPassing: 1300,
                provider: 'SLIC Networks', permitStatus: 'Expanding',
                sourceType: 'BroadbandNow', sourceUrl: 'https://broadbandnow.com/Slic-Network-Solutions',
                sourceText: 'SLIC Networks expanding in Adirondack tourist corridor',
                notes: 'Tourist economy area. SLIC expanding fiber coverage.',
                isNew: true, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=44.3265,-74.1307&zoom=14',
                fccProviders: [
                    { name: 'SLIC Networks', tech: 'Fiber', maxDown: 1000, maxUp: 1000, bslCount: 2080, source: 'FCC BDC Jun 2025' },
                    { name: 'Spectrum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 2816, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },
    // ==========================================
    // FAIRFIELD COUNTY, CT (GoNetSpeed vs Frontier vs Altice)
    // ==========================================
    fairfield_ct: {
        county: 'Fairfield',
        state: 'CT',
        fips: '09001',
        tracts: [
            {
                id: 'FC-001', name: 'Bridgeport',
                coords: [[41.195, -73.215], [41.195, -73.165], [41.165, -73.165], [41.165, -73.215]],
                housingUnits: 22500, density: 'urban', costPerPassing: 750,
                provider: 'GoNetSpeed + Frontier', permitStatus: 'Both active',
                sourceType: 'GoNetSpeed CT', sourceUrl: 'https://www.gonetspeed.com/ct/',
                sourceText: 'GoNetSpeed: 65+ CT towns served including Fairfield County',
                notes: 'GoNetSpeed + Frontier both active. Altice/Optimum cable incumbent.',
                isNew: false, overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.1792,-73.1894&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 10125, source: 'FCC BDC Jun 2025' },
                    { name: 'Frontier (now Verizon)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 19800, source: 'FCC BDC Jun 2025' },
                    { name: 'Altice/Optimum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 21375, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 14625, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'FC-002', name: 'Norwalk/Stamford',
                coords: [[41.115, -73.440], [41.115, -73.370], [41.080, -73.370], [41.080, -73.440]],
                housingUnits: 28000, density: 'urban', costPerPassing: 750,
                provider: 'GoNetSpeed + Frontier + Altice', permitStatus: 'Triple active',
                sourceType: 'CT Insider', sourceUrl: 'https://www.ctinsider.com/business/article/Frontier-Communications-fiber-optic-expansion-17507452.php',
                sourceText: 'CT Insider: Frontier $800M fiber build across 111 CT communities',
                notes: 'Triple competition: GoNetSpeed + Frontier fiber + Altice cable. Very high density market.',
                isNew: false, overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.0931,-73.4188&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 12600, source: 'FCC BDC Jun 2025' },
                    { name: 'Frontier (now Verizon)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 24640, source: 'FCC BDC Jun 2025' },
                    { name: 'Altice/Optimum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 26600, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 18200, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'FC-003', name: 'Danbury/Bethel',
                coords: [[41.420, -73.480], [41.420, -73.420], [41.390, -73.420], [41.390, -73.480]],
                housingUnits: 14200, density: 'suburban', costPerPassing: 825,
                provider: 'GoNetSpeed + Frontier', permitStatus: 'Both expanding',
                sourceType: 'GoNetSpeed CT', sourceUrl: 'https://www.gonetspeed.com/ct/',
                sourceText: 'GoNetSpeed serving Danbury area in western CT',
                notes: 'GoNetSpeed and Frontier both building in northern Fairfield County.',
                isNew: false, overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.4015,-73.4540&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 6390, source: 'FCC BDC Jun 2025' },
                    { name: 'Frontier (now Verizon)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 12496, source: 'FCC BDC Jun 2025' },
                    { name: 'Altice/Optimum', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 12496, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 7100, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },
    // ==========================================
    // NEWPORT / RHODE ISLAND (GoNetSpeed new build)
    // ==========================================
    newport_ri: {
        county: 'Newport',
        state: 'RI',
        fips: '44005',
        tracts: [
            {
                id: 'NP-001', name: 'Newport City',
                coords: [[41.505, -71.340], [41.505, -71.300], [41.475, -71.300], [41.475, -71.340]],
                housingUnits: 8200, density: 'suburban', costPerPassing: 850,
                provider: 'GoNetSpeed', permitStatus: 'Construction (spring 2026 first customers)',
                sourceType: 'BusinessWire', sourceUrl: 'https://www.businesswire.com/news/home/20250523831418/en/GoNetspeed-Celebrates-Growing-Footprint-and-10th-State',
                sourceText: 'GoNetSpeed: Newport, RI — $12.9M investment, 10th state entry',
                announcedPassings: 8200, notes: 'GoNetSpeed 10th state. $12.9M investment. Verizon RI grant competitor.',
                isNew: true, overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.4901,-71.3128&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 3690, source: 'FCC BDC Jun 2025' },
                    { name: 'Cox Communications', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 7216, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 4100, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'NP-002', name: 'Middletown',
                coords: [[41.540, -71.310], [41.540, -71.270], [41.510, -71.270], [41.510, -71.310]],
                housingUnits: 5400, density: 'suburban', costPerPassing: 875,
                provider: 'GoNetSpeed', permitStatus: 'Planned (adjacent to Newport)',
                sourceType: 'BusinessWire', sourceUrl: 'https://www.businesswire.com/news/home/20250523831418/en/GoNetspeed-Celebrates-Growing-Footprint-and-10th-State',
                sourceText: 'GoNetSpeed RI expansion — adjacent communities planned',
                notes: 'Likely expansion from Newport anchor build.',
                isNew: true, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=41.5183,-71.2865&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 2430, source: 'FCC BDC Jun 2025' },
                    { name: 'Cox Communications', tech: 'Cable (DOCSIS)', maxDown: 1000, maxUp: 35, bslCount: 4752, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 2700, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },
    // ==========================================
    // LEHIGH VALLEY, PA (Verizon Fios expansion)
    // ==========================================
    lehigh_valley_pa: {
        county: 'Northampton/Lehigh',
        state: 'PA',
        fips: '42095',
        tracts: [
            {
                id: 'LV-001', name: 'Bethlehem',
                coords: [[40.635, -75.395], [40.635, -75.350], [40.610, -75.350], [40.610, -75.395]],
                housingUnits: 15000, density: 'urban', costPerPassing: 750,
                provider: 'Verizon Fios', permitStatus: 'Active expansion (~1K/month qualifying)',
                sourceType: 'Morning Call', sourceUrl: 'https://www.mcall.com/2025/06/02/verizon-fios-expanding-in-bethlehem-new-households-to-qualify-in-the-coming-months/',
                sourceText: 'Morning Call: Verizon Fios expanding in Bethlehem, new qualifying monthly',
                notes: 'Verizon incrementally qualifying addresses. ~1,000/month.',
                isNew: true, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=40.6259,-75.3705&zoom=14',
                fccProviders: [
                    { name: 'Verizon Fios', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 13500, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 14250, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 9750, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'LV-002', name: 'Allentown',
                coords: [[40.620, -75.510], [40.620, -75.455], [40.595, -75.455], [40.595, -75.510]],
                housingUnits: 20000, density: 'urban', costPerPassing: 750,
                provider: 'Verizon Fios', permitStatus: 'Active (existing + expanding)',
                sourceType: 'Morning Call', sourceUrl: 'https://www.mcall.com/2025/06/02/verizon-fios-expanding-in-bethlehem-new-households-to-qualify-in-the-coming-months/',
                sourceText: 'Verizon Fios Lehigh Valley expansion including Allentown metro',
                notes: 'Verizon Fios core ILEC territory. Service expanding. RCN/Astound also present.',
                isNew: false, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=40.6084,-75.4902&zoom=14',
                fccProviders: [
                    { name: 'Verizon Fios', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 18000, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 19000, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 13000, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'LV-003', name: 'Easton',
                coords: [[40.700, -75.230], [40.700, -75.195], [40.680, -75.195], [40.680, -75.230]],
                housingUnits: 8500, density: 'suburban', costPerPassing: 825,
                provider: 'Verizon Fios', permitStatus: 'Active',
                sourceType: 'Morning Call', sourceUrl: 'https://www.mcall.com/2025/06/02/verizon-fios-expanding-in-bethlehem-new-households-to-qualify-in-the-coming-months/',
                sourceText: 'Verizon Fios Lehigh Valley — Easton in expanding footprint',
                notes: 'Verizon legacy territory. RCN cable also present.',
                isNew: false, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=40.6893,-75.2207&zoom=14',
                fccProviders: [
                    { name: 'Verizon Fios', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 7650, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 7480, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 4250, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    },
    // ==========================================
    // WEST VIRGINIA (GoNetSpeed BEAD + Frontier overlap)
    // ==========================================
    wv_eastern: {
        county: 'Berkeley/Jefferson',
        state: 'WV',
        fips: '54003',
        tracts: [
            {
                id: 'WV-001', name: 'Martinsburg/Berkeley County',
                coords: [[39.480, -77.990], [39.480, -77.920], [39.440, -77.920], [39.440, -77.990]],
                housingUnits: 12000, density: 'suburban', costPerPassing: 900,
                provider: 'GoNetSpeed + Frontier', permitStatus: 'GoNetSpeed BEAD build; Frontier legacy',
                sourceType: 'GoNetSpeed News', sourceUrl: 'https://www.gonetspeed.com/resources/news/',
                sourceText: 'GoNetSpeed BEAD grants — WV allocations for rural and suburban builds',
                notes: 'GoNetSpeed entering via BEAD grants. Frontier legacy copper. Eastern Panhandle market.',
                isNew: true, overlap: true,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=39.4563,-77.9640&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 5400, source: 'FCC BDC Jun 2025' },
                    { name: 'Frontier (now Verizon)', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 10560, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 10560, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 6000, source: 'FCC BDC Jun 2025' }
                ]
            },
            {
                id: 'WV-002', name: 'Charles Town/Jefferson County',
                coords: [[39.310, -77.880], [39.310, -77.830], [39.280, -77.830], [39.280, -77.880]],
                housingUnits: 6500, density: 'suburban', costPerPassing: 925,
                provider: 'GoNetSpeed', permitStatus: 'BEAD awarded',
                sourceType: 'GoNetSpeed News', sourceUrl: 'https://www.gonetspeed.com/resources/news/',
                sourceText: 'GoNetSpeed WV BEAD — Jefferson County in award territory',
                notes: 'Eastern Panhandle WV. Growing DC exurb market.',
                isNew: true, overlap: false,
                fccCheck: 'https://broadbandmap.fcc.gov/location-summary/fixed?speed=25_3&latlon=39.2891,-77.8597&zoom=14',
                fccProviders: [
                    { name: 'GoNetSpeed', tech: 'Fiber', maxDown: 2000, maxUp: 2000, bslCount: 2925, source: 'FCC BDC Jun 2025' },
                    { name: 'Comcast Xfinity', tech: 'Cable (DOCSIS)', maxDown: 1200, maxUp: 35, bslCount: 5720, source: 'FCC BDC Jun 2025' },
                    { name: 'T-Mobile 5G Home', tech: 'Fixed Wireless', maxDown: 245, maxUp: 31, bslCount: 3250, source: 'FCC BDC Jun 2025' }
                ]
            }
        ]
    }
};

// ============================================================
// FCC BDC INCREMENTAL ANALYSIS
// Shows what FCC BDC currently reports vs. announced builds
// BDC data as of Jun 2025 filing; press releases through Feb 2026
// ============================================================
const FCC_INCREMENTAL = [
    {
        operator: 'GoNetSpeed',
        operatorId: 'gonet',
        fccBDCPassings: '~390,000',
        fccBDCDate: 'Jun 2025',
        fccBDCSource: 'FCC BDC',
        fccBDCUrl: 'https://broadbandmap.fcc.gov/data-download/fixed',
        announcedAdditional: [
            { market: 'NJ (6 towns)', passings: 'TBD ($110M investment)', source: 'BusinessWire Jul 2025', sourceUrl: 'https://www.businesswire.com/news/home/20250708646368/en/GoNetspeed-Accelerates-Network-Footprint-Prepares-Expansion-Serving-11th-State-New-Jersey', status: 'Pre-construction' },
            { market: 'MA (27 communities)', passings: 'TBD ($250M proposed)', source: 'BusinessWire May 2025', sourceUrl: 'https://www.businesswire.com/news/home/20250507692118/en/GoNetspeed-Poised-to-Make-$250M-Massachusetts-Investment-Amplifying-Need-for-One-Touch-Make-Ready', status: 'Proposed' },
            { market: 'BEAD grants (7 states)', passings: '73,000+ locations', source: 'GoNetSpeed News', sourceUrl: 'https://www.gonetspeed.com/resources/news/', status: 'Grant awarded' },
            { market: 'East Haven, CT', passings: '13,000', source: 'BusinessWire Aug 2025', sourceUrl: 'https://www.businesswire.com/news/home/20250826151569/en/GoNetspeed-Ushers-in-New-Era-for-East-Haven-with-100-Fiber-Optic-Connectivity-for-First-Customers', status: 'Active construction' },
        ],
        incrementalEstimate: '86,000+ confirmed + NJ/MA TBD',
        incrementalNote: 'FCC BDC shows ~390K (Apr 2023 public figure). BEAD grants add 73K+ confirmed locations. NJ and MA builds not yet in BDC. True current footprint likely 500K+ given ~140K/yr build pace since 2023.',
        methodology: 'Public passings figure (Fierce Network, Apr 2023) + announced BEAD grants + announced market entries. Internal estimates suggest higher current figure but cannot be verified publicly.'
    },
    {
        operator: 'Greenlight Networks',
        operatorId: 'greenlight',
        fccBDCPassings: '~225,000',
        fccBDCDate: 'Jun 2025',
        fccBDCSource: 'FCC BDC',
        fccBDCUrl: 'https://broadbandmap.fcc.gov/data-download/fixed',
        announcedAdditional: [
            { market: 'Baltimore, MD', passings: 'TBD ($100M investment)', source: 'Greenlight Networks', sourceUrl: 'https://www.greenlightnetworks.com/growing-greenlight-networks-fiber-forward-magazine/', status: 'New market entry' },
            { market: 'Buffalo expansion', passings: '28,000+ (as of 2024)', source: 'Buffalo News', sourceUrl: 'https://buffalonews.com/business/local/greenlight-adds-another-suburb-to-its-fiber-optic-internet-service/article_f93d2b0e-3e7a-11ef-9d0f-a3b94c62c66c.html', status: 'Active expansion' },
            { market: 'PA (Loop/FastBridge)', passings: '~12,000 (Scranton area)', source: 'Times Tribune', sourceUrl: 'https://www.thetimes-tribune.com/news/business/loop-internet-expands-fiber-service-in-lackawanna-county/', status: 'Pending M&A integration' },
        ],
        incrementalEstimate: '40,000+ in pipeline + Baltimore TBD',
        incrementalNote: 'FCC BDC shows ~225K in 35 municipalities. Buffalo expansion ongoing (28K+ passed). Baltimore is $100M greenfield not yet in BDC. Loop/FastBridge integration pending. Long-term target 800K+.',
        methodology: 'Company press (Fiber Forward Magazine) + local news coverage. Baltimore investment announced but passings target not yet quantified publicly.'
    },
    {
        operator: 'Fidium / Consolidated',
        operatorId: 'fidium',
        fccBDCPassings: '1,000,000+ (NE region)',
        fccBDCDate: 'Jun 2025',
        fccBDCSource: 'FCC BDC',
        fccBDCUrl: 'https://broadbandmap.fcc.gov/data-download/fixed',
        announcedAdditional: [
            { market: 'NH continued expansion', passings: '276,000+ (statewide target)', source: 'Fidium Fiber NH', sourceUrl: 'https://www.fidiumfiber.com/fiber-internet/availability/new-hampshire/', status: 'Ongoing upgrade' },
            { market: 'VT expansion', passings: '134,000+ target', source: 'Fidium Fiber VT', sourceUrl: 'https://www.fidiumfiber.com/fiber-internet/availability/vermont/', status: 'Active build' },
            { market: 'ME full-state', passings: '294,000+ target', source: 'Fidium Fiber ME', sourceUrl: 'https://www.fidiumfiber.com/fiber-internet/availability/maine/', status: 'Active upgrade' },
        ],
        incrementalEstimate: 'Mostly upgrading legacy CCI copper footprint',
        incrementalNote: 'Fidium is primarily upgrading Consolidated Communications\' existing copper/DSL footprint to FTTH. Most passings already in FCC BDC as "served" via DSL. Incremental fiber passings represent technology upgrade, not new territory.',
        methodology: 'Fidium availability maps + CCI investor materials. Key distinction: CCI/Fidium already has ILEC territory - fiber is an upgrade, not a new overbuild in most cases.'
    },
    {
        operator: 'Empire Access',
        operatorId: 'empire',
        fccBDCPassings: '~96,000',
        fccBDCDate: 'Jun 2025',
        fccBDCSource: 'FCC BDC',
        fccBDCUrl: 'https://broadbandmap.fcc.gov/data-download/fixed',
        announcedAdditional: [
            { market: 'Scranton/NEPA (176 mi fiber)', passings: 'TBD', source: 'Empire Access', sourceUrl: 'https://www.empireaccess.com/', status: 'Active construction' },
            { market: 'NY Southern Tier expansion', passings: '140,000 new passings target', source: 'Fierce Network', sourceUrl: 'https://www.fierce-network.com/broadband/empire-access-antin-investment-fiber-expansion', status: 'Active build' },
            { market: 'Williamsport, PA', passings: 'TBD', source: 'WVIA', sourceUrl: 'https://www.wvia.org/news/local/2024-08-19/081624empireaccesslyco', status: 'New construction' },
        ],
        incrementalEstimate: '140,000 new passings target (post-Antin)',
        incrementalNote: 'Antin\'s investment targets 140K new passings on top of 96K existing. Scranton 176-mile fiber loop in construction. Williamsport new build underway. These are genuinely incremental (new territory, not upgrades).',
        methodology: 'Fierce Network reporting on Antin acquisition target + local news on Scranton/Williamsport construction.'
    },
    {
        operator: 'Frontier (now Verizon)',
        operatorId: 'frontier',
        fccBDCPassings: '~2,200,000 (NE states)',
        fccBDCDate: 'Jun 2025',
        fccBDCSource: 'FCC BDC',
        fccBDCUrl: 'https://broadbandmap.fcc.gov/data-download/fixed',
        announcedAdditional: [
            { market: 'CT $800M fiber build', passings: '111 communities', source: 'CT Insider', sourceUrl: 'https://www.ctinsider.com/business/article/Frontier-Communications-fiber-optic-expansion-17507452.php', status: 'Active (pre-Verizon close)' },
        ],
        incrementalEstimate: 'Primarily upgrading existing copper territory',
        incrementalNote: 'Frontier/Verizon CT $800M program upgrades legacy copper to fiber. Most territory already in FCC BDC. Verizon acquisition closed Jan 2026 — expect accelerated fiber conversion leveraging Verizon capital.',
        methodology: 'CT Insider reporting + Verizon/Frontier merger filings. Similar to Fidium: technology upgrade of existing territory.'
    },
    {
        operator: 'Breezeline',
        operatorId: 'breezeline',
        fccBDCPassings: '~700,000 (NE states)',
        fccBDCDate: 'Jun 2025',
        fccBDCSource: 'FCC BDC',
        fccBDCUrl: 'https://broadbandmap.fcc.gov/data-download/fixed',
        announcedAdditional: [
            { market: 'NH (9 towns)', passings: 'Expanding fiber in existing HFC territory', source: 'Breezeline NH', sourceUrl: 'https://www.breezeline.com/', status: 'Fiber upgrade' },
        ],
        incrementalEstimate: 'Minimal new territory; fiber upgrade of HFC plant',
        incrementalNote: 'Breezeline (Cogeco) primarily upgrading existing cable/HFC plant to fiber. Already in FCC BDC as cable provider. NH towns are existing service areas getting FTTH overlay.',
        methodology: 'Cogeco quarterly filings + Breezeline availability maps. Incremental is technology upgrade, not new footprint.'
    }
];
