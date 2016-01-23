class InstagramPhoto extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(<div className='col s12 m3'>
             <img className='materialboxed responsive-img' src={this.props.images.standard_resolution.url} />
           </div>);
  }
}
