# API="${API_ORIGIN:-https://fast-cliffs-72027.herokuapp.com/}"
API="${API_ORIGIN:-http://localhost:4741/}"
URL_PATH="/sign-out/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo
