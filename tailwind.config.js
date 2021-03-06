module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'primary' : {lighter: '#4f75e0', default: '#3966E0', darker: '#2255e0'},
        'secondary' : {lighter: '#253b5c', default: '#1C355D', darker: '#12305c'},
        'silver' : {lighter: '#f5f6f7', default: '#EFF3F6', darker: '#d5d8db'},
      },

      fontFamily: {
        title: ['Quicksand'],
        body: ['Montserrat'],
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    height: ["responsive", "hover", "focus"],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    padding: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
