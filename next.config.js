/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  // ...other configurations

  images: {
    domains: ['www.modularkitcheninnoida.com', 'images.unsplash.com'],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // async redirects() {
  //   return [
  //     // ...other redirects
  //     {
  //       source: '/calculator/image-maps/:space',
  //       destination: '/calculator/image-maps/[space]',
  //       permanent: true,
  //     },
  //   ];
  // },
  async rewrites() {
    return [
      {
        source: '/modular-interior-design-ideas',
        destination: '/design-ideas',
      },
      {
        source: '/collaborate-with-architects-interior-designers',
        destination: '/join-us',
      },
      {
        source: '/book-a-interior-design-visit',
        destination: '/contact',
      },
      {
        source: '/refer-and-get-rewards-interior-designers',
        destination: '/',
      },
      {
        source: '/collaborate-with-architects-interior-designers',
        destination: '/join-us',
      },
      //modular design ideas
      {
        source: '/modular-interior-design-ideas',
        destination: '/',
      },
      {
        source: '/modular-kitchen-designs',
        destination: '/design-ideas/kitchen-designs',
      },
      {
        source: '/wardrobe-designs',
        destination: '/design-ideas/wardrobe',
      },
      {
        source: '/vanity-designs',
        destination: '/design-ideas/vanities',
      },
      {
        source: '/dressers-designs',
        destination: '/design-ideas/dressers',
      },
      {
        source: '/tv-unit-designs',
        destination: '/design-ideas/tv-unit-designs',
      },
      {
        source: '/crockery-unit-designs',
        destination: '/design-ideas/crockery-units',
      },
      {
        source: '/glass-partition-designs',
        destination: '/design-ideas/glass-partiton',
      },
      {
        source: '/shoerack-designs',
        destination: '/',
      },
      {
        source: '/mandir-designs',
        destination: '/modular-interiors/mandir',
      },
      {
        source: '/chest-of-drawer-designs',
        destination: '/modular-interiors/chest-of-drawers',
      },
      {
        source: '/bar-unit-designs',
        destination: '/modular-interiors/bar-units',
      },
      {
        source: '/side-table-designs',
        destination: '/modular-interiors/side-tables',
      },
      {
        source: '/foyer-area-designs',
        destination: '/modular-interiors/foyer-cabinets',
      },
      {
        source: '/foldable-beds-designs',
        destination: '/modular-interiors/foldable-beds',
      },
      { source: '/home-office-designs', destination: '/' },
      { source: '/interior-design-ideas', destination: '/interior' },
      {
        source: '/1bhk-apartment-interior-designs',
        destination: '/interior/1bhk-residence-interior-designs',
      },
      {
        source: '/2bhk-apartment-interior-designs',
        destination: '/interior/2bhk-residence-interior-designs',
      },
      {
        source: '/3bhk-apartment-interior-designs',
        destination: '/interior/3bhk-residence-interior-designs',
      },
      {
        source: '/4bhk-apartment-interior-designs',
        destination: '/interior/4bhk-residence-interior-designs',
      },
      { source: '/villa-interior-designs', destination: '/interior/villa' },
      {
        source: '/farmhouse-interior-designs',
        destination: '/interior/farmhouse-interior-designs',
      },
      {
        source: '/penthouse-interior-designs',
        destination: '/interior/penthouse-interior-designs',
      },
      {
        source: '/studio-apartment-interior-designs',
        destination: '/interior/studio-apartment-interior-designs',
      },
      {
        source: '/bungalow-interior-designs',
        destination: '/interior/bunglow-interior-designs',
      },
      {
        source: '/duplex-interior-designs',
        destination: '/interior/duplex-residence-interior-designs',
      },
      {
        source: '/cottage-interior-designs',
        destination: '/interior/cottage-interior-designs',
      },
      { source: '/complete-end-to-end-interiors', destination: '/' },
      {
        source: '/wooden-polishing',
        destination: '/interior-design-ideas/wooden-polishing',
      },
      {
        source: '/wooden-flooring-designs',
        destination: '/interior-design-ideas/wooden-flooring',
      },
      {
        source: '/vertical-gardens-designs',
        destination: '/interior-design-ideas/vertical-garden',
      },
      {
        source: '/upvc-windows-designs',
        destination: '/interior-design-ideas/upvc-window',
      },
      {
        source: '/tiling-designs',
        destination: '/interior-design-ideas/tiling-design',
      },
      {
        source: '/sofa-designs',
        destination: '/interior-design-ideas/sofa-designs',
      },
      {
        source: '/kitchen-lightening-designs',
        destination: '/interior-design-ideas/kitchen-lightening',
      },
      {
        source: '/plumbing-works-interiors',
        destination: '/interior-design-ideas/plumbings',
      },
      {
        source: '/glass-partition-designs',
        destination: '/interior-design-ideas/glass-partition',
      },
      {
        source: '/ceiling-designs',
        destination: '/interior-design-ideas/ceilings',
      },
      {
        source: '/wall-panelling',
        destination: '/interior-design-ideas/wall-panelling',
      },
      {
        source: '/exterior-cladding-designs',
        destination: '/interior-design-ideas/exterior-cladding',
      },
      {
        source: '/wood-door-designs',
        destination: '/interior-design-ideas/doors',
      },
      {
        source: '/electric-works-interiors',
        destination: '/interior-design-ideas/electric-works',
      },
      { source: '/beds-designs', destination: '/interior-design-ideas/beds' },
      {
        source: '/paint-works-interiors',
        destination: '/interior-design-ideas/paints',
      },
      {
        source: '/complete-end-to-end-interior-works',
        destination: '/interior-design-ideas/end-to-end-interiors',
      },
      {
        source: '/commercial-interior-works-interiors',
        destination: '/interior-design-ideas/commercial-interiors',
      },
      {
        source: '/architectural-consultancy',
        destination: '/architectural-designs/architectural-consultancy',
      },
      {
        source: '/top-architects-in-india',
        destination: '/architectural-designs/end-to-end-architectural-services',
      },
      {
        source: '/architectural-brand-in-india',
        destination:
          '/architectural-designs/architectural-designing-and-planning',
      },
      {
        source: '/commercial-architectural-delhi-india',
        destination: '/architectural-designs/commercial-architectural-services',
      },
      {
        source: '/home-renovation-services',
        destination: '/home-renovation-service',
      },
      {
        source: '/structural-renovation-services',
        destination: '/home-renovation-service/structural-renovation',
      },
      {
        source: '/interior-renovation-services',
        destination: '/home-renovation-service/interior-renovation',
      },
      {
        source: '/bedroom-renovation-services',
        destination: '/home-renovation-service/bedroom-renovation',
      },
      {
        source: '/lounge-renovation-services',
        destination: '/home-renovation-service/lounge-renovation',
      },
      {
        source: '/bathroom-renovation-services',
        destination: '/home-renovation-service/bathroom-renovation',
      },
      {
        source: '/terrace-renovation-services',
        destination: '/home-renovation-service/terrace-renovation',
      },
      {
        source: '/living-room-renovation-services',
        destination: '/home-renovation-service/living-room-renovation',
      },
      {
        source: '/modular-kitchen-renovation-services',
        destination: '/home-renovation-service/modular-kitchen-renovation',
      },
      {
        source: '/wardrobe-renovation-services',
        destination: '/home-renovation-service/wardrobe-renovation',
      },
      {
        source: '/mandir-renovation-services',
        destination: '/home-renovation-service/mandir-renovation',
      },
      {
        source: '/gym-spa-renovation-services',
        destination: '/home-renovation-service/gym-spas-renovation',
      },
      {
        source: '/hotel-renovation-services',
        destination: '/home-renovation-service/hotel-renovation',
      },
      {
        source: '/farmhouse-renovation-services',
        destination: '/home-renovation-service/farmhouse-renovation',
      },
      {
        source: '/banquet-renovation-services',
        destination: '/home-renovation-service/banquet-renovation',
      },
      {
        source: '/villa-renovation-services',
        destination: '/home-renovation-service/villa-renovation',
      },
      {
        source: '/architect-advice-tips-ideas',
        destination: '/',
      },
      {
        source: '/architectural-consultancy',
        destination: '/',
      },
      {
        source: '/architectural-brand-in-india',
        destination: '/',
      },
      {
        source: '/top-architects-in-india',
        destination: '/',
      },
      {
        source: '/luxury-interiors-delhi-india',
        destination: '/',
      },
      {
        source: '/home-renovation-services',
        destination: '/',
      },
      {
        source: '/top-modular-kitchen-brand',
        destination: '/',
      },
      {
        source: '/modular-kitchen-types',
        destination: '/',
      },
      {
        source: '/modular-kitchen-designs',
        destination: '/',
      },
      {
        source: '/luxury-modular-kitchen-india',
        destination: '/',
      },
      {
        source: '/wardrobe-designs',
        destination: '/wardrobes',
      },
      {
        source: '/types-of-wardrobe-designs',
        destination: '/wardrobes/types-of-wardrobes',
      },
      {
        source: '/luxury-wardrobe-designs-india',
        destination: '/wardrobes/luxury-wardrobes',
      },
      {
        source: '/lacquer-glass-wardrobe-designs',
        destination: '/wardrobes/lacquer-glass-Wardrobes-Designs',
      },
      {
        source: '/wardrobe-renovation-services',
        destination: '/wardrobes/wardrobe-renovation-services',
      },
      {
        source: '/living-room-designs',
        destination: '/',
      },
      {
        source: '/tv-unit-designs',
        destination: '/',
      },
      {
        source: '/crockery-unit-designs',
        destination: '/',
      },
      {
        source: '/home-office-designs',
        destination: '/',
      },
      {
        source: '/shoerack-designs',
        destination: '/',
      },
      {
        source: '/modular-interior-design-ideas',
        destination: '/',
      },
      {
        source: '/mandir-designs',
        destination: '/modular-interiors/mandir',
      },
      {
        source: '/chest-of-drawer-designs',
        destination: '/modular-interiors/chest-of-drawers',
      },
      {
        source: '/Bar-unit-designs',
        destination: '/modular-interiors/bar-units',
      },
      {
        source: '/side-table-designs',
        destination: '/modular-interiors/side-tables',
      },
      {
        source: '/home-renovation-services',
        destination: '/home-renovation-service',
      },
      {
        source: '/virtual-interior-designing-meeting',
        destination: '/schedule-videocall',
      },
      {
        source: '/about-best-interior-designers-architects',
        destination: '/',
      },
      {
        source: '/largest-interior-designing-brand',
        destination: '/',
      },
      {
        source: '/collaborate-with-architects-interior-designers',
        destination: '/',
      },
      {
        source: '/interior-designing-estimates-pricing',
        destination: '/GetQuote',
      },
      {
        source: '/customer-reviews-interior-designs',
        destination: '/reviews',
      },
      {
        source: '/interior-designing-plans-for-residences',
        destination: '/offers',
      },
      {
        source: '/why-choose-the-best-interior-designers',
        destination: '/',
      },
      {
        source: '/join-the-largest-interior-designing-brand',
        destination: '/join-us',
      },
      {
        source: '/book-with-top-interior-designers-architects',
        destination: '/book-visit',
      },
      {
        source: '/refer-and-get-rewards-interior-designers',
        destination: '/',
      },
      {
        source: '/interior-designing-estimates-pricing',
        destination: '/GetQuote',
      },
      {
        source: '/contact-top-interior-designers-architects',
        destination: '/architects-speak',
      },
      {
        source: '/foyer-area-designs',
        destination: '/modular-interiors/foyer-cabinets',
      },
      {
        source: '/foldable-area-designs',
        destination: '/modular-interiors/foldable-beds',
      },
      { source: '/home-renovation-services', destination: '/' },
      { source: '/dressers-designs', destination: '/' },
      { source: '/glass-partition-designs', destination: '/' },
      { source: '/modular-kitchen-price-estimator', destination: '/' },
      { source: '/dressers-designs', destination: '/' },

      // Add more custom rewrites as needed
    ]
  },
}

module.exports = nextConfig
