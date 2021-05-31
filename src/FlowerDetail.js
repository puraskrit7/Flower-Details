import React ,{Component} from 'react';
// import './FlowerDetail.css';
import flower from './flower.json';


class FlowerDetail extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(         
            <div className="flex-container">
                
                {flower.map(item=>{
                    if(item.name === this.props.location.fstate.fname){                  
                        return (
                            <div>
                                <h1>{item.name}</h1>
                                <img src={item.url} alt="url" width="500px" height="300px" ></img>
                                <p>{item.desc}</p>
                            </div>
                        )
                    }
                })}               
            </div>
        )
    }
}
export default FlowerDetail;