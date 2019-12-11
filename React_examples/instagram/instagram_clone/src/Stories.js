import React, {Component} from 'react';
import StoryCard from './StoryCard'

class Stories extends Component {

    state = {};

    constructor(props) {
        super(props);
        this.state = {
            
            scrollPositionLeft: 0,
            scrollLeft: '',
            scroll: false,
            width: this.props.wwidth
        }

    }
      
    onClickLeft = () => {

        let story = this.props.stories;
        let storyWidth = this.props.wwidth;
        let storycount = Math.floor(storyWidth * 0.8 / 120);
        let scrollPositionL = this.state.scrollPositionLeft;

        console.log(storycount);
    
        if(story.length > storycount) {

            
            let scrollLeftStr ='';
    
            
            if(story.length * 120 > (storycount * 120 + scrollPositionL)){
                scrollPositionL = scrollPositionL + (storycount-1) * 120;
                scrollLeftStr = `${-scrollPositionL}px`;
                console.log('spl = ' + scrollPositionL)
                this.setState ({
                    scrollPositionLeft: scrollPositionL,
                    scrollLeft: scrollLeftStr
                })
                console.log('spl = ' + this.state.scrollPositionLeft)
            }
        }
        
    }
    
    onClickRight = () => {
        // let story = this.props.stories;
        let storyWidth = this.props.wwidth;
        let storycount = Math.floor(storyWidth * 0.8 / 120);
        let scrollPositionL = this.state.scrollPositionLeft;
        
        console.log(scrollPositionL);
        
        if(scrollPositionL > 0) {
            
            let scrollLeftStr ='';
            
            if(scrollPositionL > 0){
                scrollPositionL = (scrollPositionL - (storycount-1) * 120);
                if(scrollPositionL < 0){scrollPositionL = 0} ;
                scrollLeftStr = `${-scrollPositionL}px`;
                console.log('scroll back to')
                console.log(scrollLeftStr)

                this.setState ({
                    scrollPositionLeft: scrollPositionL,
                    scrollLeft: scrollLeftStr
                })
                console.log('backspl = ' + this.state.scrollLeft)
            }
        }
        
    }
    
    componentDidMount(){
        let story = this.props.stories;
        
        console.log(story.length);
        let storyWidth = this.props.wwidth;

        console.log(this.props.wwidth)
        console.log('storywidth: ' + storyWidth)
        let storycount = Math.floor(storyWidth * 0.8 / 120);
        console.log('storycount: ' + storycount)
        let barscroll = false;
        (story.length > storycount) ? barscroll = true : barscroll = false;
        console.log('barscroll: ' + barscroll)

        this.setState ({
            scroll: barscroll
        })
    }
    
    render(){
               
        return (
            <div className='storybarContainer'>

                <div className='storyarrow' style={{display: !this.state.scroll && "none"}} onClick={this.onClickRight}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>previous LTR</title>
                    <path d="M4.8 10l9 9 1.4-1.5L7.8 10l7.4-7.5L13.8 1z"/>
                    </svg>
                </div>
                <div className="storySlider">
                    <div className='storybar' style={{left: this.state.scrollLeft}}>
                    {
                        this.props.stories.map(item =>  < StoryCard key={item.id} url={item.url} text={item.text} imgurl={item.imgurl}/> )
                    } 
                    </div>
                </div>

                <div className='storyarrow' style={{display: !this.state.scroll && "none"}} onClick={this.onClickLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>next LTR</title>
                    <path d="M6.2 1L4.8 2.5l7.4 7.5-7.4 7.5L6.2 19l9-9z"/>
                    </svg>
                </div>

            </div>
        )
    };
    
}
export default Stories;