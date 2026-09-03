#!/usr/bin/env bash
# Fallback stdio launcher if hosted https://mcp.draw.io/mcp fails in Cursor.
# Usage in .cursor/mcp.json:
#   "command": "/Users/anadipandharkar/Personal/Portfolio/scripts/drawio-mcp.sh"
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
NODE="${NODE:-/Users/anadipandharkar/.nvm/versions/node/v20.19.5/bin/node}"
exec "$NODE" "$ROOT/node_modules/@drawio/mcp/src/index.js"
