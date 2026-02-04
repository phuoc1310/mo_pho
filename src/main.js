const express = require('express');
const app = express();

require('dotenv').config();
require('../config/database');

// Routes
const productRoutes = require('./routes/product_routes');
const orderRoutes = require('./routes/order_routes'); 
const authRoutes = require('./routes/auth_routes');
const contentRoutes = require('./routes/content_routes');
const userRoutes = require('./routes/user_routes');
const eventRoutes = require('./routes/event_routes');
const eventAdminRoutes = require('./routes/event_admin_routes');
const reportRoutes = require('./routes/report_routes');
const reportShopRoutes = require('./routes/report_shop_routes');

app.use(express.json());

// Root check
app.get('/', (req, res) => {
  res.send('Mo Pho Backend API is running');
});

// Public
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/contents', contentRoutes);
app.use('/api/events', eventRoutes);

// Auth
app.use('/api/auth', authRoutes);

// Admin / Manager
app.use('/api/admin/events', eventAdminRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/reports/shop', reportShopRoutes);
app.use('/api/users', userRoutes);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
