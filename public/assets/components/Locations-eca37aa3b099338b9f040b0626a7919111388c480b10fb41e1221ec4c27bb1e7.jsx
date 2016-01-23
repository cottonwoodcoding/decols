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
    let shopLat = this.state.shop.lat;
    let shopLong = this.state.shop.long;
    let officeLat = this.state.office.lat;
    let officeLong = this.state.office.long
    let handler = Gmaps.build('Google');
    handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
    markers = handler.addMarkers([
      {
        "lat": 40.5063358,
        "lng": -111.9406609,
        "picture": {
          "width":  32,
          "height": 32
        },
        "infowindow": "Shop"
      },
      {
        "lat": 40.484684,
        "lng": -111.9147137,
        "picture": {
          "width":  32,
          "height": 32
        },
        "infowindow": "Office"
      },
    ]);
      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();
    });
  }
  render() {
    return(<div className='row'>
             <div className='col s12 m4'>
               <Location key='shop' {...this.state.shop} />
               <Location key='office' {...this.state.office} />
             </div>
             <div className='col s12 m8'>
               <div id="map"></div>
             </div>
           </div>);
  }
}
