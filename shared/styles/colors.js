// @flow strict
// the _on_white are precomputed colors so we can do less blending on mobile
import {isAndroid} from '../constants/platform'

const colors = {
  beige: '#FAF2ED',
  black: '#000000',
  black_05: 'rgba(0, 0, 0, 0.05)',
  black_05_on_white: 'rgb(242,242,242)',
  black_10: 'rgba(0, 0, 0, 0.10)',
  black_10_on_white: 'rgb(229,229,229)',
  black_20: 'rgba(0, 0, 0, 0.20)',
  black_20_on_white: 'rgb(204,204,204)',
  black_40: 'rgba(0, 0, 0, 0.40)',
  black_40_on_white: 'rgb(153,153,153)',
  black_60: 'rgba(0, 0, 0, 0.60)',
  black_60_on_white: 'rgb(102,102,102)',
  black_75: 'rgba(0, 0, 0, 0.75)',
  black_75_on_white: 'rgb(64,64,64)',
  blue: '#4C8EFF',
  blue2: '#73A6FF',
  blue3: '#A8CCFF',
  blue3_20: 'rgba(168, 204, 255, 0.2)',
  blue3_20_on_white: 'rgb(238, 245, 255)',
  blue3_40: 'rgba(168, 204, 255, 0.4)',
  blue3_40_on_white: 'rgb(220, 235, 255)',
  blue3_60: 'rgba(168, 204, 255, 0.6)',
  blue3_60_on_white: 'rgb(203, 224, 255)',
  blue4: '#EBF2FC',
  blue5: '#F7F9FC',
  blueGrey: '#F2F4F7',
  blueGrey2: '#E0E8F6',
  blue_30: 'rgba(51, 160, 255, 0.3)',
  blue_30_on_white: 'rgb(192,226,255)',
  blue_60: 'rgba(51, 160, 255, 0.6)',
  blue_60_on_white: 'rgb(133,198,255)',
  brown_60: 'rgba(71, 31, 17, 0.6)',
  brown_60_on_white: 'rgb(145,121,112)',
  darkBlue: '#2645A3',
  darkBlue2: '#3663EA',
  darkBlue3: '#182D6E',
  darkBlue3_75: 'rgba(24, 45, 110, .75)',
  darkBlue3_75_on_white: 'rgb(82,98,147)',
  darkBlue4: '#1036AC',
  // on iOS overdraw is eliminiated if we use white, on Android it's eliminated if it's transparent /shrug
  fastBlank: isAndroid ? undefined : '#ffffff',
  green: '#3DCCA6',
  green2: '#34AD8D',
  green3: '#E8FAF6',
  grey: '#cccccc',
  lightGrey: '#f0f0f0',
  lightGrey2: '#e6e6e6',
  orange: '#ff6f21',
  purple: '#704eba',
  purple2: '#845cdb',
  purple2_40: 'rgba(132, 92, 219, 0.4)',
  purple3: '#9f7bec',
  red: '#ff4d61',
  red_75: 'rgba(255,0,0,0.75)',
  red_75_on_white: 'rgb(255,64,64)',
  transparent: 'rgba(0, 0, 0, 0)',
  transparent_on_white: '#ffffff',
  white: '#ffffff',
  white_0: 'rgba(255, 255, 255, 0)',
  white_0_on_white: '#ffffff',
  white_20: 'rgba(255, 255, 255, 0.20)',
  white_20_on_white: '#ffffff',
  white_40: 'rgba(255, 255, 255, 0.40)',
  white_40_on_white: '#ffffff',
  white_75: 'rgba(255, 255, 255, 0.75)',
  white_75_on_white: '#ffffff',
  white_90: 'rgba(255, 255, 255, 0.90)',
  white_90_on_white: '#ffffff',
  yellow: '#fff75a',
  yellow2: '#dbd22a',
  yellow3: '#fffdcc',
  yellowGreen: '#a8cf36',
  yellowGreen2: '#94b52f',
  yellowGreen2_75: 'rgba(154, 180, 57, 0.75)',
  yellowGreen2_75_on_white: 'rgb(179,199,107)',
  yellowGreen3: '#d2e697',
}

export default colors