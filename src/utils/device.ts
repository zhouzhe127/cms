import device from 'current-device'
export default function getDevice() {
  if (device.desktop()) {
    return 'desktop'
  } else if (device.ipad()) {
    return 'ipad'
  } else if (device.mobile()) {
    return 'mobile'
  }
}
