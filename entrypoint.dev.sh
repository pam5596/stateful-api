#!/bin/sh
set -e

echo "🚀 Starting entrypoint script..."

npm install

echo "🎉 Setup complete! Launching application..."
exec "$@"