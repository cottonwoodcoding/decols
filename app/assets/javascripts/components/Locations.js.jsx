class Locations extends React.Component{
  constructor(props){
    super(props);
    this.state = { shop: {}, office: {} };
    this.buildMap = this.buildMap.bind(this);
  }
  componentDidMount(){
    $.ajax({
      url: '/locations',
      type: 'GET',
      dataType: 'JSON'
    }).success( result => {
      this.setState({ shop: result.shop, office: result.office });
      this.buildMap();
    });
  }
  buildMap(){
    //let shopLat = this.state.shop.lat;
    //let shopLong = this.state.shop.long;
    //let officeLat = this.state.office.lat;
    //let officeLong = this.state.office.long
    //let handler = Gmaps.build('Google');
    //handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
    //markers = handler.addMarkers([
    //  {
    //    "lat": 40.5045503,
    //    "lng": -111.9369949,
    //    "picture": {
    //      "width":  32,
    //      "height": 32
    //    },
    //    "infowindow": "Shop"
    //  },
    //  {
    //    "lat": 40.484684,
    //    "lng": -111.9147137,
    //    "picture": {
    //      "width":  32,
    //      "height": 32
    //    },
    //    "infowindow": "Office"
    //  },
    //]);
    //  handler.bounds.extendWith(markers);
    //  handler.fitMapToBounds();
    //});
  }
  render() {
    return(<div className='row'>
             <div className='col s12 m4'>
               <Location key='shop' {...this.state.shop} />
               <Location key='office' {...this.state.office} />
             </div>
             <div className='col s12 m8'>
               <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.6760436760637!2d-111.93698958460139!3d40.50454617935496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875286ba2c6c40bb%3A0x7006647acb74d807!2s1542+W+13595+S%2C+Riverton%2C+UT+84065!5e0!3m2!1sen!2sus!4v1465750381058"
                 style={{ width: '100%', height: '50vh', frameBorder:'0', border: '0' }}
                 allowFullScreen={true}
               >
               </iframe>
             </div>
           </div>);
  }
}
