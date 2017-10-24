# API="${API_ORIGIN:-https://fast-cliffs-72027.herokuapp.com/}"
API="${API_ORIGIN:-http://localhost:4741/}"
URL_PATH="/customers"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "customer": {
      "name": "'"${NAME}"'",
      "zip": "'"${ZIP}"'",
      "services": "'"${SERVICES}"'",
      "max_price": "'"${MAX_PRICE}"'",
      "best_day": "'"${BEST_DAY}"'",
      "best_time": "'"${BEST_TIME}"'"
    }
  }'

echo
