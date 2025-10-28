#!/bin/bash

echo "🚀 Setting up Cali Business Hub 2025 Landing Page..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create necessary directories if they don't exist
echo "📁 Creating directories..."
mkdir -p components/ui
mkdir -p components/sections
mkdir -p lib
mkdir -p content

echo "✅ Setup complete!"
echo ""
echo "🎯 Next steps:"
echo "1. Run 'npm run dev' to start the development server"
echo "2. Open http://localhost:3000 in your browser"
echo "3. Customize content in lib/content.ts"
echo "4. Deploy to Vercel with 'npx vercel'"
echo ""
echo "🌟 Your premium landing page is ready!"
