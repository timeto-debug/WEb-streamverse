export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  soldCount: number;
  image: string;
  category: string;
  discountPercentage: number;
  isFlashSale?: boolean;
  stock: number;
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
  itemCount: number;
}

export interface Order {
  id: string;
  customerName: string;
  date: string;
  total: number;
  status: 'Completed' | 'Pending' | 'Shipping' | 'Cancelled';
  itemsCount: number;
}

export interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  bgGradient: string;
}
