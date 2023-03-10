/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        'modak': ['Modak', 'cursive'],
        'robotoSlab': ['Roboto Slab', 'serif']
      },
      colors: {
      'regal-blue': '#243c5a',
      'tan': '#b68d40',
      'cream': '#f4ebd0',
      'charcoal': '#122620',
      'gold': '#d6ad60',
      'forestgreen': '#104210',
      'coolgrey': '#264653',
      'peacockgreen': '#2A9D8F',
      'yellowochre': '#E9C46A',
      'sand': '#F4A261',
      'cadmiumorange': '#E76F51',
      'otterTeal': '#3cbcc0',
      'onyx': '#6F8F72',
      'portGray': '#F2F2F2',
      'jsYellow': '#f7df1e',
      'reactTeal': '#00d8ff',
      'htmlOrange': '#ff7816',
      'tailwindTeal': '#4db6ac',
      'nodeGreen': '#5cad47',
      'viteBlue': '#4dc0ff',
      'cBlue': '#649ad2',
      'pythonBlue': '#498abc',
      'devGreen': '#4caf50',
      'compTan' : '#ad7047',
      'compPurp' : '#9947ad',
      'compPink' : '#d660b3',
      'compAqua' : '#60d6a9',
      'compGray' : '#92a5c2',
      'suchGray' : '#d1dbdb',
      'kitsuneOrange' : '#f37834',
      'kitsuneBlue' : '#34b0f3',
      'resumeBrown' : '#7a534a',
      'kitsuneOrange2' : '#f5b529',
      'kitsuneBlue2' : '#2f9edb',
      'kitsuneBlue3' : '#2a8fc5',
    }, 
    screens: {
      'tablet': '640px', 

      'mobile': '360px',
    }
    
  },
  },
  plugins: [
    
  ],
}
