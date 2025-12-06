#!/bin/bash
echo "=== TAILWIND CSS DIAGNOSTIC ==="
echo ""

echo "1. Checking files:"
if [ -f "tailwind.config.js" ]; then
  echo "   tailwind.config.js: ✓ EXISTS"
else
  echo "   tailwind.config.js: ✗ MISSING"
fi

if [ -f "postcss.config.js" ]; then
  echo "   postcss.config.js: ✓ EXISTS"
else
  echo "   postcss.config.js: ✗ MISSING"
fi

if [ -f "src/index.css" ]; then
  echo "   src/index.css: ✓ EXISTS"
else
  echo "   src/index.css: ✗ MISSING"
fi
echo ""

echo "2. Checking package.json for Tailwind:"
if grep -q "tailwindcss" package.json; then
  echo "   ✓ Tailwind found in package.json"
  grep "tailwindcss" package.json
else
  echo "   ✗ Tailwind NOT in package.json"
fi
echo ""

echo "3. Checking src/index.css content:"
if [ -f "src/index.css" ]; then
  CONTENT=$(cat src/index.css)
  if [[ "$CONTENT" == *"@tailwind base"* ]] && [[ "$CONTENT" == *"@tailwind components"* ]] && [[ "$CONTENT" == *"@tailwind utilities"* ]]; then
    echo "   ✓ Contains all Tailwind directives"
    echo "   Content:"
    echo "$CONTENT"
  else
    echo "   ✗ Missing or incomplete Tailwind directives"
    echo "   Current content:"
    echo "$CONTENT"
  fi
else
  echo "   ✗ File doesn't exist"
fi
echo ""

echo "4. Checking vite.config.js:"
if [ -f "vite.config.js" ]; then
  echo "   Content:"
  cat vite.config.js
else
  echo "   ✗ vite.config.js doesn't exist"
fi
echo ""

echo "5. Checking node_modules for Tailwind:"
if [ -d "node_modules" ]; then
  if ls node_modules | grep -q "tailwindcss"; then
    echo "   ✓ Tailwind installed in node_modules"
  else
    echo "   ✗ Tailwind not in node_modules"
  fi
else
  echo "   ✗ node_modules directory doesn't exist"
fi
echo ""

echo "6. Checking main.jsx imports:"
if [ -f "src/main.jsx" ]; then
  if grep -q "import.*index.css" src/main.jsx; then
    echo "   ✓ index.css is imported in main.jsx"
  else
    echo "   ✗ index.css NOT imported in main.jsx"
  fi
  echo "   main.jsx content:"
  cat src/main.jsx
else
  echo "   ✗ main.jsx doesn't exist"
fi
echo ""

echo "=== END DIAGNOSTIC ==="
