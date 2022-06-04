$( document ).ready( function() {
    var entries = [ 
        { label: 'web designing', url: '#', target: '_top' },
        { label: 'HTML', url: '#', target: '_top' },
        { label: 'CSS', url: '#/', target: '_top' },
        { label: 'python', url: '#', target: '_top' },
        { label: '', url: '#', target: '_top' },
        { label: 'CodePen', url: '#', target: '_top' },
        {label: 'Java'},
        {label: 'JavaScript'},
        {label: 'XD'},
       
        {label: 'UI/UX'},
       
        {label: 'Ethical Hacking'},
      
        {label: 'Web Development'},
     
        {label: 'Graphic Designing'}, 
      
     // repeating these 
      {label: 'Java'},
      {label: 'JavaScript'},
      {label: 'XD'},
      {label: 'UI/UX'},
     {label: 'Ethical Hacking'},
        {label: 'Web Development'},
       {label: 'Graphic Designing'}, { label: 'photoshop', url: '#', target: '_top' },
      { label: 'photoshop', url: '#', target: '_top' },
        { label: 'illustrator', url: '#', target: '_top' },
        { label: 'after effects', url: '#', target: '_top' },
        { label: 'java', url: '#', target: '_top' },
        { label: 'imovie', url: '#', target: '_top' },
        { label: 'premiere pro', url: '#', target: '_top' },
       { label: 'illustrator', url: '#', target: '_top' },
        { label: 'after effects', url: '#', target: '_top' },
        { label: 'java', url: '#', target: '_top' },
        { label: 'imovie', url: '#', target: '_top' },
        { label: 'premiere pro', url: '#', target: '_top' },
      

      
    ];
    var settings = {
        entries: entries,
        width: 640,
        height: 480,
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bg
: '#121212 ',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 1,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: '#74D5EA  ',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true
    };
    
    $( '#tag-cloud' ).svg3DTagCloud( settings );
} );
