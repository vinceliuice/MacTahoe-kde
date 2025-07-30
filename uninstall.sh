#! /usr/bin/env bash

SRC_DIR=$(cd $(dirname $0) && pwd)

ROOT_UID=0

# Destination directory
if [[ "$UID" -eq "$ROOT_UID" ]]; then
  AURORAE_DIR="/usr/share/aurorae/themes"
  SCHEMES_DIR="/usr/share/color-schemes"
  PLASMA_DIR="/usr/share/plasma/desktoptheme"
  PLASMOIDS_DIR="/usr/share/plasma/plasmoids"
  LOOKFEEL_DIR="/usr/share/plasma/look-and-feel"
  KVANTUM_DIR="/usr/share/Kvantum"
  WALLPAPER_DIR="/usr/share/wallpapers"
else
  AURORAE_DIR="$HOME/.local/share/aurorae/themes"
  SCHEMES_DIR="$HOME/.local/share/color-schemes"
  PLASMA_DIR="$HOME/.local/share/plasma/desktoptheme"
  PLASMOIDS_DIR="$HOME/.local/share/plasma/plasmoids"
  LOOKFEEL_DIR="$HOME/.local/share/plasma/look-and-feel"
  KVANTUM_DIR="$HOME/.config/Kvantum"
  WALLPAPER_DIR="$HOME/.local/share/wallpapers"
  LATTE_DIR="$HOME/.config/latte"
fi

THEME_NAME=MacTahoe

COLOR_VARIANTS=('-Light' '-Dark')

uninstall() {
  local name=${1}
  local color=${2}

  [[ -d "${AURORAE_DIR}/${name}${color}" ]] && rm -rf ${AURORAE_DIR}/${name}${color}{'','-1.25x','-1.5x'}
  [[ -d "${PLASMA_DIR}/${name}${color}" ]] && rm -rf ${PLASMA_DIR}/${name}${color}
  [[ -f "${SCHEMES_DIR}/${name}${ELSE_COLOR}".colors ]] && rm -rf ${SCHEMES_DIR}/${name}${ELSE_COLOR}.colors
  [[ -d "${LOOKFEEL_DIR}/com.github.vinceliuice.${name}${color}" ]] && rm -rf ${LOOKFEEL_DIR}/com.github.vinceliuice.${name}${color}
  [[ -d "${KVANTUM_DIR}/${name}" ]] && rm -rf ${KVANTUM_DIR}/${name}
  [[ -d "${WALLPAPER_DIR}/${name}" ]] && rm -rf ${WALLPAPER_DIR}/${name}
  [[ -d "${WALLPAPER_DIR}/${name}${color}" ]] && rm -rf ${WALLPAPER_DIR}/${name}${color}
}

echo "Uninstalling '${THEME_NAME} kde themes'..."

for color in "${colors[@]:-${COLOR_VARIANTS[@]}}"; do
  uninstall "${name:-${THEME_NAME}}" "${color}"
done

#[[ -f "$HOME"/.Xresources ]] && rm -rf "$HOME"/.Xresources

echo "Uninstall finished..."
