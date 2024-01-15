#!/bin/bash

CONFIG_FILE="server_config.json"

PORT=$(jq -r '.port' "$CONFIG_FILE")
DATA_DIRECTORY=$(jq -r '.data_directory' "$CONFIG_FILE")

python -m http.server "$PORT"
