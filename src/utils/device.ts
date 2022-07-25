import device from 'current-device'
import { DEVICE } from '@/config/constant'
export default function getDevice() {
  if (device.desktop()) {
    return DEVICE.DESKTOP
  } else if (device.ipad()) {
    return DEVICE.IPAD
  } else if (device.mobile()) {
    return DEVICE.MOBILE
  }
}
