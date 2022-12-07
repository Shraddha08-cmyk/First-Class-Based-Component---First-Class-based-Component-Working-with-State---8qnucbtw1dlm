import React from 'react';

export const WordInput = ({handleChange,value}) => {
    return (
        <>   
            <label htmlFor="word-input">Enter word to be highlighted here</label>
            <input id="word-input" type={"text"} onChange={(e)=>handleChange(e.target.value)} value={value}/>
        </>
    )
}

 handleButtonClick() {
    this.setState({
    age:this.state.age+1
    })
 }


    render() {
        return (
            <>
                <h1>{`Hello, my name is ${this.state.name}`}</h1>
                <p>{`I am ${this.state.age} years old and my enrollment no is ${this.state.enrollmentNo}`}</p>
                <button onClick={()=>this.handleButtonClick()}>Submit</button>
            </>
        )
    } 
}


export default App;

