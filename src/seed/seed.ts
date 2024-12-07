interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    gender: 'prestamos'|'ahorros'|'educafinan'|'digital'
}

type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
type ValidTypes = 'shirts'|'pants'|'hoodies'|'hats';

interface SeedData {
    products: SeedProduct[],
}




export const initialData: SeedData = {
    products: [
        {
            description: "Introducing the Tesla Chill Collection. The prestamos’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'credito_pyme_00.jpg',
                'credito_pyme_01.jpg',
            ],
            inStock: 7,
            price: 75,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "prestamoss_chill_crew_neck_sweatshirt",
            type: 'shirts',
            tags: ['sweatshirt'],
            title: "prestamos’s Chill Crew Neck Sweatshirt",
            gender: 'prestamos'
        },
        {
            description: "The prestamos's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
            images: [
                'Crecerfin_00.jpg',
                'Crecerfin_01.jpg',
            ],
            inStock: 5,
            price: 200,
            sizes: ['XS','S','M','XL','XXL'],
            slug: "prestamos_quilted_shirt_jacket",
            type: 'shirts',
            tags: ['jacket'],
            title: "prestamos's Quilted Shirt Jacket",
            gender: 'prestamos'
        },
        
        {
            description: "Introducing the Tesla Raven Collection. The prestamos's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
            images: [
                'Crecerfin_00.jpg',
                'Crecerfin_01.jpg'
            ],
            inStock: 10,
            price: 130,
            sizes: ['S','M','L','XL','XXL'],
            slug: "prestamos_raven_lightweight_zip_up_bomber_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos's Raven Lightweight Zip Up Bomber Jacket",
            gender: 'prestamos'
        },

        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the prestamos's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            images: [
                'Crecerfin_00.jpg',
                'Crecerfin_01.jpg',
            ],
            inStock: 50,
            price: 45,
            sizes: ['XS','S','M','L'],
            slug: "prestamos_turbine_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos's Turbine Long Sleeve Tee",
            gender: 'prestamos'
        },
        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the prestamos's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
            images: [
                'Crecerfin_00.jpg',
                'Crecerfin_01.jpg',
            ],
            inStock: 50,
            price: 40,
            sizes: ['M','L','XL','XXL'],
            slug: "prestamos_turbine_short_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos's Turbine Short Sleeve Tee",
            gender: 'prestamos'
        },
        {
            description: "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            images: [
                'credito_pyme_00.jpg',
                'credito_pyme_01.jpg',
            ],
            inStock: 0,
            price: 35,
            sizes: ['M','L','XL','XXL'],
            slug: "prestamos_cybertruck_owl_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos's Cybertruck Owl Tee",
            gender: 'prestamos'
        },
        {
            description: "Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
            images: [
                'credito_pyme_00.jpg',
                'credito_pyme_01.jpg',
            ],
            inStock: 15,
            price: 35,
            sizes: ['S','M','L','XL'],
            slug: "prestamos_solar_roof_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos's Solar Roof Tee",
            gender: 'prestamos'
        },
        {
            description: "Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
            images: [
                'credito_pyme_00.jpg',
                'credito_pyme_01.jpg',
            ],
            inStock: 17,
            price: 35,
            sizes: ['XS','S','XL','XXL'],
            slug: "prestamos_let_the_sun_shine_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos's Let the Sun Shine Tee",
            gender: 'prestamos'
        },
        {
            description: "Designed for fit, comfort and style, the prestamos's 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.",
            images: [
                'credito_pyme_00.jpg',
                'credito_pyme_01.jpg',
            ],
            inStock: 12,
            price: 35,
            sizes: ['XS','S','M'],
            slug: "prestamos_3d_large_wordmark_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos's 3D Large Wordmark Tee",
            gender: 'prestamos'
        },
        {
            description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
            images: [
                'credito_pyme_00.jpg',
                'credito_pyme_01.jpg',
            ],
            inStock: 5,
            price: 35,
            sizes: ['XS','S'],
            slug: "prestamos_3d_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos's 3D T Logo Tee",
            gender: 'prestamos'
        },
        {
            description: "Designed for comfort and style in any size, the Tesla Small Wordmark Tee is made from 100% Peruvian cotton and features a 3D silicone-printed wordmark on the left chest.",
            images: [
                'credito_pyme_00.jpg',
                'credito_pyme_01.jpg',
            ],
            inStock: 2,
            price: 35,
            sizes: ['XS','S','M'],
            slug: "prestamos_3d_small_wordmark_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos’s 3D Small Wordmark Tee",
            gender: 'prestamos'
        },
        {
            description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
            images: [
                'credito_pyme_00.jpg',
                'credito_pyme_01.jpg',
            ],
            inStock: 82,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "prestamos_plaid_mode_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos's Plaid Mode Tee",
            gender: 'prestamos'
        },
        {
            description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any environprestamost.",
            images: [
                'credito_pyme_00.jpg',
                'credito_pyme_01.jpg',
            ],
            inStock: 24,
            price: 35,
            sizes: ['XL','XXL'],
            slug: "prestamos_powerwall_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos's Powerwall Tee",
            gender: 'prestamos'
        },
        {
            description: "Inspired by Tesla Battery Day and featuring the unveiled tabless battery cell, Battery Day Tee celebrates the future of energy storage and cell manufacturing. Designed for fit, comfort and style, Battery Day Tee is made from 100% cotton with a stylized cell printed across the chest. Made in Peru.",
            images: [
                'credito_pyme_00.jpg',
                'credito_pyme_01.jpg',
            ],
            inStock: 5,
            price: 30,
            sizes: ['XS','S','XXL'],
            slug: "prestamos_battery_day_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos's Battery Day Tee",
            gender: 'prestamos'
        },
        {
            description: "Designed for exceptional comfort and inspired by the Cybertruck unveil event, the Cybertruck Bulletproof Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
            images: [
                'credito_pyme_00.jpg',
                'credito_pyme_01.jpg',
            ],
            inStock: 150,
            price: 30,
            sizes: ['M','L'],
            slug: "prestamos_cybertruck_bulletproof_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos’s Cybertruck Bulletproof Tee",
            gender: 'prestamos'
        },
        {
            description: "Inspired by the Model Y order confirmation graphic, the limited edition Haha Yes Tee is designed for comfort and style. Made from 100% Peruvian cotton and featuring the Tesla wordmark across the chest, the exclusive tee will commemorate your order for years to come.",
            images: [
                'credito_pyme_00.jpg',
                'credito_pyme_01.jpg',
            ],
            inStock: 10,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "prestamos_haha_yes_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos's Haha Yes Tee",
            gender: 'prestamos'
        },
        {
            description: "Designed for fit, comfort and style, the limited edition S3XY Tee is made from 100% cotton with a 3D silicone-printed “S3XY” logo across the chest. Made in Peru. Available in black.",
            images: [
                'credito_pyme_00.jpg',
                'credito_pyme_01.jpg',
            ],
            inStock: 34,
            price: 35,
            sizes: ['XS','S','M','L'],
            slug: "prestamos_s3xy_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos's S3XY Tee",
            gender: 'prestamos'
        },
        {
            description: "Designed for fit, comfort and style, the prestamos's 3D Wordmark Long Sleeve Tee is made from 100% cotton and features an understated wordmark logo on the left chest.",
            images: [
                'credito_pyme_00.jpg',
                'credito_pyme_01.jpg',
            ],
            inStock: 15,
            price: 40,
            sizes: ['XL','XXL'],
            slug: "prestamos_3d_wordmark_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos's 3D Wordmark Long Sleeve Tee",
            gender: 'prestamos'
        },
        {
            description: "Designed for fit, comfort and style, the prestamos's 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.",
            images: [
                'credito_pyme_00.jpg',
                'credito_pyme_01.jpg',
            ],
            inStock: 12,
            price: 40,
            sizes: ['XS','XXL'],
            slug: "prestamos_3d_t_logo_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos's 3D T Logo Long Sleeve Tee",
            gender: 'prestamos'
        },
        {
            description: "Introducing the Tesla Raven Collection. The prestamos's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
            images: [
                'credito_pyme_00.jpg',
                'credito_pyme_01.jpg',
            ],
            inStock: 10,
            price: 115,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "prestamos_raven_lightweight_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "prestamos's Raven Lightweight Hoodie",
            gender: 'prestamos'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The digital hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'digital_00.jpg',
                'digital_01.jpg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "chill_pullover_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Chill Pullover Hoodie",
            gender: 'digital'
        },
        {
            description: "Introducing the Tesla Chill Collection. The prestamos's Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'credito_pyme_00.jpg',
                'credito_pyme_01.jpg',
            ],
            inStock: 100,
            price: 85,
            sizes: ['XS','L','XL','XXL'],
            slug: "prestamos_chill_full_zip_hoodie",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos's Chill Full Zip Hoodie",
            gender: 'prestamos'
        },
        {
            description: "Introducing the Tesla Chill Collection. The prestamos’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'credito_pyme_00.jpg',
                'credito_pyme_01.jpg',
            ],
            inStock: 7,
            price: 85,
            sizes: ['XS','S','M'],
            slug: "prestamos_chill_quarter_zip_pullover_-_gray",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos's Chill Quarter Zip Pullover - Gray",
            gender: 'prestamos'
        },
        {
            description: "Introducing the Tesla Chill Collection. The prestamos’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'credito_pyme_00.jpg',
                'credito_pyme_01.jpg',
            ],
            inStock: 15,
            price: 85,
            sizes: ['XS','S','M','L'],
            slug: "prestamos_chill_quarter_zip_pullover_-_white",
            type: 'shirts',
            tags: ['shirt'],
            title: "prestamos's Chill Quarter Zip Pullover - White",
            gender: 'prestamos'
        },
        {
            description: "The digital 3D Large Wordmark Pullover Hoodie features soft fleece and an adjustable, jersey-lined hood for comfort and coverage. Designed in a digital style, the pullover hoodie includes a tone-on-tone 3D silicone-printed wordmark across the chest.",
            images: [
                'digital_00.jpg',
                'digital_01.jpg',
            ],
            inStock: 15,
            price: 70,
            sizes: ['XS','S','XL','XXL'],
            slug: "3d_large_wordmark_pullover_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "3D Large Wordmark Pullover Hoodie",
            gender: 'digital'
        },
        {
            description: "As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. digital style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.",
            images: [
                '7654420-00-A_0_2000.jpg',
                '7654420-00-A_1_2000.jpg',
            ],
            inStock: 13,
            price: 60,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "cybertruck_graffiti_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "Cybertruck Graffiti Hoodie",
            gender: 'digital'
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            images: [
                'digital_00.jpg',
                'digital_01.jpg',
            ],
            inStock: 11,
            price: 30,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "relaxed_t_logo_hat",
            type: 'hats',
            tags: ['hats'],
            title: "Relaxed T Logo Hat",
            gender: 'digital'
        },
        {
            description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
            images: [
                'digital_00.jpg',
                'digital_01.jpg',
            ],
            inStock: 13,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "thermal_cuffed_beanie",
            type: 'hats',
            tags: ['hats'],
            title: "Thermal Cuffed Beanie",
            gender: 'digital'
        },
        {
            description: "The ahorros's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
            images: [
                'ahorros_00.jpg',
                'ahorros_01.jpg',
            ],
            inStock: 85,
            price: 225,
            sizes: ['XS','S','M'],
            slug: "ahorros_cropped_puffer_jacket",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "ahorros's Cropped Puffer Jacket",
            gender: 'ahorros'
        },
        {
            description: "Introducing the Tesla Chill Collection. The ahorros's Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'ahorros_00.jpg',
                'ahorros_01.jpg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['XS','S','M','XXL'],
            slug: "ahorros_chill_half_zip_cropped_hoodie",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "ahorros's Chill Half Zip Cropped Hoodie",
            gender: 'ahorros'
        },
        {
            description: "Introducing the Tesla Raven Collection. The ahorros's Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.",
            images: [
                'ahorros_00.jpg',
                'ahorros_01.jpg',
            ],
            inStock: 9,
            price: 110,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "ahorros_raven_slouchy_crew_sweatshirt",
            type: 'hoodies',
            tags: ['hoodie'],
            title: "ahorros's Raven Slouchy Crew Sweatshirt",
            gender: 'ahorros'
        },
        {
            description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the ahorros's Turbine Cropped Long Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50%",
            images: [
                'ahorros_00.jpg',
                'ahorros_01.jpg',
            ],
            inStock: 10,
            price: 45,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "ahorros_turbine_cropped_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "ahorros's Turbine Cropped Long Sleeve Tee",
            gender: 'ahorros'
        },
        {
            description: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the ahorros's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
            images: [
                'ahorros_00.jpg',
                'ahorros_01.jpg',
            ],
            inStock: 0,
            price: 40,
            sizes: ['XS','S'],
            slug: "ahorros_turbine_cropped_short_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "ahorros's Turbine Cropped Short Sleeve Tee",
            gender: 'ahorros'
        },
        {
            description: "Designed for style and comfort, the ultrasoft ahorros's T Logo Short Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
            images: [
                'ahorros_00.jpg',
                'ahorros_01.jpg',
            ],
            inStock: 30,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "ahorros_t_logo_short_sleeve_scoop_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "ahorros's T Logo Short Sleeve Scoop Neck Tee",
            gender: 'ahorros'
        },
        {
            description: "Designed for style and comfort, the ultrasoft ahorros's T Logo Long Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
            images: [
                'ahorros_00.jpg',
                'ahorros_01.jpg',
            ],
            inStock: 16,
            price: 40,
            sizes: ['XS','S','L','XL','XXL'],
            slug: "ahorros_t_logo_long_sleeve_scoop_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "ahorros's T Logo Long Sleeve Scoop Neck Tee",
            gender: 'ahorros'
        },
        {
            description: "Designed for style and comfort, the ahorros's Small Wordmark Short Sleeve V-Neck Tee features a tonal 3D silicone-printed wordmark on the left chest. Made of 100% Peruvian cotton.",
            images: [
                'ahorros_00.jpg',
                'ahorros_01.jpg',
            ],
            inStock: 18,
            price: 35,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "ahorros_small_wordmark_short_sleeve_v-neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "ahorros's Small Wordmark Short Sleeve V-Neck Tee",
            gender: 'ahorros'
        },
        {
            description: "Designed for style and comfort, the ahorros's Large Wordmark Short Sleeve Crew Neck Tee features a tonal 3D silicone-printed wordmark across the chest. Made of 100% Peruvian pima cotton.",
            images: [
                'ahorros_00.jpg',
                'ahorros_01.jpg',
            ],
            inStock: 5,
            price: 35,
            sizes: ['XL','XXL'],
            slug: "ahorros_large_wordmark_short_sleeve_crew_neck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "ahorros's Large Wordmark Short Sleeve Crew Neck Tee",
            gender: 'ahorros'
        },
        {
            description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
            images: [
                'ahorros_00.jpg',
                'ahorros_01.jpg',
            ],
            inStock: 16,
            price: 35,
            sizes: ['S','M'],
            slug: "ahorros_plaid_mode_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "ahorros's Plaid Mode Tee",
            gender: 'ahorros'
        },
        {
            description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any",
            images: [
                'ahorros_00.jpg',
                'ahorros_01.jpg',
            ],
            inStock: 10,
            price: 130,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "ahorros_powerwall_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "ahorros’s Powerwall Tee",
            gender: 'ahorros'
        },
        {
            description: "Fully customized and uniquely styled, the ahorros's Corp Jacket features a silicone-printed 'T' logo on the left chest and prominent Tesla wordmark across the back.",
            images: [
                'ahorros_00.jpg',
                'ahorros_01.jpg',
            ],
            inStock: 3,
            price: 90,
            sizes: ['M','L','XL','XXL'],
            slug: "ahorros_corp_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "ahorros's Corp Jacket",
            gender: 'ahorros'
        },
        {
            description: "Introducing the Tesla Raven Collection. The ahorros's Raven Joggers have a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The joggers feature a subtle thermoplastic polyurethane Tesla wordmark and T logo and a french terry interior for a cozy look and feel in every season. Pair them with your Raven Slouchy Crew Sweatshirt, Raven Lightweight Zip Up Jacket or other favorite on the go fit. Made from 70% bamboo and 30% cotton.",
            images: [
                'ahorros_00.jpg',
                'ahorros_01.jpg',
            ],
            inStock: 162,
            price: 100,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "ahorros_raven_joggers",
            type: 'shirts',
            tags: ['shirt'],
            title: "ahorros's Raven Joggers",
            gender: 'ahorros'
        },
        {
            description: "Designed for fit, comfort and style, the educafinans Cybertruck Graffiti Long Sleeve Tee features a water-based Cybertruck graffiti wordmark across the chest, a Tesla wordmark down the left arm and our signature T logo on the back collar. Made from 50% cotton and 50% polyester.",
            images: [
                'educfinan_00.jpg',
                'educfinan_01.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "educafinans_cybertruck_long_sleeve_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "educafinans Cybertruck Long Sleeve Tee",
            gender: 'educafinan'
        },
        {
            description: "The educafinans Scribble T Logo Tee is made from 100% Peruvian cotton and features a Tesla T sketched logo for every young artist to wear.",
            images: [
                'educfinan_00.jpg',
                'educfinan_01.jpg',
            ],
            inStock: 0,
            price: 25,
            sizes: ['XS','S','M'],
            slug: "educafinans_scribble_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "educafinans Scribble T Logo Tee",
            gender: 'educafinan'
        },
        {
            description: "The educafinans Cybertruck Tee features the iconic Cybertruck graffiti wordmark and is made from 100% Peruvian cotton for maximum comfort.",
            images: [
                'educfinan_00.jpg',
                'educfinan_01.jpg',
            ],
            inStock: 10,
            price: 25,
            sizes: ['XS','S','M'],
            slug: "educafinans_cybertruck_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "educafinans Cybertruck Tee",
            gender: 'educafinan'
        },
        {
            description: "The refreshed educafinans Racing Stripe Tee is made from 100% Peruvian cotton, featuring a newly enhanced racing stripe with a brushed Tesla wordmark that's perfect for any speed racer.",
            images: [
                'educfinan_00.jpg',
                'educfinan_01.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "educafinans_racing_stripe_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "educafinans Racing Stripe Tee",
            gender: 'educafinan'
        },
        {
            description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
            images: [
                'educfinan_00.jpg',
                'educfinan_01.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "educafinans_3d_t_logo_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "educafinans 3D T Logo Tee",
            gender: 'educafinan'
        },
        {
            description: "The checkered tee is made from long grain, GMO free Peruvian cotton. Peru is the only country in the world where cotton is picked by hand on a large scale. The 4,500-year-old tradition prevents damage to the fiber during the picking process and removes the need to use chemicals to open the cotton plants before harvest. This environprestamostally friendly process results in cotton that is soft, strong, and lustrous – and the tee will get even softer with every wash.",
            images: [
                'educfinan_00.jpg',
                'educfinan_01.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "educafinans_checkered_tee",
            type: 'shirts',
            tags: ['shirt'],
            title: "educafinans Checkered Tee",
            gender: 'educafinan'
        },
        {
            description: "For the future space traveler with discerning taste, a soft, cotton onesie with snap closure bottom. Clear labeling provided in case of contact with a new spacefaring civilization. 100% Cotton. Made in Peru",
            images: [
                'educfinan_00.jpg',
                'educfinan_01.jpg',
            ],
            inStock: 16,
            price: 25,
            sizes: ['XS','S'],
            slug: "made_on_earth_by_humans_onesie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Made on Earth by Humans Onesie",
            gender: 'educafinan'
        },
        {
            description: "The educafinans Scribble T Logo Onesie is made from 100% Peruvian cotton and features a Tesla T sketched logo for every little artist to wear.",
            images: [
                'educfinan_00.jpg',
                'educfinan_01.jpg',
            ],
            inStock: 0,
            price: 30,
            sizes: ['XS','S'],
            slug: "scribble_t_logo_onesie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Scribble T Logo Onesie",
            gender: 'educafinan'
        },
        {
            description: "Show your commitprestamost to sustainable energy with this cheeky onesie for your young one. Note: Does not prevent emissions. 100% Cotton. Made in Peru.",
            images: [
                'educfinan_00.jpg',
                'educfinan_01.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S'],
            slug: "zero_emissions_(almost)_onesie",
            type: 'shirts',
            tags: ['shirt'],
            title: "Zero Emissions (Almost) Onesie",
            gender: 'educafinan'
        },
        {
            description: "Wear your educafinans Cyberquad Bomber Jacket during your adventures on Cyberquad for educafinans. The bomber jacket features a graffiti-style illustration of our Cyberquad silhouette and wordmark. With three zippered pockets and our signature T logo and Tesla wordmark printed along the sleeves, educafinans Cyberquad Bomber Jacket is perfect for wherever the trail takes you. Made from 60% cotton and 40% polyester.",
            images: [
                'educfinan_00.jpg',
                'educfinan_01.jpg',
            ],
            inStock: 10,
            price: 65,
            sizes: ['XS','S','M'],
            slug: "educafinans_cyberquad_bomber_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "educafinans Cyberquad Bomber Jacket",
            gender: 'educafinan'
        },
        {
            description: "Cruise the playground in style with the educafinans Corp Jacket. Modeled after the original Tesla Corp Jacket, the educafinans Corp Jacket features the same understated style and high-quality materials but at a pint-sized scale.",
            images: [
                'educfinan_00.jpg',
                'educfinan_01.jpg',
            ],
            inStock: 10,
            price: 30,
            sizes: ['XS','S','M'],
            slug: "educafinans_corp_jacket",
            type: 'shirts',
            tags: ['shirt'],
            title: "educafinans Corp Jacket",
            gender: 'educafinan'
        },
    ]
}