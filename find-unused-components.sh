#!/bin/bash

# Set your component directory here
COMPONENT_DIR="src/app/components"
ROOT_DIR="."

echo "🔍 Scanning components in $COMPONENT_DIR for usage..."

# Loop over all JSX, TSX, JS, or TS files
find "$COMPONENT_DIR" -type f \( -name "*.jsx" -o -name "*.tsx" -o -name "*.js" -o -name "*.ts" \) | while read component_file; do
    component_name=$(basename "$component_file" | sed -E 's/\.[tj]sx?$//')

    # Search for imports or JSX usage, excluding node_modules and .node
    matches=$(grep -rE "import .*${component_name}|<${component_name}" "$ROOT_DIR" \
        --exclude-dir={node_modules,.node} \
        --exclude="$component_file")

    if [ -z "$matches" ]; then
        echo "⚠️  Possibly unused: $component_name ($component_file)"
    fi
done
