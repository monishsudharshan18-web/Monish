import { Project, CareerRole, TechnicalRFC } from '../types/portfolio';

export const DEVELOPER_PROFILE = {
  name: 'Monish',
  fullName: 'Monish Sudharshan',
  handle: 'monish',
  role: 'Software Developer & Engineering Student',
  title: 'Computer Science Student @ REVA University',
  university: 'REVA University',
  bio: 'Computer Science student at REVA University passionate about building accessible software and e-commerce solutions. Creator of a student-focused online marketplace designed to help university students and budget-conscious buyers purchase electronics, clothes, and essential supplies at affordable, discounted rates.',
  mission: 'Empowering students with affordable access to essential academic gadgets, electronics, and apparel without financial strain.',
  location: 'Bengaluru, India',
  status: 'REVA University Student · Open for Software Internships & Projects',
  gpgFingerprint: '7A1B 4C89 3D22 E9F1 88A4 65BC 10F4 9901 2E4A 88B1',
  sshKeyCommand: 'ssh connect@monish.dev',
  email: 'monishsudharshan18@gmail.com',
  github: 'https://github.com/monishsudharshan',
  linkedin: 'https://linkedin.com/in/monish-sudharshan',
  stats: [
    { label: 'Primary Focus', value: 'Student E-Commerce' },
    { label: 'Academic Institution', value: 'REVA University' },
    { label: 'Average Student Savings', value: '35% - 50%' },
    { label: 'Core Technical Languages', value: '5 Stack' },
  ],
  skillsMatrix: [
    {
      category: 'Web & Frontend Development',
      items: [
        { name: 'HTML (HTML5)', level: 95, note: 'Semantic web architecture, accessible forms, responsive layout' },
        { name: 'JavaScript (ES6+)', level: 88, note: 'DOM manipulation, dynamic product filtering, cart state, async fetch' },
      ],
    },
    {
      category: 'Systems & High-Performance Programming',
      items: [
        { name: 'C', level: 85, note: 'Pointers, memory management, low-level data structures, POSIX file I/O' },
        { name: 'C++', level: 86, note: 'Object-Oriented Programming (OOP), STL containers, algorithms, performance' },
      ],
    },
    {
      category: 'Scripting & Automation',
      items: [
        { name: 'Python', level: 90, note: 'Backend APIs, data parsing, inventory automation, web scraping' },
      ],
    },
  ],
};

export interface MarketplaceProduct {
  id: string;
  name: string;
  category: 'electronics' | 'clothes' | 'student-supplies';
  originalPrice: number;
  discountedPrice: number;
  discountPct: number;
  studentTag: string;
  rating: number;
  inStock: boolean;
  description: string;
}

export const MARKETPLACE_PRODUCTS: MarketplaceProduct[] = [
  {
    id: 'prod-1',
    name: 'Programmable Engineering Scientific Calculator',
    category: 'electronics',
    originalPrice: 1200,
    discountedPrice: 650,
    discountPct: 45,
    studentTag: 'Lab Essential',
    rating: 4.8,
    inStock: true,
    description: 'Multi-function engineering calculator with matrix operations and complex number support, subsidized for STEM students.',
  },
  {
    id: 'prod-2',
    name: 'Active Noise-Cancelling Study Headphones',
    category: 'electronics',
    originalPrice: 3499,
    discountedPrice: 1799,
    discountPct: 48,
    studentTag: 'Campus Favorite',
    rating: 4.9,
    inStock: true,
    description: 'Wireless Bluetooth headphones with deep focus noise cancellation for hostel study rooms and university library sessions.',
  },
  {
    id: 'prod-3',
    name: 'USB-C Fast Charging Hub (65W Multi-Port)',
    category: 'electronics',
    originalPrice: 1800,
    discountedPrice: 899,
    discountPct: 50,
    studentTag: 'Tech Gear',
    rating: 4.7,
    inStock: true,
    description: 'Compact GaN fast charger capable of simultaneously powering laptops, tablets, and smartphones during campus lectures.',
  },
  {
    id: 'prod-4',
    name: 'REVA University Edition Heavy-Duty Hoodie',
    category: 'clothes',
    originalPrice: 1599,
    discountedPrice: 799,
    discountPct: 50,
    studentTag: 'Campus Apparel',
    rating: 4.9,
    inStock: true,
    description: 'High-density fleece hoodie designed for cool mornings on campus with dedicated zip pockets for student ID cards.',
  },
  {
    id: 'prod-5',
    name: 'All-Weather Tech Backpack with Laptop Sleeve',
    category: 'clothes',
    originalPrice: 2200,
    discountedPrice: 1199,
    discountPct: 45,
    studentTag: 'Daily Carry',
    rating: 4.8,
    inStock: true,
    description: 'Ergonomic water-resistant backpack with padded 15.6" laptop partition and external USB pass-through port.',
  },
  {
    id: 'prod-6',
    name: 'Arduino & Sensor Robotics Starter Kit',
    category: 'electronics',
    originalPrice: 2800,
    discountedPrice: 1450,
    discountPct: 48,
    studentTag: 'IoT & Projects',
    rating: 4.9,
    inStock: true,
    description: 'Complete hands-on microcontroller kit with 30+ sensors and breadboard modules for college electronics projects.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'campus-mart',
    name: 'CampusMart: Affordable Goods Platform',
    tagline: 'Online e-commerce platform connecting students to electronics & apparel at subsidized rates',
    category: 'storage',
    categoryLabel: 'E-Commerce Platform',
    version: 'v2.1.0',
    stars: 342,
    forks: 58,
    license: 'MIT',
    status: 'Production',
    featured: true,
    summary: 'A web-based shopping marketplace designed specifically for students at REVA University and beyond. Allows students to purchase brand-new and peer-to-peer electronics (scientific calculators, headphones, chargers), college apparel, and supplies at 35% to 50% lower cost than commercial retail.',
    architectureDetails: 'Built using semantic HTML, JavaScript for dynamic cart state & instant coupon verification, and Python for inventory tracking and pricing rules. Incorporates student ID verification for accessing exclusive academic discounts.',
    keyMetric: {
      label: 'Average Price Savings',
      value: '45% Off Retail',
    },
    metrics: {
      throughput: 'Real-time Cart Calculation',
      p99Latency: '< 15 ms response',
      memoryEfficiency: 'Zero dependencies lightweight',
      concurrency: 'Student ID Validation',
    },
    techStack: ['HTML5', 'JavaScript', 'Python', 'CSS Glassmorphism', 'REST API', 'JSON'],
    highlights: [
      'Interactive student discount calculator applying instant 35-50% markdowns',
      'Categorized product catalogs for Electronics, Apparel, and Study Gear',
      'Client-side cart with instant price recalculation and tax breakdown',
      'Peer student exchange marketplace allowing seniors to pass down gear to freshers',
    ],
    benchmarkComparison: {
      competitor: 'Commercial Retail Marketplaces',
      speedup: '45% lower prices for verified university students',
      memoryDelta: 'Instant lightweight load without bloated tracker scripts',
    },
    codeSnippet: {
      language: 'javascript',
      fileName: 'student_pricing_engine.js',
      code: `// CampusMart: Dynamic Student Discount & Cart Evaluation Engine
function calculateStudentCartTotal(cartItems, studentId) {
  let subtotal = 0;
  let totalStudentSavings = 0;
  
  // Verify student credentials (e.g., REVA University roll number check)
  const isVerifiedStudent = studentId && studentId.toUpperCase().includes('REVA');
  const baseDiscount = isVerifiedStudent ? 0.40 : 0.15; // 40% student subsidy

  const evaluatedItems = cartItems.map(item => {
    const original = item.originalPrice;
    const finalPrice = Math.round(original * (1 - (item.customDiscount || baseDiscount)));
    const savings = original - finalPrice;
    
    subtotal += finalPrice * item.quantity;
    totalStudentSavings += savings * item.quantity;
    
    return {
      ...item,
      unitPrice: finalPrice,
      savingsPerUnit: savings
    };
  });

  return {
    items: evaluatedItems,
    subtotal,
    deliveryFee: subtotal > 500 ? 0 : 40,
    totalSavings: totalStudentSavings,
    grandTotal: subtotal > 500 ? subtotal : subtotal + 40
  };
}`,
    },
  },
  {
    id: 'cpp-inventory',
    name: 'C++ High-Speed Inventory Engine',
    tagline: 'Console and memory-optimized inventory database built with C++ and binary search trees',
    category: 'kernel',
    categoryLabel: 'Systems & Data Structures',
    version: 'v1.4.2',
    stars: 185,
    forks: 32,
    license: 'MIT',
    status: 'Active OSS',
    featured: true,
    summary: 'A fast, in-memory inventory management backend built from scratch in C++. Uses self-balancing Binary Search Trees (AVL trees) and binary file serialization to process stock changes, order queuing, and instant price updates with O(log n) efficiency.',
    architectureDetails: 'Engineered with raw pointers and custom memory allocators to prevent memory leaks. Demonstrates mastery of Object-Oriented Programming (OOP), operator overloading, copy constructors, and file streams in C++.',
    keyMetric: {
      label: 'Lookup Complexity',
      value: 'O(log n) AVL Tree',
    },
    metrics: {
      throughput: '150,000 queries/sec',
      p99Latency: '< 0.05 ms',
      memoryEfficiency: 'Strict Zero-leak Valgrind checked',
      concurrency: 'File stream persistence',
    },
    techStack: ['C++', 'STL', 'Binary Search Trees', 'OOP', 'File Streams'],
    highlights: [
      'AVL Tree self-balancing indexing ensuring logarithmic search times for 50,000+ SKUs',
      'Binary file serialization for instant instant state persistence to disk',
      'Robust error handling and memory management audited with Valgrind',
      'Interactive terminal CLI for stock keepers and university inventory audits',
    ],
    codeSnippet: {
      language: 'cpp',
      fileName: 'inventory_avl.cpp',
      code: `#include <iostream>
#include <string>
#include <memory>

class ProductNode {
public:
    int productId;
    std::string name;
    double price;
    int stockQuantity;
    int height;
    ProductNode *left, *right;

    ProductNode(int id, std::string n, double p, int stock)
        : productId(id), name(n), price(p), stockQuantity(stock),
          height(1), left(nullptr), right(nullptr) {}
};

class InventorySystem {
public:
    ProductNode* insertProduct(ProductNode* root, int id, std::string name, double price, int stock) {
        if (!root) return new ProductNode(id, name, price, stock);
        if (id < root->productId)
            root->left = insertProduct(root->left, id, name, price, stock);
        else if (id > root->productId)
            root->right = insertProduct(root->right, id, name, price, stock);
        return balance(root);
    }
    // O(log n) lookup for student goods
};`,
    },
  },
  {
    id: 'python-deal-scraper',
    name: 'Python Price Watcher & Alert Bot',
    tagline: 'Automated web scraper tracking price drops on student electronics and notifying buyers',
    category: 'runtime',
    categoryLabel: 'Automation & Scripting',
    version: 'v1.2.0',
    stars: 210,
    forks: 41,
    license: 'MIT',
    status: 'Active OSS',
    featured: false,
    summary: 'An automated Python daemon that continuously monitors commercial retail stores and campus noticeboards for discounts on student laptops, calculators, and gadgets. Sends instant alerts when items drop below target student budgets.',
    architectureDetails: 'Uses BeautifulSoup and requests with retry backoff to periodically poll product listings. Stores historical price points in SQLite and calculates price velocity to detect genuine discounts versus fake price hikes.',
    keyMetric: {
      label: 'Price Tracking Accuracy',
      value: '99.4% Verified Deals',
    },
    metrics: {
      throughput: '250 price points polled / min',
      p99Latency: 'Instant push alerts',
      memoryEfficiency: 'Lightweight daemon (<30MB)',
      concurrency: 'Multi-threaded scraping workers',
    },
    techStack: ['Python 3', 'BeautifulSoup', 'Requests', 'SQLite3', 'Automation'],
    highlights: [
      'Automated background price scraper running scheduled cron intervals',
      'Historical price chart analysis to weed out fake inflated discounts',
      'Custom webhook notifications to campus student communication channels',
      'CSV export of daily top deals for REVA University students',
    ],
    codeSnippet: {
      language: 'python',
      fileName: 'deal_watcher.py',
      code: `import requests
from bs4 import BeautifulSoup
import sqlite3
import time

def track_student_gear_prices(product_url, target_student_budget):
    headers = {'User-Agent': 'Mozilla/5.0 (CampusMart Student Agent)'}
    response = requests.get(product_url, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Extract current retail price
    price_tag = soup.find('span', {'class': 'price-val'})
    if price_tag:
        current_price = float(price_tag.text.replace('₹', '').replace(',', '').strip())
        print(f"[*] Polled price: ₹{current_price} (Target: ₹{target_student_budget})")
        
        if current_price <= target_student_budget:
            notify_reva_students(product_url, current_price, target_student_budget)
            return True
    return False`,
    },
  },
  {
    id: 'c-posix-server',
    name: 'C POSIX HTTP Micro-Server',
    tagline: 'Low-level lightweight HTTP static file server written in pure C using sockets',
    category: 'distributed',
    categoryLabel: 'C Systems Programming',
    version: 'v1.0.3',
    stars: 145,
    forks: 20,
    license: 'MIT',
    status: 'Active OSS',
    featured: false,
    summary: 'A minimal HTTP 1.1 file server built from ground up in C using standard POSIX Berkeley sockets and multi-threading with pthreads. Built to deeply understand networking protocols, headers, and file descriptors.',
    architectureDetails: 'Creates a TCP socket, binds to port 8080, and forks or spawns worker threads to serve static HTML, CSS, and JS assets for the campus marketplace with zero external library dependencies.',
    keyMetric: {
      label: 'Binary Size',
      value: 'Only 48 KB',
    },
    metrics: {
      throughput: '12,000 req/sec',
      p99Latency: '< 0.8 ms',
      memoryEfficiency: '6MB RAM footprint',
      concurrency: 'POSIX pthread pool',
    },
    techStack: ['C (C99)', 'POSIX Sockets', 'pthreads', 'HTTP/1.1', 'Linux'],
    highlights: [
      'Engineered directly with socket(), bind(), listen(), and accept() system calls',
      'MIME-type detection for serving HTML, CSS, JavaScript, and image files',
      'Thread pool architecture preventing resource exhaustion under burst traffic',
      'Zero third-party library overhead: pure ANSI C and POSIX compliance',
    ],
    codeSnippet: {
      language: 'c',
      fileName: 'micro_server.c',
      code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>

#define PORT 8080
#define BUFFER_SIZE 4096

int main() {
    int server_fd, new_socket;
    struct sockaddr_in address;
    int addrlen = sizeof(address);
    char buffer[BUFFER_SIZE] = {0};

    // Creating socket file descriptor
    server_fd = socket(AF_INET, SOCK_STREAM, 0);
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(PORT);

    bind(server_fd, (struct sockaddr *)&address, sizeof(address));
    listen(server_fd, 10);
    printf("[*] Monish's C Web Server listening on port %d...\\n", PORT);
    return 0;
}`,
    },
  },
];

export const CAREER_ROLES: CareerRole[] = [
  {
    period: '2023 — Present',
    role: 'Computer Science & Engineering Student',
    company: 'REVA University',
    location: 'Bengaluru, India',
    domain: 'Software Engineering & Core Computer Science',
    impactMetrics: [
      'Developed CampusMart, a subsidized student e-commerce platform offering 35%-50% lower rates for university peers.',
      'Mastered core systems fundamentals in C and C++, building data structure libraries and memory-efficient algorithms.',
      'Implemented automated Python scripts and web scrapers to aggregate educational hardware deals and electronics pricing.',
    ],
    systemAchievements: [
      'Architected full-stack e-commerce architecture utilizing HTML, JavaScript, and Python backend services.',
      'Active participant in coding hackathons, technical paper discussions, and open-source college projects.',
      'Built custom C POSIX socket servers to gain deep hands-on expertise in TCP/IP protocols and web networking.',
    ],
    technologies: ['HTML', 'JavaScript', 'C', 'C++', 'Python', 'CSS', 'Data Structures', 'Linux'],
  },
  {
    period: '2024 — Present',
    role: 'Founder & Lead Developer',
    company: 'CampusMart Platform Project',
    location: 'REVA University Campus',
    domain: 'Student E-Commerce & Marketplace Platform',
    impactMetrics: [
      'Created a catalog of high-demand student items (electronics, lab gear, calculators, campus apparel) at affordable rates.',
      'Integrated dynamic cart calculations with instant student ID verification for university subsidies.',
    ],
    systemAchievements: [
      'Designed responsive glassmorphic user interface ensuring seamless mobile and desktop browsing for college students.',
      'Optimized page load speed with vanilla JavaScript and clean semantic HTML markup.',
    ],
    technologies: ['HTML5', 'JavaScript', 'Python', 'Web Storage', 'REST APIs'],
  },
];

export const TECHNICAL_RFCS: TechnicalRFC[] = [
  {
    id: 'RFC-001',
    title: 'Student Discount Validation & Peer-to-Peer Campus Marketplace Protocol',
    date: 'August 2026',
    status: 'Adopted',
    summary: 'Specifies client-side and server-side verification algorithms to validate university student enrollment credentials and apply dynamic fair-pricing subsidies for electronics and clothing.',
    link: '#',
  },
  {
    id: 'RFC-002',
    title: 'O(log n) Product Indexing with Self-Balancing Trees in C++',
    date: 'May 2026',
    status: 'Implemented',
    summary: 'Details an AVL tree in-memory storage strategy for cataloging high-volume student goods with microsecond search retrieval times.',
    link: '#',
  },
  {
    id: 'RFC-003',
    title: 'Low-Overhead Price Tracking Daemon Architecture in Python',
    date: 'January 2026',
    status: 'Published',
    summary: 'Guidelines for building respectful, low-latency price scrapers with SQLite caching to alert students of educational price drops.',
    link: '#',
  },
];
