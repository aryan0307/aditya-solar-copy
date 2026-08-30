// Import all product images
import img01 from '../assets/products/image_001_cropped.png';
import img02 from '../assets/products/image_002_cropped.png';
import img03 from '../assets/products/image_003_cropped.png';
import img04 from '../assets/products/image_004_cropped.png';
import img05 from '../assets/products/image_005_cropped.png';
import img06 from '../assets/products/image_006_cropped.png';
import img07 from '../assets/products/image_007_cropped.png';
import img08 from '../assets/products/image_008_cropped.png';
import img09 from '../assets/products/image_009_cropped.png';
import img10 from '../assets/products/image_010_cropped.png';
import img11 from '../assets/products/image_011_cropped.png';
import img12 from '../assets/products/image_012_cropped.png';
import img13 from '../assets/products/image_013_cropped.png';
import img14 from '../assets/products/image_014_cropped.png';
import img15 from '../assets/products/image_015_cropped.png';
import img16 from '../assets/products/image_016_cropped.png';
import img17 from '../assets/products/image_017_cropped.png';
import img18 from '../assets/products/image_018_cropped.png';
import img19 from '../assets/products/image_019_cropped.png';
import img20 from '../assets/products/image_020_cropped.png';
import img21 from '../assets/products/image_021_cropped.png';

const productImages = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21
];

export const categories = [
  {
    id: 'plywood',
    name: 'Premium Plywood',
    description: 'High-grade plywood for lasting durability and superior finish'
  },
  {
    id: 'laminates',
    name: 'Decorative Laminates',
    description: 'Stunning designs and textures for modern interiors'
  },
  {
    id: 'veneers',
    name: 'Decorative Veneers',
    description: 'Natural wood veneers for elegant surfaces'
  },
  {
    id: 'doors',
    name: 'Flush Doors',
    description: 'Premium doors with exceptional strength and style'
  },
  {
    id: 'panels',
    name: 'Wall Panels',
    description: 'Transform walls with decorative panel solutions'
  },
  {
    id: 'furniture',
    name: 'Furniture Boards',
    description: 'Quality boards for crafting beautiful furniture'
  },
  {
    id: 'mdf',
    name: 'MDF',
    description: 'Medium Density Fiberboard for smooth finishes'
  },
  {
    id: 'hdmr',
    name: 'HDMR',
    description: 'High Density Moisture Resistant boards'
  },
  {
    id: 'particle',
    name: 'Particle Boards',
    description: 'Cost-effective solutions for various applications'
  },
  {
    id: 'wpc',
    name: 'WPC Boards',
    description: 'Wood Polymer Composite for outdoor applications'
  },
  {
    id: 'timber',
    name: 'Timber',
    description: 'Premium quality timber for construction and furniture'
  },
  {
    id: 'kitchens',
    name: 'Modular Kitchens',
    description: 'Complete kitchen solutions with modern designs'
  },
  {
    id: 'windows',
    name: 'Aluminium Windows',
    description: 'Durable and stylish aluminium window systems'
  }
];

export const products = productImages.map((image, index) => ({
  id: index + 1,
  name: `Premium Material ${index + 1}`,
  category: categories[index % categories.length].id,
  image,
  description: 'High-quality architectural material for premium interiors'
}));

export const getProductsByCategory = (categoryId) => {
  return products.filter(product => product.category === categoryId);
};

export const getCategoryById = (categoryId) => {
  return categories.find(category => category.id === categoryId);
};
