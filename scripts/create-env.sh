#!/bin/bash

# Check if .env file exists
if [ -f .env ]; then
  read -p ".env file already exists. Do you want to overwrite it? (y/n) " yn
  case $yn in
  [Yy]*) ;;
  *)
    echo "Aborted"
    exit
    ;;
  esac
fi

# Copy .env.example to .env
cp .env.example .env

# Replace placeholder values with actual values
sed -i '' 's/stashify/YOUR_ACTUAL_VALUE/g' .env
