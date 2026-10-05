import type { Product, Category, Order } from '../types';

export const mockCategories: Category[] = [
  { id: '1', name: 'Thời Trang Nam', iconName: 'FaShirt', itemCount: 1240 },
  { id: '2', name: 'Điện Thoại & Phụ Kiện', iconName: 'FaMobileAlt', itemCount: 3820 },
  { id: '3', name: 'Máy Tính & Laptop', iconName: 'FaLaptop', itemCount: 950 },
  { id: '4', name: 'Thể Thao & Du Lịch', iconName: 'FaRunning', itemCount: 1530 },
  { id: '5', name: 'Giày Dép Nam', iconName: 'FaShoePrints', itemCount: 870 },
  { id: '6', name: 'Thiết Bị Điện Tử', iconName: 'FaTv', itemCount: 2100 },
  { id: '7', name: 'Đồng Hồ', iconName: 'FaClock', itemCount: 640 },
  { id: '8', name: 'Đồ Gia Dụng', iconName: 'FaHome', itemCount: 1890 },
];

export const mockProducts: Product[] = [
  {
    id: 'p1',
    name: 'Tai nghe Bluetooth Không Dây True Wireless Chống Ồn ANC Cao Cấp',
    price: 499000,
    originalPrice: 890000,
    rating: 4.9,
    soldCount: 14200,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    category: 'Điện Thoại & Phụ Kiện',
    discountPercentage: 44,
    isFlashSale: true,
    stock: 45
  },
  {
    id: 'p2',
    name: 'Đồng Hồ Thông Minh Smartwatch Màn Hình AMOLED Kháng Nước IP68',
    price: 789000,
    originalPrice: 1250000,
    rating: 4.8,
    soldCount: 8900,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    category: 'Đồng Hồ',
    discountPercentage: 37,
    isFlashSale: true,
    stock: 12
  },
  {
    id: 'p3',
    name: 'Áo Sơ Mi Nam Tay Dài Form Broad Fit Chống Nhăn Phong Cách Hàn Quốc',
    price: 249000,
    originalPrice: 450000,
    rating: 4.7,
    soldCount: 23100,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80',
    category: 'Thời Trang Nam',
    discountPercentage: 45,
    isFlashSale: true,
    stock: 88
  },
  {
    id: 'p4',
    name: 'Giày Thể Thao Nam Chạy Bộ Siêu Nhẹ Đệm Air Êm Chân',
    price: 520000,
    originalPrice: 950000,
    rating: 4.9,
    soldCount: 6400,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
    category: 'Giày Dép Nam',
    discountPercentage: 45,
    isFlashSale: false,
    stock: 20
  },
  {
    id: 'p5',
    name: 'Laptop Ultraslim Mỏng Nhẹ Core i7 16GB RAM 512GB SSD Màn 100% sRGB',
    price: 15490000,
    originalPrice: 18900000,
    rating: 5.0,
    soldCount: 350,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80',
    category: 'Máy Tính & Laptop',
    discountPercentage: 18,
    isFlashSale: false,
    stock: 8
  },
  {
    id: 'p6',
    name: 'Bàn Phím Cơ Cơ Học Không Dây RGB Hot-swap Hỗ Trợ 3 Mode Kết Nối',
    price: 890000,
    originalPrice: 1390000,
    rating: 4.8,
    soldCount: 5200,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80',
    category: 'Máy Tính & Laptop',
    discountPercentage: 36,
    isFlashSale: true,
    stock: 31
  },
  {
    id: 'p7',
    name: 'Bình Giữ Nhiệt Inox 304 Dung Tích 800ml Giữ Nóng Lạnh 24 Giờ',
    price: 185000,
    originalPrice: 320000,
    rating: 4.9,
    soldCount: 19800,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80',
    category: 'Đồ Gia Dụng',
    discountPercentage: 42,
    isFlashSale: false,
    stock: 120
  },
  {
    id: 'p8',
    name: 'Balo Du Lịch Chống Nước Tích Hợp Cổng Sắc USB Tiện Lợi',
    price: 319000,
    originalPrice: 600000,
    rating: 4.6,
    soldCount: 4100,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    category: 'Thể Thao & Du Lịch',
    discountPercentage: 47,
    isFlashSale: true,
    stock: 19
  }
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-98421',
    customerName: 'Nguyễn Văn An',
    date: '2026-10-02 14:32',
    total: 1288000,
    status: 'Completed',
    itemsCount: 3
  },
  {
    id: 'ORD-98420',
    customerName: 'Trần Thị Mai',
    date: '2026-10-02 13:15',
    total: 499000,
    status: 'Shipping',
    itemsCount: 1
  },
  {
    id: 'ORD-98419',
    customerName: 'Lê Hoàng Minh',
    date: '2026-10-02 11:45',
    total: 2450000,
    status: 'Pending',
    itemsCount: 4
  },
  {
    id: 'ORD-98418',
    customerName: 'Phạm Thu Thảo',
    date: '2026-10-01 18:20',
    total: 789000,
    status: 'Completed',
    itemsCount: 2
  },
  {
    id: 'ORD-98417',
    customerName: 'Vũ Đức Thành',
    date: '2026-10-01 16:05',
    total: 15490000,
    status: 'Shipping',
    itemsCount: 1
  }
];

export const mockBanners = [
  {
    id: 1,
    title: 'SIÊU SALE 10.10 - SĂN VOUCHER 1 TRIỆU',
    subtitle: 'Freeship đơn từ 0Đ • Giảm đến 50% toàn bộ gian hàng',
    bg: 'from-amber-500 via-orange-600 to-red-600',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1000&q=80'
  },
  {
    id: 2,
    title: 'TECH ZONE - ĐIỆN TỬ GIÁ SỐC',
    subtitle: 'Cơ hội sở hữu Laptop & Smartwatch cao cấp giá ưu đãi',
    bg: 'from-blue-600 via-indigo-600 to-purple-700',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1000&q=80'
  }
];
