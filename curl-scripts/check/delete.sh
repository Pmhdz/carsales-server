# sh curl-scripts/index.sh

curl "http://localhost:4741/checks/${CHECK_ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --data '{
    "check": {
      "carId": "'"${REST_ID}"'"
    }