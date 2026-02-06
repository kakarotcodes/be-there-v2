
import { Product, Category, Service } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Advanced Patient Monitor M10',
    description: 'Real-time vital signs monitoring with high-resolution touchscreen.',
    price: 2450.00,
    category: Category.EQUIPMENT,
    imageUrl: 'https://picsum.photos/seed/med1/400/400',
    tags: ['monitoring', 'hospital', 'digital']
  },
  {
    id: '2',
    name: 'Ergonomic Wheelchair Pro',
    description: 'Lightweight aluminum frame with customizable comfort seating.',
    price: 599.99,
    category: Category.EQUIPMENT,
    imageUrl: 'https://picsum.photos/seed/wheel1/400/400',
    tags: ['mobility', 'adjustable']
  },
  {
    id: '3',
    name: 'Hospital Bed Elite',
    description: 'Fully electric hospital bed with adjustable height and head-rest.',
    price: 3200.00,
    category: Category.EQUIPMENT,
    imageUrl: 'https://picsum.photos/seed/bed1/400/400',
    tags: ['furniture', 'inpatient']
  },
  {
    id: '4',
    name: 'Examination Table Upholstery Kit',
    description: 'Premium antimicrobial vinyl replacement kit for med-tables.',
    price: 180.00,
    category: Category.FURNITURE,
    imageUrl: 'https://picsum.photos/seed/vinyl1/400/400',
    tags: ['repair', 'maintenance']
  },
  {
    id: '5',
    name: 'Stethoscope Master II',
    description: 'Cardiology grade stethoscope for precise diagnostics.',
    price: 189.00,
    category: Category.EQUIPMENT,
    imageUrl: 'https://picsum.photos/seed/steth1/400/400',
    tags: ['diagnostics', 'handheld']
  },
  {
    id: '6',
    name: 'Surgical LED Lamp',
    description: 'Shadowless surgical light with adjustable intensity.',
    price: 1250.00,
    category: Category.EQUIPMENT,
    imageUrl: 'https://picsum.photos/seed/lamp1/400/400',
    tags: ['surgery', 'lighting']
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Dental Chair Re-upholstery',
    description: 'Restore worn dental chairs with medical-grade, puncture-resistant materials.',
    priceEstimate: 'From $450',
    imageUrl: '/assets/dental_chair_new.png'
  },
  {
    id: 's2',
    title: 'Medical Recliner Repair',
    description: 'Complete overhaul of clinic waiting room sofas and seating.',
    priceEstimate: 'Quote Based',
    imageUrl: '/assets/recliner.png'
  },
  {
    id: 's3',
    title: 'Hospital Bed Repair',
    description: 'Specialized padding and vinyl work for heavy-use PT equipment.',
    priceEstimate: 'From $200',
    imageUrl: '/assets/medical_bed.png'
  }
];
