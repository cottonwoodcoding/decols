class InstagramContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = { posts: this.props.posts };
  }
  render(){
    let posts = this.state.posts.map( photo => {
      return(<InstagramPhoto key={photo.created_time} {...photo} />);
    });
    return(<div className='row'>
           {posts}
           </div>);
  }
}
