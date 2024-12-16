if [ -z "$1" ]; then
  echo "Por favor, proporciona un nombre para la nueva feature."
  exit 1
fi

FEATURE_NAME=$1

mkdir -p src/features/$FEATURE_NAME/{components,styles,interfaces,helpers}

echo "Carpetas creadas para la feature: $FEATURE_NAME"

