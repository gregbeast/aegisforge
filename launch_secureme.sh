#!/bin/bash

# Path to your project root
ROOT_DIR="/Users/gregroy/Documents/IA_dev/secureme/secureme"

# Start backend server in background
echo "🚀 Starting backend server..."
cd "$ROOT_DIR/server"
node index.js &

# Capture the backend PID in case you want to kill it later
BACKEND_PID=$!

# Start React app
echo "🌐 Launching React frontend..."
cd "$ROOT_DIR"
npm start

# Optional: kill backend when frontend exits
echo "🛑 Stopping backend server (PID $BACKEND_PID)..."
kill $BACKEND_PID
