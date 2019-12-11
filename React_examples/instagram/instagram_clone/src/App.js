import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Account from './Account';
import Posts from './Posts';
import Stories from './Stories';

var account = {
  username: "kimkardashian",
  fullname: "Kim Kardashian West",
  verified: true,
  posts: 4887,
  follower: '152m',
  follow: 13,
  message: "#KKWxMario: The Artist & Muse collection is available now on @kkwbeauty",
  link: "https://l.instagram.com/?u=https%3A%2F%2Fportalfb.me%2Fig_Kimk&e=ATNNmrXJnR01uhCvmpf_LyCVyDB0YyubOhT6HVjQ5TzpaM4qqqGjQ5GA2YZ-OVK346LSIVm7-rdglhdgdg",
  linkname: "portalfb.me/ig_Kimk",
  url: './img/KimAccount.jpg'
}

var stories = [
  {id: '01', url: "https://www.instagram.com/p/B5X4RDngUWH/", imgurl:"./img/001.jpg", text:"BlaBla"},
  {id: '02', url: "https://www.instagram.com/p/B5WtYmIA9MU/", imgurl:"./img/002.jpg", text:"Lange"},
  {id: '03', url: "https://www.instagram.com/p/B5WpDxNAoIc/", imgurl:"./img/003.jpg", text:"Weile"},
  {id: '04', url: "https://www.instagram.com/p/B5UCrgRAx7Y/", imgurl:"./img/004.jpg", text:"Geld"},
  {id: '05', url: "https://www.instagram.com/p/B5S8fHLAdUg/", imgurl:"./img/005.jpg", text:"Party"},
  {id: '06', url: "https://www.instagram.com/p/B5RIOHogs3H/", imgurl:"./img/006.jpg", text:"Sex"},
  {id: '07', url: "https://www.instagram.com/p/B5Qkj-zA2JA/", imgurl:"./img/007.jpg", text:"Blues"},
  {id: '08', url: "https://www.instagram.com/p/B5NziPXA8YM/", imgurl:"./img/008.jpg", text:"Bang"},
  {id: '09', url: "https://www.instagram.com/p/B5NmQATgP7d/", imgurl:"./img/009.jpg", text:"Whatever"},
  {id: '10', url: "https://www.instagram.com/p/B5MkwWdgqUV/", imgurl:"./img/010.jpg", text:"Ten"},
  {id: '11', url: "https://www.instagram.com/p/B5MJKbKglBv/", imgurl:"./img/011.jpg", text:"Eleven"},
  {id: '12', url: "https://www.instagram.com/p/B5LvmEsghOW/", imgurl:"./img/012.jpg", text:"Twelve"},
  {id: '13', url: "https://www.instagram.com/p/B5Ln_KAA0S3/", imgurl:"./img/013.jpg", text:"Thirteen"},
  {id: '14', url: "https://www.instagram.com/p/B5LlbMSgcnp/", imgurl:"./img/014.jpg", text:"Fourteen"},
  {id: '15', url: "https://www.instagram.com/p/B5Li4uAgtad/", imgurl:"./img/015.jpg", text:"Fiveteen"},
  {id: '16', url: "https://www.instagram.com/p/B5LYiQTgufD/", imgurl:"./img/016.jpg", text:"Sixteen"}
]


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      width: window.innerWidth, 
      height:  window.innerHeight,
      scroll: 80,
      headerpic : true
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll, true);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  updateWindowDimensions() {
    
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log(this.state.width)
  }

  handleScroll = () => {
    let pageScroll = window.scrollY;
    let headerHeight = 80;
    let headerPic=true;
    console.log(pageScroll);
    pageScroll > 100 ? headerHeight=50 : headerHeight=80
    pageScroll > 100 ? headerPic=false : headerPic=true
    this.setState({
      scroll: headerHeight,
      headerpic: headerPic
    })
  }

  render() {
    return (

      <div>
        < Header height={this.state.scroll} pic={this.state.headerpic}/>
        <div className='content'>
        < Account acc={account}/>
        < Stories stories={stories} wwidth={this.state.width}/>
        < Posts stories={stories}/>

        </div>
      </div>
    );
  }
}

export default App;
