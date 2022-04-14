import React, { Component } from 'react';

class Page extends Component {
   state = {
      name: "",
      surname: "",
      date: 0,
      mon: 0,
      year: 0,
      numbers: [],
   }
   constructor(props) {
      super(props);
      this.myref = React.createRef();
   }
   render() {
      const take = () => {
         let x = (this.myref.current.value).split(',');
         console.log(">>", x);
         this.setState({ numbers: x })
      }
      const submit = (e) => {
         e.preventDefault();
         const xhr = new XMLHttpRequest;
         xhr.open('post', 'https://serene-retreat-01440.herokuapp.com');
         const xx = JSON.stringify(this.state);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.send(xx);
         xhr.addEventListener('load', () => {
            this.props.func(xhr.responseText);
         })
      }
      return (<div>
         Form
         < form >
            <div>Name:
               <input type="text" placeholder="enter name" onChange={e => { this.setState({ name: e.currentTarget.value }); }} />
            </div>
            <div>Fullname:
               <input type="text" placeholder="enter name" onChange={e => { this.setState({ surname: e.currentTarget.value }); }} />
            </div>
            <div>Date:
               <input type="text" placeholder="enter name" onChange={e => { this.setState({ date: e.currentTarget.value }); }} />
            </div>
            <div>
               mon:
               <input type="number" placeholder='1/30' onChange={e => { this.setState({ mon: e.currentTarget.value }); }} />
            </div><div>
               year:
               <input type="number" placeholder='1/12' onChange={e => { this.setState({ year: e.currentTarget.value }); }} />
            </div>
            <div>
               numbers:
               <input type="text" placeholder='separate by ,' ref={this.myref} onChange={() => take()} />
            </div>
            <button onClick={(e) => { submit(e) }}>
               Submit
            </button>
         </form >
      </div >);
   }
}

export default (Page);