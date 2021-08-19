
  curl 'http://localhost:4741/checks' \
    --include \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{
      "check": {
        "miles": "'"${MILES}"'",
        "date": "'"${DATE}"'",
        "notes": "'"${NOTES}"'",
        "carId": "'"${CAR_ID}"'",
        "checker": "'"${USER_ID}"'"
      }
    }'