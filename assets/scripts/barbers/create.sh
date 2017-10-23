# API="${API_ORIGIN:-https://fast-cliffs-72027.herokuapp.com/}"
API="${API_ORIGIN:-http://localhost:4741/}"
URL_PATH="/barbers"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "barber": {
      "name": "'"${NAME}"'",
      "phone": "'"${PHONE}"'",
      "shop_name": "'"${SHOP_NAME}"'",
      "zip": "'"${ZIP}"'",
      "services": "'"${SERVICES}"'",
      "max_price": "'"${MAX_PRICE}"'",
      "busiest_day": "'"${BUSIEST_DAY}"'",
      "busiest_time": "'"${BUSIEST_TIME}"'",
      "average_rating": "'"${AVERAGE_RATING}"'"
    }
  }'

echo
