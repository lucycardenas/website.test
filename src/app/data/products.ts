export interface Product {
  id: number;
  name: string;
  category: 'wheels' | 'cars' | 'engines';
  price: string;
  image: string;
  description: string;
  specs?: string[];
}

export const products: Product[] = [
  // Wheels
  {
    id: 1,
    name: 'Alloy Pro Series',
    category: 'wheels',
    price: '$899',
    image: 'https://images.unsplash.com/photo-1769899107195-aae414826ced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBhbGxveSUyMHdoZWVsJTIwcmltfGVufDF8fHx8MTc3MzY3OTQ0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Lightweight alloy wheels designed for optimal performance and style.',
    specs: ['18-inch diameter', 'Forged aluminum', 'Weight: 19 lbs', 'Matte black finish']
  },
  {
    id: 2,
    name: 'Chrome Elite',
    category: 'wheels',
    price: '$1,299',
    image: 'https://images.unsplash.com/photo-1760204629480-2940a68855c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjB3aGVlbCUyMGNocm9tZXxlbnwxfHx8fDE3NzM2Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Premium chrome wheels with superior strength and stunning aesthetics.',
    specs: ['19-inch diameter', 'Chrome plated', 'Weight: 21 lbs', 'Multi-spoke design']
  },
  {
    id: 3,
    name: 'Luxury Carbon',
    category: 'wheels',
    price: '$2,499',
    image: 'https://images.unsplash.com/photo-1564128246944-88ea677875f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjB3aGVlbCUyMGRlc2lnbnxlbnwxfHx8fDE3NzM2Nzk0NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Carbon fiber reinforced wheels for ultimate luxury and performance.',
    specs: ['20-inch diameter', 'Carbon fiber composite', 'Weight: 17 lbs', 'Gunmetal finish']
  },
  {
    id: 4,
    name: 'Racing Series R1',
    category: 'wheels',
    price: '$1,799',
    image: 'https://images.unsplash.com/photo-1736775205983-2534f5e69212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjB3aGVlbCUyMHRpcmV8ZW58MXx8fHwxNzczNjc5NDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Track-tested racing wheels engineered for maximum grip and control.',
    specs: ['18-inch diameter', 'Magnesium alloy', 'Weight: 16 lbs', 'Glossy finish']
  },
  // Cars
  {
    id: 5,
    name: 'Sport GT-R',
    category: 'cars',
    price: '$89,999',
    image: 'https://images.unsplash.com/photo-1691884453859-de5c299de393?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzcG9ydHMlMjBjYXJ8ZW58MXx8fHwxNzczNjYxMTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'High-performance sports car with cutting-edge aerodynamics.',
    specs: ['3.8L Twin-Turbo V6', '565 HP', '0-60 mph: 2.9s', 'Top speed: 196 mph']
  },
  {
    id: 6,
    name: 'Executive S-Class',
    category: 'cars',
    price: '$125,000',
    image: 'https://images.unsplash.com/photo-1758216383800-7023ee8ed42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzZWRhbiUyMGF1dG9tb2JpbGV8ZW58MXx8fHwxNzczNjI5MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Luxury sedan offering unparalleled comfort and advanced technology.',
    specs: ['4.0L V8 BiTurbo', '429 HP', 'All-wheel drive', 'Premium leather interior']
  },
  {
    id: 7,
    name: 'Classic Muscle V8',
    category: 'cars',
    price: '$75,000',
    image: 'https://images.unsplash.com/photo-1503525984842-c7e1c0203c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbXVzY2xlJTIwY2FyfGVufDF8fHx8MTc3MzY3OTQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Restored classic muscle car with modern performance upgrades.',
    specs: ['7.0L V8', '450 HP', 'Manual transmission', 'Original body design']
  },
  {
    id: 8,
    name: 'Electric Performance',
    category: 'cars',
    price: '$95,000',
    image: 'https://images.unsplash.com/photo-1728469876516-17a32611eb24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNwb3J0cyUyMGNhcnxlbnwxfHx8fDE3NzM1ODI2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Zero-emission electric sports car with instant torque delivery.',
    specs: ['Dual Motor AWD', '670 HP', '0-60 mph: 2.5s', 'Range: 320 miles']
  },
  // Engines
  {
    id: 9,
    name: 'Turbo Inline-4',
    category: 'engines',
    price: '$8,500',
    image: 'https://images.unsplash.com/photo-1642351376726-a96985803ee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBtb3RvcnxlbnwxfHx8fDE3NzM2Nzk0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Turbocharged 4-cylinder engine with exceptional fuel efficiency.',
    specs: ['2.0L displacement', '280 HP', 'Direct injection', 'Intercooled turbo']
  },
  {
    id: 10,
    name: 'V8 Powerhouse',
    category: 'engines',
    price: '$15,999',
    image: 'https://images.unsplash.com/photo-1771618247338-772ecd6f6408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2OCUyMGVuZ2luZSUyMG1lY2hhbmljYWx8ZW58MXx8fHwxNzczNjc5NDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'High-performance V8 engine built for raw power and reliability.',
    specs: ['5.7L displacement', '485 HP', 'Naturally aspirated', 'Forged internals']
  },
  {
    id: 11,
    name: 'Twin-Turbo V6',
    category: 'engines',
    price: '$12,500',
    image: 'https://images.unsplash.com/photo-1768387666438-b3da75373846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJib2NoYXJnZWQlMjBlbmdpbmUlMjBiYXl8ZW58MXx8fHwxNzczNjY3MjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Advanced twin-turbo V6 delivering smooth power across the RPM range.',
    specs: ['3.5L displacement', '450 HP', 'Twin-turbo system', 'Variable valve timing']
  },
  {
    id: 12,
    name: 'Performance Crate Engine',
    category: 'engines',
    price: '$18,750',
    image: 'https://images.unsplash.com/photo-1770383998876-5ea42be88745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMGVuZ2luZSUyMGNvbXBvbmVudHN8ZW58MXx8fHwxNzczNjc5NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Complete performance crate engine ready for installation.',
    specs: ['6.2L displacement', '650 HP', 'Supercharged', 'Complete with accessories']
  }
];
