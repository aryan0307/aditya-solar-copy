# Aditya Solar Energy Platform

A premium, modern, responsive solar energy company platform built with React, FastAPI, and MongoDB. This platform serves as a complete business communication and lead generation system for an Indian renewable energy company.

## 🌟 Features

### Public Website
- **Premium Design**: Modern, clean UI inspired by leading renewable energy companies
- **Responsive**: Fully responsive across all devices
- **Product Catalog**: Browse solar panels, inverters, batteries, pumps, and more
- **Project Showcase**: View completed residential, commercial, and industrial installations
- **Solar Calculator**: Estimate savings, subsidies, and ROI
- **Government Subsidy Information**: PM Surya Ghar Muft Bijli Yojana details
- **Blog Section**: SEO-friendly blog with articles
- **Gallery**: Masonry layout with project images
- **FAQ**: Accordion-style with search functionality
- **Contact Forms**: Multiple enquiry forms (quote, site visit, general contact)
- **Career Portal**: Job application system

### Admin Dashboard
- **JWT Authentication**: Secure admin login
- **Dashboard Analytics**: Real-time statistics and metrics
- **Lead Management**: Track quotes, contacts, site visits, and careers
- **Content Management**: CRUD for products, projects, services, testimonials, gallery, blogs, FAQs
- **Status Tracking**: Track lead status through the sales funnel
- **Settings**: Configure company info, SEO metadata, and social links

## 🛠 Technology Stack

### Frontend
- **React 19** - UI Library
- **Vite** - Build Tool
- **React Router DOM** - Routing
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **SwiperJS** - Carousels/Sliders
- **Axios** - HTTP Client
- **React Hook Form** - Form Management
- **Lucide React** - Icons

### Backend
- **FastAPI** - Web Framework
- **Uvicorn** - ASGI Server
- **Motor** - MongoDB Async Driver
- **Pydantic** - Data Validation
- **JWT** - Authentication
- **Bcrypt** - Password Hashing

### Database
- **MongoDB** - NoSQL Database

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **Python** (v3.10 or higher)
- **MongoDB** (v5.0 or higher)
- **npm** or **yarn**

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd aditya-solar
```

### 2. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install
```

### 4. Environment Configuration

Create a `.env` file in the `backend` directory:

```env
MONGODB_URL=mongodb://localhost:27017
DATABASE_NAME=aditya_solar
JWT_SECRET=your_super_secret_jwt_key_here
```

### 5. Database Setup

Ensure MongoDB is running on your system:

```bash
# On Windows (using MongoDB as service)
# MongoDB should be running automatically

# Or start MongoDB manually
mongod
```

Seed the database with initial data:

```bash
cd backend
python seed.py
```

This will create:
- Default admin user (email: `admin@adityasolar.com`, password: `admin123`)
- Sample products, projects, services, testimonials, FAQs

## 🏃 Running the Application

### Start Backend Server

```bash
cd backend
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Backend will be available at: `http://localhost:8000`

API Documentation (Swagger): `http://localhost:8000/docs`

### Start Frontend Server

```bash
cd frontend
npm run dev
```

Frontend will be available at: `http://localhost:5173`

## 🔐 Admin Access

- **URL**: `http://localhost:5173/admin/login`
- **Email**: `admin@adityasolar.com`
- **Password**: `admin123`

**Important**: Change the default admin password after first login.

## 📁 Project Structure

```
aditya-solar/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py              # FastAPI application entry point
│   │   ├── config.py            # Configuration settings
│   │   ├── database.py          # MongoDB connection
│   │   ├── models.py            # Pydantic models
│   │   ├── routers/             # API endpoints
│   │   │   ├── auth.py          # Authentication
│   │   │   ├── products.py      # Products & Categories
│   │   │   ├── projects.py      # Projects
│   │   │   ├── leads.py         # Quote/Contact/Site Visit/Career
│   │   │   ├── cms.py           # Services/Testimonials/Gallery/Blogs/FAQs
│   │   │   ├── analytics.py     # Dashboard analytics
│   │   │   └── settings.py      # Website settings
│   │   └── utils/               # Utility functions
│   ├── requirements.txt          # Python dependencies
│   ├── seed.py                  # Database seeding script
│   └── uploads/                 # File upload directory
├── frontend/
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   │   ├── Hero.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── StatisticsCard.jsx
│   │   │   ├── TestimonialCard.jsx
│   │   │   ├── GalleryGrid.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── FAQAccordion.jsx
│   │   │   ├── SolarCalculator.jsx
│   │   │   └── FloatingWidgets.jsx
│   │   ├── contexts/            # React contexts
│   │   │   └── AuthContext.jsx
│   │   ├── layouts/             # Layout components
│   │   │   ├── MainLayout.jsx
│   │   │   └── AdminLayout.jsx
│   │   ├── pages/               # Page components
│   │   │   ├── Public/          # Public pages
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── About.jsx
│   │   │   │   ├── Products.jsx
│   │   │   │   ├── ProductDetails.jsx
│   │   │   │   ├── Projects.jsx
│   │   │   │   ├── ProjectDetails.jsx
│   │   │   │   ├── Services.jsx
│   │   │   │   ├── Contact.jsx
│   │   │   │   ├── Gallery.jsx
│   │   │   │   ├── GovSubsidy.jsx
│   │   │   │   ├── CalculatorPage.jsx
│   │   │   │   ├── Blogs.jsx
│   │   │   │   ├── BlogDetails.jsx
│   │   │   │   ├── Careers.jsx
│   │   │   │   └── FAQPage.jsx
│   │   │   └── Admin/           # Admin pages
│   │   │       ├── AdminLogin.jsx
│   │   │       ├── AdminDashboard.jsx
│   │   │       ├── AdminQuotes.jsx
│   │   │       ├── AdminSiteVisits.jsx
│   │   │       ├── AdminContacts.jsx
│   │   │       ├── AdminCareers.jsx
│   │   │       ├── AdminContent.jsx
│   │   │       └── AdminSettings.jsx
│   │   ├── services/            # API services
│   │   │   └── api.js
│   │   ├── App.jsx              # Main app component
│   │   ├── main.jsx             # Entry point
│   │   └── index.css            # Global styles
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#0A84FF`
- **Secondary Green**: `#2ECC71`
- **Accent Green**: `#00A86B`
- **Background**: `#F8FCFD`
- **Heading**: `#1E293B`
- **Body Text**: `#64748B`
- **Border**: `#E2E8F0`

### Typography
- **Font Family**: Manrope (primary), Inter (fallback)
- **Headings**: Bold, tracking-tight
- **Body**: Regular, leading-relaxed

## 📊 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/login-json` - JSON login
- `GET /api/auth/me` - Get current user

### Products
- `GET /api/products` - List products
- `GET /api/products/{slug}` - Get product by slug
- `POST /api/products` - Create product (admin)
- `PUT /api/products/{id}` - Update product (admin)
- `DELETE /api/products/{id}` - Delete product (admin)

### Projects
- `GET /api/projects` - List projects
- `GET /api/projects/{slug}` - Get project by slug
- `POST /api/projects` - Create project (admin)
- `PUT /api/projects/{id}` - Update project (admin)
- `DELETE /api/projects/{id}` - Delete project (admin)

### Leads
- `POST /api/leads/quote` - Submit quote request
- `GET /api/leads/quote` - List quote requests (admin)
- `PUT /api/leads/quote/{id}` - Update quote status (admin)
- `DELETE /api/leads/quote/{id}` - Delete quote (admin)
- `POST /api/leads/site-visit` - Book site visit
- `GET /api/leads/site-visit` - List site visits (admin)
- `POST /api/leads/contact` - Submit contact form
- `GET /api/leads/contact` - List contacts (admin)
- `POST /api/leads/career` - Submit job application
- `GET /api/leads/career` - List applications (admin)

### CMS
- `GET /api/cms/services` - List services
- `POST /api/cms/services` - Create service (admin)
- `GET /api/cms/testimonials` - List testimonials
- `POST /api/cms/testimonials` - Create testimonial (admin)
- `GET /api/cms/gallery` - List gallery items
- `POST /api/cms/gallery` - Create gallery item (admin)
- `GET /api/cms/faqs` - List FAQs
- `POST /api/cms/faqs` - Create FAQ (admin)
- `GET /api/cms/blogs` - List blogs
- `GET /api/cms/blogs/{slug}` - Get blog by slug
- `POST /api/cms/blogs` - Create blog (admin)

### Analytics
- `GET /api/analytics` - Dashboard analytics (admin)

### Settings
- `GET /api/settings` - Get website settings
- `PUT /api/settings` - Update settings (admin)

## 🚢 Deployment

### Backend Deployment (e.g., Railway, Render, AWS)

1. Set environment variables in your hosting platform
2. Build and deploy the FastAPI application
3. Ensure MongoDB is accessible (use MongoDB Atlas for cloud)

Example `Dockerfile` for backend:

```dockerfile
FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Frontend Deployment (e.g., Vercel, Netlify)

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy the `dist` folder to your hosting platform

3. Update API base URL in production environment

## 🔒 Security Considerations

- Change default admin password
- Use strong JWT secret in production
- Enable HTTPS in production
- Configure CORS properly
- Implement rate limiting
- Use environment variables for sensitive data

## 📝 License

This project is proprietary software. All rights reserved.

## 🤝 Support

For support, contact the development team at `support@adityasolar.com`

## 🎯 Roadmap

- [ ] Multi-language support (Hindi, regional languages)
- [ ] Advanced analytics dashboard
- [ ] WhatsApp integration for notifications
- [ ] PDF quotation generation
- [ ] Customer portal for tracking installation status
- [ ] Integration with payment gateways
- [ ] Mobile app (React Native)
