#!/bin/bash

API="http://localhost:4741"
URL_PATH="/car"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "car": {
      "brand": "'"${BRAND}"'",
      "model": "'"${MODEL}"'"
      "price": "'"${PRICE}"'"
      "owner": "'"${OWNER}"'"
    }
  }'

echo
